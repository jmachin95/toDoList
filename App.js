const addButton = document.querySelector(".addButton");
const removeButton = document.querySelector(".removeButton");

let itemText = document.getElementById("listItem").value;
let checked;

function removeItem(itemText){

  var list = document.getElementById('list'),
  items = Array.prototype.slice.call(list.childNodes),
  item;
  
  while (item = items.pop()) {
    if (item.firstChild && item.firstChild.checked) {
      list.removeChild(item);
        }
    }
}

addButton.addEventListener("click", () => {
  list = document.querySelector("ul");
  itemText  = listItem.value;

  list.innerHTML = list.innerHTML + ("<li><input onclick=\"removeItem()\" type=\"checkbox\" id=\"toggle-input\" class=\"checkbox\">"+ itemText+"</li>");
})



