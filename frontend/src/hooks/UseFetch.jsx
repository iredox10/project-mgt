import axios from "axios"
import { useEffect, useState } from "react"

export default function UseFetch(url) {
  const [data, setData] = useState()
  const [err, setErr] = useState()

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await axios(url)
        res && setData(res.data)
        console.log(data)
      } catch (err) {
        setErr(err)
        console.log(err)
      }
    }
    fetch()
  }, [url])
  return { data, err, setData, setErr }
}
