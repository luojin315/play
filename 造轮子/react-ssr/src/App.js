import React, { useState } from 'react'
import { Route } from 'react-router-dom'
import Index from './views'
import About from './views/about'
import User from './views/Home'
import NotFound from './views/NotFound'
import Login from './views/Login'


// export default (
//     <div>
//         <Route path="/" exact component={Index} />

//         <Route path="/about" exact component={About} />

//     </div>
// )

//改造成js的配置    获取组件

export default [
    {
        path: "/",
        component: Index,
        exact: true,
        key: "index",
    },
    {
        path: "/about",
        component: About,
        exact: true,
        key: "about",
    },
    {
        path: "/user",
        component: User,
        exact: true,
        key: "user",
    },
    {
        path: "/login",
        component: Login,
        exact: true,
        key: "login",
    },
    {
        component: NotFound,
        key: "notFound"
    }
]