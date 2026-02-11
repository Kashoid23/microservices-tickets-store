import mongoose, { Types } from "mongoose";

interface TicketAttrs {
    title: string;
    price: number;
    userId: string;
}

interface TicketJSON {
	id?: Types.ObjectId;
	title: string;
	price: number;
	userId: string;
	_id?: Types.ObjectId;
	__v?: number;
}

interface TicketDocument extends mongoose.Document {
	id: string;
	title: string;
	price: number;
	userId: string;
}

interface TicketModel extends mongoose.Model<TicketDocument> {
	build(attrs: TicketAttrs): TicketDocument;
}

const ticketSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	price: {
		type: Number,
		required: true
	},
    userId: {
        type: String,
        required: true
    }
}, {
	toJSON: {
		transform(doc: TicketDocument, ret: TicketJSON) {
			ret.id = ret._id!;
			delete ret._id;
			delete ret.__v;
		}
	}
});

ticketSchema.statics.build = (attrs: TicketAttrs) => {
	return new Ticket(attrs);
};

const Ticket = mongoose.model<TicketDocument, TicketModel>('Ticket', ticketSchema);

export { Ticket };
