const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/customers', (req, res) => {
    res.send([
        {
            'id': 1,
            'image': 'https://placeimg.com/64/64/1',
            'name': 'Park',
            'birthday': '961222',
            'gender': '남자',
            'job': 'teacher'
        },
        {
            'id': 2,
            'image': 'https://placeimg.com/64/64/2',
            'name': 'James',
            'birthday': '201222',
            'gender': '남자',
            'job': 'college student'
        },
        {
            'id': 3,
            'image': 'https://placeimg.com/64/64/3',
            'name': 'Cathey',
            'birthday': '651222',
            'gender': '여자',
            'job': 'doctor'
        },
    ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));