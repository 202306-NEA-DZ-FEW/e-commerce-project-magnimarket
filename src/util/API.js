export async function fetcher(apiRoute) {
  const url = "https://api.escuelajs.co/api/v1/" + apiRoute

  const options = {
    headers: {
      accept: "application/json",
    },
  }
  const response = await fetch(url, options)
  const data = await response.json()
  return data
}
