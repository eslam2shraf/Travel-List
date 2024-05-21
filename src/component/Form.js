import {useState} from'react';
export default function Form({onHandelAddItems}) {
    const [desc,setDesc]=useState("");
    const [qnum,setQnum]=useState(1);
   
  
    function handelSubmit(e){
      e.preventDefault();  
      if(!desc) return;
  
      const newitem={
        desc,
        qnum,
        id:Date.now(),
        packed:false,
        
      }
  
  
  
  
      onHandelAddItems(newitem)
      console.log(newitem)
      setDesc("");
      setQnum(1)
    }
    return (
      <form className="add-form" onSubmit={handelSubmit}>
        <h3>What do You Need For Your 😍 Trip ?</h3>
        <select value={qnum} onChange={(e)=>setQnum(Number(e.target.value))}>
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num} >
              {num}
            </option>
          ))}
        </select>
        <input  type="text" placeholder="item..." value={desc} onChange={(e)=>setDesc(e.target.value)}/>
        <button>add</button>
      </form>
    );
  }