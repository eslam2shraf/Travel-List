

export default function Item({ item , x ,handelSetPacked}) {
  
    return (
      <li>
        <input type="checkbox" value={item.packed} onChange={()=>handelSetPacked(item.id)}/>
        {console.log(item.packed)}
        <span style={item.packed ? { textDecoration: "line-through" } : {}}>
      
          {item.qnum} {item.desc}
        </span>
       {} 
        <button onClick={()=>x(item.id)}>❌</button>
      </li>
    );
  }