import React from 'react'
import { useNavigate } from 'react-router-dom';

const InitialResult = ({ setAnswer, setScore, score, page, setPage, setResult, quizanswer, useranswer, end, explanation }) => {
    const navigation = useNavigate()

    const onBack = () => {
        navigation(-1)
    }
    const Refresh = () => {
        window.location.reload();
    };

    return (
        <div className='InitialResult_wrap'>
            {quizanswer === useranswer ? (
                <div className='answer'>
                    <h4>정답!</h4>
                    <h3>{quizanswer}</h3>
                    <div className='text'>
                        <p>:</p>
                        <p>{explanation}</p>
                    </div>
                    <div className='btn'>
                        <button onClick={() => { setResult(false); setAnswer(''); setScore(score + 10); setPage(page + 1) }}>다음 문제</button>
                    </div>
                </div>
            ) : (
                <>{page === 4 ? (
                    <div className='result' >
                        <h4>- 총점 -</h4>
                        <h2>{score}점</h2>
                        <div>
                            <button onClick={() => { Refresh() }}>다시하기</button>
                            <button onClick={() => { onBack() }}>마치기</button>
                        </div>
                    </div>
                ) : (
                    <div className='answer'>
                        <h4>오답!</h4>
                        <h3>{quizanswer}</h3>
                        <div className='text'>
                            <p>:</p>
                            <p>{explanation}</p>
                        </div>
                        <div className='btn'>
                            <button onClick={() => { setResult(false); setAnswer(''); setPage(page + 1) }}>다음 문제</button>
                        </div>
                    </div>
                )}</>)}
        </div >

    )
}

export default InitialResult