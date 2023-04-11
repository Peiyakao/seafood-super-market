const navto = document.getElementsByClassName("navigator-ol-a");
const wrapper = document.getElementsByTagName("body");
const head = document.getElementsByTagName("header");
const toTop = document.querySelector(".to-top button");
const animation_star = document.querySelector(".animation-star ul");
const fisrt_bg = document.querySelector(".fisrt_page");
let accuT = 0;
let accuL = 300;
let starmove = setInterval(() => {
    accuT += 2;
    accuL += 30;
    for (i = 0; i < 4; i++) {

        if (accuT == -150 || accuL >= 1200) {
            window.clearInterval(starmove);
            animation_star.querySelectorAll("li")[i].style.display = "none";
        }
        animation_star.querySelectorAll("li")[i].style.top = `${accuT}px`;
        animation_star.querySelectorAll("li")[i].style.left = `${accuL}px`;
    }
}, 30);
let bgTurn = setInterval(function () {
    if (fisrt_bg.classList.contains("morning")) {
        fisrt_bg.classList.remove("morning");
        fisrt_bg.classList.add("noon");

    } else if (fisrt_bg.classList.contains("noon")) {
        fisrt_bg.classList.remove("noon");
        fisrt_bg.classList.add("night");
        fisrt_bg.querySelector("h1").style.color = "#fff";
        fisrt_bg.querySelector("h1").style.transition = "5s";
        fisrt_bg.querySelector("p").style.color = "#fff";
        fisrt_bg.querySelector("p").style.transition = "5s";

    } else {
        fisrt_bg.classList.remove("night");
        fisrt_bg.classList.add("morning");
        fisrt_bg.querySelector("h1").style.color = "#000";
        fisrt_bg.querySelector("h1").style.transition = "3s";
        fisrt_bg.querySelector("p").style.color = "#000";
        fisrt_bg.querySelector("p").style.transition = "3s";



    }
}, 8000);

