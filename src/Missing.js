import { Link } from 'react-router-dom'

const Missing = () => {
  return (
    <main className='Missing'>
      <h2>page Not Found</h2>
      <p>Well, that's disappointing.</p>
      <p><Link to='/'>
        Visit Our HomePage
      </Link></p>
    </main>
  )
}

export default Missing