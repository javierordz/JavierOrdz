var page = ["splash", "portfolio"];
var state = 0;

$(document).on("click", "#switch-view", function (event) {
    event.preventDefault();

    $(`#${page[state]}`).addClass("hidden-element");
    state ^= 1;

    if (state) {$("#switchBtn").html("<i class='fas fa-arrow-left'></i><a class='linkText' id='switch-view'>ABOUT</a><i class='fas fa-arrow-left'></i>");
    } else {$("#switchBtn").html("<i class='fas fa-arrow-right'></i><a class='linkText' id='switch-view'>PORTFOLIO</a><i class='fas fa-arrow-right'></i>");}

    $(`#${page[state]}`).removeClass("hidden-element");
})