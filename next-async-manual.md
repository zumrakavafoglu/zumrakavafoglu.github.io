---
layout : manual
title : Next Async User's Manual
product : NextAsync 0.5.0
jsSupported : false
---
* TOC
{:toc}

# Getting Started

### Overview
Next Async is a library that makes it easier to deal with asynchronous jobs in Unity. This guide will help you to get started with NextAsync in a few minutes. If you have any problems or questions feel free to write to the [topic at Unity Community Forums](#).

### Installation
Just grab and import the latest version from [Unity Asset Store](#) for free. After the import process completed, you can find the source code at folder Plugins/Next/Async .

---

# Usage

### Hello World
Here we go. Lets send an HTTP request and log the response with *HttpRequest* class which uses Unity's built in *WWW* class internally. A *HttpRequest* produces a result of the type *WWW*. If everything is setup correctly, you'll see the google.com's html source code logged in the console.

{% highlight cs linenos %}
new HttpRequest("google.com")
  .Then((response)=>{
    Debug.Log(response.text);
  });
{% endhighlight %}

### Chaining Jobs
Now lets send another HTTP request after the first request successfully completed by using *Then()* method. The heart of Next Async and js-promises pattern which is the main inspiration of Next Async. Actually you can think Next Async as a modified version of the js-promises pattern to fit Unity and C# better.

{% highlight cs linenos %}
new HttpRequest("google.com")
  .Then((response)=>{
    Debug.Log(response.text);
  })
  .Then(new HttpRequest("yahoo.com"))
  .Then((response)=>{
    Debug.Log(response.text);
  });
{% endhighlight %}

### Catching Exceptions
When an exception thrown during a job, you can catch each exception using the *Catch()* method.

{% highlight cs linenos %}
new HttpRequest("google.com")
  .Then((response)=>{
    Debug.Log(response.text);      
  })
  .Catch((e)=>{
    Debug.LogException(e);
  });
  .Then(new HttpRequest("yahoo.com"))
  .Then((response)=>{
    Debug.Log(response.text);      
  })
  .Catch((e)=>{
    Debug.LogException(e);
  });
{% endhighlight %}

### Timeout
You can easily set timeout for jobs with *SetTimeout()* method. If total time taken since start of the job exceeds the timeout duration, the job will be automatically rejected. In the following example if we can't get a response from google.com within 2 seconds, then our job will fail and we wont send a request to yahoo.com .

{% highlight cs linenos %}
new HttpRequest("google.com")
  .Then((response)=>{
    Debug.Log(response.text);
  })
  .SetTimeout(2)
  .Then(new HttpRequest("yahoo.com"))
  .Then((response)=>{
    Debug.Log(response.text);
  })
  .Catch((e)=>{
    Debug.LogException(e);
  });
{% endhighlight %}

### Progress
You can get feedback about the job's progress by using *OnProgress()* method. The following code will only report progress about the request to yahoo.com .

{% highlight cs linenos %}
new HttpRequest("google.com")
  .Then((response)=>{
    Debug.Log(response.text);
  })
  .OnProgress((progress) => {
    Debug.Log("Progress : "+progress)
  });
{% endhighlight %}

### Getting The Whole Chain

What to do if you want to write a single catch clause for the whole chain of jobs instead of each single job? Or get progress information or setting a timeout for the whole chain? You can use *Wrap()* method to wrap the jobs in the current chain and get a single job that consists all jobs of your chain.

{% highlight cs linenos %}
new HttpRequest("google.com")
  .Then((response)=>{
    Debug.Log(response.text);    
  })
  .Then(new HttpRequest("yahoo.com"))
  .Then((response)=>{
    Debug.Log(response.text);
  })
  .Wrap()
  .SetTimeout(3)
  .OnProgress((progress) => {
    Debug.Log("Progress : "+progress);
  })
  .Catch((e)=>{
    Debug.LogException(e);
  });
{% endhighlight %}

### Delaying
Sometimes you have to delay some job intentionally. You can use *WaitFor()* method for that purpose. In the following example, we'll send a request to yahoo.com with 1 second delay after the request to google.com succeeded.

{% highlight cs linenos %}
new HttpRequest("google.com")
  .Then((response)=>{
    Debug.Log(response.text);
  })
  .WaitFor(1)
  .Then(new HttpRequest("yahoo.com"))
  .Then((response)=>{
    Debug.Log(response.text);
  })
  .Wrap()
  .OnProgress((progress) => {
    Debug.Log("Progress : "+progress)
  })
  .Catch((e)=>{
    Debug.LogException(e);
  });
{% endhighlight %}

### Time Units
In the previous examples, when delaying or setting timeouts for jobs we always set those durations in *seconds* unit. Which is effected by Time.timeScale value. But you can use any other unit for time. The valid units are *Seconds, UnscaledSeconds, Frames* and *FixedUpdates*.

{% highlight cs linenos %}
new HttpRequest("google.com")
  .Then((response)=>{
    Debug.Log(response.text);
  })
  .SetTimeout(2, DurationType.UnscaledSeconds);
{% endhighlight %}

---

# Built-in Types
There are very useful ready-to-use classes that enables defining jobs easily.

### Direct Jobs
Sometimes you may need to execute raw code between two jobs in a chain. Or you may need to convert the result of the previous job to make it compatible with the next job. That's where direct jobs comes handy. You can define a job from Action, Action<T>, Func<T>, Func<T, S> . Here's an example (although it is pointless) :

{% highlight cs linenos %}
new ActionJob(()=>{
		//Do something
	})
	.Then(()=>{
		Debug.Log("Job completed");
	});
{% endhighlight %}

### Threaded Jobs
Threaded jobs are quite similar to direct jobs but this time instead of executing the given method/expression directly, Next Async will create a new thread for the method and will execute in that thread.
{% highlight cs linenos %}
new ThreadJob(()=>{
		//Do something
	})
	.Then(()=>{
    //The job in the other thread is completed.
	});
{% endhighlight %}

### Parallel Jobs
You can execute jobs in parallel using *ParallelAll* class. The ParallelAll job will be completed only when all jobs given as parameter is once completed.
{% highlight cs linenos %}
new ParallelAll(
  new HttpRequest("google.com")
    .Then((response)=>{
      //Do something   
    }),
  new HttpRequest("yahoo.com")
    .Then((response)=>{
      //Do something      
    })
).Then(() => {
  Debug.Log("Both requests completed");      
});
{% endhighlight %}

### Race Jobs
Just like the ParallelAll example above but this time the outer job will be completed when any of the inner jobs completed.
{% highlight cs linenos %}
new ParallelRace(
  new HttpRequest("google.com")
    .Then((response)=>{
      //Do something   
    }),
  new HttpRequest("yahoo.com")
    .Then((response)=>{
      //Do something      
    })
).Then(() => {
  Debug.Log("One of the requests just completed");      
});
{% endhighlight %}


### HttpRequest
Although we used HttpRequest for all examples up to here, there's still a little bit more to explain. HttpRequest can work with both *WWW* and *UnityWebRequest* classes. When you construct HttpRequest with a url string, it'll create a WWW instance by default. But you can provide your own, more sophisticated WWW instances.

---

# Custom Jobs


# Advanced Topics

### SwitchToUnityThread
