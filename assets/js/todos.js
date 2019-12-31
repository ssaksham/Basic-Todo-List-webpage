$("ul").on("click","li",function(){
    $(this).toggleClass("completed");
});
$("ul").on("click","span",function(event){
$(this).parent().fadeOut(500,function(){
    $(this).remove();
})
event.stopPropagation();
});

$("input").keypress(function(event) { 
    if(event.which==13){
$("#container ul").append("<li><span><i class=\"fas fa-trash-alt\"></i></span>"+$(this).val()+"</li>");
$(this).val("");
}
});
// $("ul").on("mouseenter","li",function(){
//     $(this).children("span").css("display","inline-block");
//     $(this).children("span").animate(5000,{
//         width:boxWidth
//     });


// })
// $("ul").on("mouseleave","li",function(){    
// $(this).children("span").css("display","none");
// })

$("h1 i").on("click",function(){
$("input").fadeToggle();
});
