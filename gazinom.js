

var checkthisx = document.querySelector(".checkthisx")
  console.log(checkthisx)
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

        
        waitForElm('.home-top-games').then((elm) => {
        
            const newHTMLContent = `

<div class="home-top-casino" id="external-13aa">
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
          height: 300px;
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
          height: 200px;
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
          background-position: center;background-size: contain;background-color: white;background-repeat: no-repeat;
        }



        #e13aa1{
          background: url('https://bp-file-managers.s3.eu-central-1.amazonaws.com/gazinom/2.webp') cover;
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
          height: 300px;
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
          height: 300px;
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

          let usdollar = new Intl.NumberFormat('tr-TR',{
            style:'currency',
            currency:'TRY'
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

          setInterval(increnment,200)
          
          
          
          
          });
    
        var checkthisx = document.querySelector(".checkthisx");
        
    }
    
    
    function initfooter() {
        waitForElm('main.sb').then((elm)=>{
        
            var newHTMLContent = `
            
      <div class="footer-13aa"><div class="accordion">
    <!-- Accordion Item 1 -->
    <div class="accordion-item">
        <div class="accordion-header">
            <h2 class="h2">Türkiye'nin İlk Global Çevrimiçi Kumarhanesi</h2>
        </div>
        <div class="accordion-content">
            <img width="260px" height="31px" class="center mbxs mtm" src="https://bp-file-managers.s3.eu-central-1.amazonaws.com/gazinom/bbb.png" alt="çevrimiçi kumarhane">
            <p class="text">
                Türkiye'nin ilk <strong>çevrimiçi kumarhanesine</strong> hoş geldiniz; tamamen güvenilir ve sorumlu bir çevrimiçi kumarhane olarak, oyun kataloğumuzun tamamı DGOJ (Oyun Düzenleme Genel Müdürlüğü) tarafından onaylanmıştır.
            </p>
            <p class="text">
                Biz, Türkiye'de faaliyet izni alan ilk <strong><a href="#" class="link--pink">çevrimiçi kumarhane</a></strong> olarak, müşterilerimize yasal, güvenli ve güvenilir bir şekilde eksiksiz bir çevrimiçi kumarhane deneyimi sunuyoruz.
            </p>
        </div>
    </div>

    <!-- Accordion Item 2 -->
    <div class="accordion-item">
        <div class="accordion-header">
            <h2 class="h2">Türkiye'deki Çevrimiçi Kumarhane Oyunlarımız</h2>
        </div>
        <div class="accordion-content">
            <p class="text">
                En iyi <strong>çevrimiçi kumarhane oyunları</strong> mı? <strong>Gazinom | Çevrimiçi Kumarhane</strong>'de! 2011'den beri kumarhanemizde maksimum güvenlikle oynayabilir ve eğlenebilirsiniz; üstelik sektörün en geniş oyun yelpazesine sahibiz. <strong>Canlı çevrimiçi kumarhanemizde</strong> <strong>blackjack</strong>, geniş bir <strong>slot</strong> yelpazesi ve <strong>canlı rulet</strong> oyunları öne çıkıyor.
            </p>
        </div>
    </div>

    <!-- Accordion Item 3 -->
    <div class="accordion-item">
        <div class="accordion-header">
            <h2 class="h2">En Fazla Deneyime Sahip Çevrimiçi Kumarhane</h2>
        </div>
        <div class="accordion-content">
            <p class="text">
                Oyun sektöründe deneyimden bahsediyorsak, <strong>Gazinom | Çevrimiçi Kumarhane</strong>'den bahsediyoruz demektir. 30 yılı aşkın süredir <strong>fiziksel oyun</strong> alanında hizmet veriyoruz ve 1991'de <strong>Gazinom | Torrelodones Kumarhanesi</strong>'ni açarak Türkiye'de öncü olduk. Biriktirdiğimiz tüm deneyimle, 2013'te Casino'nun başkenti Lefkoşa'nın tam merkezinde <strong>Gazinom | Colón Kumarhanesi</strong>'ni açtık. Gazinom'daki <strong>çevrimiçi kumarhanenizde</strong> eşsiz ve güvenli bir deneyim yaşayın, geniş deneyimimizden faydalanın.
            </p>
        </div>
    </div>

    <!-- Accordion Item 4 -->
    <div class="accordion-item">
        <div class="accordion-header">
            <h2 class="h2">3.000'den Fazla Slot ile Çevrimiçi Kumarhaneniz</h2>
        </div>
        <div class="accordion-content">
            <p class="text mb0">
                <strong>Klasik çevrimiçi kumarhane oyunlarını</strong> mı tercih ediyorsunuz, yoksa <strong>yenilikçi slotlarla</strong> deneyim yaşamak mı istiyorsunuz? <strong>Gazinom | Çevrimiçi Kumarhane</strong>'de 3.000'den fazla slot arasından seçim yapmakta zorlanacaksınız. NetEnt, Playtech ve NoLimit City gibi büyük sağlayıcılar, çevrimiçi slot makinelerimizin arkasındaki isimlerden sadece birkaçı. Unutmayın! Kayıtlı olduğunuz sürece <a href="https://gazinom205.com/casino/slots" class="link--pink">2025'in ücretsiz slot makinelerine</a> "demo" sürümlerimizle oynayabilirsiniz.
            </p>
            <div class="cards">
                <img class="card-home" loading="lazy" width="396" height="150" alt="Kumarhane" src="https://bp-file-managers.s3.eu-central-1.amazonaws.com/gazinom/gazinom-ozellikler-1.png">
                <img class="card-home" loading="lazy" width="396" height="150" alt="Çevrimiçi kumarhane" src="https://bp-file-managers.s3.eu-central-1.amazonaws.com/gazinom/gazinom-ozellikler-2.png">
                <img class="card-home" loading="lazy" width="396" height="150" alt="En iyi kumarhane" src="https://bp-file-managers.s3.eu-central-1.amazonaws.com/gazinom/gazinom-ozellikler-3.png">
                <img class="card-home" loading="lazy" width="396" height="150" alt="Kumarhane oyna" src="https://bp-file-managers.s3.eu-central-1.amazonaws.com/gazinom/gazinom-ozellikler-4.png">
            </div>
        </div>
    </div>

    <!-- Accordion Item 5 -->
    <div class="accordion-item">
        <div class="accordion-header">
            <h2 class="h2">En Çok Aranan Slotlar ve Jackpotlar</h2>
        </div>
        <div class="accordion-content">
            <p class="text">
                Slotlarda en son yenilikleri mi arıyorsunuz? <strong>Yasal çevrimiçi kumarhanemizde</strong> bulabilirsiniz! <a class="link--pink" href="https://gazinom205.com/casino/slots"><strong>Mısır temalı slotlar</strong></a>, Roma, Yunanistan ya da Kaliforniya sokakları gibi birçok temayı sizin için sunuyoruz; üstelik efsanevi <strong>bar slot makinelerini</strong> de unutmadık. <strong><a href="https://gazinom205.com/casino/slots" class="link--pink">Gates of Olympus</a></strong> serisinin keyfini çıkarın ya da <strong><a href="https://gazinom205.com/casino/slots" class="link--pink">Wanted Dead or a Wild</a></strong> ve <strong><a href="https://gazinom205.com/casino/slots" class="link--pink">Wolf Gold</a></strong> gibi slotlarla eğlenin. Farklı ödeme çizgileri ve çok sayıda makaralı slotlar GGazinom | Çevrimiçi Kumarhane'de sizi bekliyor. <strong><a href="https://gazinom205.com/casino/slots" class="link--pink">Altın Madeni</a></strong>'nde altını arayın, <strong><a href="https://gazinom205.com/casino/slots" class="link--pink">Bonanza</a></strong> ile vahşi batıya yolculuk yapın ya da <strong><a href="https://gazinom205.com/casino/slots" class="link--pink">Folsom Prison</a></strong> slotunun makaralarını çevirin.
            </p>
            <p class="text">
                Üstelik bu slotların birçoğu büyük bir <strong>jackpot</strong> sunuyor; jackpotlar yüksek olduğunda küçük bir bahisle büyük kazanç elde etme şansınız var.
            </p>
        </div>
    </div>

    <!-- Accordion Item 6 -->
    <div class="accordion-item">
        <div class="accordion-header">
            <h2 class="h2">Canlı Rulet, Video Bingo, Video Poker ve Daha Fazlası</h2>
        </div>
        <div class="accordion-content">
            <p class="text">
                Çevrimiçi kumarhanenin klasik oyunlarından biri <strong>rulettir</strong> ve bizde <strong><a href="https://gazinom205.com/casino/slots" class="link--pink">Amerikan</a></strong>, <strong><a href="https://gazinom205.com/casino/slots" class="link--pink">Avrupa</a></strong> ve <strong><a href="https://gazinom205.com/casino/slots" class="link--pink">Fransız</a></strong> ruletleri mevcut. Yetmedi mi? Size şunu söyleyelim: <strong>Canlı çevrimiçi kumarhanemizde</strong> gerçek krupiyelerle haftanın 7 günü, günün 24 saati çalışan birkaç <strong>canlı rulet</strong> masamız var.
            </p>
            <p class="text">
                <strong><a href="https://gazinom205.com/casino/slots" class="link--pink">Çevrimiçi bingo</a></strong> oynamak için yeni deneyimler mi arıyorsunuz? Tek bir tıkla eğlenceye başlayabilirsiniz; üstelik <strong>geleneksel bingodan farklı olarak</strong>, video bingoda kazancınız diğer kullanıcılardan bağımsız olarak bahsinize bağlıdır.
            </p>
            <p class="text">
                Poker oynamayı seviyorsanız, video poker makinelerimizle taktiklerinizi ve stratejilerinizi geliştirebilirsiniz. <strong><a href="https://gazinom205.com/casino/slots" class="link--pink">Jacks or Better</a></strong>, <strong><a href="https://gazinom205.com/casino/livecasino" class="link--pink">Aces & Faces</a></strong>, <strong><a href="https://gazinom205.com/casino/livecasino" class="link--pink">Deuces Wild</a></strong> ve daha birçok seçenek sizi bekliyor.
            </p>
        </div>
    </div>
</div>
    <!-- İletişim Bölümü -->
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
                        <button onclick="openChat();" id="sendmail" class="sectionContact-button" type="button"> Canlı Sohbete Bağlan </button>
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
    </div></div>
        <style>.footer-13aa {
            border-top: 5px solid #757575;
            border-radius: 10px;
            padding-top: 3vh;
            background-color: #fff;
            max-width: 1200px;
            margin: 20px auto;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .footer-13aa .link--pink {
            color: #e0005f;
            text-decoration: none;
        }

        .footer-13aa .link--pink:hover {
            text-decoration: underline;
        }

        .footer-13aa img {
            width: 25%;
        }

        .footer-13aa .cards {
            width: 100%;
            height: auto;
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            margin: 20px 0;
        }

        .footer-13aa .card-home {
            flex: 1 1 calc(25% - 20px);
            max-width: calc(25% - 20px);
            height: auto;
            border-radius: 10px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        img.center {
            display: block;
            margin: 0 auto;
        }

        /* Accordion Stili */
        .accordion {
            width: 100%;
        }

        .accordion-item {
            border-bottom: 1px solid #ddd;
        }

        .accordion-header {
            padding: 15px;
            cursor: pointer;
            background-color: #f9f9f9;
            font-size: 18px;
            font-weight: bold;
            color: #333;
            transition: background-color 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        .accordion-header:hover {
            background-color: #f1f1f1;
        }

        .accordion-header::after {
            content: "▼";
            color: var(--base-color);
            font-size: 12px;
            transition: transform 0.3s ease;
        }

        .accordion-header.active::after {
            transform: rotate(180deg);
        }

        .accordion-content {
            padding: 0 15px;
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease, padding 0.3s ease;
        }

        .accordion-content.open {
            max-height: 500px; /* İçeriğin yüksekliğine göre ayarlayın */
            padding: 15px;
        }

        /* İletişim Bölümü Stili */
        .contact-11aa {
            max-width: 1200px;
            margin: 20px auto;
            padding: 40px 20px;
            background-color: #f0f0f0;
            border-radius: 10px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .contact-11aa .sectionContact-Maintitle {
            font-size: 24px;
            font-weight: bold;
            color: #2c3e50;
            text-align: center;
            margin-bottom: 30px;
            margin-top: -50px;
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
            background-color: #5d6192;
            color: #fff;
            border: none;
            padding: 10px 20px;
            border-radius: 5px;
            font-size: 14px;
            cursor: pointer;
            transition: background-color 0.2s ease;
            width: 100%;
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

        /* Responsive Tasarım */
        @media (max-width: 768px) {
            .footer-13aa .cards {
                flex-direction: column;
            }

            .footer-13aa .card-home {
                max-width: 100%;
            }

            .contact-11aa .sectionContact-list {
                flex-direction: column;
                align-items: center;
            }

            .contact-11aa .sectionContact-item {
                max-width: 100%;
                margin-bottom: 20px;
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
      
            
                const accordionHeaders = document.querySelectorAll('.accordion-header');
    
                accordionHeaders.forEach(header => {
                    header.addEventListener('click', function () {
                        const content = this.nextElementSibling;
                        this.classList.toggle('active');
                        content.classList.toggle('open');
                    });
                });
        
          
          });
    }

    
    
    function addseeall() {
       waitForElm('.category-item-3867  .slide-bars').then((elm)=>{
        const slide_bars = document.querySelectorAll(".slide-bars")
        const htmlcontentscheme = `
        
        <div class="slide-arrow-box" style="width: 100px;">
                          <i class="seealltext" style="font-family: &quot;Ubuntu&quot;,&quot;serif&quot;;font-style: normal;font-weight: 400;">Tümünü Gör</i>
                        </div>
        
        `

        const exists = document.querySelectorAll('.xsee')

        for (let i = 0; i < exists.length; i++) {
            const element = exists[i];
            element.remove();
            
        }
        
        for (let i = 0; i < slide_bars.length; i++) {
            var newElement = document.createElement("div")
        newElement.classList.add("xsee")
        newElement.innerHTML = htmlcontentscheme
            slide_bars[i].insertBefore(newElement,slide_bars[i].firstChild);
            
        }
       })


    }

    
        initfooter();             

        const check = ()=> {
            if (document.getElementsByClassName("home-top-casino").length<10 && document.getElementsByClassName('.checkthisx').length<1 && window.location.href.includes("home")) {
                initslidersandothers();
                console.log("evet")
                addseeall();
            }
        }
        
        waitForElm('.category-item-3867').then((elm)=>{
            setInterval(check,1000)
        })

    
    
    
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
    






