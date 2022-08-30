const { AuthenticationError } = require('apollo-server-express');
const {User} = require('../models')
const {signToken} = require('../utils/auth')

const resolvers = {
    Query: {
        getSingleUser: async (parent, args) => {
            const userData = await User.findOne({
                _id: args._id
            })

            if(!userData) throw new AuthenticationError("Cannot find a user with this id!")
            return userData
        }
    },
    Mutation: {
        createUser: async (parent, args) => {
            const {username, email, password} = args
            const userData = await User.create({username,email,password})

            if(!userData) throw new AuthenticationError("Failed at creating new user")
            const token = signToken(userData)
            
            return {token,userData}
        }
    }
}