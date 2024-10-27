function logingBtn(){
    console.log("click")
    var id = document.getElementById("email").value
    var pas = document.getElementById("pass").value
    console.log(pas,id)
    if ( !id  || !pas) {
        alert("required field")
    }
    
    // var isValid = email.indexOf('@gmail.com')
    // console.log(isValid)
    
    // if(isValid == -1){
    //     alert('Wrong Email')
    // }
    
    
    
    if ( pas.length == 8  ){
        alert(" pass valid")
    }
    else{alert("ener minimum 8 charter pas");
    }
    
    
    
    if(id === "bilawalr@gmail.com" && pas === "admin123"){
        alert("login succes")
        window.location.href =  './home.html'
    }
    else { 
         alert("login unsucces")}
    }