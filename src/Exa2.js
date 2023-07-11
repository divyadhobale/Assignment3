import React from "react"; 



function Ex2App(){

let user={
    "name":"Sagar", "age":23, "DOB":6/9/2005,
    "address":{"area_name":"Manish nagar","Plot_No":28},
    "hobbies":["Dancing","Singing","Horseriding","Reading"],
    "cities":{"Mp":["Chhindwada","Bhopal","Ujjain"],
             "Rajasthan":["Jaypur","Udaypur"]}
    
}
return(
    <div className="App">
 User name is:{user.name} && age is:{user.age}  <br/>
Hobbies of Sagar are:{user.hobbies[0]},{user.hobbies[2]} ,{user.hobbies[1]}<br/>
 Address of Sagar is:{user.address.Plot_No},{user.address.area_name}  <br/>
  City name of Sagar is:{user.cities.Mp[1]}{user.cities.Rajasthan[1]}


    </div>



);
}



export default Ex2App;