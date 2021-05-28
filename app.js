const express = require('express');
const path = require('path');
const ejsMate = require('ejs-mate');
const app = express();

app.engine('ejs', ejsMate)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


const timers = [
    {
        title: "Adv. English",
        desc: "HSC Paper 1",
        dueDate: "October 12, 2021 09:00:00",
        isWide: true
    },
    {
        title: "Adv. English",
        desc: "HSC Paper 2",
        dueDate: "October 13, 2021 09:00:00",
        isWide: false
    },
    {
        title: "Software Design and Development",
        desc: "HSC Exam",
        dueDate: "October 15, 2021 09:00:00",
        isWide: false
    },
    {
        title: "Mathematics Extension 2",
        desc: "HSC Exam",
        dueDate: "October 18, 2021 09:00:00",
        isWide: false
    },
    {
        title: "Mathematics Extension 1",
        desc: "HSC Exam",
        dueDate: "October 22, 2021 09:00:00",
        isWide: false
    },
    {
        title: "Physics",
        desc: "HSC Exam",
        dueDate: "October 29, 2021 09:00:00",
        isWide: false
    }
]

app.get('/', (req, res) => {
    res.render('index', { timers })
})
app.get('/full', (req, res) => {
    res.render('full')
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Serving on port ${port}`)
})