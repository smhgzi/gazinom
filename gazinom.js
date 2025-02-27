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


waitForElm('.home-top-games').then((elm) => {
    const newHTMLContent = `
    
    
    
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
                <div class="container-box">
                    
                </div>
                <div class="container-box">
                    
                </div>
                <div class="container-box">
                    
                </div>
                <div class="container-box">
                   
                </div>
                <div class="container-box">
                    
                </div>
                <div class="container-box">
                    
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
            color: rgb(41, 128, 185);
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius:10px;
          }


    </style>


    <script>
    </script>
</div>

`



const anchorElement = document.querySelector(".home-top-games")
const homepage = document.querySelector(".home-page-body")
const newElement = document.createElement("div");
newElement.innerHTML = newHTMLContent;
newElement.classList.add('x');
homepage.insertBefore(newElement,anchorElement);

const container = document.querySelector('#external-11aa>div.home-top-casino-items>div>div');
const next = document.querySelector('#external-11aa>div.top-section.banner>div.slide-bars>.slide-arrow-box.right');
const prev = document.querySelector('#external-11aa>div.top-section.banner>div.slide-bars>.slide-arrow-box.left');
const size = (container.clientWidth);
let counter = 0;

function nextElement() {
  if (counter < 1) {
    container.style.transition = '.5s ease-in-out';
    counter++;
    container.style.transform = 'translateX('+ (-size  * counter) +'px)';
  }
	
}

function prevElement() {
  if (counter >= 0) {
    container.style.transition = '.5s ease-in-out';
    counter--;
    container.style.transform = 'translateX('+ (-size  * counter) +'px)';
  }
}

next.addEventListener('click', nextElement, false);
prev.addEventListener('click', prevElement, false);


console.log("gazinom.js")
});






