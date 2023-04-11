/*-------------member center------------------*/
const btn1 = document.querySelector('.login-button');
const input1 = document.querySelector('.login-input');
const closebtn = document.querySelector('.close');
const loginanimate = document.querySelector('.login-animate');
const forgotbtn = document.querySelector('.forgot');
const logforgot = document.querySelector('.login-forgot');
const logbtn = document.querySelector('#login');
const addbtn = document.querySelector('#add');
const addmembermail = document.querySelector('.add-member');
const addbackbtn = document.querySelector('#add-back-btn');
const add_member_data = document.querySelector('.member-add-data');
const adddata = document.querySelector('.member-add-data');
const writedatabtn = document.querySelector('#write-data-btn');
const writedata = document.querySelector('.member-data-add-content-member');
const writepsw = document.querySelector('.member-data-look-content-password-add');
const snpswbtn = document.querySelector('#send-psw-btn');
const firpg = document.querySelector('.first-page');
const memberCenter = document.querySelector('.member-center');
const foot = document.querySelector('footer');
const link = document.querySelector('.link');
const memberdata = document.querySelector('.member-data-look');
const memberdatacotn = document.querySelector('.member-data-look-content-member');
const memberdataout = document.querySelector('.member-data-look-content');
const linkbtn2 = document.querySelector('.link-btn2');
const memberdatapsw = document.querySelector('.member-data-look-content-password');
const fixpswbtn = document.querySelector('.member-data-look-content-password button');
const fixpsw = document.querySelector('.member-data-look-content-password-fix');
const log_out = document.querySelectorAll(".log-out")
const memberOrder = document.querySelector('.member-order');
const orderbtn = document.querySelector('.member-order-content button');
const orderdetail = document.querySelector('.member-order-content-detail');
const btnback = document.querySelector('#btn-back');
const btncolsedeial = document.querySelector('.close-detail');
const showdetail = document.querySelectorAll('.member-order-content button');
const detail = document.querySelectorAll('.member-order-content-detail');
const firpg_first = document.querySelector('.first-page-first');
const submission = document.querySelector('#sub-password');
const member_data = document.querySelector('.data-look-btn');
const all_btn = document.querySelectorAll('button');
const side_btn = document.querySelector('.password-fix-btn .button-main-6');
const side_btn_back = document.querySelector('.password-btn .button-notmain-6');
const next_page = document.querySelector('#next-page');
const edit_data = document.querySelector('#edit');
side_btn_back.addEventListener("click", function () {
    memberdata.style.display = 'none';
    memberCenter.style.display = 'block';
    memberdatacotn.style.display = 'block';
    memberdataout.style.display = 'block';
    memberdatapsw.style.display = 'none';

})
side_btn.addEventListener("click", function () {
    fixpsw.style.display = 'none';
    memberdatapsw.style.display = 'block';
})
let amount = 0;
for (i = 0; i < all_btn.length; i++) {
    all_btn[i].addEventListener("click", function () {

        if (this.parentElement.className === "data-look-btn") {
            let rewrite = this.parentElement.previousElementSibling.querySelectorAll("input");
            if (this.className === "button-main-6") {
                console.log(this.className);
                memberCenter.style.display = "block";
                this.closest(".member-data-look").style.display = "none";
            }
            else if (this.className === "button-main-6 .on") {

                edit_data.classList.remove(".on");
                next_page.classList.remove(".on");
                for (i = 1; i < rewrite.length; i++) {
                    rewrite[i].disabled = "disable";
                    if (rewrite[i].placeholder != rewrite[i].value) {
                        rewrite[i].value = rewrite[i].placeholder
                    }

                }

                edit_data.innerHTML = `<label for="">編輯會員資料</label>`;
                edit_data.previousElementSibling.innerHTML = `<label for="">回上一頁</label>`;

            }
            else if (this.className === "button-notmain-6") {
                console.log(this.className);
                edit_data.innerHTML = `<label for="">儲存</label>`;
                edit_data.previousElementSibling.innerHTML = `<label for="">放棄修改</label>`;
                edit_data.classList.toggle(".on");
                edit_data.previousElementSibling.classList.toggle(".on");
                for (i = 1; i < rewrite.length; i++) {
                    rewrite[i].disabled = "";
                }
            }
            else {
                console.log(this.className);
                edit_data.classList.remove(".on");
                next_page.classList.remove(".on");
                for (i = 1; i < rewrite.length; i++) {
                    rewrite[i].disabled = "disable";
                    if (rewrite[i].placeholder != rewrite[i].value) {
                        rewrite[i].placeholder = rewrite[i].value;
                    }
                }

                edit_data.innerHTML = `<label for="">編輯會員資料</label>`;
                edit_data.previousElementSibling.innerHTML = `<label for="">回上一頁</label>`;
            }
        } else if (this.parentElement.className === "member-data-side-button") {
            if (this.className === "button-main-4") {
                memberdatapsw.style.display = "none";
                memberdatacotn.style.display = "block";
            } else {
                memberdatapsw.style.display = "block";
                memberdatacotn.style.display = "none";
            }
        } else if (this.className === "watch-paw") {
            console.log("test");
            if (!amount) {
                this.style.backgroundImage = `url("../image/membercenter/EYE.png")`;
                this.parentElement.querySelector("#password").type = "text";
                amount = 1;
            } else {
                this.style.backgroundImage = `url("../image/membercenter/EYE_close.png")`;
                this.parentElement.querySelector("#password").type = "password";
                amount = 0;
            }


        }
    })
}
for (i = 0; i < link.querySelectorAll("button").length; i++) {
    link.querySelectorAll("button")[i].addEventListener("click", function () {
        let name = this.className;
        switch (name) {
            case "link-btn1":
                memberCenter.style.display = "none";
                memberdata.style.display = "block";
                break;
            case "link-btn2":
                memberCenter.style.display = "none";
                memberOrder.style.display = "block";
                break;
        }
    })
}

