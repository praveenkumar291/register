function register(){
    event.preventDefault();
    var user=getValueById("username");
    var pass=getValueById("password");
    var conpass=getValueById("confirmpassword");
    var email=getValueById("email");
    var mobile=getValueById("mobile");

var user={
    user:user,
    pass:pass,
    conpass:conpass,
    emial:email,
    mobile:mobile,
}
console.log('user',user);

 function getValueById(id) {
     return document.getElementById(id).value
 }
}


