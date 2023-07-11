import React from "react";
import { Outlet,Link } from "react-router-dom";

function Layout(){
 return(
<div>
  <Link to ='/ex2page'>Ex2</Link> <br/>

 <Link to ='/homepage'>Home</Link> <br/>
 <Link to ='/aboutpage'>About</Link> <br/>
 < Link to ='/registerpage'>Register</Link> <br/>
<Link to ='/blogpage'>Blog</Link> <br/>
<Link to ='/blogDetail/:id'>BlogDetail</Link> <br/>

<Outlet/>
</div>
)
};

export default Layout;
