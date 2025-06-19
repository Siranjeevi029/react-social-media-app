
import Header from './Header'
import Footer from './Footer'
import Missing from './Missing'
import Home from './Home'
import Nav from './Nav'
import NewPost from './NewPost'
import PostPage from './PostPage'
import About from './About';
import { Route, Routes } from 'react-router-dom'

import EditPost from './EditPost'

import { DataProvider } from './contexts/DataContext'

const App = () => {

  return (
    <div className='App'>
      <DataProvider>
         <Header/>
      <Nav 

      />


      <Routes>
        <Route path='/' element={
          <Home
            
          />
        }></Route>
        <Route path='/post'>
          <Route index element={<NewPost
            
          />}>
          </Route>
          <Route path=':id' >
            <Route index element={<PostPage
           
          />}>
            

            </Route>
            <Route path='editpost' element={
              
              <EditPost
               
             />}>
            </Route>
          </Route>
        </Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='*' element={<Missing />}></Route>

      </Routes>
      
      <Footer />
      </DataProvider>
    </div>
  )
}

export default App