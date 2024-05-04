let input = document.getElementById("task");
let add = document.getElementById("btn");
let list = document.getElementById("list");
add.addEventListener("click", () =>{
  if(input.value.trim() != ""){
    let item = document.createElement("li");
    item.innerText = input.value;
    let inCheck = document.createElement("input")
    inCheck.type = "checkbox";
    let btnDel = document.createElement("button")
    btnDel.innerText = "Delete"
    inCheck.style = "margin-left: 30px;"
    btnDel.style = "background-color: red; color: white; border: none; border-radius: 5px; padding: 5px; margin-left: 50px;"
    item.append(inCheck, btnDel)
    list.appendChild(item)
    input.value = "";

    inCheck.addEventListener("click", () =>{
      if(inCheck.checked){
        item.style.textDecoration = "line-through";
      }else{
        item.style.textDecoration = "none";
      }
    })
    btnDel.addEventListener("click", () =>{
      if(confirm("Are you sure you want to delete this task?")){
      list.removeChild(item)
      }
    })
  }
})