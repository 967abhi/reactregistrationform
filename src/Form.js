import React, { useEffect, useState } from 'react'

function  Form(){
    const data={name:"", email:"",password:""};
    const [inputData,setInputData]=useState(data);
    const [flag,setFlag]=useState(false);
    useEffect(()=>{
             console.log("Registered");
    },[flag])
    function hanldeData(e){
        setInputData({...inputData,[e.target.name]:e.target.value})
        console.log(inputData);
    }
    function handleSubmit(e){
        e.preventDefault();
        if(!inputData.name || !inputData.email || !inputData.password){
            alert("All fields are Mandatory ");
        }
        else{
            setFlag(true);

        }
    }
  return (
    <>
    <pre>{(flag)? <h2 className='ui-define'>Hello{inputData.name},You've Registered Successfully </h2>:""}</pre>
    <form action="" className='container' onSubmit={handleSubmit}>
       <div className="header">
        <h1>Registartion form </h1>
       </div>
       <div className="">
        <input type="text" placeholder='Enter your name ' name='name' value={inputData.name} onChange={hanldeData}></input>
       </div>
       <div className="">
        <input type="text" placeholder='Enter your email' name='email' value={inputData.email}onChange={hanldeData}></input>
       </div>
       <div className="">
        <input type="text" placeholder='Enter your password' name='password' value={inputData.password} onChange={hanldeData}></input>
       </div>
       <div>
        <button type='submit'> Submit </button>
       </div>

    </form>
    </>
  )
};

export default Form
