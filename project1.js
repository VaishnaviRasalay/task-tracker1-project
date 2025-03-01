var form=document.getElementById('addForm');
var itemList=document.getElementById('items');
var filterText =document.getElementById('filter');
// Add event listener for keyup event
filter.addEventListener('keyup', filterItems);


//form submit event
form.addEventListener('submit',addItem);

//delete event
itemList.addEventListener('click',removeItem);

//filter event
filterText.addEventListener('keyup',filterItems);
//add item
function addItem(e){
    e.preventDefault();
    //get input value
  var newItem=document.getElementById('item').value;

  
  if(newItem.trim()!==''){

  //create new li element
var li=document.createElement('li');
//add class
li.className='list-group-item';
li.appendChild(document.createTextNode(newItem));

// create del button
var deleteBtn=document.createElement('button'); 

//add class name to deletbtn
deleteBtn.className='btn btn-danger btn-sm float-right delete';
//add text node
deleteBtn.appendChild(document.createTextNode('X'));
// append button to li
li.appendChild(deleteBtn);

//append li to list
itemList.appendChild(li);

 // Clear the input field after adding the item
 document.getElementById('item').value = '';

 
  }
}
//removeItem
function removeItem(e) {
    if (e.target.classList.contains('delete')) {
        if (confirm('Are you sure you want to delete this item?')) {
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

//filter items
function filterItems(e){
    //to lower case
    var text= e.target.value.toLowerCase();
   //get list
   var items=itemList.getElementsByTagName('li');
   //convert to an array
   Array.from(items).forEach (function(item){
    var itemName=item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text)!=-1){
        item.style.display='flex';

    }
    else{
        item.style.display='none';
   }
});
}