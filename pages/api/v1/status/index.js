import database from 'infra/database.js';

async function status(request, response) {
  const updateAt = new Date().toISOString();

  const versionResult = await database.query('SHOW server_version');
  const psqlVersion = versionResult.rows[0].server_version;

  const maxConnectionsResult = await database.query('SHOW max_connections');
  const maxConnections = parseInt(maxConnectionsResult.rows[0].max_connections);

  const databaseName = process.env.POSTGRES_DB;
  console.log(`Banco de dados selecionado: ${databaseName}`);
  const openedConnectionsResults = await database.query({
    text: 'SELECT COUNT(*)::int FROM pg_stat_activity WHERE datname = $1;',
    values: [databaseName],
  });
  const openedConnections = openedConnectionsResults.rows[0].count;

  response.status(200).json({
    update_at: updateAt,
    dependencies: {
      database: {
        version: psqlVersion,
        max_connections: maxConnections,
        opened_connections: openedConnections,
      },
    },
  });
}

export default status;
