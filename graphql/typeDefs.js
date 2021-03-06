const { gql } = require("apollo-server");

module.exports = gql`
  type statusValue {
    isDeactivated: Boolean
    lastActiveDate: String
  }

  type User {
    id: ID
    username: String!
    token: String!
    email: String!
    displayName: String!
    coverImage: String!
    status: statusValue!
  }
  input RegisterInput {
    username: String!
    email: String!
    password: String!
    confirmPassword: String!
  }

  type AuthorValue {
    username: String!
    coverImage: String!
  }
  type Post {
    id: ID!
    userId: String!
    author: AuthorValue!
    content: String!
    creationDate: String!
    comments: [Comment]!
    likes: [Like]!
    likeCount: Int!
    commentCount: Int!
  }

  type Comment {
    id: ID!
    userId: String!
    creationDate: String!
    author: AuthorValue!
    body: String!
  }

  type Like {
    id: ID!
    creationDate: String!
    username: String!
    coverImage: String!
  }

  type Query {
    hello: String!
    loadUser: User
    getPosts(username: String!): [Post]
  }
  type Mutation {
    register(registerInput: RegisterInput): User!
    login(email: String!, password: String!): User!
    createPost(content: String!): Post!
    deletePost(postId: ID!): String!
    createComment(postId: ID!, body: String!): Post!
    deleteComment(postId: ID!, commentId: ID!): Post!
    likePost(postId: ID!): Post!
  }

  type Subscription {
    newComment: Comment!
    newLike: Like!
  }
`;
