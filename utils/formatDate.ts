import dayjs from 'dayjs'

export const convertDatetimeToISO8601Format = (dateString: string): string => {
  return dayjs(dateString).format('YYYY-MM-DDTHH:mm:ss')
}

export const convertDateToISO8601Format = (dateString: string): string => {
  return dayjs(dateString).format('YYYY-MM-DD')
}

export const convertDateToDisplayText = (dateString: string): string => {
  // TODO: i18nする
  return dayjs(dateString).format('YYYY/MM/DD')
}

export const convertDateToDataViewDisplayText =(dateString: string): string => {
  return dayjs(dateString).format('YYYY/MM/DD HH:mm')
}

export const convertLastDateDisplayText =(dateString1: string, dateString2: string): string => {
  if(dayjs(dateString1).isAfter(dayjs(dateString2))){
    return dayjs(dateString1).format('YYYY/MM/DD HH:mm')
  }
  return dayjs(dateString2).format('YYYY/MM/DD HH:mm')
}
