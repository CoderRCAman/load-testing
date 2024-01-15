const fastify = require("fastify");
const { faker } = require("@faker-js/faker");
const app = fastify({
  logger: true,
});

const PORT = 4000;
app.listen({
  port: PORT,
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
