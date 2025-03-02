const checkthisx = document.querySelector(".checkthisx");

if (window.location.href.includes("home")) {
  
    function waitForElm(selector) {
      return new Promise(resolve => {
          if (document.querySelector(selector)) {
              return resolve(document.querySelector(selector));
          }
    
          const observer = new MutationObserver(mutations => {
              if (document.querySelector(selector)) {
                  observer.disconnect();
                  resolve(document.querySelector(selector));
              }
          });
    
          observer.observe(document.body, {
              childList: true,
              subtree: true
          });
      });
    }
    
    

    function initslidersandothers() {
        /*sliderlar*/
        if (!document.querySelector("checkthisx")) {
            waitForElm('.home-top-games').then((elm) => {
        
                const newHTMLContent = `<div class="home-top-casino" id="external-13aa">
                <div class="top-section banner">
                    <div class="row-title">Trendler</div>
                    <div class="slide-bars">
                        <div class="slide-arrow-box left">
                          <i class="sb-icon sb-arrow-right rotate"></i>
                        </div>
                        <div class="slide-arrow-box right">
                          <i class="sb-icon sb-arrow-right"></i>
                        </div>
                      </div>
                </div>
              
              
                <div class="home-top-casino-items">
                    <div class="slider-container">
                        <div class="container">
                            <div class="container-box" id="e13aa1" style="background-image: url('https://bp-file-managers.s3.eu-central-1.amazonaws.com/gazinom/gatesofolympus1000_VIP.webp');">
                                
                            </div>
                            <div class="container-box" id="e13aa2" style="background-image: url('https://bp-file-managers.s3.eu-central-1.amazonaws.com/gazinom/pirots3_VIP.webp');">
                            </div>
                            <div class="container-box" id="e13aa3"style="background-image: url('https://bp-file-managers.s3.eu-central-1.amazonaws.com/gazinom/3.webp');">
                                
                            </div>
                            <div class="container-box" id="e13aa4"style="background-image: url('https://bp-file-managers.s3.eu-central-1.amazonaws.com/gazinom/thegrandshow_VIP.webp');">
                               
                            </div>
                            <div class="container-box" id="e13aa5"style="background-image: url('https://bp-file-managers.s3.eu-central-1.amazonaws.com/gazinom/megafireblazebigcircus_VIP.webp');">
                                
                            </div>
                            <div class="container-box" id="e13aa6"style="background-image: url('https://bp-file-managers.s3.eu-central-1.amazonaws.com/gazinom/bookoframagic_VIP.webp');">
                                
                            </div>
                            <div class="container-box" id="e13aa7"style="background-image: url('https://bp-file-managers.s3.eu-central-1.amazonaws.com/gazinom/minadeorogoldenedition_VIP.webp');">
                                
                            </div>
                            <div class="container-box" id="e13aa8"style="background-image: url('https://bp-file-managers.s3.eu-central-1.amazonaws.com/gazinom/shiningcrown_VIP.webp');">
                                
                            </div>
                            <div class="container-box" id="e13aa9"style="background-image: url('https://bp-file-managers.s3.eu-central-1.amazonaws.com/gazinom/xwayshoarder2_VIP.webp');">
                                
                            </div>
                            <div class="container-box" id="e13aa10"style="background-image: url('https://bp-file-managers.s3.eu-central-1.amazonaws.com/gazinom/alohakingelvis_VIP.webp');">
                               
                            </div>
                            <div class="container-box" id="e13aa11"style="background-image: url('https://bp-file-managers.s3.eu-central-1.amazonaws.com/gazinom/extrachilli_VIP.webp');">
                                
                            </div>
                            <div class="container-box" id="e13aa12"style="background-image: url('https://bp-file-managers.s3.eu-central-1.amazonaws.com/gazinom/15coinsgrandgoldedition_VIP.webp');">
                                
                            </div><div class="container-box" id="e13aa13"style="background-image: url('https://bp-file-managers.s3.eu-central-1.amazonaws.com/gazinom/gigamatchfruit_VIP.webp');">
                                
                            </div>
                            <div class="container-box" id="e13aa14"style="background-image: url('https://bp-file-managers.s3.eu-central-1.amazonaws.com/gazinom/thetumbles_VIP.webp');">
                                
                            </div>
                            <div class="container-box" id="e13aa15"style="background-image: url('https://bp-file-managers.s3.eu-central-1.amazonaws.com/gazinom/starburst_VIP.webp');">
                                
                            </div>
                            <div class="container-box" id="e13aa16"style="background-image: url('https://bp-file-managers.s3.eu-central-1.amazonaws.com/gazinom/esqueletoexplosivo3_VIP.webp');">
                               
                            </div>
                            <div class="container-box" id="e13aa17"style="background-image: url('https://bp-file-managers.s3.eu-central-1.amazonaws.com/gazinom/slingostarbust_VIP.webp');">
                                
                            </div>
                            <div class="container-box" id="e13aa18"style="background-image: url('https://bp-file-managers.s3.eu-central-1.amazonaws.com/gazinom/moonspell_VIP.webp');">
                                
                            </div>
                        </div>
                        </div>
                </div>
              
                <style>
              
                    main.sb{
                        padding: 0 10%;
                    }
                    #external-13aa >div> .slider-container {
                        width: 100%;
                        height: 30vh;
                        overflow: hidden;
                      }
                      
                      #external-13aa > div>.slider-container .container {
                        width: 100%;
                        height: 100%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        flex-flow: column wrap;
                      }
                      
                      #external-13aa >div .container .container-box {
                        width: 15%;
                        height: 100%;
                        margin-right: 2%;
                        background: rgb(52, 152, 219);
                        color: rgb(41, 128, 185);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        border-radius:10px;
                        background-position: center;background-size: cover;background-color: white;background-repeat: no-repeat;
                      }
              
              
                </style>
              
              
                
              </div>
              
              <div class="home-top-casino" id="external-12aa">
                <div class="top-section banner">
                    <div class="row-title">Mega Jackpotlar</div>
                    <div class="slide-bars">
                        <div class="slide-arrow-box left">
                          <i class="sb-icon sb-arrow-right rotate"></i>
                        </div>
                        <div class="slide-arrow-box right">
                          <i class="sb-icon sb-arrow-right"></i>
                        </div>
                      </div>
                </div>
              
              
                <div class="home-top-casino-items">
                    <div class="slider-container">
                        <div class="container">
                            <div class="container-box" id="e12aa1"style="background-image: url('https://bp-file-managers.s3.eu-central-1.amazonaws.com/gazinom/ageofthegodscashcollect_JACKPOT.webp');">
                                
                            </div>
                            <div class="container-box" id="e12aa2"style="background-image: url('https://bp-file-managers.s3.eu-central-1.amazonaws.com/gazinom/ageofgodsstorm_JACKPOT.webp');">
                            </div>
                            <div class="container-box" id="e12aa3"style="background-image: url('https://bp-file-managers.s3.eu-central-1.amazonaws.com/gazinom/khonsugodofmoonmegafireblazepowerplayjackpot_JACKPOT.webp');">
                                
                            </div>
                            <div class="container-box" id="e12aa4"style="background-image: url('https://bp-file-managers.s3.eu-central-1.amazonaws.com/gazinom/ageofthegodswheelsofolympus_JACKPOT.webp');">
                               
                            </div>
                            <div class="container-box" id="e12aa5"style="background-image: url('https://bp-file-managers.s3.eu-central-1.amazonaws.com/gazinom/fireblazebluewizardpowerplayjackpot_JACKPOT.webp');">
                                
                            </div>
                            <div class="container-box" id="e12aa6"style="background-image: url('https://bp-file-managers.s3.eu-central-1.amazonaws.com/gazinom/ageofthegodsgodofstormsiii_JACKPOT.webp');">
                                
                            </div>
                            <div class="container-box" id="e12aa7"style="background-image: url('https://bp-file-managers.s3.eu-central-1.amazonaws.com/gazinom/powerplaybookofkings_JACKPOT.webp');">
                                
                            </div>
                            <div class="container-box" id="e12aa8"style="background-image: url('https://bp-file-managers.s3.eu-central-1.amazonaws.com/gazinom/hitbargoldpowerplay_JACKPOT.webp');">
                                
                            </div>
                            <div class="container-box" id="e12aa9"style="background-image: url('https://bp-file-managers.s3.eu-central-1.amazonaws.com/gazinom/jackpot-giant_JACKPOT.webp');">
                                
                            </div>
                            <div class="container-box" id="e12aa10"style="background-image: url('https://bp-file-managers.s3.eu-central-1.amazonaws.com/gazinom/pharaohstreasure_JACKPOT.webp');">
                               
                            </div>
                            <div class="container-box" id="e12aa11"style="background-image: url('https://bp-file-managers.s3.eu-central-1.amazonaws.com/gazinom/ageofthegodskingofolympusfireblazextreme_JACKPOT.webp');">
                                
                            </div>
                            <div class="container-box" id="e12aa12"style="background-image: url('https://bp-file-managers.s3.eu-central-1.amazonaws.com/gazinom/ageofgodshelios_JACKPOT.webp');">
                                
                            </div>
                                
                           
                        </div>
                        </div>
                </div>
              
                <style>
              
              
                    #external-12aa >div> .slider-container {
                        width: 100%;
                        height: 30vh;
                        overflow: hidden;
                      }
                      
                      #external-12aa > div>.slider-container .container {
                        width: 100%;
                        height: 100%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        flex-flow: column wrap;
                      }
                      
                      #external-12aa >div .container .container-box {
                        width: 15%;
                        height: 100%;
                        margin-right: 2%;
                        background: rgb(52, 152, 219);
                        color: rgb(41, 128, 185);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        border-radius:10px;
                        background-position: center;background-size: cover;background-color: white;background-repeat: no-repeat;
              
                      }
              
                      
              
              
                </style>
              
              
                
              </div>
              
              <div class="home-top-casino" id="external-14aa">
                <div class="top-section banner">
                    <div class="row-title">Pragmatic Play</div>
                    <div class="slide-bars">
                        <div class="slide-arrow-box left">
                          <i class="sb-icon sb-arrow-right rotate"></i>
                        </div>
                        <div class="slide-arrow-box right">
                          <i class="sb-icon sb-arrow-right"></i>
                        </div>
                      </div>
                </div>
              
              
                <div class="home-top-casino-items">
                    <div class="slider-container">
                        <div class="container">
                              <div class="container-box" id="e14aa1"style="background-image: url('https://bp-file-managers.s3.eu-central-1.amazonaws.com/gazinom/bigbassvegasdoubledowndeluxe_VIP.webp');">
                                
                            </div>
                            <div class="container-box" id="e14aa2"style="background-image: url('https://bp-file-managers.s3.eu-central-1.amazonaws.com/gazinom/sugarrush1000_VIP.webp');">
                            </div>
                            <div class="container-box" id="e14aa3"style="background-image: url('https://bp-file-managers.s3.eu-central-1.amazonaws.com/gazinom/bigbasssplash_VIP.webp');">
                                
                            </div>
                            <div class="container-box" id="e14aa4"style="background-image: url('https://bp-file-managers.s3.eu-central-1.amazonaws.com/gazinom/sweetbonanza1000_VIP.webp');">
                               
                            </div>
                            <div class="container-box" id="e14aa5"style="background-image: url('https://bp-file-managers.s3.eu-central-1.amazonaws.com/gazinom/starlightprincess1000_VIP.webp');">
                                
                            </div>
                            <div class="container-box" id="e14aa6"style="background-image: url('https://bp-file-managers.s3.eu-central-1.amazonaws.com/gazinom/bbsecretsofthegoldenlake_VIP.webp');">
                                
                            </div>
                            <div class="container-box" id="e14aa7"style="background-image: url('https://bp-file-managers.s3.eu-central-1.amazonaws.com/gazinom/bigbassxmasxtreme_VIP.webp');">
                                
                            </div>
                            <div class="container-box" id="e14aa8"style="background-image: url('https://bp-file-managers.s3.eu-central-1.amazonaws.com/gazinom/wildwildpearls_VIP.webp');">
                                
                            </div>
                            <div class="container-box" id="e14aa9"style="background-image: url('https://bp-file-managers.s3.eu-central-1.amazonaws.com/gazinom/zeusvshades_VIP.webp');">
                                
                            </div>
                            <div class="container-box" id="e14aa10"style="background-image: url('https://bp-file-managers.s3.eu-central-1.amazonaws.com/gazinom/floatingdragonyearofthesnake_VIP.webp');">
                               
                            </div>
                            <div class="container-box" id="e14aa11"style="background-image: url('https://bp-file-managers.s3.eu-central-1.amazonaws.com/gazinom/chestsofcaishen_VIP.webp');">
                                
                            </div>
                            <div class="container-box" id="e14aa12"style="background-image: url('https://bp-file-managers.s3.eu-central-1.amazonaws.com/gazinom/chestsofcaishen_VIP.webp');">
                                
                                
                            </div>
                                
                           
                        </div>
                        </div>
                </div>
              
                <style>
              
              
                    #external-14aa >div> .slider-container {
                        width: 100%;
                        height: 30vh;
                        overflow: hidden;
                      }
                      
                      #external-14aa > div>.slider-container .container {
                        width: 100%;
                        height: 100%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        flex-flow: column wrap;
                      }
                      
                      #external-14aa >div .container .container-box {
                        width: 15%;
                        height: 100%;
                        margin-right: 2%;
                        background: rgb(52, 152, 219);
                        color: rgb(41, 128, 185);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        border-radius:10px;
                        background-position: center;background-size: cover;background-color: white;background-repeat: no-repeat;
              
                      }
              
                      
              
              
                </style>
              
              
                
              </div>
              
              
              
              <div class="home-top-casino" id="external-11aa">
                <div class="top-section banner">
                    <div class="row-title">Özel ve Öne Çıkanlar</div>
                    <div class="slide-bars">
                        <div class="slide-arrow-box left">
                          <i class="sb-icon sb-arrow-right rotate"></i>
                        </div>
                        <div class="slide-arrow-box right">
                          <i class="sb-icon sb-arrow-right"></i>
                        </div>
                      </div>
                </div>
              
              
                <div class="home-top-casino-items">
                    <div class="slider-container">
                        <div class="container">
                            <div class="container-box" id="e11aa1"style="background-image: url('https://bp-file-managers.s3.eu-central-1.amazonaws.com/gazinom/madblast_exclusive.webp');">
                                
                            </div>
                            <div class="container-box" id="e11aa2"style="background-image: url('https://bp-file-managers.s3.eu-central-1.amazonaws.com/gazinom/strengthofhercules_exclusive.webp');">
                            </div>
                            <div class="container-box" id="e11aa3"style="background-image: url('https://bp-file-managers.s3.eu-central-1.amazonaws.com/gazinom/tombstoneslaughterelgordosrevenge_exclusive.webp');">
                                
                            </div>
                            <div class="container-box" id="e11aa4"style="background-image: url('https://bp-file-managers.s3.eu-central-1.amazonaws.com/gazinom/tombstoneslaughterelgordosrevenge_exclusive.webp');">
                               
                            </div>
                            <div class="container-box" id="e11aa5"style="background-image: url('https://bp-file-managers.s3.eu-central-1.amazonaws.com/gazinom/infernus_exclusive.webp');">
                                
                            </div>
                            <div class="container-box" id="e11aa6"style="background-image: url('https://bp-file-managers.s3.eu-central-1.amazonaws.com/gazinom/powervault_exclusive.webp');">
                                
                            </div>
                        </div>
                        </div>
                </div>
              
                <style>
              
              
                    #external-11aa >div> .slider-container {
                        width: 100%;
                        height: 15vh;
                        overflow: hidden;
                      }
                      
                      #external-11aa > div>.slider-container .container {
                        width: 100%;
                        height: 100%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        flex-flow: column wrap;
                      }
                      
                      #external-11aa >div .container .container-box {
                        width: 32%;
                        height: 100%;
                        margin-right: 2%;
                        background: rgb(52, 152, 219);
                        color: rgb(41, 118, 185);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        border-radius:10px;
                        background-position: center;background-size: cover;background-color: white;background-repeat: no-repeat;
                      }
              
              
              
                      #e13aa1{
                        background: url('https://bp-file-managers.s3.eu-central-1.amazonaws.com/gazinom/2.webp') cover;
                      }
              
                </style>
              
              
                
              
                
              </div>
              
              
              
              
              `
              
              
              
              const anchorElement = document.querySelector(".home-top-games")
              const homepage = document.querySelector(".home-page-body")
              const newElement = document.createElement("div");
              newElement.innerHTML = newHTMLContent;
              newElement.classList.add('checkthisx');
              homepage.insertBefore(newElement,anchorElement);
              
              
              /*slider özel öne çıkanlar*/
              const container = document.querySelector('#external-11aa>div.home-top-casino-items>div>div');
              const next = document.querySelector('#external-11aa>div.top-section.banner>div.slide-bars>.slide-arrow-box.right');
              const prev = document.querySelector('#external-11aa>div.top-section.banner>div.slide-bars>.slide-arrow-box.left');
              const size = (container.clientWidth);
              let counter = 0;
              
              function nextElement() {
              if (counter < 1) {
                container.style.transition = '.5s ease-in-out';
                counter++;
                container.style.transform = 'translateX('+ ((-size * counter ) - (size*2/100*counter)) +'px)';
              }
              
              }
              
              function prevElement() {
              if (counter > 0 ) {
                container.style.transition = '.5s ease-in-out';
                counter--;
                container.style.transform = 'translateX('+ ((-size * counter ) - (size*2/100*counter)) +'px)';
              }
              }
              
              next.addEventListener('click', nextElement, false);
              prev.addEventListener('click', prevElement, false);
              
              /*slider özel 12aa*/
              const container2 = document.querySelector('#external-12aa>div.home-top-casino-items>div>div');
              const next2 = document.querySelector('#external-12aa>div.top-section.banner>div.slide-bars>.slide-arrow-box.right');
              const prev2 = document.querySelector('#external-12aa>div.top-section.banner>div.slide-bars>.slide-arrow-box.left');
              const size2 = (container2.clientWidth);
              let counter2 = 0;
              
              function nextElement2() {
              if (counter2 < 1) {
                container2.style.transition = '.5s ease-in-out';
                counter2++;
                container2.style.transform = 'translateX('+ ((-size2 * counter2 ) - (size2*2/100*counter2)) +'px)';
              }
              
              }
              
              function prevElement2() {
              if (counter2 > 0 ) {
                container2.style.transition = '.5s ease-in-out';
                counter2--;
                container2.style.transform = 'translateX('+ ((-size2 * counter2 ) - (size2*2/100*counter2))  +'px)';
              }
              }
              
              next2.addEventListener('click', nextElement2, false);
              prev2.addEventListener('click', prevElement2, false);
          
              /*slider özel 14aa*/
              const container4 = document.querySelector('#external-14aa>div.home-top-casino-items>div>div');
              const next4 = document.querySelector('#external-14aa>div.top-section.banner>div.slide-bars>.slide-arrow-box.right');
              const prev4 = document.querySelector('#external-14aa>div.top-section.banner>div.slide-bars>.slide-arrow-box.left');
              const size4 = (container4.clientWidth);
              let counter4 = 0;
              
              function nextElement4() {
              if (counter4 < 1) {
                container4.style.transition = '.5s ease-in-out';
                counter4++;
                container4.style.transform = 'translateX('+ ((-size4 * counter4 ) - (size4*2/100*counter4)) +'px)';
              }
              
              }
              
              function prevElement4() {
              if (counter4 > 0 ) {
                container4.style.transition = '.5s ease-in-out';
                counter4--;
                container4.style.transform = 'translateX('+ ((-size4 * counter4 ) - (size4*2/100*counter4))  +'px)';
              }
              }
              
              next4.addEventListener('click', nextElement4, false);
              prev4.addEventListener('click', prevElement4, false);
              
              /*slider özel 13aa*/
              const container3 = document.querySelector('#external-13aa>div.home-top-casino-items>div>div');
              const next3 = document.querySelector('#external-13aa>div.top-section.banner>div.slide-bars>.slide-arrow-box.right');
              const prev3 = document.querySelector('#external-13aa>div.top-section.banner>div.slide-bars>.slide-arrow-box.left');
              const size3 = (container3.clientWidth);
              let counter3 = 0;
              
              function nextElement3() {
              if (counter3 < 2) {
                container3.style.transition = '.5s ease-in-out';
                counter3++;
                container3.style.transform = 'translateX('+ ((-size3 * counter3 ) - (size3*2/100*counter3)) +'px)';
              }
              
              }
              
              function prevElement3() {
              if (counter3 > 0 ) {
                container3.style.transition = '.5s ease-in-out';
                counter3--;
                container3.style.transform = 'translateX('+ ((-size3 * counter3 ) - (size3*2/100*counter3))  +'px)';
              }
              }
              
              next3.addEventListener('click', nextElement3, false);
              prev3.addEventListener('click', prevElement3, false);

              
              var start = 204526.54
              var start2 = 44786.73
              var start3 = 192113.13
              var sayaclar = document.querySelectorAll("#external-12aa .container-box")
              
              
              for (let i = 0; i < sayaclar.length; i++) {
                const element = sayaclar[i];
                attra=document.createAttribute("price")
                attra.value = start + " ₺"
                element.setAttributeNode(attra)
              }

              let usdollar = new Intl.NumberFormat('en-US',{
                style:'currency',
                currency:'USD'
            })

              
              const increnment = () =>{
                start+=0.01
                start2+=0.01
                start3+=0.01
                for (let i = 0; i < sayaclar.length; i++) {
                    if (i%2 == 0) {
                        const element = sayaclar[i];
                    element.setAttribute("price",usdollar.format(start2));
                    }else if(i%3==0){
                        const element = sayaclar[i];
                    element.setAttribute("price",usdollar.format(start3));
                    }
                    else{
                        const element = sayaclar[i];
                    element.setAttribute("price",usdollar.format(start));
                    }
                  }
              }

              setInterval(increnment,100)
              
              
              
              
              console.log("gazinom.js")
              });
        }
    }
    
    initslidersandothers()
    
    waitForElm('main.sb').then((elm)=>{
        
      var newHTMLContent = `
      
<div onload="initslidersandothers();" class="footer-13aa">
    <div class="bottom-info-section">
        <img width="260px" height="31px" class="center mbxs mtm" src="https://bp-file-managers.s3.eu-central-1.amazonaws.com/gazinom/bbb.png" alt="çevrimiçi kumarhane">
    
    <h1 class="h1 center">Türkiye'nin İlk Global Çevrimiçi Kumarhanesi</h1> 
    <p class="text">
        Türkiye'nin ilk <strong>çevrimiçi kumarhanesine</strong> hoş geldiniz; tamamen güvenilir ve sorumlu bir çevrimiçi kumarhane olarak, oyun kataloğumuzun tamamı DGOJ (Oyun Düzenleme Genel Müdürlüğü) tarafından onaylanmıştır.
    </p>
    
    <p class="text">
        Biz, Türkiye'de faaliyet izni alan ilk <strong><a href="#" class="link--pink">çevrimiçi kumarhane</a></strong> olarak, müşterilerimize yasal, güvenli ve güvenilir bir şekilde eksiksiz bir çevrimiçi kumarhane deneyimi sunuyoruz.
    </p>
            
    <h2 class="h2">
        Türkiye'deki Çevrimiçi Kumarhane Oyunlarımız
    </h2>
                
    <p class="text">
        En iyi <strong>çevrimiçi kumarhane oyunları</strong> mı? <strong>Gazinom | Çevrimiçi Kumarhane</strong>'de! 2011'den beri kumarhanemizde maksimum güvenlikle oynayabilir ve eğlenebilirsiniz; üstelik sektörün en geniş oyun yelpazesine sahibiz. <strong>Canlı çevrimiçi kumarhanemizde</strong> <strong>blackjack</strong>, geniş bir <strong>slot</strong> yelpazesi ve <strong>canlı rulet</strong> oyunları öne çıkıyor.
    </p>
    
    <h2 class="h2">
        En Fazla Deneyime Sahip Çevrimiçi Kumarhane
    </h2>
    
    <p class="text">
        Oyun sektöründe deneyimden bahsediyorsak, <strong>Gazinom | Çevrimiçi Kumarhane</strong>'den bahsediyoruz demektir. 30 yılı aşkın süredir <strong>fiziksel oyun</strong> alanında hizmet veriyoruz ve 1991'de <strong>Gazinom | Torrelodones Kumarhanesi</strong>'ni açarak Türkiye'de öncü olduk. Biriktirdiğimiz tüm deneyimle, 2013'te Casino'nun başkenti Lefkoşa'nın tam merkezinde <strong>Gazinom | Colón Kumarhanesi</strong>'ni açtık. Gazinom'daki <strong>çevrimiçi kumarhanenizde</strong> eşsiz ve güvenli bir deneyim yaşayın, geniş deneyimimizden faydalanın.
    </p>
    
    <h2 class="h2">
        3.000'den Fazla <a href="https://gazinom205.com/casino/slots" class="link--pink">Slot</a> ile Çevrimiçi Kumarhaneniz
    </h2>
    
    <p class="text mb0">
        <strong>Klasik çevrimiçi kumarhane oyunlarını</strong> mı tercih ediyorsunuz, yoksa <strong>yenilikçi slotlarla</strong> deneyim yaşamak mı istiyorsunuz? <strong>Gazinom | Çevrimiçi Kumarhane</strong>'de 3.000'den fazla slot arasından seçim yapmakta zorlanacaksınız. NetEnt, Playtech ve NoLimit City gibi büyük sağlayıcılar, çevrimiçi slot makinelerimizin arkasındaki isimlerden sadece birkaçı. Unutmayın! Kayıtlı olduğunuz sürece <a href="https://gazinom205.com/casino/slots" class="link--pink">2025'in ücretsiz slot makinelerine</a> "demo" sürümlerimizle oynayabilirsiniz.
    </p>
    
    <div class="cards">
        <img class="card-home" loading="lazy" width="396" height="150" alt="Kumarhane" src="https://bp-file-managers.s3.eu-central-1.amazonaws.com/gazinom/gazinom-ozellikler-1.png">
        <img class="card-home" loading="lazy" width="396" height="150" alt="Çevrimiçi kumarhane" src="https://bp-file-managers.s3.eu-central-1.amazonaws.com/gazinom/gazinom-ozellikler-2.png">
        <img class="card-home" loading="lazy" width="396" height="150" alt="En iyi kumarhane" src="https://bp-file-managers.s3.eu-central-1.amazonaws.com/gazinom/gazinom-ozellikler-3.png">
        <img class="card-home" loading="lazy" width="396" height="150" alt="Kumarhane oyna" src="https://bp-file-managers.s3.eu-central-1.amazonaws.com/gazinom/gazinom-ozellikler-4.png">
    </div>
    
    <h2 class="h2">
        En Çok Aranan Slotlar ve Jackpotlar
    </h2>
    
    <p class="text">
        Slotlarda en son yenilikleri mi arıyorsunuz? <strong>Yasal çevrimiçi kumarhanemizde</strong> bulabilirsiniz! <a class="link--pink" href="https://gazinom205.com/casino/slots"><strong>Mısır temalı slotlar</strong></a>, Roma, Yunanistan ya da Kaliforniya sokakları gibi birçok temayı sizin için sunuyoruz; üstelik efsanevi <strong>bar slot makinelerini</strong> de unutmadık. <strong><a href="https://gazinom205.com/casino/slots" class="link--pink">Gates of Olympus</a></strong> serisinin keyfini çıkarın ya da <strong><a href="https://gazinom205.com/casino/slots" class="link--pink">Wanted Dead or a Wild</a></strong> ve <strong><a href="https://gazinom205.com/casino/slots" class="link--pink">Wolf Gold</a></strong> gibi slotlarla eğlenin. Farklı ödeme çizgileri ve çok sayıda makaralı slotlar GGazinom | Çevrimiçi Kumarhane'de sizi bekliyor. <strong><a href="https://gazinom205.com/casino/slots" class="link--pink">Altın Madeni</a></strong>'nde altını arayın, <strong><a href="https://gazinom205.com/casino/slots" class="link--pink">Bonanza</a></strong> ile vahşi batıya yolculuk yapın ya da <strong><a href="https://gazinom205.com/casino/slots" class="link--pink">Folsom Prison</a></strong> slotunun makaralarını çevirin.
    </p>
    
    <p class="text">
        Üstelik bu slotların birçoğu büyük bir <strong>jackpot</strong> sunuyor; jackpotlar yüksek olduğunda küçük bir bahisle büyük kazanç elde etme şansınız var.
    </p>
    
    <h2 class="h2"> 
        Canlı Rulet Çevrimiçi Kumarhanesi
    </h2>
    
    <p class="text">
        Çevrimiçi kumarhanenin klasik oyunlarından biri <strong>rulettir</strong> ve bizde <strong><a href="https://gazinom205.com/casino/slots" class="link--pink">Amerikan</a></strong>, <strong><a href="https://gazinom205.com/casino/slots" class="link--pink">Avrupa</a></strong> ve <strong><a href="https://gazinom205.com/casino/slots" class="link--pink">Fransız</a></strong> ruletleri mevcut. Yetmedi mi? Size şunu söyleyelim: <strong>Canlı çevrimiçi kumarhanemizde</strong> gerçek krupiyelerle haftanın 7 günü, günün 24 saati çalışan birkaç <strong>canlı rulet</strong> masamız var.
    </p>
    
    <h2 class="h2"> 
        <strong>Video Bingo mu, Video Poker mi?</strong> Türkiye'nin En İyi Çevrimiçi Kumarhanesinde.
    </h2>
    
    <p class="text">
        <strong><a href="https://gazinom205.com/casino/slots" class="link--pink">Çevrimiçi bingo</a></strong> oynamak için yeni deneyimler mi arıyorsunuz? Tek bir tıkla eğlenceye başlayabilirsiniz; üstelik <strong>geleneksel bingodan farklı olarak</strong>, video bingoda kazancınız diğer kullanıcılardan bağımsız olarak bahsinize bağlıdır.
    </p>
    
    <p class="text">
        Poker oynamayı seviyorsanız, video poker makinelerimizle taktiklerinizi ve stratejilerinizi geliştirebilirsiniz. <strong><a href="https://gazinom205.com/casino/slots" class="link--pink">Jacks or Better</a></strong>, <strong><a href="https://gazinom205.com/casino/livecasino" class="link--pink">Aces & Faces</a></strong>, <strong><a href="https://gazinom205.com/casino/livecasino" class="link--pink">Deuces Wild</a></strong> ve daha birçok seçenek sizi bekliyor.
    </p>
    
    <h2 class="h2">
        <a href="https://gazinom205.com/sports/line" class="link--pink">Çevrimiçi Spor Bahisleri</a>
    </h2>
    <p class="text">
        Türkiye'deki en iyi <strong>çevrimiçi kumarhane</strong> olmanın yanı sıra, aynı zamanda favori <strong>çevrimiçi bahis eviniz</strong> de biziz. Gazinom | Çevrimiçi Kumarhane'deki <strong>yeni istatistiksel bahis pazarlarının</strong> keyfini çıkarın; burada oyuncuların şut sayısına, pas sayısına ve daha fazlasına bahis yapabilirsiniz. Ayrıca tekliflerimize <strong>eSpor bahislerini</strong> de ekledik; LoL veya Dota 2 gibi en iyi ligleri ve daha fazlasını bulabilirsiniz.
    </p>
    
    <p class="text">
        Ve dahası var! <strong>Bahis oluştur</strong> özelliği ile aynı etkinlikte farklı pazarları birleştirebilir, ayrıca <strong>cashout</strong> ile bahsinizin bir kısmını kapatabilirsiniz. Futbol, basketbol, bisiklet ve daha birçok spor dalı burada, <strong>çevrimiçi kumarhanenizde</strong>.
    </p>
    
    <h2 class="h2">
        Çevrimiçi Kumarhanemizi Ücretsiz Deneyin 
    </h2>
    <p class="text">
        3.000'den fazla slotumuzun ‘demo’ sürümünü tanıyın. Favori <strong>slotlarınızın</strong> kurallarını öğrenebilir ve sadece ‘deneyin’ butonuna basarak <strong>ücretsiz oynayabilirsiniz</strong>. Ancak önce platformumuzda kayıt olmanız gerektiğini unutmayın.
    </p>
    
    <h2 class="h2">
        Gazinom | Çevrimiçi Kumarhane'deki Yenilikler
    </h2>
    
    <p class="text">
        Her hafta slotlarda en iyi yenilikleri sunuyorsak, bu hafta da farklı değil. Gazinom | Çevrimiçi Kumarhane'de sizin için 30’dan fazla farklı stüdyo var: <a href="https://gazinom205.com/casino/slots" class="link--pink">Push Gaming</a>, <a href="https://gazinom205.com/casino/slots" class="link--pink">Hacksaw</a>, <a href="https://gazinom205.com/casino/slots" class="link--pink">NoLimit City</a>, <a href="https://gazinom205.com/casino/slots" class="link--pink">Pragmatic Play</a> ve daha pek çok stüdyo.
    </p>
    <p class="text">
        Daha fazla düşünmeyin, slot kataloğumuza girin ve en sevdiğinizi seçin; ancak hepsinin çok eğlenceli olduğunu baştan söyleyelim, seçim yapmak kolay olmayacak. <strong>Cloud Princess</strong>, <strong><a href="https://gazinom205.com/casino/slots" class="link--pink">Le Pharaoh</a></strong> ve <strong><a href="https://gazinom205.com/casino/slots" class="link--pink">Razor Shark</a></strong> oyunlarını oynayın. Bu mücevherleri kaçırmak ister misiniz?
    </p>
    
    <h2 class="h2">
        Neden Gazinom | Çevrimiçi Kumarhane'de Oynamalısınız?
    </h2>
    
    <p class="text">
        Size tek kelimeyle özetleyelim: Deneyim! Türkiye'deki en deneyimli <strong>yasal çevrimiçi kumarhane</strong> olmanın yanı sıra, tamamen kişiselleştirilmiş bir hizmet sunuyoruz.
    </p>
     
    <p class="text">
        <strong>Gazinom | Çevrimiçi Kumarhane</strong>'de tüm favori kumarhane oyunlarınızı nerede olursanız olun oynayabilirsiniz. Mobil cihazınızdan veya bilgisayarınızdan web sitemiz, en iyi kalite ve hızda oyun oynama fırsatı sunar.
    </p>
    
    <h2 class="h2">
       Gazinom: Güvenli Çevrimiçi Kumarhaneniz
    </h2>
    
    <p class="text">
        <strong>Gazinom | Çevrimiçi Kumarhane</strong>'de tamamen güvenli bir deneyim yaşayın. Platformumuza kaydolurken hiçbir endişeniz olmasın. Verilerinizin gizliliği ve mahremiyeti bizim önceliğimizdir ve yalnızca kayıt sırasında kimlik numaranız gibi gerekli bilgileri isteyeceğiz.
    </p>
     
    <p class="text">
        Ayrıca, <strong>sorumlu ve güvenli oyun</strong> anlayışına bağlı bir çevrimiçi kumarhane olmaktan gurur duyuyoruz. Bizimle oyun oturumunuzu yapılandırabilir, limitler belirleyebilir ve ihtiyacınız olduğunda mola verebilirsiniz.
    </p>
    
    <h2 class="h2">
        Kumarhanemizin Ödeme Yöntemleri Nelerdir?
    </h2>
    
    <p class="text">
        Gazinom | Çevrimiçi Kumarhane, avantajlarımızdan <strong>hızlı ve kolay bir şekilde</strong> yararlanmanız için çok çeşitli ödeme yöntemleri sunar. Paypal, Skrill, Bizum, banka havalesi, kredi veya banka kartı gibi seçenekleriniz var; hatta fiziksel kumarhanelerimize yakınsanız ödüllerinizi kasadan çekebilirsiniz.
    </p>
    
    <h2 class="h2">
        Çevrimiçi Kumarhane Oynamayla İlgili Sık Sorulan Sorular
    </h2>
    
    <h3 class="h3">
        1. RTP Nedir?
    </h3>
    
    <p class="text">
        RTP (Return to Player), bir slotta uzun vadede oyuncuya geri dönen miktardır ve yüzde olarak ifade edilir. Karmaşık mı geldi? Bir örnekle açıklayalım: 95% RTP’ye sahip bir makinede 100TL oynarsanız, uzun vadede bu slot size her 100TL’den 95TL geri verir. Yani yüksek RTP, uzun vadede daha fazla ödül kazanma şansınız demektir.
    </p>
    
    <h3 class="h3">
        2. En Popüler Şans Oyunları Hangileridir?
    </h3>
    
    <p class="text">
        Gazinom | Çevrimiçi Kumarhane'de en popüler kumarhane oyunlarını bulabilirsiniz: <a href="https://gazinom205.com/casino/livecasino" class="link--pink">Book of Ra</a>, <a href="https://gazinom205.com/casino/slots" class="link--pink">Gonzo’s Quest</a>, <a href="https://gazinom205.com/casino/slots" class="link--pink">Bar Slotları</a>, <a href="https://gazinom205.com/casino/slots" class="link--pink">Starburst</a>, <a href="https://gazinom205.com/casino/slots" class="link--pink">Blue Wizard</a>, <a href="https://gazinom205.com/casino/slots" class="link--pink">Mega Fire Blaze Rulet</a>, <a href="https://gazinom205.com/casino/slots" class="link--pink">Quantum Rulet</a>...
    </p>
    
    <h3 class="h3">
        3. Türkiye'de Çevrimiçi Kumarhanelerde Oynamak Yasal mı?
    </h3>
    
    <p class="text">
        Elbette! <strong>Gazinom | Çevrimiçi Kumarhane</strong>, kullanıcılarımıza yasal, sorumlu ve güvenli bir oyun deneyimi sunan Türkiye'nin ilk global çevrimiçi kumarhanesidir. Gereklilikleri doğrulayan ve lisansları veren kurum, Oyun Düzenleme Genel Müdürlüğü’dür.
    </p>
    
    <h3 class="h3">
        4. Canlı Oyunlar Nedir?
    </h3>
    
    <p class="text">
        Canlı oyunları tanımak istiyorsanız doğru yerdesiniz; <strong>Gazinom | Çevrimiçi Kumarhane</strong>, size <strong><a href="https://gazinom205.com/casino/livecasino" class="link--pink">canlı kumarhane</a></strong> heyecanını yaşatma konusunda uzman. Evinizin konforunda <strong><a href="https://gazinom205.com/casino/livecasino" class="link--pink">çarpan ruletleri</a></strong> oynayabilirsiniz; öne çıkanlar arasında <a href="https://gazinom205.com/casino/livecasino" class="link--pink">Quantum</a>, <strong><a href="https://gazinom205.com/casino/livecasino" class="link--pink">Yıldırım</a></strong> ve <strong><a href="https://gazinom205.com/casino/livecasino" class="link--pink">Casiopea</a></strong> yer alıyor.
    </p>
    
    <h3 class="h3">
        5. Neden Çevrimiçi Kumarhanemizi Seçmelisiniz?
    </h3>
    
    <p class="text">
        <strong>Gazinom | Çevrimiçi Kumarhane</strong>, oyun kataloğumuzu istediğiniz zaman ve evden çıkmadan oynama imkanı sunar. <strong>Slotlar</strong>, <strong><a href="https://gazinom205.com/casino/livecasino" class="link--pink">blackjack</a></strong> veya canlı ruleti şık kıyafet zorunluluğu olmadan evinizin salonunda, yolculuk sırasında ya da metro beklerken oynayabilirsiniz. Ayrıca her hafta yeni oyunlar ve özel içeriklerle tanışabilirsiniz. Şunu da ekleyelim: <strong><a href="https://gazinom205.com/promotions" class="link--pink">Gazinom kumarhane promosyon kodu</a></strong> ile kumarhane oyunlarında ve spor bahislerinde bonuslar, en iyi slotlarda ücretsiz dönüşler elde edebilirsiniz. Tüm bunlar ve daha fazlası için sadece kaydolup hesabınızı doğrulamanız yeterli.
    </p>
    </div>
  </div>
  
  <style>
  
  
  
    .footer-13aa{
        border-top: 5px solid #757575;
        border-radius: 10px;
        padding-top:3vh; 
        font-family: system-ui, sans-serif;
      }
      
      
      .footer-13aa .link--pink{
        color: #e0005f;
      }
      
      .footer-13aa img{
        width: 25%;
      }
      
      .footer-13aa .cards{
        width: 100%;
        height: auto;
        display: flex;
      }
      
      .footer-13aa .card-home{
        display: inline-block;
        width: 25%
      }
      
      img.center{
        margin: 0 37.5%;
        
      }
      
      
      
  
  </style>
  
  <div class="contact-11aa">
  
      <div id="section-contact" class="sectionContact contact-11aa">
          <p class="sectionContact-Maintitle">Bize Ulaşın</p>
          <ul class="sectionContact-list">
              <li class="sectionContact-item">
                  <div class="sectionContact-wrapper">
                      <img class="sectionContact-icon" src="https://bp-file-managers.s3.eu-central-1.amazonaws.com/gazinom/svgviewer-png-output%20%282%29.png" alt="Sohbet görüntüsü kaynağı" width="32" height="32" loading="lazy">
                      <p class="sectionContact-title">Sohbet</p>
                      <p id="stateChat" class="sectionContact-text">
                          İletişim kurmanın en hızlı ve kolay yolu
                          Üzgünüz, temsilcilerimiz şu anda müsait değil
                      </p>
                      <button onclick="openChat();" id="sendmail" class="sectionContact-button" type="button"> E-posta Gönder </button>
                  </div>
              </li>
              <li class="sectionContact-item" onclick="window.location.href='mailto:musteriler@granmadrid.es'">
                  <div class="sectionContact-wrapper">
                      <img class="sectionContact-icon" src="https://bp-file-managers.s3.eu-central-1.amazonaws.com/gazinom/svgviewer-png-output%20%283%29.png" alt="E-posta görüntüsü kaynağı" width="32" height="32" loading="lazy">
                      <p class="sectionContact-title">E-posta</p>
                      <p class="sectionContact-text">
                          Bize şu adrese e-posta gönderebilirsiniz:
                          <span class="linkPink"> musteriler@granmadrid.es</span>
                      </p>
                      <button class="sectionContact-button" type="button"> E-posta Gönder</button>
                  </div>
              </li>
              <li class="sectionContact-item" onclick="window.location.href='tel:+90 212 856 11 11'">
                  <div class="sectionContact-wrapper">
                      <img class="sectionContact-icon" src="https://bp-file-managers.s3.eu-central-1.amazonaws.com/gazinom/svgviewer-png-output%20%284%29.png" alt="Telefon görüntüsü kaynağı" width="32" height="32" loading="lazy">
                      <p class="sectionContact-title">Telefon</p>
                      <p class="sectionContact-text">
                          Telefonla iletişime geçmek için şu numarayı arayın:
                          <span class="linkPink"> 212 856 11 11</span>
                      </p>
                      <button class="sectionContact-button" type="button"> Ara</button>
                  </div>
              </li>
          </ul>
          <p class="sectionContact-footerText">
              Bir şikâyette bulunmanız mı gerekiyor? <a onclick="window.location.href='https://www.casinogranmadridonline.es/contacto/buzon-reclamaciones'" class="linkPink">
                  Daha fazla bilgi</a>
          </p>
          <p class="sectionContact-footerText">
              Müşteri Hizmetleri Temsilcilerimiz size Pazartesi’den Pazar’a <strong>09:00-01:00</strong> saatleri arasında yardımcı olmak için çalışıyor
          </p>
      </div>
  
  </div>
  <style>
      .contact-11aa {
          max-width: 1200px;
          margin: 0 auto;
          padding: 40px 20px;
          font-family: Arial, sans-serif;
          color: #333;
          background-color: #f0f0f0; /* Light gray background for the entire section */
          border-radius: 10px;
      }
  
      .contact-11aa .sectionContact-Maintitle {
          font-size: 24px;
          font-weight: bold;
          color: #2c3e50;
          text-align: center;
          margin-bottom: 30px;
      }
  
      .contact-11aa .sectionContact-list {
          display: flex;
          justify-content: center;
          gap: 20px;
          list-style: none;
          padding: 0;
          margin: 0;
      }
  
      .contact-11aa .sectionContact-item {
          flex: 1;
          max-width: 300px;
          background-color: #fff;
          border-radius: 10px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          padding: 20px;
          text-align: center;
          cursor: pointer;
          transition: transform 0.2s ease;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 250px; /* Fixed height for all cards to ensure uniformity */
      }
  
      .contact-11aa .sectionContact-item:hover {
          transform: translateY(-5px);
      }
  
      .contact-11aa .sectionContact-icon {
          width: 32px;
          height: 32px;
          margin-bottom: 10px;
      }
  
      .contact-11aa .sectionContact-title {
          font-size: 18px;
          font-weight: bold;
          color: #2c3e50;
          margin-bottom: 10px;
      }
  
      .contact-11aa .sectionContact-text {
          font-size: 14px;
          color: #666;
          margin-bottom: 15px;
          line-height: 1.5;
          flex-grow: 1; /* Allows text to expand and keep cards uniform in height */
      }
  
      .contact-11aa .linkPink {
          color: #d81b60;
          text-decoration: none;
          cursor: pointer;
      }
  
      .contact-11aa .linkPink:hover {
          text-decoration: underline;
      }
  
      .contact-11aa .sectionContact-button {
          background-color: #d81b60;
          color: #fff;
          border: none;
          padding: 10px 20px;
          border-radius: 5px;
          font-size: 14px;
          cursor: pointer;
          transition: background-color 0.2s ease;
          width: 100%; /* Ensures buttons span the full width of the card */
      }
  
      .contact-11aa .sectionContact-button:hover {
          background-color: #b01750;
      }
  
      .contact-11aa #stateChat {
          color: #888;
          font-style: italic;
      }
  
      .contact-11aa .sectionContact-footerText {
          text-align: center;
          font-size: 14px;
          color: #666;
          margin-top: 20px;
      }
  
      .contact-11aa .sectionContact-footerText strong {
          color: #2c3e50;
      }
  
      /* Responsive design */
      @media (max-width: 768px) {
          .contact-11aa .sectionContact-list {
              flex-direction: column;
              align-items: center;
          }
  
          .contact-11aa .sectionContact-item {
              max-width: 100%;
              margin-bottom: 20px;
              height: auto; /* Allows cards to adjust height on mobile */
          }
      }
  </style>
  
    
      `
    
      const mainelement = document.querySelector("main.sb");
      const newElement = document.createElement("div");
      const anchorElement = document.querySelector(".main-wrapper")
    
      newElement.innerHTML = newHTMLContent;
      newElement.classList.add('x');
      anchorElement.append(newElement);

      
    
    });
    
    
    
    waitForElm('.sign-up-wrapper').then((elm)=>{
    
      var newHTMLContent = `
      
      <video autoplay muted loop id="myVideo">
      <source src="https://github.com/smhgzi/gazinom/raw/refs/heads/main/video.mp4" type="video/mp4">
      </video>
    
      <style>
      #myVideo {
    position: fixed;
    right: 0;
    bottom: 0;
    max-width: 100%;
  max-height: 100%;
  z-index: 0;
  width: 100%;
  height: 100vh;
  object-fit: cover;
    }
    
      </style>
      
      `
    
      const topcontainer = document.querySelector('#sb-sign-up-template');
      const newElement = document.createElement("div");
      
      newElement.innerHTML = newHTMLContent;
      newElement.classList.add('xvideo');
      topcontainer.appendChild(newElement);
    
    });
    

}
