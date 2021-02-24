var url = 'https://randomuser.me/api/';
var avatar = document.querySelector('#avatar');
var fullname = document.querySelector('#fullname');
var username = document.querySelector('#username');
var email = document.querySelector('#email');
var city = document.querySelector('#city');

//Event Listener
var btn = document.querySelector('#btn');
btn.addEventListener("click", function(){
//make requests
fetch(url)
.then(handleErrors)
.then(parseJSON)
.then(updateProfile)
.catch(printError);             
});

// Functions
// Handle Errors
function handleErrors(res){
  if(!res.ok) {
    throw Error(res.status);
  }
  return res;
}

/*// Parse JSON */
function parseJSON(res){
  return res.json().then(function(parsedData){
    return parsedData.results[0];
  })
}

//update users

function updateProfile(data){
 fullname.innerText = data.name.first + " " + data.name.last;
  username.innerText = data.login.username;
  email.innerText = data.email;
  city.innerText = data.location.city;
  avatar.src = data.picture.medium;
}

function printError(err){
  console.log(err);
}
