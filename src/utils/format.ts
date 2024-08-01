import dayjs from 'dayjs'
export const formatUTFTime = (utfString: string) => {
  const result = dayjs(utfString).format('YYYY-MM-DD HH:mm:ss')
  return result
}
