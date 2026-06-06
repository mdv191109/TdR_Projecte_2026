
document.addEventListener("DOMContentLoaded", function () {

  let loader = document.getElementById("loader");

  if (!loader) {
    return;
  }

  loader.style.position = "fixed";
  loader.style.top = "0";
  loader.style.left = "0";
  loader.style.width = "100%";
  loader.style.height = "100%";
  loader.style.display = "flex";
  loader.style.alignItems = "center";
  loader.style.justifyContent = "center";
  loader.style.zIndex = "9999";

  loader.innerHTML =
    '<div style="' +
    'width: 50px;' +
    'height: 50px;' +
    'border: 6px solid #fefeff;' +
    'border-top: 6px solid transparent;' +
    'border-radius: 50%;' +
    'animation: spin 1s linear infinite;' +
    '"></div>';

  let style = document.createElement("style");

  style.textContent =
    "@keyframes spin {" +
    "0% { transform: rotate(0deg); }" +
    "100% { transform: rotate(360deg); }" +
    "}";

  document.head.appendChild(style);

});

window.addEventListener("load", function () {

  let loader = document.getElementById("loader");

  if (!loader) {
    return;
  }

  setTimeout(function () {

    loader.style.opacity = "0";
    loader.style.transition = "opacity 0.4s ease";

    setTimeout(function () {
      loader.style.display = "none";
    }, 400);

  }, 300);

});