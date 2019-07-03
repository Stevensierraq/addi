export const POST = async (url: string, payload: any) => {
  const request = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
      'Content-Type': 'application/json',
    },
  })

  return request.json()
}

export const GET = async (url: string) => {
  const request = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  return request.json()
}
