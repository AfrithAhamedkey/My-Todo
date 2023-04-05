import React,{useState} from 'react'

function Input() {

  const[newItem,setNewItem] = useState("");
  const[items,setItems]= useState([])
 
    function AddItem(){
      if(!newItem){
        alert("Enter an Item")
      }
    const item={
      id:Math.floor(Math.random()*1000),
      value:newItem
    };
    
  setItems(oldList =>[...oldList,item]);
  setNewItem("")
  console.log(items)
};

function deleteItem(id){
  const newArray = items.filter(item=> item.id!==id);
  setItems(newArray)
}


  return (
    <div className='container'>
        <input type='text' placeholder='Enter your works' onChange={e =>setNewItem(e.target.value)} value={newItem}/>
        <button type='submit'   onClick={()=>AddItem()}  id='add-button'>Add</button>


        <ul>
          {items.map(item=>{
            return(
              <li id='list-item' key={item.id}>{item.value} <button id='delete-button' onClick={()=>deleteItem(item.id)}>Delete</button></li>
            )
          })}
        </ul>

    </div>
  )
}

export default Input;