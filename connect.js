
//to test server 
const axios = require('axios')

axios.post('http://localhost:8080/send', {email})
.then((res) => {
    return res
})
.then(data => console.log(data))
.catch(e=>console.log(e))