//轮播图
    let scrollimg = 1 ;//当前图片序号
    //获取元素
    let scrollImgIn = document.querySelector(".scroll-img-In");
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
        //设置页码
        document.getElementById("scroll1").style.color = "rgb(4, 130, 144)";
        document.getElementById("scroll2").style.color = "rgb(4, 130, 144)";
        document.getElementById("scroll3").style.color = "rgb(4, 130, 144)";
        document.getElementById("scroll" + scrollimg).style.color = "white";
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
    //点击页码
    document.querySelector('#scroll1').addEventListener('click',()=>{
        scrollimg = 1 ;
        scrolling();
    })
    document.querySelector('#scroll2').addEventListener('click',()=>{
        scrollimg = 2 ;
        scrolling();
    })
    document.querySelector('#scroll3').addEventListener('click',()=>{
        scrollimg = 3 ;
        scrolling();
    })
    //轮播图片
    function scrollAuto(){
        return setInterval(()=> {
            scrollimg++;
            scrolling();
        },3000)    
    }
    let scrollTimer = scrollAuto()
//功能按钮
    //获取元素
    let hitBox = document.getElementById("hitBox")
    let ejFaqWin = document.getElementById("ejFaqWin");
    let ejMcWin = document.getElementById("ejMcWin");
    let ejUsWin = document.getElementById("ejUsWin");
    let ejJnusWin = document.getElementById("ejJnusWin");
    //弹窗1常见问题
    document.querySelector('#btn1').addEventListener('click',()=>{
        ejFaq()
    })
    document.querySelector('#Faq').addEventListener('click',()=>{
        ejFaq()
    })
    function ejFaq() {
        ejClr();
        ejFaqWin.style.display = "block" ;
        hitBox.style.display = "block";
    }
    //弹窗2相关软件
    document.querySelector('#btn2').addEventListener('click',()=>{
        ejMc()
    })
    function ejMc() {
        ejClr();
        ejMcWin.style.display = "block" ;
        hitBox.style.display = "block";
    }
    //弹窗3关于我们
    document.querySelector('#btn3').addEventListener('click',()=>{
        ejUs()
    })
    function ejUs() {
        ejClr();
        ejUsWin.style.display = "block" ;
        hitBox.style.display = "block";
    }
    //弹窗4加入我们
    document.querySelector('#btn4').addEventListener('click',()=>{
        ejJnus()
    })
    function ejJnus() {
        ejClr();
        ejJnusWin.style.display = "block" ;
        hitBox.style.display = "block";
    }
    //关闭弹窗
    hitBox.addEventListener('click',(hitBoxClk) =>{
        if(hitBoxClk.target === hitBox){
            ejClr()
        }
    })
function ejClr() {
    ejFaqWin.style.display = "none" ;
    ejMcWin.style.display = "none" ;
    ejUsWin.style.display = "none" ;
    ejJnusWin.style.display = "none" ;
    hitBox.style.display = "none" ;
    ej = false
}