import { Link } from "react-router-dom"
import UseFetch from "../hooks/UseFetch"
import Title from "../components/Title"
import '../styles/home.css'
export default function Home() {
    const {data:departments,err} = UseFetch('http://localhost:3001/get-departments')
  return (
    <div className="container">
      <div className="home_title">
    <Title title={'Departments'} subtitle={'list of departments in library'} />
    <input type='search' placeholder="Search...." />
    </div>
    <div className="department_container">
    {departments && departments.map(department => (
        <div key={department._id} className="department">
            <Link to={`/department/${department._id}`} className="link">
            <h1 className="full_name">{department.fullName}</h1>
            <p className="short_name">{department.shortName}</p>
            </Link>
        </div>
    ))}
    </div>
    </div>
  )
}
