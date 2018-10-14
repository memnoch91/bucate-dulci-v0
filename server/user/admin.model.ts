import { Schema, Document } from "mongoose";

export const adminSchema: Schema = new Schema(
  {
    // profile:{
    //   type: Schema.Types.ObjectId,
    //   ref: "Profile"
    // },
    firstName: String,
    lastName: String,
    password: String,
    email: String,
    role: String,
    username: String
  },
  {
    toJSON: {
      transform: (doc, ret) => {
        ret.id = ret._id;

        delete ret.password;
      }
    }
  }
);

export interface IAdmin extends Document {
  // profile:{
  //   type: Schema.Types.ObjectId,
  //   ref: "Profile"
  // };
  firstName: string;
  lastName: string;
  password: string;
  email: string;
  role: string;
  username: string;
}


