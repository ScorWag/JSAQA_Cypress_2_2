const users = require("../fixtures/users.json");
beforeEach(() => {
  cy.createUsers(users);
});

afterEach(() => {
  cy.deleteUsers(users);
});

it("should change user data", () => {
  const testUser = users[0];
  testUser.password = "cool_password";
  cy.request({
    method: "PUT",
    url: `https://petstore.swagger.io/v2/user/${testUser.username}`,
    body: testUser,
  }).then((response) => {
    expect(response.status).to.eq(200);
  });
  cy.checkUser(testUser);
});
