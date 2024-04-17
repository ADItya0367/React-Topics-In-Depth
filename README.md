HOW TO SETUP STRAPI API IN REACT JS 

In this lecture we will see that how we can use apis and integrate with react js and to setup backend 
--------------------------------------------------------------------------------------------------------------------
STEPS FROM START 

- install node js
-install npx by npm i -g npx
-install create-react-app  by npm i -g create-react-app
-npx create-react-app project_name
-you will see all folders on left hand side ...don't panic they are very easy to understand 
- now make a directory in src as components as in previous class we had made 
- after making a directory make a file/ better to call it as component ....make sure that the name is in capital letter 
- create a functional component or class componet in that file and again make sure that the name of component is similar to the file name ---these are some conventions ]
- after creating it just play with import and export as done in previous class 
--------------------------------------------------------------------------------------------------------------------

Now we have played well with react components and rendring things - now we have to setup API'S with React js 

SETUP STRAPI NOW 
-go to desktop and open git bash 
-write this command to create strapi app "(npm create-strapi-app@latest project_name)"
-you have to build after installing (in some case you don't need to use this ) run this command "npm run build" 
-in the default browser automatically a popup of strapi will be open and there you can register and a dashboard will appear 
-once you see the dashboard we have to install the documentation plugin in strapi for this go to that folder in which strapi is installed and run this command "npm run install documentation"
-now you are done with the initial startup
-Create a collection now in content-type-builder and create-new-collection-type
-select the names and api name 
-now select the fields which oyu want to include the data to be inserted 
-click on save 
-wait for restarting the application
- go to content manager 
- create new entries now 
- after creating entries don't forget to publish it else it will not be shown in apis 
-Now go to settings and go to roles in user and permission panel
-go to permission select that created folder and select all fields (as in public)
-click on save 
-now go to documentation and open it it will be redirected to swagger 
- go to created folder and to get api link in GET method 
- click on try it out
-click on execute you will get all details of the file that youve made 
-now you have to install postman - let me tell you that there are two ways to test api one is swagger and other is postman , swagger is a testing and documentation software while postman is only used to test apis ...so install it now bhai 
- create a collection and paste that link of api using GET method 
-now see that you have got your data in JSON format (Javascript object Notation)
 
-DO THESE THINGS AS OF NOW IN THE NEXT LECTURE WE WILL SEE THAT HOW TO CONNECT API WITH FRONTEND AND TO UPDATE IT WHEN ANY USER DO ANY ENTRY 

Byehh