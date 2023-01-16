import React,{useState} from 'react';
import { CopyToClipboard } from "react-copy-to-clipboard"; // copy utility

import spinWheel from '../assets/wheeel.svg';
import spinWheelTab from '../assets/spinwheel-tab.svg';
import spinWheelPhone from '../assets/spinwheel-phone.svg';

export default function CouponPage ({toggleView, setPage, couponVal})
{

    const couponCode = "XAXPDF20";

    const [isCopied, setIsCopied] = useState(false);

    //copy to clipboard utility
    const onCopyText = () => {
        setIsCopied(true);
        alert("The code has been copied to clipboard!")
        setTimeout(() => {
        setIsCopied(false);
      }, 1000);
    };

    const handleClick = () => 
    {
        setPage("EntryPage");
        toggleView();
    }
   

    return(

        <>
        <img className=' absolute top-0 w-60 block abs-center desktop:hidden tablet:hidden' src={spinWheelPhone} alt="spinwheel" />
    
        <div className='centre-vert flex flex-row justify-around mx-auto max-w-screen-xl items-center tablet:justify-end tablet:pr-8'>
            <img className='w-2/5 tablet:hidden phone:hidden' src={spinWheel} alt="spinwheel"/>
            <img className='w-40 absolute left-0 desktop:hidden phone:hidden z-neg cust:opacity-50' src={spinWheelTab} alt="spinwheel" />

           <div className='flex flex-col desktop:space-y-6 space-y-4 phone:mt-4 desktop:max-w-md text-center phone:px-10 tablet:w-80'>

                <h1 className='desktop:text-3xl text-2xl font-bold'>Congrats! You Won:</h1>

                <h1 className='desktop:text-5xl text-4xl font-bold'>{couponVal}</h1>

                <div className=' flex flex-row self-center w-full'>
                    <div className='code-div h-24 phone:h-20  my-1 w-3/4 desktop:text-4xl text-3xl font-bold'>
                        <p className='centre-vert'>{couponCode}</p>
                    </div>

                    <CopyToClipboard text={couponCode} onCopy={onCopyText}>
                    <div className='copy-div h-24 phone:h-20 my-1 w-1/4 text-xl font-bold cursor-pointer'>
                        <button className='centre-vert'>COPY</button>
                    </div>
                    </CopyToClipboard>

                    
                </div>

                <CopyToClipboard text={couponCode} onCopy={onCopyText}>
                    <button onClick={handleClick} className='desktop:text-3xl font-bold py-5 btn-green w-full text-2xl'>Close Panel & Copy</button>
                </CopyToClipboard>
                

                <p className='text-xs font-light italic color-green'>*You can claim your coupon for 10 minutes only!</p>
                
           </div> 

            

        </div>
    </>

    )

}