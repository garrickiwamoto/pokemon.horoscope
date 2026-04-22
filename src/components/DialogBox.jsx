export default function DialogBox({ speaker, text, onNext, onBack, buttonLabel = 'Next ▶' }) {
  return (
    <div className="dialog-box">
      {speaker && <p className="dialog-speaker">{speaker}</p>}
      <p className="dialog-text">{text}</p>
      <div className="dialog-actions">
        {onBack && (
          <button className="dialog-back-btn" onClick={onBack}>
            ◀ Back
          </button>
        )}
        <button className="dialog-btn" onClick={onNext}>
          {buttonLabel}
        </button>
      </div>
    </div>
  )
}
