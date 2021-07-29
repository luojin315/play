import React, { useState } from 'react'
import { Route } from 'react-router-dom'
import Index from './views'
import About from './views/about'

export default (
    <div>
        <Route path="/" exact component={Index} />

        <Route path="/about" exact component={About} />

    </div>
)