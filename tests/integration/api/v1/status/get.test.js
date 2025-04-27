test("GET em api/v1/status deve retornar status code 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  console.log("A resposta da requisição GET está sendo: " + response)
  expect(response.status).toBe(200);
})
