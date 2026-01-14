const btn = document.getElementById("btn");
const output = document.getElementById("output");

btn.addEventListener("click", () => {
  fetch("./person.json")
    .then(response => response.json())
    .then(data => {
      output.innerHTML = `
        <p><b>Name:</b> ${data.name}</p>
        <p><b>Age:</b> ${data.age}</p>
        <p><b>Hobbies:</b> ${data.hobbies.join(", ")}</p>
      `;
    })
    .catch(error => {
      output.innerHTML = "Error loading data";
      console.log(error);
    });
});
