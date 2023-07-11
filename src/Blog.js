
import React from "react";
import { Link } from "react-router-dom";

function BlogApp(){
  const arr1=[{id:1, text:"This is 1 blog" },
            {id:2, text:"This is 2 blog"},
            {id:3,text:"This is 3 blog"},
            {id:4,text:"This is 4 blog"},]

  //arr1.map((arr1)=>{
    //console.log(data.id,data.username)})
   return(
        <div className="App">

{
    arr1.map((data)=>{
        return<div>Blog{data.id}{data.text}<Link to={`/blog/${data.id}`}>View</Link></div>
    })

}
</div>
    )
};




export default BlogApp;