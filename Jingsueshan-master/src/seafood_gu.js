$(function () {
    //hamburger
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
    //show more
    let main_page = document.querySelector(".main-page-top");
    let main_page_top = main_page.getBoundingClientRect().top;
    let main_page_width = document.querySelector(".main-page article ul").getBoundingClientRect().width;
    let page_width = main_page_width / $(".main-page aside button").length;
    console.log(page_width);
    $(".first-page a").on("click", function (e) {
        e.preventDefault();
        window.scrollTo({
            top: `${main_page_top}`,
            behavior: "smooth",
        });

    });
    //article move and button change color
    for (let i = 0; i < $(".main-page aside button").length; i++) {
        $(".main-page aside button").eq(i).on("click", function () {
            $(".main-page aside button p").removeClass("color");
            $(this).find("p").addClass("color");
            let name = $(this).attr("class");
            console.log(name, page_width * 4);
            switch (name) {
                case "priciple-1":
                    $(".main-page article ul").css("left", "0");
                    break;
                case "priciple-2":
                    $(".main-page article ul").css("left", `-${page_width * 1}px`);
                    break;
                case "priciple-3":
                    $(".main-page article ul").css("left", `-${page_width * 1}px`);
                    break;
                case "priciple-4":
                    $(".main-page article ul").css("left", `-${page_width * 1}px`);
                    break;
                case "priciple-5":
                    $(".main-page article ul").css("left", `-${page_width * 2}px`);
                    break;
                case "priciple-6":
                    $(".main-page article ul").css("left", `-${page_width * 3}px`);
                    break;
                case "priciple-7":
                    $(".main-page article ul").css("left", `-${page_width * 4}px`);
                    break;
                case "priciple-8":
                    $(".main-page article ul").css("left", `-${page_width * 5}px`);

            }
        })
    }
    let count = 0;
    let count_minus = 1;
    let scale = 0;
    let btn_disapper = 0;
    //swordfish move animate
    $(".main-page-bottom-btn").on("click", function () {
        if (!btn_disapper) {
            $(this).css("opacity", "0");
            btn_disapper = 1;
        } else {
            btn_disapper = 0;
        }

        console.log(123);
        if ($(".main-page-bottom img").attr("class") != "fish-move") {
            $(".main-page-bottom img").addClass("fish-move");
            const move_fish =
                setInterval(function () {
                    if (count <= 5) {

                        $(".main-page-bottom img.fish-move").css({
                            "transform": `translate3d(-${count * 50}px, -${count * 20}px, 0) rotate(-${count * 6}deg)`,
                            "opacity": "1"
                        })
                        count++;
                        console.log(count);
                    } else if (count > 5 && count <= 12) {

                        $(".main-page-bottom img.fish-move").css({
                            "transform": `translate3d(-${count * 50}px, ${-(count - count_minus) * 20}px, 0) rotate(-${count * 6}deg) scale(${1 - (scale * 0.1)})`
                        })
                        console.log((count - count_minus));
                        count++;
                        scale++;
                        count_minus = count_minus + 2;
                    } else if (count > 12) {
                        console.log(count);
                        count = 0;
                        count_minus = 1;
                        scale = 0;
                        $(".main-page-bottom img.fish-move").css({
                            "opacity": "0",
                        })
                        $(".main-page-bottom-btn").css("opacity", "1");
                        clearInterval(move_fish);

                    }
                }, 050);

        }
        else {
            $(".main-page-bottom img").removeClass("fish-move");
            $(".main-page-bottom img").css({
                "opacity": "1",
                "transform": `translate3d(-${count * 50}px, ${count * 20}px, 0) rotate(-${count * 10}deg)`
            })
        }

    });
    $(".main-page-bottom-btn").on('touchstart', function () {
        $(".main-page-bottom img").addClass("fish-move");

    });
    let caution_count = 0;
    const caution_btn = setInterval(function () {
        if (!caution_count) {
            $(".main-page-bottom-btn").css("font-size", "1.7rem");
            caution_count = 1;
        } else {
            $(".main-page-bottom-btn").css("font-size", "1.3rem");
            caution_count = 0;
        }
    }, 500);
})
