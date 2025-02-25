import React, { useEffect } from 'react'
import Mypage from '../../assets/img/main/main_mypage.svg'
import { Link, useNavigate } from 'react-router-dom'

const Main = () => {
    const userId = JSON.parse(localStorage.getItem('userData') || '{}')?.id || '';
    const navigation = useNavigate()

    useEffect(() => {
        if (!(userId)) {
            navigation('/login')
        }
    }, [])

    return (
        <div className='Main_wrap'>
            <div className="header">
                <Link to='/mypage'>
                    <img src={Mypage} alt="mypage" />
                </Link>
            </div>
            <div className="main">
                <Link to='/clothes' className="clothes">
                    <h4>옷 입히기</h4>
                    <h1>그런 옷차림은<br />실례다냥</h1>
                </Link>
                <Link to='/initial' className="inital">
                    <h4>초성 맞히기</h4>
                    <h1>여행 가기 전엔<br />공부가 먼저다냥</h1>
                </Link>
                <div className='box'>
                    <Link to='/guide' className="guide"><h4>도감</h4></Link>
                    <Link to='/rank' className="rank"><h4>순위</h4></Link>
                </div>
            </div>
        </div>
  );
};

export default Main;
