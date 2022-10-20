console.log("Script Working");

const input = document.getElementById("input");
const submit = document.getElementById("submit");

submit.addEventListener("click", addTodo )
input.addEventListener("keydown", (e) => {
  if (e.key === 'Enter') {
    addTodo();
}
})

function addTodo() 
{
  inputValue = input.value;
  if (inputValue.length == 0) {
    alert("Please enter a value");
  } else {
    let show = document.getElementById("show");
    let node = document.createElement("li");
    let span = document.createElement("span");
    let close = document.createElement("span");
    close.id = "close";
    close.className = "Close btn btn-sm btn-close font-bold";

    let edit = document.createElement("span");
    edit.className = "edit me-3";
    // edit.innerHTML = "&#xF4CA;";
    let i = document.createElement("i");
    i.className = " bi bi-pencil-square btn-sm btn"
    edit.appendChild(i);
    node.className = "List list-group-item my-2 border w-75 d-flex justify-content-between align-items-center"
    let node_text = document.createTextNode(inputValue);
    console.log(node_text);
    node.appendChild(node_text);
    show.appendChild(node);
    span.append(edit);
    span.append(close);
    node.append(span);

    input.value = null;

  }
  let list = document.querySelectorAll(".List");
  let edit_button = document.querySelectorAll(".edit");
  let close_button = document.querySelectorAll(".Close")

  for (let i = 0; i < close_button.length; i++) {
    close_button[i].onclick = function () {
      this.parentElement.parentElement.remove()

    };
  }
  for (let i = 0; i < edit_button.length; i++) {
    edit_button[i].onclick = function () {
      let li = this.parentElement.parentElement
      console.log(li.innerText);
      // this.parentElement.parentElement.value()
      input.value = li.innerText;
      this.parentElement.parentElement.remove()
    };
  }
}




