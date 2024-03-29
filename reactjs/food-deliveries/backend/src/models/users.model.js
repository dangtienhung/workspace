import mongooPaginate from 'mongoose-paginate-v2';
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
			trim: true,
			minlength: 3,
			maxlength: 200,
		},
		email: {
			type: String,
			required: true,
			trim: true,
		},
		password: {
			type: String,
			required: true,
			trim: true,
			minlength: 6,
			maxlength: 200,
		},
		address: {
			type: String,
		},
		phone: {
			type: String,
		},
		paymentMethodId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Payment',
		},
		orders: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Order',
			},
		],
		role: {
			type: String,
			enum: ['user', 'admin', 'superadmin'],
			default: 'user',
		},
		is_active: {
			type: Boolean,
			default: true,
		},
		delete: {
			type: Boolean,
			default: false,
		},
	},
	{ timestamps: true, versionKey: false }
);

userSchema.plugin(mongooPaginate);

const User = mongoose.model('User', userSchema);
export default User;
