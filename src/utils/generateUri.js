const generateUri = (url, path, params) => {
  let queryParams = ''

  if (params) {
    queryParams = Object.entries(params).reduce((string, [key, value]) => {
      if (string) string = string.concat('&')
      return string.concat(`${key}=${value}`)
    }, '')
    queryParams = '?' + queryParams
  }

  return url + path + queryParams
}

export default generateUri
