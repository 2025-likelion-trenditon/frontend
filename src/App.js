import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './components/Section/Main'
import Mypage from './components/User/Mypage'
import Clothes from './components/Clothes/Clothes'
import Guide from './components/Guide/Guide'
import Initial from './components/Initial/Initial'
import Rank from './components/Rank/Rank'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Main />}></Route>
                <Route path='/clothes' element={<Clothes />}></Route>
                <Route path='/guide' element={<Guide />}></Route>
                <Route path='/initial' element={<Initial />}></Route>
                <Route path='/rank' element={<Rank />}></Route>
                <Route path='/mypage' element={<Mypage />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App