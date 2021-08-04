//这里的node代码  会用babel处理

import React from 'react'

import { renderToString } from 'react-dom/server'
import express from 'express'
import routes from '../src/App'
import Header from '../src/component/Header'
import { StaticRouter, matchPath, Route } from 'react-router-dom';
import { Provider } from 'react-redux'
import { getServerStore } from '../src/store/store'

const store = getServerStore();
const app = express();
app.use(express.static('public'))

app.get('*', (req, rep) => {

    //server根据路由渲染的组件和loadData

    // 存储网络请求
    const promises = [];
    // use `some` to imitate `<Switch>` behavior of selecting only
    routes.some(route => {
        const match = matchPath(req.path, route);
        if (match) {
            const { loadData } = route.component;
            if (loadData) {

                /**
                 * !这一步可以规避reject导致不渲染并且可以捕捉错误显示
                 * !直接改promise.all改成finally不会保证数据一定返回
                 */
                // const promise = new Promise((resolve, reject) => {
                //     loadData(store).then(resolve).catch(resolve);
                // })
                // promises.push(promise)
                promises.push(loadData(store))
            }
        }
    })
    // ?官网模板
    // routes.some(route => {
    //     // use `matchPath` here
    //     const match = matchPath(req.path, route);
    //     console.log(match)
    //     if (match) promises.push(route.loadData(match));
    //     return match;
    // });

    //等所有网络请求成功后再渲染
    //另一个解决错误的方法：allSettled方法ES8
    //?https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled
    Promise.allSettled(promises).then(() => {
        //把react组件，解析成html

        const content = renderToString(
            <Provider store={store}>
                <StaticRouter location={req.url}>
                    <Header />
                    {
                        routes.map(route => <Route {...route} />)
                    }
                </StaticRouter>
            </Provider>
        )

        rep.send(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
            <meta charset="utf-8" />
            <title>react - ssr</title>       
            </head>
            <body>
            <div id="root">${content}</div>
            <script>
             window.__context = ${JSON.stringify(store.getState())}
            </script>
            <script src="/bundle.js"></script>
            </body>
            </html>
        `)
    })



})

app.listen(9090, () => {
    console.log("服务已开启")
})