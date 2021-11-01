import React from "react";

function MyInfo(){
    return(
          <div>
          <h1>Nafla Saleh</h1>
          <p> Bachelor of Computer Science Graduation Year 2017 
            , 27 years ,Live in aljouf . </p>
            <ul>
              <li> Makkah</li>
              <li> Medina</li>
              <li>aljouf</li>
            </ul>
            <style jsx>{`
            body {
              margin: 0;
              padding: 0;
              font-weight: 400;
              line-height: 1.8;
              background:yellow;
  
              font-family: sans-serif;}
            h1 { 
              color: red;
  
            }
           {
             
            margin: 50px;
          }
          p {
            color: blue;
          }
        `}</style>
        <img src="logo192.png"/>
    </div> )}

export default MyInfo