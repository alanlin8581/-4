$("button").click(function(){
    $("button").text("双击");
});

$("button").dblclick(function(){
    $(".image2").show("双击");
});

$(".image2").mouseenter(function(){
    $(".text1").toggle("双击");
});

$(".image2").mouseleave(function(){
    $(".text2").show("点击标题");
});

$(".title").click(function(){
    $("div").hide("");
    $(".image3").show("");
    $(".text3").show("");
});

$( ".text3" ).click(function() {
    location.reload();
});


