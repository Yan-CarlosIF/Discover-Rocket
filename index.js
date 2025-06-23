function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle("light");
  document.querySelectorAll;

  const img = document.querySelector("#perfil img");

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/Avatar2.png");
  } else {
    img.setAttribute("src", "./assets/Avatar.png");
  }
}
