function checkUser()
{ 
	let user=document.getElementById("users").value;
	let password=document.getElementById("password").value;

	var request={
		method:'POST',
		redirect:'follow',
		body: JSON.stringify({
			"Username": user,
			"Password":password,
		}),
		 
		// Adding headers to the request
		headers: {
			"Content-type": "application/json; charset=UTF-8"
		}
		
	};
	fetch("http://localhost:54266/api/Login", request)
	.then( res=>{
       return res.json();})
	    .then(data=> showstorage(data.token))
.catch(error=>console.log(error))

};

function showstorage(data)
{
if(data!=null && data!=undefined && data!="")
{   
	console.log(data);
	sessionStorage.setItem("token",data);
}
loc();

}
function loc()
{
if(sessionStorage.getItem("token")!=null)
{
window.location.href="dashboard.html";

}
else

{

alert("Login Credentials are wrong");

}

}