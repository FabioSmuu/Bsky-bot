export class API {
  static baseUrl = 'https://bsky.social/xrpc'

  static async request(method, atp, token = false, data = null) {
    const options = {
      method,
      mode: 'cors',
      referrerPolicy: "origin-when-cross-origin",
      headers: {
        "accept": "*/*",
        "content-type": "application/json",
      }
    }

    if (token) options.headers.Authorization = `Bearer ${token}`

    if (data) options.body = JSON.stringify(data)

    try {
      const response = await fetch(`${this.baseUrl}/${atp}`, options)
      const responseBody = await response.text()
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}, Response: ${responseBody}`)
      }
      return JSON.parse(responseBody)
    } catch (error) {
      console.error('API request error:', error)
      throw error
    }
  }

  static get(atp, token = false, data = null) {
    let queryString = data && Object.keys(data).map(key => {
      const value = Array.isArray(data[key]) ? data[key].map(value => encodeURIComponent(value)).join(',') : encodeURIComponent(data[key])
      return `${encodeURIComponent(key)}=${value}`
    }).join('&')

    return this.request('GET', `${atp}?${queryString}`, token)
  }

  static post(atp, token = false, data) {
    return this.request('POST', atp, token, data)
  }

  static put(atp, token = false, data) {
    return this.request('PUT', atp, token, data)
  }

  static delete(atp, token = false) {
    return this.request('DELETE', atp, token)
  }
}