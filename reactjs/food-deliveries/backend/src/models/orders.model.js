import mongooPaginate from 'mongoose-paginate-v2';
import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema(
	{
		userId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
			required: true,
		},
		item: [
			{
				foodId: {
					type: mongoose.Schema.Types.ObjectId,
					ref: 'Food',
					required: true,
				},
				quantity: {
					type: Number,
					required: true,
				},
				price: {
					type: Number,
					required: true,
				},
			},
		],
		status: {
			type: String,
			enum: ['pending', 'confirmed', 'delivered', 'canceled'],
			default: 'pending',
		},
		total: {
			type: Number,
			required: true,
		},
		paymentMethodId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Payment',
		},
		is_active: {
			type: Boolean,
			default: true,
		},
	},
	{ timestamps: true, versionKey: false }
);

orderSchema.plugin(mongooPaginate);

const Order = mongoose.model('Order', orderSchema);

export default Order;
