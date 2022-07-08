import { Component } from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './components/Home'

export default class App extends Component {  
  render() {
    return (
      <Routes>
        <Route path='/'>
          <Route index element={<Home />} />

          {/* <Route element={<Home />} />
          <Route element={<Home />} />
          <Route element={<Home />} /> */}
        </Route>
      </Routes>
    )
  }
}
