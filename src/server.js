import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import mongoose from 'mongoose';
import schema from './modules/index.js';

!(async function(){
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/exam');
        console.log('db is connected successfully');
    } catch (err) {
        console.log(err);
        process.exit();
    }
})();

const server = new ApolloServer({
    schema,
});
const {url} = await startStandaloneServer(server, {
    listen: {port: 4000},
    context: async ({req, res}) => {
        const token = req.headers.authorization || '';

        return {access_token: token}
    },
});
console.log(`🗿 Server ready at: ${url}`);