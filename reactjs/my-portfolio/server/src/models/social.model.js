import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

const socialSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true, versionKey: false }
);

socialSchema.plugin(mongoosePaginate);

const Social = mongoose.model('Social', socialSchema);
export default Social;
