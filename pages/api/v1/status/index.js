function status (request, response) {
  response.status(200).json({saude:"OK!"})
}

export default status;
