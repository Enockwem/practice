import { useState } from 'react';

function AddForm({addValue}){
  const [item, setItem ] = useState('');
  const handleChange = (event) =>{
    setItem(event.target.value)
  }
  return(
    <div>
      <input type='text' placeholder='Enter item' onChange={handleChange}/>
      <button onClick={() => addValue(item)}>Add item</button>
    </div>
  )
}

function ListItems({ints}){
  const list = (items) => {
    console.log(items)
    return items.map((item, index )=> <li key={index}>{item}</li>)
  }
  return (
    <>
      <ul>{list(ints)}</ul>
    </>
  )
}

export default function Todo(){
  const [ items, setItems ] = useState([])

  const addValue = (item)=>{
    setItems(items => [...items, item]);
  }

  return(
    <>
      <AddForm addValue={addValue} />
      <p>Items:</p>
      <ListItems ints={items}/>
    </>
  )
}