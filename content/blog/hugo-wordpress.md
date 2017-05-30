+++
date = "2017-04-16T14:02:18-06:00"
title = "Can Hugo, a static site generator, replace WordPress?"
tags = [ "Design", "WordPress", "Security", "Hugo"]

+++

My clients have been having a lot of trouble keeping bad guys out of their WordPress sites lately. Two different clients of mine have gotten their WordPress websites hacked in the last few months. Because WordPress is <a href="https://blogvault.net/the-price-of-popularity-why-hackers-target-wordpress/">by far the most popular CMS</a> right now, it attracts an inordinate amount of attention from hackers. Just last month a site I help maintain, <a href="https://www.viewpointmag.com">viewpointmag.com</a>, suffered incredible amounts of downtime because of what likely was a days-long brute force attack. So, I've decided to move my site from Wordpress to <a href="https://gohugo.io">Hugo</a>, a static site generator that creates websites which are *lot* less prone to hacking attempts. It's not like I'm a big target, but I thought while rebuilding my personal site I could assess how easy it would be for my clients to switch over to a static site generator.

Hugo seemed like the best option out of <a href="https://www.smashingmagazine.com/2015/11/static-website-generators-jekyll-middleman-roots-hugo-review/">all the static site generators out there</a>. I chose it because there are no dependencies (unlike Jekyll) and it's easy to upgrade. No way in hell would I ask a client to install Ruby to manage their website.

Hugo is very easy to learn. I was able to build this site in a few days on top of my regular work week. The templating language and frontmatter variables are intuitive and result in clean code. The documentation is great, and the support forums were immensely helpful.

At the same time, I found it to be too difficult for non-technical users. The command line interface + markdown Hugo requires users to learn is just too intimidating for my typical client. I tried out <a href="https://forestry.io/">forestry.io</a>, a WYSIWIG interface for Hugo and Jekyll sites that attempts to solve this problem, but to me their service doesn't seem ready for prime time yet. Hugo itself is in early stages of development too, so there is a risk that future releases of the generator will deprecate key parts of my website's theme. So, there's no replacing WordPress for now.

<div class="post-media">
    <img src="/img/content/blog/2017-redesign/site-comps.jpg" alt="Draft layouts for my website redesign" />
            <p class="post-media-description">The evolution of this site's home page, December '16 to March '17</p>
</div>