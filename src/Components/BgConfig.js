import React, { useState } from 'react';
import EntryPage from './EntryPage';

import '../styles.css';
import topRight from '../assets/widget_top_right.svg';
import topLeft from '../assets/widget_top_left.svg';
import bottomRight from '../assets/widget_bottom_right.svg';
import bottomLeft from '../assets/widget_bottom_left.svg';
import CouponPage from './CouponPage';
import WheelPage from './WheelPage';

export default function BgConfig (){

    const [dispSpinWheel, setDispSpinWheel] = useState(true);
    const [dispPage, setDispPage] = useState("EntryPage");
    const [couponVal, setCouponVal] = useState("");

    //function to toggle between spinwheel widget and home screen
    const toggleView = () => 
    {
      setDispSpinWheel(prevValue => !prevValue);
    }

    //function to render different pages of the spin wheel widget
    const setPage = (value) =>
    {
      setDispPage(value)
    }

    //function to set the value of the offer won
    const setVal = (value) =>
    {
      setCouponVal(value)
    }

    return(
      <>
         <div className={dispSpinWheel?"hidden":" bg-[#93C3AC] flex flex-col w-full h-screen items-center"}>
            <h1 className='text-4xl text-center font-bold my-8'>Home Screen</h1>
            <button onClick={toggleView} style={{width:"350px"}} className='desktop:text-3xl font-bold desktop:py-5 btn-green text-2xl py-3 my-5'>Show Spin-Wheel</button>
         </div>

         <div className={dispSpinWheel?'bg-[#c6efc8] sans h-screen w-screen tablet:w-1/2 relative':"hidden"}>

            <img className=' absolute top-0 right-0 desktop:opacity-50 desktop:max-h-500 tablet:h-72 phone:h-52' src={topRight} alt=""/>
            <img className=' absolute top-4 left-0 desktop:opacity-50 desktop:max-w-3xl tablet:w-72 phone:w-52' src={topLeft} alt=""/>
            <img className=' absolute bottom-0 left-0 desktop:opacity-50 desktop:max-h-500 tablet:h-72 phone:h-52' src={bottomLeft} alt=""/>
            <img className=' absolute bottom-0 right-0 desktop:opacity-50 desktop:max-h-500 tablet:h-72 phone:h-52' src={bottomRight} alt="" />

            {dispPage === "EntryPage"?<EntryPage toggleView = {toggleView} setPage={setPage}/>
               :(dispPage === "WheelPage"? <WheelPage setPage={setPage} setVal={setVal} />
                  :(dispPage === "CouponPage"?<CouponPage toggleView = {toggleView} setPage={setPage} couponVal={couponVal}/>:null))}

         </div>

      </>
    )

}