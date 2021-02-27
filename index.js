const darkModeButton = document.getElementById("dark");

const toggleDarkMode = () => {
  document.documentElement.classList.toggle("dark");
};

darkModeButton.addEventListener("click", toggleDarkMode);
