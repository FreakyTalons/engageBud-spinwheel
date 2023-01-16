import React, { useState } from 'react';
import api from "../API/database"; //axios support

import spinWheel from '../assets/wheeel.svg';
import spinWheelTab from '../assets/spinwheel-tab.svg';
import spinWheelPhone from '../assets/spinwheel-phone.svg';
import emailIcon from '../assets/email-icon.svg';
import phoneIcon from '../assets/phone-icon.svg';

export default function EntryPage ({toggleView, setPage}){

    const [info, setInfo] =useState({email:"", phoneNo:"", msgConsent: false})
    const [validEmail, setValidEmail] = useState(false);
    const [validPhno, setValidPhno] = useState(false);
    const [msg, setMsg] = useState("")

    const handleChange = (event) =>
    {
        const {name,value} = event.target;

        if(name === "email")// email validation check
        {
            let validRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

            if(value.match(validRegex))
                setValidEmail(true)
            else
                setValidEmail(false)
        }

        if(name === "phoneNo")//phone number validation check
        {
            let validRegex = /^((\+*)((0[ -]*)*|((91 )*))((\d{12})+|(\d{10})+))|\d{5}([- ]*)\d{6}$/;

            if(value.match(validRegex))
                setValidPhno(true)
            else
                setValidPhno(false)
        }

        //tracking state of form elements
        setInfo((prevValue) => {
            return {
              ...prevValue,
              [name]: value
            };
          });
    }

    //handling checkbox state changes
    const handleCheckboxClick = () =>
    {
        setInfo ((prevValue) =>
         {
            return {
                ...prevValue,
                msgConsent: !prevValue.msgConsent
            };
         });
    }

    //handling form submission upon successfull validation of entries
    const handleSubmitClick = () =>
    {
        if(validEmail && validPhno)
            {
                // un-comment the below code block (lines 68->82) and follow the steps in README to run the server locally and see the REST API request in action
                /* const setData = async (info) => {
                    const request = { ...info };
                    let response;
                    try {
                      response = await api.post("/users", request);
                      if(response.status === 201)
                      {
                        setInfo({email:"", phoneNo:"", msgConsent: false})
                        setPage("WheelPage")
                      }
                    } catch (err) {
                      setMsg(err.response.data + "!");
                    }
                  };
                  setData(info);
                 */
                
                setPage("WheelPage") // comment out this line when un-commenting the above code block
                setMsg("")
            }
        if(!validEmail)
            {
                setMsg("Kindy enter a valid values.")
                setInfo(prevValue => ({...prevValue, email:""}))
            }
        if(!validPhno)
            {
                setMsg("Kindy enter a valid values.")
                setInfo(prevValue => ({...prevValue, phoneNo:""}))
            }
    }

    return(
    <>
        <img className=' absolute top-0 w-60 block abs-center desktop:hidden tablet:hidden' src={spinWheelPhone} alt="spinwheel" />
    
        <div className='centre-vert flex flex-row justify-around mx-auto max-w-screen-xl tablet:items-center tablet:justify-end tablet:pr-8'>
            <img className='w-2/5 tablet:hidden phone:hidden' src={spinWheel} alt="spinwheel"/>
            <img className='w-40 absolute left-0 desktop:hidden phone:hidden z-neg cust:opacity-50' src={spinWheelTab} alt="spinwheel" />

            

            <div className='space-y-4 flex flex-col desktop:max-w-md phone:px-5 tablet:w-72 phone:mt-5'>

                <h1 className='desktop:text-4xl phone:text-3xl tablet:text-2xl font-bold'>This is how EngageBud looks like in action!</h1>

                <div  className='w-full cust-border bg-[#ffffff] flex flex-row'>
                    <img className='w-5 m-5' src={emailIcon} alt=""/>
                    <div className='flex flex-col'>
                        <p className='desktop:py-2 text-lg py-1 text-left'>Email<span style={{color:"red"}}>*</span></p>
                        <input style={{color:validEmail?"green":"red"}} className='mb-1' type="email" placeholder="johndoe@email.com" name="email" value={info.email} onChange={handleChange}/>
                    </div>
                </div>

                <div className='w-full cust-border bg-[#ffffff] flex flex-row'>
                    <img className='w-5 m-5' src={phoneIcon} alt=""/>
                    <div className='flex flex-col'>
                        <p className='desktop:py-2 text-lg py-1 text-left'>Phone number<span style={{color:"red"}}>*</span></p> 
                        <input style={{color:validPhno?"green":"red"}} className='mb-1' type="text" placeholder='+91 98256xxxxx' name="phoneNo" value={info.phoneNo} onChange={handleChange}/>
                    </div>
                </div>

                <div className='border-black flex flex-row'>
                    <input className='ml-3' type="checkbox" name="msgConsent" value={info.msgConsent} onChange={handleCheckboxClick} />
                    <p className='text-sm p-3 phone:p-2'>I agree to receiving recurring automated messages at the number I have provided. <br/> Consent is not a condition to purchase.</p>
                </div>

                <button onClick={handleSubmitClick} className='desktop:text-3xl font-bold desktop:py-5 btn-green w-full text-2xl py-3'>Try your Luck</button>

                <p className='text-xs font-light italic phone:text-center'>*You can spin the wheel only once! <br className='desktop:hidden tablet:hidden'/> *If you win, you can claim your coupon for 10 minutes only!</p>

                <div className='flex flex-row self-end align-center phone:self-center'>
                    <p className='font-bold text-lg'>No, I don't feel lucky</p>
                    <i className="fa-solid fa-2x fa-xmark px-2 cursor-pointer" onClick={toggleView}></i>
                </div>
                
                <p style={{color:"red"}} className='text-center'>{msg}</p>

            </div>

        </div>
    </>
    )

}