import React from 'react'
import Back from '../../assets/img/initial_back.svg'
import { useNavigate } from 'react-router-dom'

const InitialGuide = ({ setGuide }) => {
    const navigation = useNavigate()

    const onBack = () => {
        navigation(-1)
    }

    return (
        <div className='InitialGuide_wrap'>
            <button onClick={() => { onBack() }}><img src={Back} alt="back button" /></button>
            <div className="main">
                <p className='left blue'>주인공에게</p>
                <p>앞으로 순탄하게 물약 재료를 모으려면<br /> 우리가 갈 나라의 <strong className='blue'>장소</strong>에 관해 잘 알고 있어야 해냥!<br />내가 초성으로 문제를 낼테니 맞춰보라냥~</p>
                <p className='right blue'>고양이가</p>
                <div>
                    <button onClick={() => { setGuide(false) }}>다 맞춰주지!</button>
                </div>
            </div>
        </div>
    )
}

export default InitialGuide