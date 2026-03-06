exports.respond = functions.https.onRequest(async (req, res) => {
  const userQuery = req.body.query;
  // Simple AI placeholder logic
  const response = `AI says: '${userQuery}'`;
  res.send({ reply: response });
});
