import mongoose from "mongoose";
import { Password } from "../helpers/password";

interface UserAttrs {
  	email: string;
  	password: string;
}

interface UserDocument extends mongoose.Document {
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
