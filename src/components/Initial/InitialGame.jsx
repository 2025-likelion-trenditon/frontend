import React, { useEffect, useState } from 'react'
import Backwhite from '../../assets/img/initial/initial_backwhite.svg'
import InitialStop from './InitialStop'
import InitialGuide from './InitialGuide'
import InitialResult from './InitialResult'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const InitialGame = () => {
    const userId = JSON.parse(localStorage.getItem('userData')).id;
    const params = useParams()
    const [answer, setAnswer] = useState('')
    const [stop, setStop] = useState(false)
    const [guide, setGuide] = useState(true)
    const [result, setResult] = useState(false)
    const [quiz, setQuiz] = useState([])
    const [page, setPage] = useState(0)
    const [score, setScore] = useState(0)

    const onAnswer = (initialConsonantId) => {
        if (answer === '') {
            alert('정답을 입력해주세요!');
            return
        }

        axios.post('https://kavatar-api.duckdns.org/initial-consonant', {
            memberId: userId,
            initialConsonantId: initialConsonantId,
            userAnswer: answer
        })
            .then((res) => {
                console.log(res.status)
            })
            .catch((err) => {
                console.log(err)
            })

        setResult(true)
    }

    useEffect(() => {
        axios.get('https://kavatar-api.duckdns.org/initial-consonant', {
            params: { category: params.game }
        })
            .then((res) => {
                setQuiz([...res.data.data.initialConsonantResults])
            })
            .catch((err) => {
                console.log(err);
            });
    }, [params.game]);

    return (
        <>
            <div className='InitialGame_wrap'>
                <button onClick={() => (setStop(true))}><img src={Backwhite} alt="back button" /></button>
                <div className="main">
                    <div className="top">
                        <h4 className="count">{page + 1}/5</h4>
                        <h1>{quiz.length > 0 ? quiz[page].question : '로딩 중...'}</h1>
                    </div>
                    <div className="bottom">
                        <input type="text" value={answer} onChange={(e) => setAnswer(e.target.value)} placeholder='초성을 보고 장소를 입력해주세요' />
                        <button onClick={() => { onAnswer(quiz[page].initialConsonantId) }}>완료</button>
                    </div>
                </div>
            </div>
            {stop ? (<InitialStop setStop={setStop} />) : (<></>)}
            {guide ? (<InitialGuide setGuide={setGuide} />) : (<></>)}
            {result ? (<InitialResult setResult={setResult} setAnswer={setAnswer} setPage={setPage} page={page} score={score} setScore={setScore} quizanswer={quiz[page].answer} useranswer={answer} explanation={quiz[page].explanation} />) : (<></>)}
        </>
    )
}

export default InitialGame