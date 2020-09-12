import {useState, useEffect} from 'react'
import { API_KEY } from './keys';

const CONTEXT_KEY = "8d91816fccd4845a5"

const useGoogleSearch() {

    const [data,setData] = useState(null)

    useEffect(() => {
        const fetchData = async() => {
            fetch(
                `https://www.googleapis.com/customsearch/v1?keys=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
            )
            .then(res => res.json())
            .then(res => {
                setData(res)
            })
        }

        fetchData()

        return {data}

    },[term])
   
}

export default useGoogleSearch
