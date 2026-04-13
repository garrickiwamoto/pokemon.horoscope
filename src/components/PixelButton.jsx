export default function PixelButton({ children, onClick, disabled = false }) {
  return (
    <button
      className={`pixel-btn ${disabled ? 'disabled' : ''}`}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
