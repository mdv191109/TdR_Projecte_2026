// loader.js

document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("loader");

  if (!loader) return;

  // Basic loader style (in case CSS isn't defined yet)
  loader.style.position = "fixed";
  loader.style.top = "0";
  loader.style.left = "0";
  loader.style.width = "100%";
  loader.style.height = "100%";
  loader.style.display = "flex";
  loader.style.alignItems = "center";
  loader.style.justifyContent = "center";
  loader.style.zIndex = "9999";

  // Spinner element
  loader.innerHTML = `
    <div style="
      width: 50px;
      height: 50px;
      border: 6px solid #fefeff;
      border-top: 6px solid #00000000;
      border-radius: 50%;
      animation: spin 1s linear infinite;
    "></div>
  `;

  // Add animation if not already present
  const style = document.createElement("style");
  style.textContent = `
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `;
  document.head.appendChild(style);
});

// Hide loader when everything (images, CSS, etc.) is loaded
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  if (!loader) return;

  setTimeout(() => {
    loader.style.opacity = "0";
    loader.style.transition = "opacity 0.4s ease";

    setTimeout(() => {
      loader.style.display = "none";
    }, 400);
  }, 300); // small delay for smoother UX
});