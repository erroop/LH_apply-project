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
    const MainApplyImgContainer = $(".MainApplyImgContainer .MainApplyImg-inner")
    
    //first commit--------
    MainApplyList_Item.eq(0).addClass("on")
    MainApplyList_Item.eq(0).find("a").addClass("on")

    MainApplyList_Item.click(function(){
        MainApplyList_Item.removeClass("on")
        $(this).prev().addClass("on")
        $(this).addClass("on")
        MainApplyList_Item.find("a").removeClass("on")
       $(this).find("a").addClass("on")
       if($(this).parent().children()[0].children[0].className === "MainApplyItem-link on"){
        MainApplyImgContainer.css({display : "none"})
        MainApplyImgContainer.eq(0).css({display:"block"})
       }
       else if($(this).parent().children()[1].children[0].className === "MainApplyItem-link on"){
        MainApplyImgContainer.css({display : "none"})
        MainApplyImgContainer.eq(1).css({display:"block"})
       }else if($(this).parent().children()[2].children[0].className === "MainApplyItem-link on"){
        MainApplyImgContainer.css({display : "none"})
        MainApplyImgContainer.eq(2).css({display:"block"})
       }else if($(this).parent().children()[3].children[0].className === "MainApplyItem-link on"){
        MainApplyImgContainer.css({display : "none"})
        MainApplyImgContainer.eq(3).css({display:"block"})
       }else if($(this).parent().children()[4].children[0].className === "MainApplyItem-link on"){
        MainApplyImgContainer.css({display : "none"})
        MainApplyImgContainer.eq(4).css({display:"block"})
       }
    })

    //Notice title click ================================
    const Title_list = $(".Notice-title-list li");
    const info_title = $(".Notice-title-info a");
    const menu_list = $(".Notice-menu .Notice-menu-list-container");

    console.log(info_title.text())
    //first commit---------------------------
    Title_list.eq(0).addClass("on")

    Title_list.click(function(){
        Title_list.removeClass("on")
        $(this).addClass("on")

        if($(this).text() === "공고문"){
            info_title.html("전체보기 <span></span>")
            menu_list.eq(0).css({display : "block"})
            menu_list.eq(1).css({display : "none"})
        }
        else if($(this).text() === "공지사항"){
            info_title.html("더보기 <span></span>")
            menu_list.eq(0).css({display : "none"})
            menu_list.eq(1).css({display : "block"})
        }
    })


})



