---
layout: blog
title: Blog
permalink: /
lang: en
page_id: blog
pagination:
  enabled: true
  per_page: 5
  sort_field: 'date'
  sort_reverse: true
  locale: en
---

{% assign strings = site.data[site.active_lang].strings %}

{% include blog_intro.html %}

{% if paginator and paginator.posts.size > 0 %}
{% assign blog_posts = paginator.posts %}
<section class="mx-auto max-w-[40rem]" aria-label="{{ strings.navigation.blog }}">
  <ul class="flex list-none flex-col gap-6 p-0 m-0">
    {% for post in blog_posts %}
    <li class="m-0">
      {% include post_card.html post=post %}
    </li>
    {% endfor %}
  </ul>
</section>
{% else %}
<section class="mx-auto max-w-[40rem]">
  <p class="text-base text-gray-700 dark:text-zinc-300">
    {{ strings.no_entries.blog }}
  </p>
</section>
{% endif %}
