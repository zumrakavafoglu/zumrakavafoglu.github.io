---
layout: simple-block
title: Ders takvimi ve materyalleri
order: 6
---
<table class="table table-sm">
  <thead class="thead-default">
    <tr>
      <th style="min-width:70px;">Hafta</th>
      <th style="min-width:100px;">Tarih</th>
      <th>Konu</th>
      <th>Materyaller</th>
      <th>Ödevler</th>
    </tr>
  </thead>
  <tbody>

    {% assign items-sorted = site.mtk467-weeks | sort: 'week' %}
        
    {% for item in items-sorted %}
        
        {{ item.output }}
    
    {% endfor %}

  </tbody>
</table>
