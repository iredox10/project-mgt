import { useParams } from 'react-router'
import {Link} from 'react-router-dom'
import UseFetch from '../hooks/UseFetch'
import Title from '../components/Title'
import '../styles/department.css'

export default function Department() {
    const {id} = useParams()
    const {data:department,err} = UseFetch('http://localhost:3001/get-department/' + id)
    console.log(department)
  return (
    <>
    {department && 
    <div>
        <div className="department_title">
    <Title title={`${department.fullName}`} subtitle={`list of project related to ${department.fullName} based on year`} />
    <input type='search' placeholder="Search...." />
    </div>
        <div className='department_container'>
          {department.years.map(year =>(
            <div key={year._id} className='department'>
              <Link to={`/year/${year._id}`} className='link'>
             <h1 className='year'> {year.year} <span>projects</span> </h1>
             </Link>
            </div>
          ))}
        </div>
    </div>
    }
    </>
  )
}
