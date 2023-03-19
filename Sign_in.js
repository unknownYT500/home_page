alert("Sign-in page is ready!")

function myFunction(){
    event.preventDefault();

    var username  = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if(username == "shubham" && password == "shubham@2007"){
        console.log("yes")
        location.replace("logged_in.html")
    
    }
    else{
        alert("Wrong password or username")
        location.replace("Sign_in.html")
    }
}

function superuser(){
event.preventDefault()

    alert("opening super_user page")
    location.replace("about_superuser.html")
}