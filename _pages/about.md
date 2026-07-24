---
permalink: /
author_profile: true
stylesheets:
  - /assets/css/home.css
redirect_from:
  - /about/
  - /about.html
---

<section class="hero" id="top" aria-labelledby="hero-title">
  <div class="hero__eyebrow">
    <span class="status-dot" aria-hidden="true"></span>
    <span>PERSONAL FIELD NOTES · 2026</span>
  </div>
  <div class="hero__title-row">
    <h1 id="hero-title">你好，我是子轩。<span>我把好奇心做成东西。</span></h1>
    <img class="hero__wave" src="{{ '/images/Hi.gif' | relative_url }}" alt="挥手">
  </div>
  <p class="hero__lead">这里不是一份严肃到发皱的简历，而是我的在线试验场。它会装下正在学习的东西、做过的小项目，以及偶尔冒出来的奇怪想法。</p>
  <div class="hero__actions">
    <a class="site-button site-button--primary" href="#experiments">看看我在折腾什么 <i class="fas fa-arrow-down" aria-hidden="true"></i></a>
    <button class="site-button site-button--quiet" id="spark-button" type="button" aria-controls="spark-text">
      <i class="fas fa-shuffle" aria-hidden="true"></i> 随机灵感
    </button>
  </div>
  <p class="spark" id="spark-text" aria-live="polite">今天的起点：做一个小到可以完成、又有一点意外的东西。</p>
  <div class="hero__meta">
    <span><i class="fas fa-circle-nodes" aria-hidden="true"></i> Online, somewhere between an idea and a prototype</span>
    <span id="local-clock">读取本地时间中</span>
  </div>
</section>

<section class="home-section" id="now" aria-labelledby="now-title">
  <div class="section-heading">
    <div>
      <p class="section-kicker">NOW / 此刻</p>
      <h2 id="now-title">最近占据注意力的事</h2>
    </div>
    <p>比履历更新得快一点，比社交媒体慢一点。</p>
  </div>
  <div class="now-grid">
    <article class="now-item now-item--orange">
      <span class="item-index">01</span>
      <p class="item-label">正在制作</p>
      <h3>这个主页的第一版</h3>
      <p>从一个空仓库开始，先让它有性格，再慢慢补上故事。</p>
    </article>
    <article class="now-item now-item--blue">
      <span class="item-index">02</span>
      <p class="item-label">正在学习</p>
      <h3>AI、代码与表达</h3>
      <p>试着把复杂的东西理解清楚，也试着把它们讲得简单。</p>
    </article>
    <article class="now-item now-item--green">
      <span class="item-index">03</span>
      <p class="item-label">保持好奇</p>
      <h3>没用但有趣的问题</h3>
      <p>因为很多真正重要的东西，刚开始都看不出有什么用。</p>
    </article>
  </div>
</section>

<section class="home-section" id="experiments" aria-labelledby="experiments-title">
  <div class="section-heading">
    <div>
      <p class="section-kicker">EXPERIMENTS / 实验</p>
      <h2 id="experiments-title">把想法放到现实里试一下</h2>
    </div>
    <p>不要求宏大，只要求真的动手。</p>
  </div>
  <div class="experiment-list">
    <article class="experiment-item">
      <div class="experiment-item__number">01</div>
      <div class="experiment-item__body">
        <div class="experiment-item__header">
          <h3>这座在线小屋</h3>
          <span class="status-tag status-tag--live">Live</span>
        </div>
        <p>基于 WowPage 的结构重新设计，用暖白、炭黑和少量橙蓝绿，记录一场从模板到个人空间的改造。</p>
        <a href="https://github.com/zixuandai0217/zixuandai0217.github.io">查看源码 <i class="fas fa-arrow-up-right-from-square" aria-hidden="true"></i></a>
      </div>
    </article>
    <article class="experiment-item">
      <div class="experiment-item__number">02</div>
      <div class="experiment-item__body">
        <div class="experiment-item__header">
          <h3>一分钟灵感机</h3>
          <span class="status-tag status-tag--play">Play</span>
        </div>
        <p>首页的“随机灵感”会从几个动词和限制条件中抽取一句话。灵感有时只是给自己一个好玩的约束。</p>
        <button class="text-command" id="idea-button" type="button">生成一个小任务 <i class="fas fa-wand-magic-sparkles" aria-hidden="true"></i></button>
        <p class="idea-output" id="idea-output" aria-live="polite">用你今天看到的第一种颜色，解释一个抽象概念。</p>
      </div>
    </article>
    <article class="experiment-item experiment-item--empty">
      <div class="experiment-item__number">03</div>
      <div class="experiment-item__body">
        <div class="experiment-item__header">
          <h3>下一个坑位</h3>
          <span class="status-tag">Soon</span>
        </div>
        <p>这里会留给下一个真正完成的小项目。先保留空白，也是一种诚实的进度。</p>
      </div>
    </article>
  </div>
</section>

<section class="home-section" id="notes" aria-labelledby="notes-title">
  <div class="section-heading">
    <div>
      <p class="section-kicker">FIELD NOTES / 随笔</p>
      <h2 id="notes-title">一些还没长成文章的念头</h2>
    </div>
    <p>短一点，留下当时真实的想法。</p>
  </div>
  <div class="notes-list">
    <article class="note-row">
      <time datetime="2026-07-24">2026.07.24</time>
      <div>
        <h3>为什么先做主页？</h3>
        <p>因为它足够小，可以马上开始；又足够开放，可以一直生长。</p>
      </div>
      <span class="note-mark note-mark--orange" aria-hidden="true"></span>
    </article>
    <article class="note-row">
      <time datetime="2026-07-24">2026.07.24</time>
      <div>
        <h3>模板不是终点</h3>
        <p>好的模板解决结构，真正属于自己的部分来自选择、删减和持续更新。</p>
      </div>
      <span class="note-mark note-mark--blue" aria-hidden="true"></span>
    </article>
    <article class="note-row">
      <time datetime="2026-07-24">2026.07.24</time>
      <div>
        <h3>先发布，再完善</h3>
        <p>一个在线的不完美版本，比硬盘里永远“快做完”的完美版本更有生命力。</p>
      </div>
      <span class="note-mark note-mark--green" aria-hidden="true"></span>
    </article>
  </div>
</section>

<section class="contact-band" id="contact" aria-labelledby="contact-title">
  <p class="section-kicker">CONNECT / 联系</p>
  <h2 id="contact-title">有好玩的想法？来 GitHub 找我。</h2>
  <p>项目、建议，或者只是一个值得继续追问的问题，都欢迎。</p>
  <a class="site-button site-button--light" href="https://github.com/zixuandai0217">
    <i class="fab fa-github" aria-hidden="true"></i> @zixuandai0217
  </a>
</section>

<script src="{{ '/assets/js/home.js' | relative_url }}"></script>
