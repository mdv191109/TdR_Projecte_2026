window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  if (!loader) return;

  setTimeout(() => {
    loader.classList.add("hide");

    loader.addEventListener("transitionend", () => {
      loader.remove();
    });
  }, 750);
});