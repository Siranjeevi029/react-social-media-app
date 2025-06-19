
import { Link, Outlet } from 'react-router-dom'



const Norm = () => {
  return (



    <ul>
      <li><Link to="" >Home</Link></li>
      <li><Link to="about" >About</Link></li>

      <li><Link to="/new/postpage" >PostPage</Link></li>

      <Outlet />
    </ul>








  )
}

export default Norm