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
