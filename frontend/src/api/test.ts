import { BACKEND_URL } from '@/config'
import axios from 'axios'

export const pingBackend = async () => {
  console.log(BACKEND_URL)
  const { data } = await axios.get(`${BACKEND_URL}/se`)
  return data
}
