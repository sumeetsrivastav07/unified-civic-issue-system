export const getRootMessage = (req, res) => {
  res.send("Unified Civic Issue Reporting Backend is Running");
};
export const handleTestPost = (req, res) => {
  console.log("Body:", req.body);

  res.json({
    message: "Data received successfully",
    data: req.body,
  });
};