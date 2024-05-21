import { useState } from "react";

const faqs = [
    {
      title: "Where are these chairs assembled?",
      text:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus."
    },
    {
      title: "How long to return my chair ?",
      text:
        "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus."
    },
    {
      title: "Do you ship to countries outside the EU?",
      text:
        "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!"
    }
  ];


export default function Accourding(){
  const[curOpen,setCurOpen]=useState()

    return (
        <div className="accordion">
       {faqs.map((e,i)=>
       <AccourdingItem title={e.title} text={e.text} num={i} key={e.i}  curOpen={curOpen}setCurOpen={setCurOpen}  />)}
              <AccourdingItem title="Component Uese For :" text="Allow React Developers To : " num={4} key="test"  curOpen={curOpen}setCurOpen={setCurOpen} >
             
             <ul>
                  <li><p>Break Up The UI into Componet </p></li>
                  <li><p>Break Up The UI into Componet </p></li>
                  <li><p>Break Up The UI into Componet </p></li>


             </ul>
              </AccourdingItem>

        </div>
      );



}
 function AccourdingItem({num , title ,text ,curOpen,setCurOpen ,children }){

const isOpen = num ===curOpen;

  function handeltoglle(){
   setCurOpen(isOpen? null : num);

  }

//onClick={(e)=>itemOpen(num) } 
    return (
        <div className={`item ${isOpen ? "open":""}`} onClick={handeltoglle}>
       <p className="number">{num <9 ? `0${num+1}`: num+1 }</p>
       <p className="title">{title}</p>
       <p className="icon"  >{isOpen?"-":"+"}</p>
       {isOpen &&
  <div className="content-box">{text}{children}</div>

       }
     


       
        </div>
      );



}