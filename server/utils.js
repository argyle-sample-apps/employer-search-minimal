export const getAuthHeaders = () => {
  const authString =
    process.env.ARGYLE_API_KEY + ":" + process.env.ARGYLE_API_SECRET;

  const authToken = Buffer.from(authString).toString("base64");

  return {
    Authorization: "Basic " + authToken,
    "Content-Type": "application/json",
  };
};
