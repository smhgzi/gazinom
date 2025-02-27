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
    const newHTMLContent = `DENEME

`



const anchorElement = document.querySelector(".home-top-games")
const homepage = document.querySelector(".home-page-body")
const newElement = document.createElement("div");
newElement.innerHTML = newHTMLContent;
newElement.classList.add('x');
homepage.insertBefore(newElement,anchorElement);


console.log("gazinom.js")
});






