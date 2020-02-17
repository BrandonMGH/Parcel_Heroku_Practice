import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

/* PAGES */
import Main from './Main.js/Main.js'
import NextPage from './NextPage/NextPage.js'

const App = () => {
    return (
        <div>
           <Router>
               <Route path="/" exact component={Main} />
               <Route path="/NextPage" exact component={NextPage} />
           </Router>
        </div>
    )
}

export default App