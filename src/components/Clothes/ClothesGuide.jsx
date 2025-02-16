import React from 'react'
import Back from '../../assets/img/initial/initial_back.svg'
import { useNavigate } from 'react-router-dom'

const ClothesGuide = ({ setGuide }) => {
    const navigation = useNavigate()

    const onBack = () => {
        navigation(-1)
    }

    return (
        <div className='InitialGuide_wrap ClothesGuide_wrap'>
            <button onClick={() => { onBack() }}><img src={Back} alt="back button" /></button>
            <div className="main">
                <p className='left red'>주인공에게</p>
                <p><strong className='red'>중국</strong>에 물약을 만들 비밀 재료가 있다냥<br />제대로 갖춰 입어야 의심받지 않는다냥!!!<br />빨리 준비하라냥~</p>
                <p className='right red'>고양이가</p>
                <div>
                    <button onClick={() => { setGuide(false) }}>나만 믿어!</button>
                </div>
            </div>
        </div>
    )
}

export default ClothesGuide