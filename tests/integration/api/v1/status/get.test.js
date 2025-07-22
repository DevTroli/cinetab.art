test('GET em api/v1/status deve retornar status code 200', async () => {
  const response = await fetch('http://localhost:3000/api/v1/status');
  expect(response.status).toBe(200);
});

test('GET em api/v1/status deve retornar estrutura correta', async () => {
  const response = await fetch('http://localhost:3000/api/v1/status');
  const responseBody = await response.json();

  expect(responseBody.update_at).toBeDefined();
  expect(responseBody.dependencies).toBeDefined();
  expect(responseBody.dependencies.database).toBeDefined();

  // Testa formato da data
  const parsedDate = new Date(responseBody.update_at).toISOString();
  expect(responseBody.update_at).toEqual(parsedDate);
});

test('Database deve retornar propriedades corretas', async () => {
  const response = await fetch('http://localhost:3000/api/v1/status');
  const responseBody = await response.json();
  const database = responseBody.dependencies.database;

  // Verifica se as propriedades existem
  expect(database.version).toEqual('16.8');
  expect(database.max_connections).toEqual(100);
  expect(database.opened_connections).toEqual(1);

  // Verifica tipos de dados
  expect(typeof database.version).toBe('string');
  expect(typeof database.max_connections).toBe('number');
  expect(typeof database.opened_connections).toBe('number');
});

test('Database deve retornar valores válidos', async () => {
  const response = await fetch('http://localhost:3000/api/v1/status');
  const responseBody = await response.json();
  const database = responseBody.dependencies.database;

  // Testa valores lógicos
  expect(database.max_connections).toBeGreaterThan(0);
  expect(database.opened_connections).toBeGreaterThan(0);
  expect(database.opened_connections).toBeLessThanOrEqual(database.max_connections);
  expect(database.version).toMatch(/\d+/);
});

