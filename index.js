const fastify = require("fastify");
const { faker } = require("@faker-js/faker");
require("dotenv").config();
const app = fastify({
  logger: true,
});

const PORT = process.env.PORT || 4000;
const ADDRESS = process.env.ADDRESS || "127.0.0.1";
app.listen({
  port: PORT,
  host: ADDRESS,
});

app.get("/api/fake-users", (req, res) => {
  const users = Array.from({ length: 10000 }, (_, i) => {
    return faker.internet.email();
  });
  return res.send(users);
});

app.get("/api/spam", (req, res) => {
  const { times } = req.query;
  for (let i = 0; i < +times; i++) {
    fetch("http://128.199.17.161/api/fake-users", {
      method: "GET",
    })
      .then((response) => {
        console.log(response.status);
      })
      .catch((err) => console.log(err));
  }
  return res.send({ success: true });
});
