import { makeExecutableSchema } from "@graphql-tools/schema";

import User from './user/index.js'
import Product from './product/index.js'

export default makeExecutableSchema({
    typeDefs: [User.typeDefs, Product.typeDefs],
    resolvers: [User.resolvers, Product.resolvers]
})