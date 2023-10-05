import { BACKEND_URL } from '@/config'
import axios from 'axios'

export const pingBackend = async () => {
  const { data } = await axios.get(`${BACKEND_URL}/se`)
  return data
}
