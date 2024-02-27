$(function(){
    
    // MainWrapList mouseover 
    const MainWrapItem = $(".MainWrapItem a");
    MainWrapItem.mouseover(function(){
        if($(this)[0].className === "MainWrapItemLink-appy"){
            $(this).find(".MainWrapItem-link em").text("청약");
        }
        else if($(this)[0].className === "MainWrapItemLink-pre"){
            $(this).find(".MainWrapItem-link em").text("사전청약");
        }
        else if($(this)[0].className === "MainWrapItemLink-land"){
            $(this).find(".MainWrapItem-link em").text("부동산맵");
        }
        else if($(this)[0].className === "MainWrapItemLink-mbr"){
            $(this).find(".MainWrapItem-link em").text("고객서비스");
        }
    }).mouseleave(function(){
        $(this).find(".MainWrapItem-link em").text("바로가기");
    })
})