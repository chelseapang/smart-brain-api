const express = require('express');

const app = express();

app.get('/', (req, res)=> {
    res.send('this is working');
})

app.listen(3000, ()=> {
    console.log('Server is running on port 3000');
})

/*
/ --> res = this is working
/signin --> POST = success/fail
/register --> POST = user
/profile/:userId --> GET = user
/image --> put --> user

*/
