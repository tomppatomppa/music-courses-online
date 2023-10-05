import { BACKEND_URL } from '@/config'
import axios from 'axios'

export const getCloudfrontUrl = async () => {
  const { data } = await axios.get(`${BACKEND_URL}/video`)
  return data
}
