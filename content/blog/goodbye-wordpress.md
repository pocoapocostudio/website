+++
date = "2017-04-16T14:02:18-06:00"
title = "Goodbye forever WordPress... wait no I didn't mean it, noo"
tags = [ "Design", "VVS", "Development", "Accessibility", "WCAG"]

+++

I've been having a lot of trouble maintaining WordPress sites lately. Two different clients of mine have gotten their WordPress websites hacked in the last few months. Because WordPress is <a href="https://blogvault.net/the-price-of-popularity-why-hackers-target-wordpress/">by far the most popular CMS</a> right now, it attracts an inordinate amount of attention from hackers. Just last month a site I help maintain, <a href="https://www.viewpointmag.com">viewpointmag.com</a>, suffered incredible amounts of downtime because of what likely was a days-long brute force attack. This is why I've decided to move my site from Wordpress to <a href="https://gohugo.io">Hugo</a>, a static site generator that creates websites which are *lot* less prone to hacking attempts. It's not like I'm a big target, but I thought while rebuilding my personal site I could assess how easy it would be for my clients to switch over to a static site generator.

Hugo seemed like the best option out of <a href="https://www.smashingmagazine.com/2015/11/static-website-generators-jekyll-middleman-roots-hugo-review/">all the static site generators out there</a>. I chose it because there are no dependencies (unlike Jekyll) and it's very easy to upgrade. No way in hell would I ask a client to install Ruby to manage their website.

Hugo is very easy to learn. I was able to build this site in a few days on top of my regular work week. The templating language and frontmatter variables are very intuitive and result in very clean code. The documentation is great, and the support forums were very helpful.

At the same time, I found it to be too difficult for non-technical users. The command line interface + markdown Hugo requires users to learn is just too intimidating for my typical client. I tried out <a href="https://forestry.io/">forestry.io</a>, a WYSIWIG interface for Hugo and Jekyll sites that attempts to solve this problem, but to me their service doesn't seem ready for prime time yet. Hugo itself is in very early stages of development too, so there is a risk that future releases of the generator will deprecate key parts of my website's theme. So, there's no replacing WordPress for now.

<div class="post-media">
    <img src="/img/content/blog/2017-redesign/site-comps.jpg" alt="Draft layouts for my website redesign" />
            <p class="post-media-description">The evolution of this site's home page, December '16' to March '17</p>
</div>

<span id="theme">**VVS Theme**</span>


I've named the theme I designed for my site <a href="https://www.youtube.com/watch?v=JELMrzN81LQ">VVS</a>, or "<a href="https://www.urbandictionary.com/define.php?term=VVS">Very Very Slight</a>". It's a simple theme meant for portfolio sites. What sets it apart from most portfolio themes is that it's designed to be accessible for disabled users. I paid special attention to W3C's <a href="https://www.w3.org/WAI/intro/wcag">Web Content Accessibility Guidelines</a> while developing the theme, and while I haven't yet had the chance to test it with disabled users, the theme does meet every Level A standard and many level AA standards.

The WCAG informed my design decisions on every level. For example, most sites I've designed up to this point likely had many visual contrast errors which made navigation difficult for visually-impaired visitors. I created VVS to be high-contrast to meet the contrast ratio 4.5:1 <a href="https://www.w3.org/TR/WCAG/#visual-audio-contrast">specified in the WCAG</a>.

While designing with the WCAG guidlines I learned that some common accessible design features are <strong>not</strong> actually useful for disabled users. Near the beginning of the theme's design I included a button to resize the font to be more readable.

<br />

<img src="/img/content/blog/2017-redesign/font-size.jpg" alt="Screenshot of the font-enlarging button" />

<br />

But, despite being relatively common on many websites, this feature is found nowhere WCAG guidelines. I learned from <a href="https://wordpress.tv/2016/12/12/rian-rietveld-web-accessibility-where-to-start/">Rian Rietveld</a> that most users who experience low vision use text-enlarging tools already included in most web browsers, and so a text-enlarging button is not necessary.

Eventually, I would like to make my site Level AA accessible. However, much of my work is time-based visual media, which means that technically my content does not even meet all Level A standards and so my site is not actually accessible. And until I can make the time to add captions and transcripts for my videos, it won't be.

Soon the VVS theme will be available for download. I am a little hesitant to release the code in its current state. I did a lot of testing, but not quite enough to be satisfied that it appears correctly for most users in most contexts. I also would like to get the theme professionally evaluated for accessibility. I did my best to ensure it meets the standards, but without feedback from disabled users it's difficult for me to know whether my implementations of the standards are useful.

Meanwhile, you can grab the theme from <a href="https://github.com/bpliston/brianliston.com/tree/master/themes/vvs">this site's Github repo</a>. Feedback appreciated!