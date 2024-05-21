import { useState } from "react";
import Item from "./Item";

export default function PackingList({items,x,handelSetPacked , ClearAll}) {
    const [sortBy,setSortBy]=useState("input")
  let sortedItems;
    if(sortBy==="input") sortedItems=items;
    if(sortBy==="desc") sortedItems=items.slice().sort((a,b)=>a.desc.localeCompare(b.desc));
    if(sortBy==="packed") sortedItems=items.slice().sort((a,b)=>Number(a.packed)-Number(b.packed));
    return (
      <div className="list">
        <ul>
          {sortedItems.map((item) => (
            <Item item={item} x={x}  key={item.id} handelSetPacked={handelSetPacked}  />
          ))}
        </ul>
        <div className="actions">
        
        <select value={sortBy} onChange={(e)=>setSortBy(e.target.value)}>
        <option value="input">Sort By Input Order</option>
        <option value="desc">Sort By Input Alph </option>
  
        <option value="packed">Sort By Comblete</option>
  
  
        </select>
        <button onClick={ClearAll}> Clear List</button>
  
  
        </div>
      </div>
    );
  }