
/* eslint-disable react/jsx-key */
import { useState } from "react";
import Cart from "../Cart/Cart";
const Card = ({ useData }) => {
    const [allCard ,setAllCard] =useState([])
    const [total,setTotal]=useState(0)
    const [totalCredit,setTotalCredit]=useState(0)
    const [totalRemaining,setTotalRemaining]=useState(0)

    const handelButton =(cards)=>{
        let count=total;
        let creditCount =cards.durationHours;
        let remainingCount =cards.durationHours;
        
        const isTrue =allCard.find((item)=>item.id===cards.id)
        if(isTrue){
            return alert("This is ")
        }else{
            count =count + cards.price ;
            allCard.map((newItem)=>(
                creditCount =creditCount + newItem.durationHours
            ))
             
            remainingCount= 20 - creditCount ;
            if(creditCount > 20){
                return alert("Time Ses")
            }else{
            setTotalRemaining(remainingCount);
            setTotal(count)
            setTotalCredit(creditCount)
            const newAllData =[...allCard,cards]
            setAllCard(newAllData)
        }
        }
        console.log("Total",creditCount);
        console.log(remainingCount);
    }
    return (
        <div className="flex container mx-auto gap-14 ">
            <div className=" w-4/5 mb-20">
                <div className="grid grid-cols-3 gap-5 ">
                    {
                        useData.map((cards, indx) =>
                            <div key={indx} className="shadow-xl rounded-lg bg-white" >
                                <figure className=" ">
                                    <img className="w-full rounded-xl  p-4" src={cards.image} />
                                </figure>
                                <h2 className="text-xl font-bold text-center">{cards.name}</h2>
                                <h2 className="text-xl font-bold text-justify text-gray-500  p-5">{cards.details}</h2>
                                <div className="flex justify-between ">
                                    <div className="flex gap-3 items-center p-2">
                                        <h1><span>💲</span></h1>
                                        <h1 className="text-xl font-medium">Price : <span>{cards.price}</span></h1>
                                    </div>
                                    <div className="flex  p-2 items-center gap-3">
                                        <h1>📖</h1>
                                        <h1 className="text-xl font-medium">Credit : <span>{cards.durationHours} hr</span></h1>
                                    </div>
                                </div>
                                <div className="p-10">
                                <button onClick={()=>handelButton(cards)} className="btn btn-primary w-full p-5">Select</button>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>

            <div>
                <Cart allCard={allCard}></Cart>
            </div>
        </div>
    );
};

export default Card;