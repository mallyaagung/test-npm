const axios = require('axios')
var http = require('http')

axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res => {
        console.log(`Status Code : `, res.status);
        const users = res.data;
        objIndex = users.findIndex((obj => obj.id == 1));
        users[objIndex].name = "Muhamad Allya Agung Syafira"
        http.createServer(function (req, res) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            for (user of users) {
                res.write('<li>Name : ' + user.name + '</li>')
            }
            res.end();
        }).listen(8080);
    }).catch(err => {
        console.log(`Error : ${err.message}`)
    });
