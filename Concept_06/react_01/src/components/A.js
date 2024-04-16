import React, { useState } from 'react'
import B from './B'
// this is the import area 
// here we are wxporting this function to the index.js file
// and we are importing this function in the index.js file

// if you remember we know that we can export in two ways default and named export 
// so just create components and export them in the index.js file 
// and change the path in the index .html file which you want to run  
export default function A() {
  // creating hooks here
  const [x, setx] = useState(10)
turn (
    <React.Fragment>
      <h1>Hello brothers!!</h1>
       <B  name={x} />
    <img/>
      
    </React.Fragment>
  )
}
