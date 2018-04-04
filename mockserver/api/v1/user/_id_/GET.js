module.exports = function(req) {
  if (!req.params.id) {
    return {status: 404, body: null}
  }
  return {
    headers: {},
    status: 200,
    body: users[req.params.id]
  };
}

const users = {
  123: {id: "123", firstname: "Bob", lastname: "Ette"},
  456: {id: "456", firstname: "Fred", lastname: "Ette"},
  789: {id: "789", firstname: "Richard", lastname: "Ette"}
}
