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

const newHTMLContent = `           <div class="home-top-casino div-11aa">
        <div class="top-section banner">
  <div class="row-title">Özel ve Öne Çıkanlar</div>
  <div class="slide-bars">
    <div class="prev-11aa">
        <div class="slide-arrow-box left">
        <button class="sb-icon sb-arrow-right rotate"></button>
    </div>
    </div>
    <div class="next-11aa">
        <div class="slide-arrow-box right ">
            <button class="sb-icon sb-arrow-right"></button>
        </div>
    </div>

</div>
</div>

<div class="slider-container-11aa">
    <div class="slider-11aa">
        <div class="slide-11aa">
            <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb" alt="Manzara Resmi">
        </div>
        <div class="slide-11aa">
            <img src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df" alt="Şehir Silüeti">
        </div>
        <div class="slide-11aa">
            <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e" alt="Doğa Resmi">
        </div>
        <div class="slide-11aa">
            <img src="https://images.unsplash.com/photo-1474511320723-9a56873867b5" alt="Hayvan Resmi">
        </div>
        <div class="slide-11aa">
            <img src="https://images.unsplash.com/photo-1467003909585-2f8a72700288" alt="Yemek Resmi">
        </div>
        <div class="slide-11aa">
            <img src="https://images.unsplash.com/photo-1518770660439-4636190af475" alt="Teknoloji Resmi">
        </div>
    </div>


    </div>



`



const anchorElement = await waitForElm(".home-top-games")
const homepage = await waitForElm(".home-page-body")
const newElement = document.createElement("div");
newElement.innerHTML = newHTMLContent;
newElement.classList.add('x');
homepage.insertBefore(newElement,anchorElement);




