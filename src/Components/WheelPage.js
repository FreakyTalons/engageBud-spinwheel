import React, { useState } from 'react';

import spinnerArrow from "../assets/spinner-arrow.svg";
import spinnerWheel from "../assets/spinner-wheel.svg";

const rotTime =  Math.floor(Math.random()*10)*100+1500 // random time constant for wheel spin

export default function WheelPage ({setPage,setVal}){

    const[styles, setStyles] = useState("desktop:w-1/2 mx-auto");
    const[disp, setDisp] = useState(false);

    //assigning the attained Coupon value 
    let rotations = rotTime/750;
    let degVal = Math.floor((rotations - Math.floor(rotations))*360);
    if((degVal>0 && degVal<=30) || (degVal>330 && degVal<=360))
        setVal("30% Sitewide Off")
    if((degVal>30 && degVal<=90))
        setVal("Hot Chocolate Free With Tea")
    if((degVal>90 && degVal<=150))
        setVal("Free 50G Tea on Purchase of Rs.500")
    if((degVal>150 && degVal<=210))
        setVal("Buy 2 Effervescent Tablets & Get 1 Free")
    if((degVal>210 && degVal<=270))
        setVal("Free Coffee Mug on Purchase Rs.1000+")
    if((degVal>270 && degVal<=330))
        setVal("Buy 1 Get 1 Free")
    

    //handling click on Spin button
    const ctrlRotate = () =>
    {

        setStyles("desktop:w-1/2 mx-auto start-rotate")

        setTimeout(() => {
            setStyles("desktop:w-1/2 mx-auto start-rotate stop-rotate")
            setDisp(prevValue => !prevValue)
        }, rotTime)
        setTimeout(() => {
            setPage("CouponPage")
        }, 4000)
    }


    return(
        
        <div className='flex flex-col px-5 h-screen items-center justify-center'>
            <div className='mx-auto relative ' >
                
                <img id="wheel" className={styles} src={spinnerWheel} alt = "" />
                <img className='w-16 relative mx-auto top-neg50' src={spinnerArrow} alt = "" />
               
            </div>
            <div className='flex flex-row items-center'>
                <span className={disp?'text-6xl scale-animation0':"hidden"}>🎉</span>
                <button onClick={ctrlRotate} className='desktop:text-3xl relative font-bold desktop:py-5 btn-green w-40 text-2xl py-3 '>Spin</button>
                <span className={disp?"text-6xl scale-animation1":"hidden"}>🎉</span>
            </div>
            
        </div>

    )

}