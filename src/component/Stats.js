export default function Stats({items}) {
    const itemsNum= items.length;
    const itemsPacked=items.filter((item)=>item.packed).length;
    const pres= Math.round((itemsPacked / itemsNum)*100);
    return (
      <footer className="stats">
        {isNaN(pres) ?
           <em>Start Adding SomeItems To Your List 🚀</em>
        :
  
        pres===100 ?
          <em>You Got Every Thing Ready to Go ✈️</em>
         :
         <em>🎶You Have {itemsNum} Items on Your List ,and You already packed {itemsPacked}  ({pres}%)</em>
         
        }
      
       
      </footer>
    );
  }