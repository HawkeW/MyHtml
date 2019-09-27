var count = 0;
var timer;

window.onload = function() {
  var banner = document.getElementById("banners");
  var bannerContent = document.getElementsByClassName("banner-box");
  //获取控制方向的箭头元素
  var arrow = document.getElementsByClassName("arrow");
  var bannerButton = this.document.getElementsByClassName("banner-btn-box")[0]
    .childNodes;
  bannerButton[0].setAttribute("class", "banner-btn-active");
  var offset = 0;

  //自动切换banner
  showtime();
  function showtime() {
    timer = setInterval(function() {
      if (count < bannerContent.length) {
        bannerButton[count].setAttribute("class", "banner-btn-active");
        updateBanner();
        count++;
      } else {
        count = 0;
      }
    }, 2000);
  }
  //给三角按钮绑定onmouseover、onmouseout、onclick事件
  for (let i = 0; i < arrow.length; i++) {
    arrow[i].onmouseover = function() {
      clearInterval(timer);
    };
    arrow[i].onmouseout = function() {
      showtime();
    };

    arrow[i].onclick = function() {
      if (this.title == 0) {
        if (count < bannerContent.length - 1) {
          count++;
        } else {
          count = 0;
        }
      } else if (count == 0) {
        count = bannerContent.length - 1;
      } else {
        count--;
      }
      updateBanner();
    };
  }
  //给圆按钮绑定onclick事件
  for (let i = 0; i < bannerButton.length; i++) {
    bannerButton[i].onmouseover = function() {
      count = i;
      clearInterval(timer);
      updateBanner();
    };
    bannerButton[i].onmouseout = function() {
      showtime();
    };
  }
  //banner切换方法
  function updateBanner() {
    offset = -970 * count + "px";
    banner.style.marginLeft = offset;
    bannerButton.forEach(element => {
      element.setAttribute("class", "banner-btn");
    });
    bannerButton[count].setAttribute("class", "banner-btn-active");
  }
};
