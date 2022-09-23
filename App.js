const addButton = document.querySelector(".addButton");
const removeButton = document.querySelector(".removeButton");

let itemText = document.getElementById("listItem").value;
let cList;
let list;

function removeItem(){

  var list = document.getElementById('list'),
  items = Array.prototype.slice.call(list.childNodes),
  item;

  cList = document.getElementById('completedList');
  
  
  while (item = items.pop()) {
    if (item.firstChild && item.firstChild.checked) {
      list.removeChild(item);
      cList.innerHTML = cList.innerHTML + ("<li>"+item.innerHTML+"</li>");
    }
  }

  

  
}

addButton.addEventListener("click", () => {
  list = document.getElementById('list')
  itemText  = listItem.value;

  list.innerHTML = list.innerHTML + ("<li><input onclick=\"removeItem()\" type=\"checkbox\" id=\"toggle-input\" class=\"checkbox\" value="+itemText+">"+ itemText +"</li>");
})


function toggleShow(){
  document.querySelector('.completedSection').classList.toggle('active');
}



