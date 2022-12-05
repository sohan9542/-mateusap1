import React from "react";

const Cards = ({lifeLine, controlLifeLines, id}) => {
  return (
    <div className=" w-full flex items-center justify-center flex-col">
        <h1 className="  text-white pb-6 text-xl font-semibold">Life-Lines</h1>
      <div className=" lg:w-2/4 grid grid-cols-1  lg:grid-cols-4">
        <div className=" w-full h-60  rounded-md">
        {lifeLine?.first === true ? <div className=" flex flex-col gap-2">
          <img
            className=" w-full object-contain h-60   cursor-pointer"
            src="/images/A_card.png"
            alt=""
          />
          <p className=" text-hr text-center font-bold">Eliminate Half</p>
        </div> :
          <img
          onClick={()=>controlLifeLines(1, id)}
            className=" w-full object-contain  h-full cursor-pointer"
            src="/images/back2.jpg"
            alt=""
          />
          }
        </div>

        <div className=" w-full h-60  rounded-md">
        {lifeLine?.second === true ?   
          <div className=" flex flex-col gap-2">
         <img
            className=" w-full object-contain  h-60 cursor-pointer"
            src="/images/king.png"
            alt=""
          />
          <p className=" text-hr text-center font-bold">Get Tips</p>
        </div>:
          <img
          onClick={()=>controlLifeLines(2, id)}
            className=" w-full object-contain  h-full cursor-pointer"
            src="/images/back2.jpg"
            alt=""
          />
          }
        </div>
        <div className=" w-full h-60  rounded-md">
        {lifeLine?.third === true ?  
          <div className=" flex flex-col gap-2">
       <img
            className=" w-full object-contain  h-60 cursor-pointer"
            src="/images/joker.png"
            alt=""
          /> 
          <p className=" text-hr text-center font-bold">Skip</p>
        </div>:
          <img
          onClick={()=>controlLifeLines(3, id)}
            className=" w-full object-contain  h-full cursor-pointer"
            src="/images/back2.jpg"
            alt=""
          />
          }
        </div>
        <div className=" w-full h-60  rounded-md">
        {lifeLine?.four === true ?  
          <div className=" flex flex-col gap-2">
       <img
            className=" w-full object-contain  h-60 cursor-pointer"
            src="/images/queen.png"
            alt=""
          /> 
             <p className=" text-hr text-center font-bold">Most Percentage</p>
           </div>:
          <img
          onClick={()=>controlLifeLines(4, id)}
            className=" w-full object-contain  h-full cursor-pointer"
            src="/images/back2.jpg"
            alt=""
          />
          }
        </div>
      </div>
    </div>
  );
};

export default Cards;
