


const showmorebtn1 = document.querySelector('#item1');
const showprice1 = document.querySelector('#infor1');
const showbuy1 = document.querySelector('#bottom1');
showmorebtn1.addEventListener('click', () => {
    showprice1.style.opacity = '1';
    showbuy1.style.opacity = '1';
});

const showmorebtn2 = document.querySelector('#item2');
const showprice2 = document.querySelector('#infor2');
const showbuy2 = document.querySelector('#bottom2');
showmorebtn2.addEventListener('click', () => {
    showprice2.style.opacity = '1';
    showbuy2.style.opacity = '1';
});

const showmorebtn3 = document.querySelector('#item3');
const showprice3 = document.querySelector('#infor3');
const showbuy3 = document.querySelector('#bottom3');
showmorebtn3.addEventListener('click', () => {
    showprice3.style.opacity = '1';
    showbuy3.style.opacity = '1';
});

const showmorebtn4 = document.querySelector('#item4');
const showprice4 = document.querySelector('#infor4');
const showbuy4 = document.querySelector('#bottom4');
showmorebtn4.addEventListener('click', () => {
    showprice4.style.opacity = '1';
    showbuy4.style.opacity = '1';
});

const showmorebtn5 = document.querySelector('#item5');
const showprice5 = document.querySelector('#infor5');
const showbuy5 = document.querySelector('#bottom5');
showmorebtn5.addEventListener('click', () => {
    showprice5.style.opacity = '1';
    showbuy5.style.opacity = '1';
});
const showmorebtn6 = document.querySelector('#item6');
const showprice6 = document.querySelector('#infor6');
const showbuy6 = document.querySelector('#bottom6');
showmorebtn6.addEventListener('click', () => {
    showprice6.style.opacity = '1';
    showbuy6.style.opacity = '1';
});

$(function(){
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
})