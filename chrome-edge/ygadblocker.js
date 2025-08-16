function removeAds() {
    document.querySelectorAll('div[class*="sponsor"]').forEach(div => div.remove());

    // let divs = document.querySelectorAll('div');

   //  for (let div of divs) {
       // if (div.className.includes("sponsor")) {
         //   div.remove();
       // }
   //  }
}

removeAds();
