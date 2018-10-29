import { Schema, Document } from "mongoose";
import { any } from "prop-types";

export const imgSchema: Schema = new Schema(
  {
    id: String,
    title: String,
    description: String,
    datetime: Number,
    type: String,
    animated: Boolean,
    width: Number,
    height: Number,
    size: Number,
    views: Number,
    bandwidth: Number,
    vote: Number,
    favorite: Boolean,
    nsfw: Boolean,
    section: any,
    account_url: String,
    account_id: String,
    is_ad: Boolean,
    in_most_viral: Boolean,
    has_sound: Boolean,
    tags: Array,
    ad_type: any,
    ad_url: String,
    in_gallery: Boolean,
    deletehash: String,
    name: String,
    link: String
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

export interface IImg extends Document {
    id: string;
    title: string;
    description: string;
    datetime: number;
    type: string;
    animated: boolean;
    width: number;
    height: number;
    size: number;
    views: number;
    bandwidth: number;
    vote: number;
    favorite: boolean;
    nsfw: boolean;
    section: any,
    account_url: string;
    account_id: string;
    is_ad: boolean;
    in_most_viral: boolean;
    has_sound: boolean;
    tags: any;
    ad_type: any;
    ad_url: string;
    in_gallery: boolean;
    deletehash: string;
    name: string;
    link: string;
}


