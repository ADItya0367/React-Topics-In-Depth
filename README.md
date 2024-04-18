In this Lecture we will see that how to connect and use strapi with our frontend ---

STEPS FROM BEGINNING ----
- install node js
-install npx by npm i -g npx
-install create-react-app  by npm i -g create-react-app
-npx create-react-app project_name
-you will see all folders on left hand side ...don't panic they are very easy to understand 
- now make a directory in src as components as in previous class we had made 
- after making a directory make a file/ better to call it as component ....make sure that the name is in capital letter 
- create a functional component or class componet in that file and again make sure that the name of component is similar to the file name ---these are some conventions ]
- after creating it just play with import and export as done in previous class 
---------------------------------------
Now we will start the small project
 * Go to app.js clear everything (keep only one functional component with return statement and a div )
 * Now inside return statement take a small form that takes input from user suppose their name or email instead

 * Now where button is defined take the event onClick={expression} ...curly braces are here called as expression and we can write javascript code inside it  

 * inside the expression {} we will be calling a function just to check weather my button is working properly opr not

 * Inside this function do console.log("ok Tested")

* Now  go to console log and check weather we are recieving the message ok tersted on browser
* Now inside the function in app at the place of variable create a hook variable using useState ...you know the syntax right ??

const[x,setx]=useState('value')compare with const[variable,function]=useState('initial data')

* Now again using onchange event handlers in <input type ="text" value ={studentName} onChange={()=>{}}>..means on writing value in black area this will be performed
* Now here we have used anonymous function inside mthe onChange event ()={"hello"}..just checking weather on message change we are recieving our message in cpnsole llog or not

* Now inside that onChange write this 
onChange={(e)={setStudentName(e.target.value)}}
....here e is an event setStudentName is a function we have made above through fat arrow  and we wre reading the text inserted by the user and printing it on console 

* Now we have to call the Api which is enjoying at strapi right....

* we will be using the event useEffect  for api calling dekho aao kaise hota hai ...this is mainly a hook in react......means jo bhi use word se strat ho usse aap hook bolskte ho ....try this useEffect above function syntax dekho 
useEffect(function,dependency)
function ke jagah fat arrow anonymous function do ...and dependency array me aayega

* ab api ko kaha call karwana hai ....wo call hoga function me jo humne fat arrow me banaya tha remember ??

* make sure that api/endpoint are both same and always are in JSON format 

* now use fetch api method to call it ....ab do not import it as it is a built in function in javascript 
fetch().then().catch().finally()..ab isko hum promise chain bolte hain...fetch is called below function...this promise chain is used to send data..

* now go to swagger documentation and try it out in POST method and link utha lo..paste in fetch (..link..)

* now create a variable data  and request body me jo hoga usko wha paste karo ....ye promise chain ke upar...change the name as already declared variable in useState

* earlier we have used onChange with anonymous function this process is called as two way binding menas kuch bhi change karoge to view or console me change hoga 

* how can we call api 
- fetch()-buuilt in hai javascript me 
- axios jo ki third party hai api calling ke liye 

* fetch ke first argument me maine link dala tha post wala and second argument comma dalke ek object create karenge usme ye sab dalo 
method:'POST',
headers:'copy from header and post'
body:JSON.stringify(data) copy n paste kro bas

* bas hogya kaam 
* now use sweetalert  npm install sweetalert --save and import swal from 'sweetalert';
* now inside then we will use anonymous function (d)={}
* inside catch error ka data aayega (e)={}
* finally me all ka data aayega (all)={}
* ab then ke andar console log krwao success 
* now in then block write if else that 
if my d.status==200 then sweetalert ko call karo swal("hurrey","created successfully","success")