function abrir(){
    var mobileNav = document.querySelector(".mobile-nav");
    const mobileContainer = document.querySelector(".mobile-nav-container");
    const mobileMainNav = document.querySelector(".mobile-main-nav");
    const links = document.querySelectorAll(".mobile-main-nav li");
    const logo = document.querySelector(".logo");
   // mobileNav.addEventListener("click", () => {
        mobileNav.classList.toggle("open");
        mobileContainer.classList.toggle("openContainer");
        mobileMainNav.classList.toggle("openMain");
        logo.classList.toggle("logoDim");
        links.forEach(link => {
            link.classList.toggle("fade");
        })
   // })
}
//var mobileMov = setInterval(moverDireita,2000);
//clearInverval(mobileMov);
function moverDireita(){

    const slideContainer = document.querySelector(".section-photos-mobile .images-showcase");
    /*const ionicon =  document.querySelector(".section-photos-mobile ion-icon");
    ionicon.addEventListener("stop", () =>{
        clearInterval(mobileMov);
    })*/
    var margin = slideContainer.style.marginLeft;
    if(margin == "-100vw"){
        slideContainer.style.marginLeft = "-200vw";
    }
    else if(margin == "-200vw"){
        slideContainer.style.marginLeft = "-300vw";
    }
    else if(margin == "-300vw"){
        slideContainer.style.marginLeft = "-400vw";
    }
    else if(margin == "-400vw"){
        slideContainer.style.marginLeft = "-500vw";
    }
    else if(margin == "-500vw"){
        slideContainer.style.marginLeft = "-600vw";
    }
    else if(margin == "-600vw"){
        slideContainer.style.marginLeft = "-700vw";
    }
    else if(margin == "-700px"){
        slideContainer.style.marginLeft = 0;
    }
    else{
        slideContainer.style.marginLeft = "-100vw";
    }
}

function moverEsquerda(){
    const slideContainer = document.querySelector(".section-photos-mobile .images-showcase");
    var margin = slideContainer.style.marginLeft;
    if (margin == "-100vw"){
        slideContainer.style.marginLeft="0px";
    }
    else if(margin == "-200vw"){
        slideContainer.style.marginLeft = "-100vw";
    }
    else if(margin == "-300vw"){
        slideContainer.style.marginLeft = "-200vw";
    }
    else if(margin == "-400vw"){
        slideContainer.style.marginLeft = "-300vw";
    }
    else if(margin == "-500vw"){
        slideContainer.style.marginLeft = "-400vw";
    }
    else if(margin == "-600vw"){
        slideContainer.style.marginLeft = "-500vw";
    }
    else if(margin == "-700vw"){
        slideContainer.style.marginLeft = "-600vw";
    }
    else{
        slideContainer.style.marginLeft = "-700vw";
    }
}


/*function abrir(){
    var mobileBox = document.querySelector(".mobile-nav").style;
    var mobileMainNav = document.querySelector(".mobile-main-nav").style;
    var mobileMainNavCont = document.querySelector(".mobile-nav-container").style;
    var logo = document.querySelector(".logo").style;
    mobileBox.margin="0 auto";
    mobileBox.marginTop="20px";
    /*mobileMainNav.display="flex";
    mobileMainNav.width= "100%";
    mobileMainNav.justifyContent="space-between";*/
    /*mobileMainNavCont.margin="0 auto";
    mobileMainNavCont.width="70%";*/
    /*mobileBox.width="60px";
    logo.width="60px";
    logo.height="60px";
    logo.position="absolute";

}*/

/* 
function fechar(){
    var mobileBox = document.getElementById("mobile-nav").style;
    var mobileMainNav = document.getElementById("mobile-main-nav").style;
    var logo = document.querySelector(".logo").style;

}
   
    function arrasta(){
        --------------------------
        pegar com nth no css
        --------------------------
        var mobileBox = document.getElementById("mobile-nav").style;
        var mobileMainNav = document.getElementById("mobile-main-nav").style;
        var mobileMainNavc = document.getElementById("mobile-nav-container").style;
        var icon1 = document.getElementById("icon-1").style;
        var icon1c = document.getElementById("icon-1-c").style;
        var icon2 = document.getElementById("icon-2").style;
        var icon2c = document.getElementById("icon-2-c").style;
        var icon3 = document.getElementById("icon-3").style;
        var icon3c = document.getElementById("icon-3-c").style;
        var icon4 = document.getElementById("icon-4").style;
        var icon4c = document.getElementById("icon-4-c").style;
        if (mobileBox.marginRight!="5px"){
            mobileMainNav.position="unset";
            mobileMainNav.alignItems="center";
            mobileMainNavc.
            //icon1c.position="relative";
           // icon2c.position="unset";
            //icon3c.position="unset";
            //icon4c.position="unset";
        }
        else{
            mobileMainNav.background="blue";
            icon1c.position="absolute";
            icon2c.position="absolute";
            icon3c.position="absolute";
            icon4c.position="absolute";
        }


    }
        /*
    function volta(){

        var mobileBox = document.getElementById("mobile-nav").style;
        var mobileMainNav = document.getElementById("mobile-main-nav").style;
            if(mobileMainNav.right=="-72%"){
            mobileMainNav.left="-13%";
            mobileMainNav.right="-72%";
            mobileBox.marginRight="auto";
        }
    }
*/
/*
    function openIcons(){
        var icon1 = document.getElementById("icon-1").style;
        var icon1c = document.getElementById("icon-1-c").style;
        var icon2 = document.getElementById("icon-2").style;
        var icon2c = document.getElementById("icon-2-c").style;
        var icon3 = document.getElementById("icon-3").style;
        var icon3c = document.getElementById("icon-3-c").style;
        var icon4 = document.getElementById("icon-4").style;
        var icon4c = document.getElementById("icon-4-c").style;
    }
/*
        if (icon1c.position!="absolute"){
            //setTimeout(function openI1c(){},500);
            icon1c.left="40%";icon1.opacity="1";
        } else if(icon1.opacity!="1"){
            icon1c.left="0%";icon1.opacity="0";
        }
        if (icon2c.position!="absolute"){
            setTimeout(function openI2(){icon2c.left="30%",icon2.opacity="1"},1000);
        }
        if (icon3c.position!="absolute"){
            setTimeout(function openI3(){icon3c.left="20%",icon3.opacity="1"},1500);}
        if (icon4c.position!="absolute"){
            setTimeout(function openI4(){icon4c.left="10%",icon4.opacity="1"},2000);
        }
    }
/*
    function closeIcons(){
        var icon1 = document.getElementById("icon-1").style;
        var icon1c = document.getElementById("icon-1-c").style;
        var icon2 = document.getElementById("icon-2").style;
        var icon2c = document.getElementById("icon-2-c").style;
        var icon3 = document.getElementById("icon-3").style;
        var icon3c = document.getElementById("icon-3-c").style;
        var icon4 = document.getElementById("icon-4").style;
        var icon4c = document.getElementById("icon-4-c").style;

        if (icon1c.display!="40%4"){
            setTimeout(function openI1c(){icon1c.left="0";icon1.opacity="0";},0);
            
        } 
        
        if (icon2.opacity=="1"){
            setTimeout(function openI2(){icon2c.left="0",icon2.opacity="0"},1000);
        }

        if (icon3.opacity=="1"){
            setTimeout(function openI3(){icon3c.left="0",icon3.opacity="0"},1500);
        }

        if (icon4.opacity=="1"){
            setTimeout(function openI4(){icon4c.left="0",icon4.opacity="0"},200);
        }
    }
    */