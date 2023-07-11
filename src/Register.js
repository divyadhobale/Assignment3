import React from "react";
import  { useState } from "react";

function RegisterApp(){

const[name,setName]=useState();
const[email,setEmail]=useState();
const[number,setNumber]=useState();
const[gender,setGender]=useState();
const[select,setSelect]=useState();
const[password,setPassword]=useState();

const[selectedcity,setSelectedcity]=useState();


///states=["Maharashtra","Gujrat","Mp"]
const cities={"Maharashtra":["Nagpur","Mumbai","Pune"],
       "Gujrat":["Ahmedabad","Surat","Rajkot"],
        "Mp":["Bhopal","Indore","Ujjain"]}

 
function formSubmit(e){
   console.log(name);
   console.log(email);
   console.log(number);
   console.log(gender);
   console.log(password);
   console.log(select);
   e.preventDefault();

}
function radioHanle(rr){
   console.log(rr);
   setGender(rr.target.value)
}
function selecthandle(sh){
   console.log(sh)
   setSelect(sh.target.value)
}


 return(
   <div className="App">
    <h1>Welcome register....</h1>
    <br/>
    data is :{cities.Gujrat[2]},{cities.Mp[2]},{cities.Maharashtra[2]}

   

    <form onSubmit={formSubmit}>
      Name:<input type="text" placeholder="Enter Name"onChange={(e)=>{setName(e.target.value)}}/> <br/>
     Email: <input type="text" placeholder="Enter Email" onChange={(e)=>{setEmail(e.target.value)}}/> <br/>
     Password:<input type="password"placeholder="Enter Password" onChange={(e)=>{setPassword(e.target.value)}}/>  <br/>
      Contact No:<input type="number" placeholder="Enter Contact No" onChange={(e)=>{setNumber(e.target.value)}}/> <br/>
      Gender: <input type="radio" name="gender" value="male" onChange={radioHanle}/>Male
      <input type="radio" name="gender" value="female" onChange={radioHanle}/>female <br/>
    Qualification:<select onChange={selecthandle}>
         <option>--select--</option>
         <option>Post-Graduation</option>
         <option>Graduation</option>
          <option>HSC</option>
         <option>SSC</option>
         </select>
         <br/>
         Hobbies: Playing Cricket<input type="checkbox"/> Singing<input type="checkbox"/> Dancing<input type="checkbox"/>
         Cycling<input type="checkbox"/> Horseriding<input type="checkbox"/> <br/>
           
      
       <button type="Submit">Submit Form</button> 

      








    </form>
    
    


    







</div>
 )

};




export default RegisterApp;