//轮播图
    let scrollimg = 1 ;//当前图片序号
    //控制序号在图片数范围内
    function checkScroll() {
        if (scrollimg < 1){
            scrollimg = 3;
        }else if(scrollimg > 3){
            scrollimg = 1;
        }
    }
    function scrolling() {
        //检查
        checkScroll();
        //获取元素
        let scrollImgIn = document.querySelector(".scroll-img-In");
        //获取宽度
        let scrollImgWidth = getComputedStyle(scrollImgIn).width ;
        scrollImgWidth = scrollImgWidth.replace("px","") ;
        scrollImgWidth = Number(scrollImgWidth) / 3 ;
        // console.log(scrollImgWidth);
        //移动图片条
        scrollImgIn.style.left = - scrollImgWidth * (scrollimg - 1) + "px"
        //重置滚动时间
        clearInterval(scrollTimer);
        scrollTimer = scrollAuto();
    }
    //左移图片
    function leftScroll() {
        scrollimg--;
        scrolling();
    }
    //右移图片
    function rightScroll() {
        scrollimg++;
        scrolling();
    } 
    //轮播图片
    function scrollAuto(){
        return setInterval(()=> {
            scrollimg++;
            scrolling();
        },3000)    
    }
    let scrollTimer = scrollAuto()

    