---
layout: simple-block
title: Ders günü ve saati
order: 2
---
<table class="table table-sm">
  <thead class="thead-default">
    <tr>
      <th style="min-width:70px;">Hafta</th>
      <th style="min-width:100px;">Tarih</th>
      <th>Konu</th>
      <th>Notlar</th>
    </tr>
  </thead>
  <tbody>

    {% assign items-sorted = site.bbs515-weeks | sort: 'week' %}
        
    {% for item in items-sorted %}
        
        {{ item.output }}
    
    {% endfor %}

  </tbody>
</table>
