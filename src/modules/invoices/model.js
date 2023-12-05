import { model } from "mongoose";
import { InvoiceSchema } from './product.schema.js'

export const InvoiceModel = model('invoice', InvoiceSchema)