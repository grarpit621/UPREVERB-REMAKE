function leftScroll() {
    const left = document.querySelector(".scroll-images");
    left.scrollBy(200, 0);
  }
  function rightScroll() {
    const right = document.querySelector(".scroll-images");
    right.scrollBy(-200, 0);
  }
  const btnright =document.getElementsByClassName(".right");
  btnright.addEventListener("click", rightScroll);