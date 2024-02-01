//custom hooks - function

import { useEffect, useState } from "react"

const useFetch=(url)=>{
const[data,setData]=useState(null)
// calls the fetch when the pages load
    useEffect(()=>{
        // fetch returns promise
        fetch(url).then(res=>
            {
                // .json() -> to remove unnecessary data
                res.json().then(results=>{
                    setData(results)
                })
            })
    },[])
    return data
}

export default useFetch;