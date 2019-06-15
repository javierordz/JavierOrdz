$("#profile-mini").on("click", function () {
    $("#profile-mini").hide("slow", "swing");
    $("#portfolio-mini").hide("slow", "swing");
    $("#bone").animate({ left: "+=50%", opacity: "0" }, "slow", "swing");
    $("#name").animate({ left: "+=50px" }, "slow", "swing");
    $("#center-block").animate({ right: "0", width: "50px" }, "slow", "swing");
    $("#profile").show().animate({ left: "0", opacity: "1" }, "slow", "swing");
    $("#return-right").show().animate({ opacity: "1"}, "slow", "swing");
})

$("#portfolio-mini").on("click", function () {
    $("#profile-mini").hide("slow", "swing");
    $("#portfolio-mini").hide("slow", "swing");
    $("#bone").animate({ left: "-=50%", opacity: "0" }, "slow", "swing");
    $("#center-block").animate({ width: "50px" }, "slow", "swing");
    $("#portfolio").css("display", "inline-block").animate({ right: "0", opacity: "1" }, "slow", "swing");
    $("#return-left").show().animate({ opacity: "1"}, "slow", "swing");
})

$(".return-home").on("click", function () {
    $("#profile-mini").show("slow", "swing");
    $("#portfolio-mini").show("slow", "swing");
    $("#bone").animate({ left: "50%", opacity: "1" }, "slow", "swing");
    $("#name").animate({ left: "0px" }, "slow", "swing");
    $("#center-block").animate({ left: "0", width: "50%" }, "slow", "swing");
    $("#profile").animate({ left: "0", opacity: "0" }, "slow", "swing");
    $("#portfolio").animate({ right: "0", opacity: "0" }, "slow", "swing")
    $("#return-left").hide();
    $("#return-right").hide();
    setTimeout(function(){
        $("#center-block").removeAttr("style");
        $("#portfolio").hide();
        $("#profile").hide();
    }, 1000);
    
})

// OPENING ANIMATION //
window.onload = function () {
    
}