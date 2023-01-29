const fetch = require("node-fetch");
const service_id = process.env.SERVICE_ID;
const template_id = process.env.TEMPLATE_ID;
const user_id = process.env.PUBLIC_KEY;
const accessToken = process.env.PRIVATE_KEY;
exports.handler = async function (event, context) {
  const { name, email, message } = JSON.parse(event.body);
  const data = {
    service_id: service_id,
    template_id: template_id,
    user_id: user_id,
    accessToken: accessToken,
    template_params: {
      from_name: name,
      from_email: email,
      message: message,
    },
  };
  const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (response.status === 200)
    return {
      statusCode: 200,
    };
  return {
    statusCode: 500,
  };
};
