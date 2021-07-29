//模拟接口

const express = require('express');

const app = express();

app.get('/api/list', (req, rep) => {

    rep.header("Access-Control-Allow-Origin", "*");
    rep.header("Access-Control-Allow-Methods", "GET,POST");
    rep.header("Content-type", "application/json;charset=utf-8");

    rep.json({
        code: 0,
        list: [
            { name: "java", id: 1 },
            { name: "javaScript", id: 2 },
            { name: "c#", id: 3 }
        ]
    })
})

app.listen(9094, () => {
    console.log('mock已启动')
})