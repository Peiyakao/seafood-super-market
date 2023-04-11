
$(function () {
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
    let w = document.documentElement.scrollWidth;
    let default_total = 0;
    const check_list = function () {
        for (i = 0; i < $(".item").length; i++) {
            let name = $(".item").eq(i).find(".name").html();
            let size = $(".item").eq(i).find(".size").html();
            let price = $(".item").eq(i).find(".price").html();
            let amount = $(".item").eq(i).find(".amount input").val();
            let total = $(".item").eq(i).find(".total").html();
            $(".second-page-main-left ol ul").eq(i).find(".name").html(`${name}`);
            $(".second-page-main-left ol ul").eq(i).find(".size").html(`${size}`);
            $(".second-page-main-left ol ul").eq(i).find(".price").html(`${price}`);
            $(".second-page-main-left ol ul").eq(i).find(".amount").html(`${amount}`);
            $(".second-page-main-left ol ul").eq(i).find(".total").html(`${total}`);
        }
    };
    for (i = 0; i < $(".item").length; i++) {

        default_total += parseInt($(".item .total").eq(i).html());
    }
    $(".total-price").html(`${default_total}`);
    console.log($(".total-price").html());
    //when select box state change,the total price will change at sametime.
    for (i = 0; i < $(".choose-input").length; i++) {

        $(".choose-input").eq(i).click(function () {
            console.log($(this).prop("checked"));
            let check_state = $(this).prop("checked");
            let cur_price = parseInt($(".total-price").html());
            let total = $(this).closest("ol").children(".total").html();

            if (this.className === "choose-input") {
                if (check_state) {
                    console.log(total);
                    cur_price += parseInt(total);
                    $(".total-price").html(`${cur_price}`);
                } else {
                    console.log(total);
                    cur_price -= parseInt(total);
                    $(".total-price").html(`${cur_price}`);
                }

            }
            let sum = parseInt($(".total-price").html()) + parseInt($(".delivery-price").html()) - parseInt($(".price-none").html());
            $(".finall-price").html(sum);
            check_list();


        })
    }
    for (i = 0; i < $("button").length; i++) {

        $("button").eq(i).on("click", function () {
            //open cargo list
            if (this.className === "click-here") {
                $(".index-page").toggle();
                $(".page-wrapper").css("opacity", "1");
                $("#flipbook").toggle();
                $("#flipbook").turn("page", 1);
                $("#pay-money").attr('disabled', "true");
            }
            //press next button
            else if (this.className === "btn-next-step") {
                if ($("#flipbook").turn("page") == 4) {
                    $(".finish").toggle();
                    $(".page-wrapper").css("opacity", ".4");
                    let count = 5;
                    let timer = setInterval(function () {
                        $(".count-time").html(`${count}`);
                        if (count > 0) {
                            count--;
                        } else {
                            count = 5;
                            clearInterval(timer);
                        }
                    }, 1000);
                    let exp = parseInt($(".experience-num").html()) + parseInt($(".finall-price").html());
                    setTimeout(function () {
                        $(".experience-num").html(exp);
                        let width = $(this).width();
                        switch ($(".level").html()) {
                            case "海豚之子Son of dolfin":
                                if (width >= 420) {
                                    var max_exp = 8000;
                                    var add_exp = exp * 100 / max_exp;
                                    var magin_left = parseInt((-616 * (100 - (add_exp)) / 100) + 230);
                                    console.log(magin_left);
                                    if (magin_left >= 245) {
                                        magin_left = 245;
                                    }
                                    $(".experience-mid-num").css("margin-left", `${magin_left}px`);
                                    $(".experience-mid-bar .experience-bar").css("width", `${add_exp}%`);
                                    setTimeout(function () {

                                        if (exp >= max_exp) {
                                            let new_exp = exp - max_exp;
                                            add_exp = new_exp * 100 / 15000;
                                            magin_left = parseInt((-616 * (100 - (add_exp)) / 100) + 230);
                                            $(".experience-num").html(new_exp);
                                            $(".experience-mid-num").css("margin-left", `${magin_left}px`);
                                            $(".experience-mid-bar .experience-bar").css("width", `${add_exp}%`);
                                            $(".experience-top img").attr("src", "../image/shoppingcargo/whale.png");
                                            $(".level").html(`鯨王\n The king of whale`);
                                        }
                                    }, 700);
                                }
                                else if (width < 420) {
                                    var max_exp = 8000;
                                    var add_exp = exp * 100 / max_exp;
                                    var magin_left = parseInt((-458 * (100 - (add_exp)) / 100) + 200);

                                    if (magin_left >= 208) {
                                        magin_left = 208;
                                    }
                                    $(".experience-mid-num").css("margin-left", `${magin_left}px`);
                                    $(".experience-mid-bar .experience-bar").css("width", `${add_exp}%`);
                                    setTimeout(function () {
                                        if (exp >= max_exp) {
                                            let new_exp = exp - max_exp;
                                            add_exp = new_exp * 100 / 15000;
                                            magin_left = parseInt((-458 * (100 - (add_exp)) / 100) + 200);
                                            $(".experience-num").html(new_exp);
                                            $(".experience-mid-num").css("margin-left", `${magin_left}px`);
                                            $(".experience-mid-bar .experience-bar").css("width", `${add_exp}%`);
                                            $(".experience-top img").attr("src", "../image/shoppingcargo/whale.png");
                                            $(".level").html(`鯨王\n The king of whale`);
                                        }
                                    }, 700);
                                }

                                break;
                            case `鯨王\n The king of whale`:
                                if (width >= 420) {
                                    var max_exp = 15000;
                                    var add_exp = exp * 100 / max_exp;
                                    var magin_left = parseInt((-616 * (100 - (add_exp)) / 100) + 240);
                                    console.log(magin_left);
                                    if (magin_left >= 245) {
                                        magin_left = 245;
                                    }
                                    $(".experience-mid-num").css("margin-left", `${magin_left}px`);
                                    $(".experience-mid-bar .experience-bar").css("width", `${add_exp}%`);
                                    setTimeout(function () {

                                        if (exp >= max_exp) {
                                            let new_exp = exp - max_exp;
                                            add_exp = new_exp * 100 / 20000;
                                            magin_left = parseInt((-616 * (100 - (add_exp)) / 100) + 240);
                                            $(".experience-num").html(new_exp);
                                            $(".experience-mid-num").css("margin-left", `${magin_left}px`);
                                            $(".experience-mid-bar .experience-bar").css("width", `${add_exp}%`);
                                            $(".experience-top img").attr("src", "../image/shoppingcargo/whale.png");
                                            $(".level").html(`海洋之母\n The mother of ocean`);
                                        }
                                    }, 700);
                                }
                                else if (width < 420) {
                                    var max_exp = 15000;
                                    var add_exp = exp * 100 / max_exp;
                                    var magin_left = parseInt((-458 * (100 - (add_exp)) / 100) + 200);
                                    console.log(magin_left);
                                    if (magin_left >= 208) {
                                        magin_left = 208;
                                    }
                                    $(".experience-mid-num").css("margin-left", `${magin_left}px`);
                                    $(".experience-mid-bar .experience-bar").css("width", `${add_exp}%`);
                                    setTimeout(function () {

                                        if (exp >= max_exp) {
                                            let new_exp = exp - max_exp;
                                            add_exp = new_exp * 100 / 20000;
                                            magin_left = parseInt((-458 * (100 - (add_exp)) / 100) + 200);
                                            $(".experience-num").html(new_exp);
                                            $(".experience-mid-num").css("margin-left", `${magin_left}px`);
                                            $(".experience-mid-bar .experience-bar").css("width", `${add_exp}%`);
                                            $(".experience-top img").attr("src", "../image/shoppingcargo/whale.png");
                                            $(".level").html(`海洋之母\n The mother of ocean`);
                                        }
                                    }, 700);
                                }

                                break;


                        };
                    }, 200)
                    setTimeout(function () {
                        $(".index-page").fadeIn();
                        $("#flipbook").fadeOut();
                        $(".finish").fadeOut();
                    }, 5000);
                } else { $("#flipbook").turn("next"); }
                check_list();
            }
            //press last button
            else if (this.className === "btn-last-step") {
                if ($("#flipbook").turn("pages") == 1) {
                    $(".index-page").fadeIn();
                    $("#flipbook").fadeOut();
                }
                else { $("#flipbook").turn("previous"); }
            }
            //change item amount
            else if (this.parentElement.className === "amount") {
                let price = $(this).parent().prev().html();
                let total = $(this).parent().next().html();
                let check = $(this).closest("ol").children(".choose").children().prop("checked");
                let add_price = 0;
                let cur_price = parseInt($(".total-price").html());
                if (this.className === "plus") {
                    let current = $(this).prev().val();
                    current++;
                    total = price * current;
                    $(this).prev().val(`${current}`);
                    $(this).parent().next().html(`${total}`);
                    console.log(check);
                    if (check) {
                        add_price += parseInt(price);
                        cur_price = cur_price + add_price;
                        $(".total-price").html(`${cur_price}`);
                    }
                } else {
                    let current = $(this).next().val();
                    if (current > 0) {
                        current--;
                        total = price * current;
                        $(this).next().val(`${current}`);
                        $(this).parent().next().html(`${total}`);
                        if (check) {
                            add_price += parseInt(price);
                            cur_price = cur_price - add_price;
                            $(".total-price").html(`${cur_price}`);
                        }

                    }

                } check_list();

            }
            //delete item you don't want buy
            else if (this.className === "del-btn") {
                $(this).closest(".item").remove();
                let cur_price = parseInt($(".total-price").html());
                let total = $(this).closest("ol").children(".total").html();
                let check_state = $(this).closest("ol").children().children().prop("checked");
                if (check_state) {
                    cur_price -= parseInt(total);
                    $(".total-price").html(`${cur_price}`);
                }

            }
            else if (this.closest("li").className === "pay-select-credit") {
                $(".credit-card").fadeIn();
                $("#pay-money").removeAttr('disabled');
                $.each($(".pay-select button"), function (i, value) {
                    $(".pay-select button").eq(i).removeClass("outline");
                })
                $(this).addClass("outline");

            } else if (this.closest("div").className === "pay-select") {
                $("#pay-money").removeAttr('disabled');
                $.each($(".pay-select button"), function (i, value) {
                    $(".pay-select button").eq(i).removeClass("outline");

                })
                $(this).addClass("outline");
            }
            let total = parseInt($(".total-price").html()) + parseInt($(".delivery-price").html()) - parseInt($(".price-none").html());
            $(".finall-price").html(total);
            check_list();
        })

    }
    //delivery price
    for (i = 0; i < $("#delivery").length; i++) {
        $("#delivery").change(function () {
            let select = $("#delivery").val();
            console.log($("#delivery"));
            switch (select) {
                case "1":
                    $(".delivery-price").html(200);
                    break;
                case "2":
                    $(".delivery-price").html(60);
            }
            let total = parseInt($(".total-price").html()) + parseInt($(".delivery-price").html()) - parseInt($(".price-none").html());
            $(".finall-price").html(total);
            check_list();
        })
    }
    //discount price
    for (i = 0; i < $("#bonus").length; i++) {
        $("#bonus").change(function () {
            let select = $("#bonus").val();
            switch (select) {
                case "0":
                    $(".price-none").html(0);
                    break;
                case "1":
                    $(".price-none").html($(".delivery-price").html());
            }
            let total = parseInt($(".total-price").html()) + parseInt($(".delivery-price").html()) - parseInt($(".price-none").html());
            $(".finall-price").html(total);
            check_list();
        })
    }
    let total = parseInt($(".total-price").html()) + parseInt($(".delivery-price").html()) - parseInt($(".price-none").html());
    $(".finall-price").html(total);
    //pay

    let select_amount = 0;

    for (i = 0; i < $(".item").length; i++) {

        if ($(".item").eq(i).find(".choose-input").prop("checked")) {
            select_amount++;
            console.log($(".item").eq(i).find(".choose-input").val());
        }
    }
    if (select_amount > $(".second-page-main-left ol").length) {
        for (i = 0; i <= select_amount - $(".second-page-main-left ol").length; i++) {
            $(".second-page-main-left ol").append(`
                <li class="certain_buy">
                    <ul>
                        <li class="name"></li>
                        <li class="size"></li>
                        <li class="price"></li>
                        <li class="amount"></li>
                        <li class="total">$</li>
                    </ul>
                </li>`);
            let name = $(".item").eq(i).find(".name").html();
            let size = $(".item").eq(i).find(".size").html();
            let price = $(".item").eq(i).find(".price").html();
            let amount = $(".item").eq(i).find(".amount input").val();
            let total = $(".item").eq(i).find(".total").html();
            $(".second-page-main-left ol ul").eq(i).find(".name").html(`${name}`);
            $(".second-page-main-left ol ul").eq(i).find(".size").html(`${size}`);
            $(".second-page-main-left ol ul").eq(i).find(".price").html(`${price}`);
            $(".second-page-main-left ol ul").eq(i).find(".amount").html(`${amount}`);
            $(".second-page-main-left ol ul").eq(i).find(".total").html(`${total}`);
        }


    } else if (select_amount < $(".second-page-main-left ol").length) {
        for (i = 0; i <= $(".second-page-main-left ol") - select_amount.length; i++) {
            $(".second-page-main-left ol").eq(i).remove(".certain_buy");
        }

    };



    let width = $(window).width();
    console.log(width);
    if (width < 420) {
        $(".foot-main").css("display", "none");

        $(".wrapper footer a").css("display", "none");
        $("#flipbook").turn({
            width: 380,
            height: 500,
            elevation: 10,
            gradients: true,
            display: "single",
            page: 4
        });
    } else {
        $("#flipbook").turn({
            width: 950,
            height: 650,
            elevation: 50,
            gradients: true,
            page: 4
        });
    };
    $("#close-car").on("click", function () {
        $("#flipbook").toggle();
        $(".index-page").toggle();
    })
    $(window).on("resize", function () {
        let width = $(this).width();
        if (width < 420) {
            $(".foot-main").css("display", "none");
            $(".wrapper footer a").css("display", "none");
            $("#flipbook").turn({
                width: 380,
                height: 650,
                elevation: 50,
                gradients: true,
                display: "single"
            });

        } else {
            $("#flipbook").turn({
                width: 950,
                height: 650,
                elevation: 50,
                gradients: true,
                page: 4
            });
        };

    });


})