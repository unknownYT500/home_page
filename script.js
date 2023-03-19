alert("page working")

function myFunction(){

event.preventDefault()

var username  = document.getElementById("username").value;
var password = document.getElementById("password").value;
if(username == "shubham" && password == "shubham@2007"){
    console.log("yes")
    location.replace("logged_in.html")

}
else{
    console.log(username)
    location.replace("Sign_in.html")
}
}
    

