import React, { useEffect, useState } from 'react'
import Title from '../components/Title'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'
import UseFetch from '../hooks/UseFetch'
import FormInput from '../components/FormInput'
import FormButton from '../components/FormButton'
import axios from 'axios'

export default function AdminYear() {
    const {id} = useParams()
    const navigate = useNavigate()
    const {data:department,err,setErr} = UseFetch('http://localhost:3001/get-department/' + id)
    // console.log(department)

    const [year, setYear] = useState('')
    const [error, setError] = useState('')

    const handleAddYear = async(e)=>{
      e.preventDefault()
      if(year === ''){
        setError('please put a valid number')
        return
      }
      try {
        const res = await axios.post('http://localhost:3001/add-year/' + id,{year})
        console.log(res.data);
        navigate('/admin-year/'+ id)
      } catch (err) {
        setError(err)
      }
    }
  return (
    <>
    {department && 
    <div>
        <Title title={`${department.fullName} projects`} subtitle={`list of ${department.fullName}  projects`}  />
        <div>
          {department.years.map(year =>(
            <div key={year._id}>
              <Link to={`/admin-projects/${year._id}`}>
             <p> {year.year} <span>projects</span> </p>
             </Link>
            </div>
          ))}
        </div>
    </div>
    }

    <form onSubmit={handleAddYear}>
      {error && <div>{error}</div>}
      <h1>add year</h1>
      <FormInput labelfor={'year'} labelName={'year'} type={'text'} placeholder={'year'} name={year} onchange={((e) => setYear(e.target.value))}/>
      <FormButton text={'add year'} />
    </form>
    </>
  )
}
