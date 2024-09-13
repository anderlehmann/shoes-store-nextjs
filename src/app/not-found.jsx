export default function NotFoundPage() {
  const pageStyle = {
    backgroundColor: '#d4d4d4',
    width: '100dvw',
    height: '100dvh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontWeight: '500',
    color: '#323232',
  }

  return (
    <h2 style={pageStyle}>404 | Página não encontrada. <br></br> Em desenvolvimento...</h2>
  )
}