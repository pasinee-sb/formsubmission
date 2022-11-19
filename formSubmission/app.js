document.addEventListener("DOMContentLoaded", function () {
  const myform = document.querySelector("#myform");
  const brandInput = document.querySelector("input[name=brandname]");
  const colorInput = document.querySelector("input[name=color]");
  const fontInput = document.querySelector("input[name=fontsize]");

  myform.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log(brandInput.value, colorInput.value, fontInput.value);
    const newElement = document.createElement("p");
    newElement.innerText = brandInput.value;
    newElement.style.color = colorInput.value;
    newElement.style.fontSize = `${fontInput.value}px`;

    const newSection = document.querySelector("section");
    newSection.append(newElement);
  });
});
