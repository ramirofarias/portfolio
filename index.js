const darkModeButton = document.getElementById("dark");

const toggleDarkMode = () => {
  document.documentElement.classList.toggle("dark");
    document.querySelectorAll('.inverted').forEach((el) => {
      el.classList.toggle('invert')
    })

};

darkModeButton.addEventListener("click", toggleDarkMode);
