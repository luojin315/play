import React from 'react'
import { Route } from 'react-router-dom'



export function Status({ code, children }) {
    return <Route render={({staticContext}) => {
        if(staticContext){
            staticContext.statusCode = code
        }
        return children
    }}></Route>
}


export default function NotFound() {
    return (
        <Status code={404}>
            404-没有找到页面
        </Status>
    )
}
