import { useEffect, useState } from 'react'

export function useFetch<T>(url: string) {
  const [isLoading, setIsLoading] = useState(false)
  const [apiData, setApiData] = useState<T>()
  const [serverError, setServerError] = useState<any>(null)

  useEffect(() => {
    setIsLoading(true)

    const fetchData = async () => {
      try {
        const resp = await fetch(url)
        const data: T = await resp.json()

        setApiData(data)
      } catch (error) {
        setServerError(error)
      }
    }
    setIsLoading(false)

    fetchData()
  }, [url])

  return { isLoading, apiData, serverError }
}
