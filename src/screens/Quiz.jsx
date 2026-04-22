import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { questions, calculateType } from '../data/quizData'
import PixelButton from '../components/PixelButton'

export default function Quiz() {
  const navigate = useNavigate()
  const { state } = useLocation()
  const inviterRef = state?.inviterRef || null
  const inviterType = state?.inviterType || null
  const name = state?.name || null
  const email = state?.email || null
  const [currentQ, setCurrentQ] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState([])
  const [selected, setSelected] = useState(null)

  const question = questions[currentQ]
  const isLast = currentQ === questions.length - 1

  function handleSelect(answer) {
    setSelected(answer)
  }

  function handleNext() {
    if (!selected) return
    const newAnswers = [...selectedAnswers, selected]

    if (isLast) {
      const type = calculateType(newAnswers)
      navigate('/results', { state: { type, inviterRef, inviterType, name, email } })
    } else {
      setSelectedAnswers(newAnswers)
      setCurrentQ(q => q + 1)
      setSelected(null)
    }
  }

  function handleBack() {
    if (currentQ === 0) {
      navigate('/onboarding', { state: { name, email } })
    } else {
      setCurrentQ(q => q - 1)
      setSelectedAnswers(a => a.slice(0, -1))
      setSelected(selectedAnswers[currentQ - 1] || null)
    }
  }

  return (
    <div className="screen-container">
      <div className="quiz-header">
        <span className="progress-text">Question {currentQ + 1} / {questions.length}</span>
        <div className="progress-bar-bg">
          <div
            className="progress-bar-fill"
            style={{ width: `${((currentQ + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      <div className="quiz-box">
        <p className="quiz-question">{question.question}</p>

        <div className="answer-list">
          {question.answers.map((answer, i) => (
            <button
              key={i}
              className={`answer-btn ${selected === answer ? 'selected' : ''}`}
              onClick={() => handleSelect(answer)}
            >
              <span className="answer-cursor">{selected === answer ? '▶' : '◇'}</span>
              {answer.text}
            </button>
          ))}
        </div>

        <div className="quiz-footer">
          <button className="dialog-back-btn" onClick={handleBack}>◀ Back</button>
          <PixelButton onClick={handleNext} disabled={!selected}>
            {isLast ? 'Finish ▶' : 'Next ▶'}
          </PixelButton>
        </div>
      </div>
    </div>
  )
}
