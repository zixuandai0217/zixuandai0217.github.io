(function () {
  var sparks = [
    "把今天最普通的一件事，换一个完全陌生的视角描述。",
    "做一个只能用三种颜色、十分钟完成的小作品。",
    "把最近学到的概念，讲给一年前的自己听。",
    "找一个每天重复的动作，想办法让它更有趣一点。",
    "把一个看似没用的问题记下来，七天后再回来回答。"
  ];

  var ideaTasks = [
    "用你今天看到的第一种颜色，解释一个抽象概念。",
    "为一个不存在的产品写三句话，并画出它的第一个按钮。",
    "用 100 个字记录今天，然后删到只剩 20 个字。",
    "挑一个常用工具，重新设计它最不起眼的交互。",
    "把最近困扰你的问题改写成一个可以在一小时内验证的实验。"
  ];

  function chooseNext(items, current) {
    var candidates = items.filter(function (item) {
      return item !== current;
    });
    return candidates[Math.floor(Math.random() * candidates.length)];
  }

  function setText(buttonId, outputId, items) {
    var button = document.getElementById(buttonId);
    var output = document.getElementById(outputId);
    if (!button || !output) return;

    button.addEventListener("click", function () {
      output.textContent = chooseNext(items, output.textContent.trim());
    });
  }

  function updateClock() {
    var clock = document.getElementById("local-clock");
    if (!clock) return;

    var now = new Date();
    clock.textContent = new Intl.DateTimeFormat("zh-CN", {
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false
    }).format(now) + " · 访客本地时间";
  }

  function init() {
    setText("spark-button", "spark-text", sparks);
    setText("idea-button", "idea-output", ideaTasks);
    updateClock();
    window.setInterval(updateClock, 60000);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
