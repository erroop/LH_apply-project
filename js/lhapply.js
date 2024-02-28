$(function(){
    // Navigation Menu color mouseover / leave ======================
    const MenuWrap_Item = $(".MenuWrap li");
    const Item_color = (index) => {
        MenuWrap_Item.eq(index).mouseover(function(){
            MenuWrap_Item.eq(0).removeClass("MenuItem-apply");
        }).mouseleave(function(){
            MenuWrap_Item.eq(0).addClass("MenuItem-apply");
        })
    }

    Item_color(1);
    Item_color(2);
    Item_color(3);

    // MenuApplyItem click =========================
    const MainApplyList_Item = $(".MainApplyList li")
    
    //first commit--------
    MainApplyList_Item.eq(0).addClass("on")
    MainApplyList_Item.eq(0).find("a").addClass("on")

    MainApplyList_Item.click(function(){
        MainApplyList_Item.removeClass("on")
        $(this).prev().addClass("on")
        $(this).addClass("on")
        MainApplyList_Item.find("a").removeClass("on")
       $(this).find("a").addClass("on")
    })
})



