//这里的node代码  会用babel处理

import React from 'react'

import { renderToString } from 'react-dom/server'
import express from 'express'
import App from '../src/App'


const app = express();

app.get('/', (req, rep) => {

    const Page = <App title="react ssr测试"></App>;

    //把react组件，解析成html

    const content = renderToString(Page)

    rep.send(`
        <!DOCTYPE html>
        <html lang="en">
         <head>
          <meta charset="utf-8" />
          <title>react - ssr</title>       
         </head>
         <body>
          <div id="root">${content}</div>
          <script src="bundle.js"></script>
         </body>
        </html>
    `)
})

app.listen(9090, () => {
    console.log("服务已开启")
})