import React from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Main from './components/Section/Main'
import Mypage from './components/User/Mypage'
import Clothes from './components/Clothes/Clothes'
import Guide from './components/Guide/Guide'
import Initial from './components/Initial/Initial'
import Rank from './components/Rank/Rank'
import InitialGame from './components/Initial/InitialGame'
import Login from './components/User/Login'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/clothes' element={<Clothes />} />
                <Route path='/guide' element={<Guide />} />
                <Route path='/login' element={<Login />} />
                <Route path='/initial' element={<Initial />} />
                <Route path='/initialgame/:game' element={<InitialGame />} />
                <Route path='/rank' element={<Rank />} />
                <Route path='/mypage' element={<Mypage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
