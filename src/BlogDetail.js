
import React from "react";
import { useParams } from "react-router-dom";

function BlogDetailApp() {

     let param=useParams();
     console.log(param.id,param.text)
      
           return(
    <div className="App">
      
      <h1>User Details ...{param.id}</h1>
  
   
</div>

)


};


export default BlogDetailApp;

