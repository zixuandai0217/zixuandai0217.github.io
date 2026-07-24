(function () {
  var ideaTasks = [
    "用今天看到的第一种颜色，解释一个抽象概念。",
    "为一个不存在的产品写三句话，并画出它的第一个按钮。",
    "用 100 个字记录今天，然后删到只剩 20 个字。",
    "挑一个常用工具，重新设计它最不起眼的交互。",
    "把最近的问题改写成一个可以在一小时内验证的实验。"
  ];

  function init() {
    var button = document.getElementById("idea-button");
    var output = document.getElementById("idea-output");
    if (!button || !output) return;

    button.addEventListener("click", function () {
      var current = output.textContent.trim();
      var candidates = ideaTasks.filter(function (item) {
        return item !== current;
      });
      output.textContent = candidates[Math.floor(Math.random() * candidates.length)];
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
