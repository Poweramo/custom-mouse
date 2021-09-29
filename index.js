const mouse = document.querySelector(".mouse");

document.body.addEventListener("mousemove", (e) => {
  mouse.style.left = e.pageX + "px";
  mouse.style.top = e.pageY + "px";
});
