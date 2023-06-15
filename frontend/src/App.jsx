import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/header/Header'
import Home from './pages/Home'
import Department from './pages/Department'
import Year from './pages/Year'
import Abstract from './pages/Abstract'
import Admin from './pages/Admin'
import AdminYear from './pages/AdminYear'
import AdminProject from './pages/AdminProject'
export default function App() {
  return (
    <>
    <Header />
    <Router>
        <Routes>
            <Route path='/' element={<Home /> } />
            <Route path='/department/:id' element={<Department /> } />
            <Route path='/year/:id' element={<Year /> } />
            <Route path='/abstract/:id' element={<Abstract /> } />


            <Route path='/admin/' element={<Admin /> } />
            <Route path='/admin-year/:id' element={<AdminYear /> } />
            <Route path='/admin-projects/:id' element={<AdminProject /> } />
        </Routes>
    </Router>
    </>
  )
}