document.addEventListener("scroll", function () {

    if (scrollY > 350) {
        toTop.style.display = "block";
        toTop.style.top = `${scrollY + 450}px`;
    }

})
toTop.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
})
for (i = 0; i < navto.length; i++) {
    navto[i].addEventListener("click", function (e) {
        e.preventDefault();
        let link_id = this.getAttribute("id");
        let aim = document.querySelector(".wrapper section[data-id=" + link_id + "]");
        console.log(link_id, aim.offsetTop);
        let height = aim.offsetTop + head[0].clientHeight;
        window.scrollTo({
            top: height,
            behavior: "smooth"
        });
    })
}
//RWD function
$(function () {
    let width = $(this).width();
    if (width < 420) {
        $(".foot-main").css("display", "none");
        $(".wrapper footer a").css("display", "none");
    };
    $(window).on("resize", function () {
        let width = $(this).width();
        if (width < 420) {
            $(".foot-main").css("display", "none");
            $(".wrapper footer a").css("display", "none");

        };

    });
    let rotate = 0;
    $(".ham").on("click", function () {
        const toTop = document.querySelector(".to-top button");
        if (!rotate) {
            $(".ham-2").css("opacity", "0");
            $(".ham-2").toggle();
            $(".ham-1").css({ "rotate": "45deg", "background-color": "#29a6ff" });
            $(".ham-3").css({ "rotate": "-45deg", "background-color": "#29a6ff" });
            $("nav").slideToggle("slow");
            rotate = 1;
        } else {
            $(".ham-2").toggle();
            $(".ham-2").css("opacity", "1");
            $(".ham-1").css({ "rotate": "0deg", "background-color": "#000000" });
            $(".ham-3").css({ "rotate": "0deg", "background-color": "#000000" });
            $("nav").slideToggle("slow");
            rotate = 0;
        }

    });

    let moveLen = 0;
    const mouse_drag = function () {
        let down = false;
        let initialPositionX = 0;
        let endPositionX = 0;
        for (i = 0; i < document.querySelectorAll(".action-main li").length; i++) {
            document.querySelectorAll(".action-main li")[i].addEventListener("touchstart", handleMouseDown);
            document.querySelectorAll(".action-main li")[i].addEventListener("touchend", handleMouseUp);
            document.querySelectorAll(".action-main li")[i].addEventListener("touchmove", handleMouseMove);
        }

        function handleMouseDown(e) {
            down = true;
            initialPositionX = e.touches[0].clientX;
        }
        function handleMouseUp(e) {
            if (down) {
                endPositionX = e.changedTouches[0].clientX;
                moveLen = endPositionX - initialPositionX;
                down = false;
                let this_id = ($(this).attr("id"));
                let style = this.offsetLeft;
                if (moveLen < 0 && style <= 400) {
                    if (this.classList.contains("action-active")) {
                        this.classList.remove("action-active");
                        this.nextElementSibling.classList.add("action-active");
                    }
                    for (let j = 0; j < $(".selector li").length; j++) {
                        let select = document.querySelectorAll(".selector li")[j];
                        if (select.classList.contains(this_id)) {
                            select.firstElementChild.classList.remove("color");
                            select.nextElementSibling.firstElementChild.classList.add("color");
                        }
                    }
                    this.closest("ul").style.left = `-${style + 300}px`;
                } else if (moveLen < 0 && style > 400) {

                }
                else if (moveLen > 0 && style > 37) {
                    document.querySelector(".action-main ul").style.left = `-${style - 400}px`;
                    if (this.classList.contains("action-active")) {
                        this.classList.remove("action-active");
                        this.previousElementSibling.classList.add("action-active");
                    }
                    for (let j = 0; j < $(".selector li").length; j++) {
                        let select = document.querySelectorAll(".selector li")[j];
                        if (select.classList.contains(this_id)) {
                            select.firstElementChild.classList.remove("color");
                            select.previousElementSibling.firstElementChild.classList.add("color");
                        }
                    }
                };
            }
        }
        function handleMouseMove(e) {
            if (down) {
                endPositionX = e.touches[0].clientX;
            }
        };

    };

    if (window.innerWidth < 420) {
        mouse_drag();
        let about_count = 0;
        $(".about").on("click", function () {
            if (!about_count) {
                $(this).css("height", "735px");
                about_count++;
            } else {
                $(this).css("height", "92px");
                about_count = 0;
            }
        });
        let goal_count = 0;
        $(".goal").on("click", function () {
            if (!goal_count) {
                $(this).css("height", "735px");
                goal_count++;
            } else {
                $(this).css("height", "108px");
                goal_count = 0;
            }
        });
        let action_count = 0;
        $(".action-top").on("click", function () {
            if (!action_count) {
                $(".action").css("height", "586px");
                action_count++;
            } else {
                $(".action").css("height", "110px");
                action_count = 0;
            }
        });
    }
    if (window.innerWidth > 800) {
        window.addEventListener("scroll",
            function () {
                let shopping_list_y = parseInt(document.querySelector(".about").getBoundingClientRect().top);
                if (shopping_list_y < 200) {
                    document.querySelectorAll(".about-content article")[0].classList.add("active");
                    document.querySelectorAll(".about-content img")[0].classList.add("active");
                    document.querySelectorAll(".about-content img")[1].classList.add("active");
                }
                if (shopping_list_y < 150) {
                    document.querySelectorAll(".about-content article")[1].classList.add("active");
                }
                if (shopping_list_y < -400) {
                    document.querySelectorAll(".goal-main li")[0].classList.add("active");
                    document.querySelectorAll(".goal-main li")[1].classList.add("active");
                    document.querySelectorAll(".goal-main li")[2].classList.add("active");
                    document.querySelectorAll(".goal-main li")[3].classList.add("active");
                }
                if (shopping_list_y < -600) {
                    document.querySelector(".article-4").classList.add("active");
                    
                }
                if (shopping_list_y < -1100) {
                    for(let i=0;i<3;i++){
                        document.querySelectorAll(".action-main li")[i].classList.add("active");
                    }
                    
                    
                }

            });
    }
})