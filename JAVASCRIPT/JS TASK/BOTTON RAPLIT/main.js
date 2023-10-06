const btnEL = document.querySelector(".btn");

btnEL.addEventListener("mouseover", (Event) => {
    const x= Event.pageX - btnEL.offsetLeft;
    const y= Event.pagey - btnEL.offsetRight;

    btnEL.style.setProperty("--xPos", x + "px");
    btnEL.style.setProperty("--yPos", y + "px");

});