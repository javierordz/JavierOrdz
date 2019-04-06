var page = ["splash", "portfolio"];
var state = 0;

$(document).on("click", ".switchBtn", function (event) {
    event.preventDefault();
    $(`#${page[state]}`).addClass("hidden-element");
    state ^= 1;

    if (state) {
        $(".switchBtn").html("<i class='fas fa-arrow-left'></i><a class='linkText' class='switch-view'>ABOUT</a><i class='fas fa-arrow-left'></i>");
    } else {
        $(".switchBtn").html("<i class='fas fa-arrow-right'></i><a class='linkText' class='switch-view'>PORTFOLIO</a><i class='fas fa-arrow-right'></i>");
    }
    $(`#${page[state]}`).removeClass("hidden-element");
})

$(document).on("click", ".switchBtn-alt", function (event) {
    event.preventDefault();
    $(`#${page[state]}`).addClass("hidden-element");
    state ^= 1;

    if (state) {
        $(".switchBtn-alt").html("<i class='fas fa-arrow-left'>&nbsp;&nbsp;</i><a>ABOUT</a>&nbsp;&nbsp;<i class='fas fa-arrow-left'></i>");
    } else {
        $(".switchBtn-alt").html("<i class='fas fa-arrow-right'>&nbsp;&nbsp;</i><a>PORTFOLIO</a>&nbsp;&nbsp;<i class='fas fa-arrow-right'></i>");
    }
    $(`#${page[state]}`).removeClass("hidden-element");
})