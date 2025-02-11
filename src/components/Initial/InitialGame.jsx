import React, { useState } from 'react'
import Backwhite from '../../assets/img/initial_backwhite.svg'
import InitialStop from './InitialStop'
import InitialGuide from './InitialGuide'

const InitialGame = () => {
    const [answer, setAnswer] = useState('')
    const [stop, setStop] = useState(false)
    const [guide, setGuide] = useState(true)

    return (
        <>
            <div className='InitialGame_wrap'>
                <button onClick={() => (setStop(true))}><img src={Backwhite} alt="back button" /></button>
                <div className="main">
                    <div className="top">
                        <h4 className="count">1/5</h4>
                        <h1>ㅁㄹㅈㅅ</h1>
                    </div>
                    <div className="bottom">
                        <input type="text" value={answer} onChange={(e) => setAnswer(e.target.value)} placeholder='초성을 보고 장소를 입력해주세요' />
                        <button>완료</button>
                    </div>
                </div>
            </div>
            {stop ? (<InitialStop setStop={setStop} />) : (<></>)}
            {guide ? (<InitialGuide setGuide={setGuide} />) : (<></>)}
        </>
    )
}

export default InitialGame