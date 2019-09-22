var count = 0;
var isgo = false;
var timer;

window.onload = function () {

    var banner = document.getElementById("banners");
    //获取控制方向的箭头元素
    var arrow = document.getElementsByClassName("arrow");
    var bannerButton = document.getElementsByClassName("banner-btn");
    bannerButton[0].setAttribute("class","banner-btn active");

    showtime();
    function showtime() {
        timer = setInterval(function () {
            // alert("执行了");
            if (isgo === false) {

                if (count > 2) {
                    count = 0;
                } else { 
                    
                    banner.style.transform = "translate(" + -968 * count + "px)";
                    count++;
                }

            }
            for (var i = 0; i < bannerButton.length; i++) {
                bannerButton[i].setAttribute("class","banner-btn");
            }
            bannerButton[count].setAttribute("class","banner-btn active");

        }, 3000);
    }
        for (var i = 0; i < arrow.length; i++) {
            //鼠标悬停时
            arrow[i].onmouseover = function () {
                //停止计时器
                clearInterval(timer);
            }
            //鼠标离开时
            arrow[i].onmouseout = function () {
                //添加计时器
                showtime();
            }
            arrow[i].onclick = function () {
                //区分左右
                if (this.title == 0) {
                    count++;
                    if (count > 2) {
                        count = 0;
                    }
                } else {
                    count--;
                    if (count < 0) {
                        count = 2;
                    }
                }
                banner.style.transform = "translate(" + -968 * count + "px)";
            }
        }

        for (var b = 0; b < bannerButton.length; b++) {
            bannerButton[b].index = b;
            bannerButton[b].onmouseover = function () {
                
                clearInterval(timer);

                for (var a = 0; a < bannerButton.length; a++) {
                    bannerButton[a].setAttribute = ("class","banner-btn");
                }
                // bannerButton[a].setAttribute("class","banner-btn-active");
                if (this.index == 2) {
                    isgo = true;
                }
                if (this.index == 0) {
                    isgo = false;
                }
                count = this.index;
                banner.style.transform = "translate(" + -968 * this.index + "px)";
            }
            bannerButton[b].onmouseout = function () {         
                showtime();
            }
        }
}
    
