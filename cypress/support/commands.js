Cypress.Commands.add("createUsers", (users) => {
  cy.request({
    method: "POST",
    url: "https://petstore.swagger.io/v2/user/createWithArray",
    body: users,
  }).then((response) => {
    expect(response.status).to.eq(200);
  });
});

Cypress.Commands.add("deleteUsers", (users) => {
  users.forEach((user) => {
    cy.request({
      method: "DELETE",
      url: `https://petstore.swagger.io/v2/user/${user.username}`,
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });
});

Cypress.Commands.add("checkUser", (user) => {
  cy.request({
    method: "GET",
    url: `https://petstore.swagger.io/v2/user/${user.username}`,
  }).then((response) => {
    const result = JSON.stringify(response.body);
    const expected = JSON.stringify(user);
    expect(result).to.deep.eq(expected);
    expect(response.status).to.eq(200);
  });
});
