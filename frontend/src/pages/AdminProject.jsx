import { Link, useParams } from "react-router-dom"
import UseFetch from "../hooks/UseFetch"
import Title from "../components/Title"
import "../styles/year.css"
import FormInput from "../components/FormInput"

export default function Year() {
  const { id } = useParams()
  const { data: projects, err } = UseFetch(
    "http://localhost:3001/get-projects/" + id
  )
  console.log(projects)
  return (
    <>
      {projects && (
        <div className="year_title">
        <Title
          title={projects.year}
          subtitle={`list of ${projects.year} projects`}
        />
    <input type='search' placeholder="Search...." />

        </div>
      )}
      <div className='project_container'>
      {projects &&
        projects.projects.map((project) => (
          <div key={project._id} className="project">
            <h1 className="title">{project.title}</h1>
            <span>by</span>
            <div>
            {project.authors.map((author) => (
                <div key={author.regNo} className="author">
                <p>author name: {author.name}</p>
                <p>registration number: {author.regNo}</p>
              </div>
            ))}
            </div>
            <p>supervisor: {project.supervisor}</p>
            <Link to={`/abstract/${project._id}`}>
              <button>view abstact</button>
            </Link>
          </div>
        ))}
        </div>

        <form onSubmit={handleSubmit}>
            <FormInput />
        </form>
    </>
  )
}
