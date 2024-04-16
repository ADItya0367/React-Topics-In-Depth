import React, { Component } from 'react'

export default class B extends Component {
  render() {
    return (
      
        <>
        <h1>My name is Aditya </h1>
        <h2>I am Learning React js in Depth</h2>
        </>
      
    )
  }
}

// here i have created a class component and i have exported it to the A.js file
// whenever you will change something it will automatically change in the A.js file and in browser too - this concept is 
// called as HOT RELOADING .............

// now test yourself by creating a new component and exporting it to the A.js file and see the changes in the browser