import {} from '../../model/index.js';
import {GraphQLError} from 'graphql'
import Jwt, { JsonWebTokenError } from 'jsonwebtoken';
import { InvoiceModel } from './model.js';

export default{
    Query: {
        invoices: (_, __, {access_token}) => {
            try {
                const token = jwt.verify(access_token, process.env.JWT_KEY);
                const invoices = InvoiceModel.find();
                return invoices;
            } catch (err) {
                if(err instanceof JsonWebTokenError){
                    return new GraphQLError('FORBIDDEN', {
                        extensions: {
                            code: 'FORBIDDEN',
                            http: { status: 403 },
                        },
                    });
                }
                return new GraphQLError('Interval Server Error', {
                    extensions: {
                        code: 'Interval Server Error',
                        http: { status: 500 },
                    },
                });
            }
        }
    }
}