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

const newHTMLContent = `         <div class="home-top-casino" id="external-11aa">
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
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
    </div>

    <style>

        #external-11aa>.home-top-casino-items{
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
        }

        #external-11aa>.home-top-casino-items>.card{
            width: 33%;
            height: 15vh;
            background-color: blue;
            margin: 10px;
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
        }


    </style>
</div>

`



const anchorElement = await waitForElm(".home-top-games")
const homepage = await waitForElm(".home-page-body")
const newElement = document.createElement("div");
newElement.innerHTML = newHTMLContent;
newElement.classList.add('x');
homepage.insertBefore(newElement,anchorElement);




