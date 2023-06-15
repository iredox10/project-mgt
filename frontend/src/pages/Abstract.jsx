import { useParams } from 'react-router-dom'
import UseFetch from '../hooks/UseFetch'

export default function Abstract() {
    const {id} = useParams()
    const {data:project,err} = UseFetch('http://localhost:3001/get-project/' + id)
    console.log(project)
  return (
    <>
    {project && 
    <div>
    <h1>{project.title}</h1>
    <p>abstract: {project.abstract}</p>
    </div>
}
    </>
  )
}
