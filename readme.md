#<h1>Handling Requests in Login Form</h1>
<br>

* As we have seen in the login project after setting up the authorization with bearer token , we just have checked if the data status==200 then console log me sweetalert krwarhe hain ....but what to do in opposite case 

* There may be a case when my token is invalid then in that case i wanted to show the message that unauthorized error 

* STEPS FOR THE SAME 
 - go to first then and write it as then(response=>response.json())
   then((d)=>{
    if('error' in d)
    {
        console.log(d);
        if(d.error.status===401)
        {
            swal(d.error.name,d.error.message,'error')
        }
    }
    else {
        if(object.keys(d.data).length!==0)
        {
            swal("good job","data created successfully","success")
        }
    }
   })

 - There are some functions to focus on here what we have used 
 - (===) meaning strict comparision operator - this will check the value and type conversion also
 - response=>response.json() meaning it makes our data in readable format
 - if('error' in d) means if there is any error in our data recieved 
 - if(object.keys(d.data).length!==0)  means if our object length is not equal to zero toh data created successfully
<br>

* Now  using some functions as autoFocus . This is a function you can use with the input text whosemainl work is to place the pointer at the place where text should be filled 