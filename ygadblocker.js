function removeAds() {
    let divs = document.querySelectorAll('div');

    for (let div of divs) {
        if (div.className.includes("sponsor")) {
            div.remove();
        }
    }
}

removeAds();

setInterval(function () {
    removeAds();
}, 100)