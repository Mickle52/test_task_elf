import "./style.css";

const toggleButton = document.getElementById("toggle-button");

toggleButton.addEventListener("click", () => {
  toggleButton.classList.toggle("hidden");
  if (toggleButton.classList.contains("hidden")) {
    document.querySelector("#elf-form").style.display = "none";
    toggleButton.innerText = "Показать";
  } else {
    document.querySelector("#elf-form").style.display = "block";
    toggleButton.innerText = "Скрыть";
  }
});