for (i = 0; i < showdetail.length; i++) {
    showdetail[i].addEventListener("click", function () {
        let showId = this.id;
        let blocks = document.querySelector(`[data-id="${showId}"]`);
        console.log(blocks.style.scrollHeight);
        if (blocks.classList.contains("-on")) {
            blocks.style.maxHeight = "0px";
            blocks.style.overflow = "hidden";
            blocks.classList.remove("-on");
            this.querySelector("img").style.transform = "rotate(0)";
        } else {
            blocks.style.maxHeight = "200px";
            blocks.style.overflow = "auto";
            blocks.classList.add("-on");
            this.querySelector("img").style.transform = "rotate(180deg)";

        }
    })
}
btn1.addEventListener('click', () => {
    btn1.parentElement.style.display = 'none';
    btn1.parentElement.nextElementSibling.style.display = 'block';
});
closebtn.addEventListener('click', () => {
    closebtn.parentElement.previousElementSibling.style.display = 'block';
    closebtn.parentElement.style.display = 'none';
});
addbackbtn.addEventListener('click', () => {
    addmembermail.style.display = 'none';
    btn1.style.display = 'block';
});
for (i = 0; i < log_out.length; i++) {
    log_out[i].addEventListener("click", function () {
        console.log(log_out);
        this.closest("section").style.display = "none";
        logforgot.style.display = "none";
        firpg.style.display = "block";
        firpg_first.style.display = "block";
        writedata.style.display = "none";

    })
}
logbtn.addEventListener('click', () => {
    firpg.style.display = 'none';
    input1.style.display = 'none';
    memberCenter.style.display = 'block';
});

writedatabtn.addEventListener('click', () => {
    writedata.style.display = 'block';
    writepsw.style.display = 'none';
});

forgotbtn.addEventListener('click', () => {
    logforgot.style.display = 'block';
    input1.style.display = 'none';
});
addbtn.addEventListener('click', function () {
    this.closest("section").style.display = 'none';
    input1.style.display = 'none';
    writepsw.style.display = 'block';
    add_member_data.style.display = 'block';
});


fixpswbtn.addEventListener('click', () => {
    fixpsw.style.display = 'block';
    memberdatapsw.style.display = 'none';
});
linkbtn2.addEventListener('click', () => {
    memberOrder.style.display = 'block';
    memberCenter.style.display = 'none';
    foot.style.top = '1235px';
});
orderbtn.addEventListener('click', () => {
    orderdetail.style.display = 'block';
});
btnback.addEventListener('click', () => {
    memberCenter.style.display = 'block';
    memberOrder.style.display = 'none';
    foot.style.top = '1000px';
});
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
})


