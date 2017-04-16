+++
date = "2017-04-15T14:02:18-06:00"
title = "Brianliston.com's new, accessible design"
tags = [ "Smart", "Amazing", "Wow"]

+++

I've been planning this redesign for about five months.

**Goodbye Wordpress, hello Hugo.**

I've been having a lot of maintaining Wordpress sites lately. Two different clients of mine have gotten their Wordpress websites hacked in the last few months. Because Wordpress is by far the most popular CMS on out there right now, it attracts an inordinate amount of attention from hackers. Just last month a site I help maintain, <a href="https://www.viewpointmag.com">viewpointmag.com</a> suffered incredible amounts of downtime because of what likely was a days-long DDoS attack. This is why I've decided to move my site from Wordpress to <a href="https://gohugo.io">Hugo</a>, a static site generator that creates websites which are faster, easier to customize and maintain, and *lot* less prone to hacking attempts. It's not like I'm a big target--nobody reads my site (yet!)--but my main goal for learning how to use Hugo was to assess how easily it would be for my clients to switch over to a static site generator.

Hugo seemed like the best option out of <a href="https://www.smashingmagazine.com/2015/11/static-website-generators-jekyll-middleman-roots-hugo-review/">all the static site generators out there</a>. I chose it because it's built with Go, a language I would like to become more familiar with. The creators have made it very, very easy to learn. I was able to build this site in 9 days on top of my regular work week. The templating language is extremely simple and lends itself to very clean code. The documentation is great, and the support forums were very helpful.

At the same time, I found it to be too difficult for non-technical users. The command line interface + markdown Hugo requires users to learn is just too hard for my typical client. I tried out <a href="https://forestry.io/">forestry.io</a>, a WYSIWIG interface for Hugo and Jekyll sites that attempts to solve this problem, but to me their service doesn't seem ready for prime time yet. Hugo itself is in very early stages of development too, so there is a risk that future releases of the generator will deprecate key parts of my website's theme. So, there's no replacing Wordpress for now.

<div class="post-media">
    <img src="/img/content/blog/2017-redesign/site-comps.jpg" alt="Draft layouts for my website redesign" />
            <p class="post-media-description">The evolution of this site's home page, December '16' to March '17</p>
</div>

<span id="theme">**VVS Theme**</span>
<br />
I've named the theme I designed for my site <a href="https://www.youtube.com/watch?v=JELMrzN81LQ">VVS</a>, or "<a href="https://www.urbandictionary.com/define.php?term=VVS">Very Very Slight</a>". It's a fairly simple theme meant for portfolio sites. What sets it apart from most portfolio themes is that it's designed to be accessible for disabled users. I paid special attention to W3C's <a href="https://www.w3.org/WAI/intro/wcag">Web Content Accessibility Guidelines</a> while developing the theme, and while I haven't yet had the chance to test it with disabled users, the theme does meet every Level A standard and many level AA standards.

The WCAG informed my design decisions on every level. For example, most sites I've designed up to this point likely had many contrast errors which made navigation difficult for visually-impaired visitors. I created VVS to be high-contrast to meet the contrast RATIO HERE specified in the WCAG. While designing with the WCAG guidlines I learned a lot about what design features commonly used are <strong>not</strong> useful for disabled users. Near the beginning of the theme's design I included a button to resize the font to be more readable

<br />

<img src="/img/content/blog/2017-redesign/font-size.jpg" alt="Screenshot of the font-enlarging button" />

But, despite being a relatively common feature on many websites, this feature is found nowhere WCAG guidelines. I learned from <a href="https://wordpress.tv/2016/12/12/rian-rietveld-web-accessibility-where-to-start/">Rian Rietveld</a> that most users who experience low vision use text-enlarging tools already included in most web browsers.

Eventually, I would like to make my design Level AA accessible. However, much of my work is time-based visual media, which means that technically my content (and so my site) does not even meet all Lavel A standards and is not actually accessible. And until I can make the time to add captions and transcripts for my videos, it won't be.

I'll eventually make the VVS theme available for download. It's my first theme, so I'm a little hesitant to release the code for all to scrutinize. I did a lot of testing, but not quite enough to be satisfied that it appears correctly for most users in most contexts. I also would like to get the theme professionally evaluated for accessibility. I did my best to ensure it meets every the standards, but I'm still a novice when it comes to web accessibility.