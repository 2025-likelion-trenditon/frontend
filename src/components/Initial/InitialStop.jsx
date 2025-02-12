import React from 'react'
import Delete from '../../assets/img/initial_delete.svg'
import Stop from '../../assets/img/initial_stop.svg'
import Going from '../../assets/img/initial_going.svg'
import { useNavigate } from 'react-router-dom'

const InitialStop = ({ setStop }) => {
    const navigation = useNavigate()

    const onBack = () => {
        navigation(-1)
    }

    return (
        <div className='InitialStop_wrap'>
            <div>
                <button onClick={() => { setStop(false) }}><img src={Delete} alt="delete button" /></button>
                <div className="box">
                    <button className='stop' onClick={() => { onBack() }}>
                        <img src={Stop} alt="stop" />
                        <h5>그만하기</h5>
                    </button>
                    <button>
                        <img src={Going} alt="stop" onClick={() => { setStop() }} />
                        <h5>계속하기</h5>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default InitialStop