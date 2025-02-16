import React from 'react'
import { useNavigate } from 'react-router-dom'

const ClothesResult = ({ hat, dress, skin }) => {
    const navigation = useNavigate()

    const onBack = () => {
        navigation(-1)
    }

    return (
        <div className='ClothesResult_wrap'>
            <div className="main">
                <div className="say">
                    <p>
                        내 점수는 <strong className='red'>0점</strong>이다냥.<br />
                        옷이랑 장신구를 <br />
                        좀 더 신경써봐냥! <br />
                    </p>
                </div>
                <img className='hat' src={hat} alt="" />
                <img className='dress' src={dress} alt="" />
                <img className='character' src={skin} alt="" />
            </div>
            <div className="btn_box">
                <button>저장하기</button>
                <button onClick={() => { onBack() }}>마치기</button>
            </div>
        </div>
    )
}

export default ClothesResult