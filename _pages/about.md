---
permalink: /
author_profile: true
stylesheets:
  - /assets/css/home.css
redirect_from:
  - /about/
  - /about.html
---

<h1 class="main-heading" id="top">Hi there <img src="images/Hi.gif" width="40px" alt="挥手"> Welcome to my Homepage!</h1>

<p class="intro-copy">你好，我是子轩，现居浙江杭州。这里是我的个人主页，也是一个用来记录学习、项目和奇怪想法的小空间。</p>

<p class="intro-copy">我对 AI、代码和表达复杂想法的方式保持好奇。主页会慢慢更新，不追求一次写完。</p>

News
---------------
<div class="news-box">
  <ul class="news-list">
    <li><span class="news-date"><em>2026.07</em></span> 🎉 个人主页正式上线。</li>
    <li><span class="news-date"><em>2026.07</em></span> 🛠️ 给这座在线小屋换了一身新衣服。</li>
    <li><span class="news-date"><em>Now</em></span> 🔍 正在寻找下一件值得动手的小事。</li>
  </ul>
</div>

Now
--------------

<div class="experience-container">
  <div class="experience-card">
    <div class="experience-logo experience-icon"><i class="fas fa-code" aria-hidden="true"></i></div>
    <div class="experience-info">
      <strong>正在制作</strong><br>
      <em>2026.07 - Present</em><br>
      这座在线小屋<br>
      <span class="muted-copy">从一个空仓库开始，让它先有内容，再慢慢长出性格。</span>
    </div>
  </div>

  <div class="experience-card">
    <div class="experience-logo experience-icon experience-icon--blue"><i class="fas fa-brain" aria-hidden="true"></i></div>
    <div class="experience-info">
      <strong>正在学习</strong><br>
      <em>Always in progress</em><br>
      AI、代码与表达<br>
      <span class="muted-copy">试着把复杂的东西理解清楚，也试着把它们讲得简单。</span>
    </div>
  </div>

  <div class="experience-card">
    <div class="experience-logo experience-icon experience-icon--yellow"><i class="fas fa-lightbulb" aria-hidden="true"></i></div>
    <div class="experience-info">
      <strong>保持好奇</strong><br>
      <em>No deadline</em><br>
      那些暂时没用、但很有趣的问题<br>
      <span class="muted-copy">很多真正重要的东西，刚开始都看不出有什么用。</span>
    </div>
  </div>
</div>

Projects
--------

<div class="project-card">
  <div style="display: flex; align-items: center;">
    <div class="pub-media-rotator" style="position: relative; width: 260px; height: 180px; margin-right: 20px; border-radius: 8px; overflow: hidden; flex: 0 0 auto;">
      <img src="images/github-avatar.png" alt="Zixuan Dai GitHub avatar" style="width: 260px; height: 180px; object-fit: cover; display: block; margin: 0 auto;">
    </div>
    <div>
      <strong>My Personal Homepage</strong><br>
      <i class="project-meta"><strong>Zixuan Dai</strong> · 2026</i><br>
      基于 WowPage 和 Jekyll 搭建的个人主页。它既是作品，也是以后所有小项目的入口。
      <br>
      <b><i class="project-type">Web Project &nbsp;</i></b>
      <a href="https://github.com/zixuandai0217/zixuandai0217.github.io"><em>[code]</em></a>
    </div>
  </div>
</div>

Fun Lab
--------

<div class="project-card fun-card">
  <div style="display: flex; align-items: center;">
    <div class="pub-media-rotator fun-media" style="position: relative; width: 180px; height: 140px; margin-right: 20px; border-radius: 8px; overflow: hidden; flex: 0 0 auto;">
      <div class="fun-illustration" aria-hidden="true">🎲</div>
    </div>
    <div>
      <strong>一分钟灵感机</strong><br>
      当没有项目灵感时，先给自己一个小到可以立刻开始的限制条件。
      <div class="idea-controls">
        <button class="pub-button active" id="idea-button" type="button" aria-controls="idea-output">抽一个小任务</button>
        <span class="idea-output" id="idea-output" aria-live="polite">用今天看到的第一种颜色，解释一个抽象概念。</span>
      </div>
    </div>
  </div>
</div>

<div class="project-card fun-card">
  <div style="display: flex; align-items: center;">
    <div class="pub-media-rotator fun-media" style="position: relative; width: 180px; height: 140px; margin-right: 20px; border-radius: 8px; overflow: hidden; flex: 0 0 auto;">
      <div class="fun-illustration fun-illustration--blue" aria-hidden="true">?</div>
    </div>
    <div>
      <strong>下一个坑位</strong><br>
      这里会留给下一个真正完成的小项目。先保留空白，也是一种诚实的进度。
      <br>
      <b><i class="project-type">Coming soon</i></b>
    </div>
  </div>
</div>

Notes
--------

- *2026.07.24*, 为什么先做主页？因为它足够小，可以马上开始；又足够开放，可以一直生长。
- *2026.07.24*, 好的模板解决结构，真正属于自己的部分来自选择、删减和持续更新。
- *2026.07.24*, 一个在线的不完美版本，比硬盘里永远“快做完”的完美版本更有生命力。

Contact
--------

<div class="contact-box">
  有好玩的项目、建议，或者只是一个值得继续追问的问题，欢迎通过
  <a href="mailto:zixuandai0217@foxmail.com"><strong>邮件</strong></a>
  或 <a href="https://github.com/zixuandai0217"><strong>GitHub</strong></a> 联系我。<br>
  <a href="mailto:zixuandai0217@foxmail.com">zixuandai0217@foxmail.com</a> · 浙江杭州
</div>

<script src="{{ '/assets/js/home.js' | relative_url }}"></script>
