import React, { useState } from "react"
import UseFetch from "../hooks/UseFetch"
import { Link } from "react-router-dom"
import axios from "axios"
import FormInput from "../components/FormInput"

export default function Admin() {
  const [fullName, setFullName] = useState("")
  const [shortName, setShortName] = useState("")
  // const [departments, setDepartments] = useState([])
  const {
    data:departments,
    err: error,
    setData,
    setErr,
  } = UseFetch("http://localhost:3001/get-departments")
  const addDepartment = async (e) => {
    e.preventDefault()
    if (fullName == "" && shortName == "") {
      setErr("please fill all the field")
      return
    }
    try {
      const res = await axios.post("http://localhost:3001/add-department", {
        fullName,
        shortName,
      })
      setData(res.data)
    } catch (err) {
      setErr(err.response.data)
      // console.log(err.response.data)
      console.log(error)
    }
  }
  return (
    <div>
      <div>
        <h1>list of departments</h1>
        {departments &&
          departments.map((department) => (
            <div key={department._id}>
              <Link to={`/admin-year/${department._id}`}>
                <p>{department.fullName}</p>
                <p>{department.shortName}</p>
              </Link>
            </div>
          ))}
      </div>

      <form onSubmit={addDepartment}>
        <h1>add department</h1>
        {error == undefined ? "" : <p>{error.toString()}</p>}
        <div>
        <FormInput labelfor={'fullname'} labelName={'fullname'} type={'text'} placeholder={'fullname'}  name={'fullname'} onchange={(e) => setFullName(e.target.value)} />
        <FormInput labelfor={'shortname'} labelName={'shortname'} type={'text'} placeholder={'shortname'}  name={'shortname'} onchange={(e) => setShortName(e.target.value)} />
        </div>
        <button
          type="button"
          onClick={addDepartment}
        >
          add department
        </button>
      </form>
    </div>
  )
}
