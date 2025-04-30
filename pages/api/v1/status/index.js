import database from "infra/database.js";

async function status(request, resposne) {
  const result = await database.query('SELECT 2 + 2 as soma;');
  console.log(result.rows)
  resposne.status(200).send("Ficando perigoso como desenvolverdor na web")
}

export default status
