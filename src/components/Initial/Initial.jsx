import React from 'react'
import Back from '../../assets/img/initial_back.svg'
import Mypage from '../../assets/img/main_mypage.svg'
import Food from '../../assets/img/initial_food.svg'
import Place from '../../assets/img/initial_place.svg'
import Play from '../../assets/img/initial_play.svg'
import { Link } from 'react-router-dom'

const Initial = () => {
    return (
        <div className='Initial_wrap'>
            <div className="header">
                <button><img src={Back} alt="back button" /></button>
                <h1>초성 맞히기</h1>
                <Link to='/mypage'><img src={Mypage} alt="mypage" /></Link>
            </div>
            <div className="main">
                <Link to='/initialgame' className="food">
                    <img src={Food} alt="Food" />
                    <h1>전통 음식</h1>
                </Link>
                <Link to='/initialgame' className="place">
                    <img src={Place} alt="Place" />
                    <h1>전통 음식</h1>
                </Link>
                <Link to='/initialgame' className="play">
                    <img src={Play} alt="Play" />
                    <h1>전통 음식</h1>
                </Link>
            </div>
        </div>
    )
}

export default Initial