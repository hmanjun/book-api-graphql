const {gql} = require('apollo-server-express')

const typeDefs = gql`
    type User {
        _id: ID!
        username: String
        email: String
        password: String
        savedBooks: [Book]
    }

    type Book {
        authors: [String]
        description: String
        bookId: String
        image: String
        link: String
        title: String
    }

    type Auth {
        token: ID!
        profile: Profile
    }

    input SavedBook {
        authors: [String]
        description: String
        image: String
        link: String
        title: String
    }

    type Query {
        getSingleUser(_id: ID!): User
    }

    type Mutation {
        createUser(username: String!, email: String!, password: String!)
        login(email: String!, password: String!): Auth

        saveBook(body: SavedBook!): User
        deleteBook(bookId: String!): User
    }
`

module.exports = typeDefs