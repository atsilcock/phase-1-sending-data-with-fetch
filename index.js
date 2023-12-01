// Add your code here
function submitData(){
return fetch("http://localhost:3000/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
  },
  body: JSON.stringify({
    name: "Steve",
    email: "steve@steve.com"
  }),
})

.then(response => response.json())
.then(response => {
    console.log(response.id)
    document.body.append(response.id)
})

.catch(response => {
    document.body.append(response)
})

}
