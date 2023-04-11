
$(function () {
    for (i = 0; i < $("button").length; i++) {
        let move_count = 0;
        let open = 0;

        $("button").eq(i).on("click", function () {
            if (this.closest("div").className === "outter") {
                $(".outter").toggle();
                $(".inside").toggle();
            }
            else if (this.className === "search-btn") {
                $(".outter").toggle();
                $(".inside").toggle();
                console.log();
                window.scrollTo({
                    top: `${parseInt($(".shopping ").offset().top) + 1}`,
                    behavior: "smooth"
                });
            }
            else if (this.className === "inside-page1-close") {
                $(".outter").toggle();
                $(".inside").toggle();
            }
            else if (this.className === "button-main-6 exit") {
                $("#flipbook").toggle();
                $(".inside-page1").toggle();
            }
            else if (this.parentElement.className === "area") {
                console.log(this.className);
                $(".inside-page1").toggle();
                $("#flipbook").turn("page", 1);
                $("#flipbook").toggle();
            }

            else if (this.parentElement.className === "hard page p1 odd") {
                console.log(this.className);
                $(".inside-page1").toggle();
                $("#flipbook").toggle();
            }
            else if (this.parentElement.className === "inside-page3-rigth-top") {
                console.log(this.className);
                $(".inside-page1").toggle();
                $("#flipbook").toggle();
            }
            else if (this.className === "cookway-btn") {
                if (window.innerWidth > 800) {
                    if (!move_count) {
                        move_count = 1;
                        $(".cookway").css({ "width": "336px", "background-size": "contain" });
                        $(".cookway div").css({ "width": "427px" });
                        $(".cookway div span").css({
                            "opacity": "1", "font-size": "1.8rem"
                        });
                        for (i = 0; i < 4; i++) {
                            $(".cookway span").eq(i).show();
                        }
                    } else {
                        $(".cookway").css({ "width": "105px", "background-size": "cover" });
                        $(".cookway div").css({ "width": "0px" });
                        $(".cookway div span").css({ "opacity": "0", "font-size": ".5rem" });
                        move_count = 0;
                        for (i = 0; i < 4; i++) {
                            $(".cookway span").eq(i).hide();
                        }
                    }
                } else {
                    let cookway1 = $("#cook-red").next();
                    let cookway2 = $("#cook-yellow").next();
                    let cookway3 = $("#cook-white").next();
                    let cookway4 = $("#cook-none").next();
                    let cookway_btn_x = this.getBoundingClientRect().left;
                    let cookway_btn_y = this.getBoundingClientRect().top;
                    if (!move_count) {

                        move_count = 1;
                        for (i = 0; i < 4; i++) {
                            $(".cookway span").eq(i).show();
                        }
                        $(".cookway span label").css({ "width": "40px", "height": "40px", "opacity": "1", "color": "#fff" });
                        console.log(cookway1);
                        cookway1.css({ "left": `${-12}px`, "top": `${-25}px` });
                        cookway2.css({ "left": `${20}px`, "top": `${-24}px` });
                        cookway3.css({ "left": `${20}px`, "top": `${-19}px` });
                        cookway4.css({ "left": `${-12}px`, "top": `${-16}px` });


                    } else {
                        $(".cookway span label").css({ "width": "0px", "height": "0px", "opacity": "0", "color": "#ffffff00" });

                        move_count = 0;
                        console.log(123);
                        for (i = 0; i < 4; i++) {
                            $(".cookway span").eq(i).hide();
                        }
                        cookway1.css({ "left": `${0}px`, "top": `${0}px` });
                        cookway2.css({ "left": `${0}px`, "top": `${0}px` });
                        cookway3.css({ "left": `${0}px`, "top": `${0}px` });
                        cookway4.css({ "left": `${0}px`, "top": `${0}px` });
                    }
                }

            }
            else if (this.className === "add-car") {
                let h = screen.height;
                let y = $(window).scrollTop();
                console.log(y);
                let name = this.closest("div").nextElementSibling.firstElementChild.innerText;
                let img = this.previousElementSibling.src;
                let light_box = $(".light-box");
                let aim_title = $(".add-card-top h4");
                $(".light-box").toggle();
                $(".light-box").css({ "left": "0px", "right": "0px", "margin": "auto", "top": `${y - 800}px`, "width": "100%", "heigth": `h*0.8` });
                aim_title.html(`${name}`);
                open = 1;
                switch (name) {
                    case "No.1 鬼頭刀":
                        $(".point").html("4");
                        $(".card-mid-img img").attr("src", `${img}`);
                        $(".price-1").html("250");
                        $(".price-2").html("300");
                        $(".price-3").html("350");
                        break;
                    case "No.2 文蛤":
                        $(".point").html("3.5");
                        $(".card-mid-img img").attr("src", `${img}`);
                        $(".price-1").html("30");
                        $(".price-2").html("40");
                        $(".price-3").html("50");
                        $(".size-s").html("小於5cm");
                        $(".size-m").html("5cm-7cm");
                        $(".size-l").html(">7cm");
                        break;
                    case "No.3 櫻花蝦":
                        $(".point").html("5");
                        $(".card-mid-img img").attr("src", `${img}`);
                        $(".price-1").html("10");
                        $(".price-2").html("20");
                        $(".price-3").html("30");
                        $(".size-s").html("小於1cm");
                        $(".size-m").html("1cm-1.5cm");
                        $(".size-l").html(">2cm");
                        break;
                    case "No.4 鎖管":
                        $(".point").html("4.5");
                        $(".card-mid-img img").attr("src", `${img}`);
                        $(".price-1").html("80");
                        $(".price-2").html("100");
                        $(".price-3").html("120");
                        $(".size-s").html("小於50g");
                        $(".size-m").html("50-90g");
                        $(".size-l").html(">90g");
                        break;
                    case "No.5 東方齒鰆":
                        $(".point").html("3.5");
                        $(".card-mid-img img").attr("src", `${img}`);
                        $(".price-1").html("70");
                        $(".price-2").html("80");
                        $(".price-3").html("90");
                        $(".size-s").html("小於500g");
                        $(".size-m").html("500-900g");
                        $(".size-l").html(">900g");
                        break;
                    case "No.6 白帶魚":
                        $(".point").html("4");
                        $(".card-mid-img img").attr("src", `${img}`);
                        $(".price-1").html("50");
                        $(".price-2").html("60");
                        $(".price-3").html("70");
                        $(".size-s").html("小於300g");
                        $(".size-m").html("300-700g");
                        $(".size-l").html(">700g");
                        break;
                }
                let point=parseInt($(".point").html());
                for(let i=0;i<5;i++){
                    let star_amount=document.querySelectorAll(".add-card-top ul li")[i].dataset.id;
                    
                    if(point-star_amount>=0){
                        document.querySelectorAll(".add-card-top ul li img")[i].setAttribute("src","../image/shoping_cen/Star1.png");
                        
                        
                    }else{
                        document.querySelectorAll(".add-card-top ul li img")[i].setAttribute("src","../image/shoping_cen/Star2.png");
                       
                    }
                }
            }
            else if (this.className === "add-card-mid-btn" || this.className === "back-shopping-list") {
                $(".light-box").toggle();
                $(".add-into-car-animate").css({ "left": `${276}px`, "top": `${-15}px` });
                $(".cal-price .total-price").html("0");
                $(".card-mid-select input").val("0");
                for(let i=0;i<3;i++){
                    document.querySelectorAll(".card-mid-select select option")[i].selected="false";
                }
                document.querySelectorAll(".card-mid-select select option")[0].selected="true";
                open = 0;

            }
            else if (this.parentElement.className === "card-mid-select") {
                let current = $(".card-mid-select input").val();
                let size = $("#select-size option:selected").val();
                let showprice = $(".total-price").html();
                if (this.className === "plus") {
                    console.log("123");
                    current++;
                    $(".card-mid-select input").val(`${current}`);

                } else {
                    if (current > 0) {
                        current--;
                        $(".card-mid-select input").val(`${current}`);
                    }

                }
                switch (size) {
                    case "1":
                        showprice = $(".price-1").html() * current;
                        $(".total-price").html(`${showprice}`);
                        break;
                    case "2":
                        showprice = $(".price-2").html() * current;
                        $(".total-price").html(`${showprice}`);
                        break;
                    case "3":
                        showprice = $(".price-3").html() * current;
                        $(".total-price").html(`${showprice}`);
                        break;
                };

            }
            else if (this.className === "add-into-car") {
                let check_buy = $(".total-price").html();
                let cargo_x = document.querySelector(".cargo").getBoundingClientRect().left;
                let cargo_y = document.querySelector(".cargo").getBoundingClientRect().top;
                let fish_x = document.querySelector(".add-into-car-animate").getBoundingClientRect().left;
                let fish_y = document.querySelector(".add-into-car-animate").getBoundingClientRect().top;
                let distance_x = fish_x - cargo_x;
                let distance_y = fish_y - cargo_y;
                let count = 0;
                
                $(".cal-price .total-price").html("0");
                $(".card-mid-select input").val("0");
                for(let i=0;i<3;i++){
                    document.querySelectorAll(".card-mid-select select option")[i].selected="false";
                }
                document.querySelectorAll(".card-mid-select select option")[0].selected="true";
                console.log($(".cal-price .total-price").html());
                let current_car_item_amount = $("#amount").html();

                if (check_buy > 0) {
                    $(".add-into-car-animate").css({ "left": `${276 - distance_x}px`, "top": `${-15 - distance_y}px`, "opacity": "1" });
                    const smaller = setInterval(function () {
                        if (count < 4) {
                            count++;
                            $(".add-into-car-animate").css({ "transform": `scale(${1 - count * 0.2})`, "opacity": `${1 - count * 0.3}` });
                        } else {
                            count = 0;
                            clearInterval(smaller);
                        }
                    }, 400)
                    current_car_item_amount++;
                    $("#amount").html(`${current_car_item_amount}`);
                    setTimeout(function () {
                        $(".add-into-car-animate").css({ "left": `${276}px`, "top": `${-15}px`, "opacity": "0", "transform": "scale(1)" });
                    }, 3000);


                } else {
                    window.alert("請選擇購買商品規格及數量");
                }

            }
        })
    }

    let width = $(this).width();
    if (width < 420) {
        $(".foot-main").css("display", "none");
        $(".wrapper footer a").css("display", "none");
        $("#flipbook").turn({
            width: 380,
            height: 500,
            elevation: 50,
            gradients: true,
            display: "single",
            page: 5
        });
        for (i = 0; i < $(".inside-page2-left-locate ul li").length; i++) {
            let origin_left = parseInt($(".inside-page2-left-locate ul li").eq(i).css("left")) - 18;
            $(".inside-page2-left-locate ul li").eq(i).css("left", `${origin_left}px`);
        };
        for (i = 0; i < $(".inside-page2-rigth-locate ul li").length; i++) {
            let origin_left = parseInt($(".inside-page2-rigth-locate ul li").eq(i).css("left")) - 18;
            $(".inside-page2-rigth-locate ul li").eq(i).css("left", `${origin_left}px`);
        };
        for (i = 0; i < $(".inside-page3-left-locate ul li").length; i++) {
            let origin_left = parseInt($(".inside-page3-left-locate ul li").eq(i).css("left")) - 18;
            $(".inside-page3-left-locate ul li").eq(i).css("left", `${origin_left}px`);
        }

    } else {
        $("#flipbook").turn({
            width: 800,
            height: 500,
            elevation: 50,
            gradients: true,
            page: 5
        });
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
    let fish_mount = $(".top-bottom img").length;
    // const top_bottom_fish_move = setInterval(function () {
    //     for (i = 0; i < fish_mount; i++) {
    //         let random_num = Math.floor(Math.random() * 10);
    //         let fish_left = document.querySelectorAll(".top-bottom img")[i].getBoundingClientRect().left;
    //         let fish_right = document.querySelectorAll(".top-bottom img")[i].getBoundingClientRect().right;
    //         let fish_top = document.querySelectorAll(".top-bottom img")[i].getBoundingClientRect().top;
    //         let fish_bottom = document.querySelectorAll(".top-bottom img")[i].getBoundingClientRect().bottom;


    // switch (`${random_num}`) {
    //     //move right
    //     case "0":
    //         if (fish_left < 1000 && fish_top<660 && fish_top660) {
    //             $(".top-bottom img").eq(i).css({
    //                 "left": `${fish_left + 5}px`, "top": `${fish_top}px`
    //             });
    //         }
    //         break;
    //move left
    // case "1":
    //     if (fish_left > 20) {
    //         $(".top-bottom img").eq(i).css({
    //             "left": `${fish_left - 5}px`, "top": `${fish_top}px`
    //         });
    //     }
    //     break;
    //move top
    // case "2":
    //     if (fish_top > 406) {
    //         $(".top-bottom img").eq(i).css({
    //             "left": `${fish_left}px`, "top": `${fish_top - 5}px`
    //         });
    //     }
    //     break;
    //move bottom    
    // case "3":
    //     if (fish_top < 660) {
    //         $(".top-bottom img").eq(i).css({
    //             "left": `${fish_left}px`, "top": `${fish_top + 5}px`
    //         });
    //     }
    //     break;
    // //move right top
    // case "4":
    //     if (fish_top < 406 || fish_left > 1000) {
    //         $(".top-bottom img").eq(i).css({
    //             "left": `${fish_left - 20}px`, "top": `${fish_top + 20}px)`
    //         });
    //     } else {
    //         $(".top-bottom img").eq(i).css({
    //             "left": `${fish_left + 20}px`, "top": `${fish_top - 20}px)`
    //         });
    //     }

    //     break;
    // //move right bottom
    // case "5":
    //     if (fish_top > 660 || fish_left > 1000) {
    //         $(".top-bottom img").eq(i).css({
    //             "left": `${fish_left + 20}px`, "top": `${fish_top - 20}px)`
    //         });
    //     } else {
    //         $(".top-bottom img").eq(i).css({
    //             "left": `${fish_left - 20}px`, "top": `${fish_top + 20}px)`
    //         });
    //     }

    //     break;
    // //move left top
    // case "6":
    //     if (fish_top < 406 || fish_left < 20) {
    //         $(".top-bottom img").eq(i).css({
    //             "left": `${fish_left + 20}px`, "top": `${fish_top + 20}px)`
    //         });
    //     } else {
    //         $(".top-bottom img").eq(i).css({
    //             "left": `${fish_left - 20}px`, "top": `${fish_top - 20}px)`
    //         });
    //     }

    //     break;
    // //move left bottom
    // case "7":
    //     if (fish_top > 660 || fish_left < 20) {
    //         $(".top-bottom img").eq(i).css({
    //             "left": `${fish_left + 20}px`, "top": `${fish_top - 20}px)`
    //         });
    //     } else {
    //         $(".top-bottom img").eq(i).css({
    //             "left": `${fish_left - 20}px`, "top": `${fish_top + 20}px)`
    //         });
    //     }
    //     break;
    //             case "8":
    //             case "9":
    //         }
    //     }
    // }, 2000);
    //when window scroll,merchadise appear
    if (window.innerWidth > 800) {
        window.addEventListener("scroll",
            function () {
                let shopping_list_y = parseInt(document.querySelector(".shopping").getBoundingClientRect().top);
                let shopping_list_item_h = document.querySelectorAll(".main ul li")[0].offsetHeight;
                if (shopping_list_y < 333) {
                    document.querySelectorAll(".main ul li")[0].classList.add("active-l");
                    document.querySelectorAll(".main ul li")[1].classList.add("active-r");
                }

                if (shopping_list_y < 333 - (shopping_list_item_h * 1.5)) {
                    document.querySelectorAll(".main ul li")[2].classList.add("active-l");
                    document.querySelectorAll(".main ul li")[3].classList.add("active-r");
                }

                if (shopping_list_y < 333 - (shopping_list_item_h * 3)) {
                    document.querySelectorAll(".main ul li")[4].classList.add("active-l");
                    document.querySelectorAll(".main ul li")[5].classList.add("active-r");
                }
            });
    }
    let select_cookway = document.querySelectorAll(".cookway span input");

    select_cookway[0].addEventListener("change", function () {
        if (this.checked) {
            this.nextElementSibling.style.backgroundImage = "url(../image/shoping_cen/cook1-2.png)";
            this.nextElementSibling.style.color = "#1100ff";
        } else {
            this.nextElementSibling.style.backgroundImage = "url(../image/shoping_cen/cook1.png)";
            this.nextElementSibling.style.color = "#fff";
        }
    });
    select_cookway[1].addEventListener("change", function () {
        if (this.checked) {
            this.nextElementSibling.style.backgroundImage = "url(../image/shoping_cen/cook2-2.png)";
            this.nextElementSibling.style.color = "#1100ff";
        } else {
            this.nextElementSibling.style.backgroundImage = "url(../image/shoping_cen/cook2.png)";
            this.nextElementSibling.style.color = "#fff";
        }
    });
    select_cookway[2].addEventListener("change", function () {
        if (this.checked) {
            this.nextElementSibling.style.backgroundImage = "url(../image/shoping_cen/cook3-2.png)";
            this.nextElementSibling.style.color = "#1100ff";
        } else {
            this.nextElementSibling.style.backgroundImage = "url(../image/shoping_cen/cook3.png)";
            this.nextElementSibling.style.color = "#fff";
        }
    });
    select_cookway[3].addEventListener("change", function () {
        if (this.checked) {
            this.nextElementSibling.style.backgroundImage = "url(../image/shoping_cen/cook4-2.png)";
            this.nextElementSibling.style.color = "#1100ff";
        } else {
            this.nextElementSibling.style.backgroundImage = "url(../image/shoping_cen/cook4.png)";
            this.nextElementSibling.style.color = "#fff";
        }
    });


    let select_all = document.querySelectorAll("h2 input");
    for (let i = 0; i < select_all.length; i++) {
        select_all[i].addEventListener("change", function () {
            if (this.checked) {

                if (this.id != "select-all-E") {
                    let locate_checkbox = this.parentElement.nextElementSibling.nextElementSibling.querySelectorAll("input");
                    for (let j = 0; j < locate_checkbox.length; j++) {
                        locate_checkbox[j].checked = true;
                    }
                } else {
                    for (j = 0; j < document.querySelectorAll(".inside-page3-rigth-pic input").length; j++) {
                        document.querySelectorAll(".inside-page3-rigth-pic input")[j].checked = true;
                    }

                }

            } else {
                if (this.id != "select-all-E") {
                    let locate_checkbox = this.parentElement.nextElementSibling.nextElementSibling.querySelectorAll("input");
                    for (let j = 0; j < locate_checkbox.length; j++) {
                        locate_checkbox[j].checked = false;
                    }
                } else {
                    for (j = 0; j < document.querySelectorAll(".inside-page3-rigth-pic input").length; j++) {
                        document.querySelectorAll(".inside-page3-rigth-pic input")[j].checked = false;
                    }

                }
            }
        });
    }


})
let count = 0;
setInterval(function () {
    if (!count) {
        $(".click-mov").attr("src", "../image/shoping_cen/click2.png");
        count = 1;
    } else {
        $(".click-mov").attr("src", "../image/shoping_cen/click.png");
        count = 0;
    }

}, 500);

$(".click-mov").mouseover(function () {
    $(".click").toggle();
});
$(".click-mov").mouseout(function () {
    $(".click").toggle();
});
const toTop = document.querySelector(".to-top button");
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


