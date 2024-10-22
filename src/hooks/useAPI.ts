import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { Response } from '../schema/index.z'

interface Filters {
  [key: string]: string | number | boolean
}

const useAPI = () => {
  const [filters, setFilters] = useState<Filters>({})
  const [searchField, setSearchField] = useState<string>('')
  const [keyword, setKeyword] = useState<string>('')
  const [sortBy, setSortBy] = useState<string>('')
  const [fields, setFields] = useState<string>('')
  const [page, setPage] = useState<number>(1)
  const [limit, setLimit] = useState<number>(20)

  const params: Record<string, string> = {
    ...(Object.keys(filters).length
      ? { filters: JSON.stringify(filters) }
      : {}),
    ...(searchField && keyword ? { searchField, keyword } : {}),
    ...(sortBy ? { sortBy } : {}),
    ...(fields ? { fields } : {}),
    page: page.toString(),
    per_page: limit.toString()
  }

  const query = `https://www.dripshop.live/api/tags/tag-details/pokemon?${new URLSearchParams(
    params
  ).toString()}`

  const { data, isLoading, isFetching, refetch } = useQuery({
    queryKey: [query, 'tag-details'],
    queryFn: async () => {
      const res = await axios.get(query)
      return res.data.data as Response
    }
  })

  return {
    data,
    isFetching,
    isLoading,
    setFilters,
    setSearchField,
    setKeyword,
    setSortBy,
    setFields,
    setPage,
    setLimit,
    filters,
    searchField,
    keyword,
    sortBy,
    fields,
    page,
    limit,
    refetch
  }
}

export default useAPI

