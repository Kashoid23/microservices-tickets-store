import mongoose, { Types } from "mongoose";
import { Password } from "../helpers/password";

interface UserAttrs {
  	email: string;
  	password: string;
}

interface UserJSON {
	id?: Types.ObjectId;
	email: string;
	_id?: Types.ObjectId;
	password?: string;
	__v?: number;
}

interface UserDocument extends mongoose.Document {
	id: string;
	email: string;
	password: string;
	createdAt: Date;
	updatedAt: Date;
}

interface UserModel extends mongoose.Model<UserDocument> {
	build(attrs: UserAttrs): UserDocument;
}

const userSchema = new mongoose.Schema({
	email: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
}, {
	toJSON: {
		transform(doc: UserDocument, ret: UserJSON) {
			ret.id = ret._id!;
			delete ret._id;
			delete ret.password;
			delete ret.__v;
		}
	}
});

userSchema.statics.build = (attrs: UserAttrs) => {
	return new User(attrs);
};

userSchema.pre('save', async function () {
	if (this.isModified('password')) {
		const hashed = await Password.toHash(this.get('password'));
		this.set('password', hashed);
	}
});

const User = mongoose.model<UserDocument, UserModel>('User', userSchema);

export { User };
