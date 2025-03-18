import mongoose from "mongoose";
const customerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: {
    type: String,
  },
  course: { type: String },
});
//  schema is a method or function
const Customer = mongoose.model("Customer", customerSchema);
export default Customer;
