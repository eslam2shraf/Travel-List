import "./App.css";
import {useState} from 'react';
import Form from "./component/Form";
import Logo from "./component/Logo";
import PackingList from "./component/PackingList";
import Stats from "./component/Stats";
import Accourding from "./component/Accourding";
const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
];

/////////////////////////////////
function App() {
  const [items,setItems]=useState([]);

  function ClearAll(){

setItems([]);

  }

  function handelSetPacked(id){
    console.log(id)
setItems((items)=>items.map((item)=>item.id===id ? {...item , packed:!item.packed}:item))
  }
  function handelAddItems(item){

    setItems((items)=>[...items , item])
    
    }
    function x(id){
      // console.log(id)
      setItems((items)=>items.filter((item)=>item.id!==id));
      
    
        }
  return (
    <div className="App">
      <Logo />
      <Form  onHandelAddItems={handelAddItems}  />
      <PackingList items={items} x={x} handelSetPacked={handelSetPacked} ClearAll={ClearAll}/>
      <Accourding/>
      <Stats items={items} />
    </div>
  );
}
/////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////


export default App;
