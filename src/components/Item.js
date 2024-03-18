import React from "react";

function Item({ item, onUpdateItem, onDeleteItem }) {
  
  
  function handleAddToCartClick(){
    fetch(`http://localhost:4000/items/${item.id}`,{
      method: "PATCH",
      headers:{"content-type":"application/json"},
      body: JSON.stringify({
        isInCart : !item.isInCart
      })
    })
    .then(res=>res.json())
      .then(updatedItem=>onUpdateItem(updatedItem))
  }

  function handleDeleteClick(){
    fetch(`http://localhost:4000/items/${item.id}`, {
      method:"DELETE",
    })
    .then(res=>res.json())
    .then(res=>onDeleteItem(item))
  }

  return (
    <li className={item.isInCart ? "in-cart" : ""}>
      <span>{item.name}</span>
      <span className="category">{item.category}</span>
      <button onClick={handleAddToCartClick} className={item.isInCart ? "remove" : "add"}>
        {item.isInCart ? "Remove From" : "Add to"} Cart
      </button>
      <button className="remove" onClick={handleDeleteClick} >Delete</button>
    </li>
  );
}

export default Item;