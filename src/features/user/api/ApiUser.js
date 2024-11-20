import { backendUrl } from "../../../utils/globalUrl";

export async function getUsers() {
  const url = backendUrl() + '/user'
  const response = await fetch(url, {
    headers: {
      "Accept": "application/json",
    },
    method: "GET"
  })
  
  return await response.json()
}

export async function postUser(formData) {
  const url = backendUrl() + '/user'

  const response = await fetch(url, {
    headers: {
      "Accept": "application/json", 
      'Content-Type': 'application/json',
    },
    "method": "POST",
    "body": JSON.stringify(formData)
  })
  return true
}

export async function getUser(id) {
  const url = `${backendUrl()}/user/${id}`
  const response = await fetch(url, {
    headers: {
      "Accept": "application/json",
    },
    method: "GET"
  })
  
  return await response.json()
}