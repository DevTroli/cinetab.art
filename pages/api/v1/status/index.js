import database from "../../../../infra/database.js"

async function status (request, response) {
  const res = await database.query("SELECT 20+20+20+7 as aura;");
  console.log(res.rows);
  response.status(200).json({saude:"OK!"})
}

export default status;
