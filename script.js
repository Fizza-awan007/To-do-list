let btn = document.querySelector("#btn");
let input = document.querySelector("#newtask");
let hidden = document.querySelector("#displaytask");
let taskContainer = document.querySelector("#cont2");

let taskarr = [];

btn.addEventListener("click", () => {
  const inputValue = input.value;
  console.log(inputValue);
  taskarr.push(inputValue);
  input.value = "";

  // Create element:

  const parentDiv = document.createElement("div");
  parentDiv.classList.add("task-container");

  const para = document.createElement("p");
  para.innerHTML = inputValue;
  parentDiv.appendChild(para);

  const buttonDiv = document.createElement("btndiv");
  buttonDiv.classList.add("btn-container");

  let editButton = document.createElement("button");
  editButton.innerHTML = "📝";
  buttonDiv.appendChild(editButton);

  let delButton = document.createElement("button");
  delButton.innerHTML = "&#10060";
  buttonDiv.appendChild(delButton);

  parentDiv.appendChild(buttonDiv);

  document.getElementById("cont2").appendChild(parentDiv);

  //edit button query
  editButton.addEventListener("click", () => {
    if (editButton.innerHTML === "📝") {
      const editInput = document.createElement("input");
      editInput.type = "text";
      editInput.value = para.innerHTML;
      editInput.style.width = "100%";
      editInput.style.padding = "8px";
      editInput.style.border = "1px solid #ccc";
      editInput.style.borderRadius = "4px";
      editInput.style.boxSizing = "border-box";
      parentDiv.replaceChild(editInput, para);
      editButton.innerHTML = "💾";
    } else {
      const updatedValue = parentDiv.querySelector("input").value.trim();
      para.innerHTML = updatedValue;
      parentDiv.replaceChild(para, parentDiv.querySelector("input"));
      editButton.innerHTML = "📝";
    }
  });

  //delete button query
  delButton.addEventListener("click", () => {
    taskContainer.removeChild(parentDiv);
  });
});
