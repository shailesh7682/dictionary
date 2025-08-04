const button = document.querySelector(".form_btn");
const input = document.querySelector(".form input");

if (button) {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    let content = input.value;
    console.log(content);
  });
}
