var list=document.getElementById("list")


function addTodo(){
    var todo_item=document.getElementById("todo-item")
    //create li and add text in it
    var li=document.createElement('li')
    var liText=document.createTextNode(todo_item.value)
    li.appendChild(liText)
    li.setAttribute("class","lis")

   //add delete button by js
   var dltBtn=document.createElement("button")
   var dltText=document.createTextNode("Delete")
   dltBtn.setAttribute("class","bun")
   dltBtn.setAttribute("onclick","deleteItem(this)")
   dltBtn.appendChild(dltText)

   li.appendChild(dltBtn)





   
//create editbutton by js
var editBtn=document.createElement("button")
var editText=document.createTextNode("Edit")
editBtn.appendChild(editText)
li.appendChild(editBtn)
editBtn.setAttribute("class","bon")
editBtn.setAttribute("onclick","editItem(this)")


    list.appendChild(li)
    todo_item.value=""
}

function deleteItem(e){
    e.parentNode.remove()
    
}

function deleteAll(){
    list.innerHTML=""
}




function editItem(e){
  var val = e.parentNode.firstChild.nodeValue
  var editValue=prompt("edit your task",val)
  e.parentNode.firstChild.nodeValue =editValue
}