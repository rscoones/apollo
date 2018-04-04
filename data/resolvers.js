const axios = require("axios")

const resolvers = {
  Query: {
    challenge(root, args) {
      return axios.get(`http://localhost:8080/api/v1/challenge/${args.id}`).then((res) => res.data)
    }
  },
  Challenge: {
    users(challenge, args) {
      const requests = challenge.users.map((userId) => {
        return axios.get(`http://localhost:8080/api/v1/user/${userId}`).then((res) => res.data)
      })
      const {
        offset = 0,
        limit = 2
      } = args
      return Promise.resolve({
        results: requests.splice(offset, limit),
        offset,
        limit,
        count: challenge.users.length
      })
    }
  }
}

module.exports = resolvers
