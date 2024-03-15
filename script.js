const buttons = document.querySelectorAll(".btn");

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    document.body.style.backgroundColor = e.target.id;
    // console.log(`"btn clicked", ${btn.id}`);
  });
});
