export default function DialogBox({ speaker, text, onNext, buttonLabel = 'Next ▶' }) {
  return (
    <div className="dialog-box">
      {speaker && <p className="dialog-speaker">{speaker}</p>}
      <p className="dialog-text">{text}</p>
      <button className="dialog-btn" onClick={onNext}>
        {buttonLabel}
      </button>
    </div>
  )
}
