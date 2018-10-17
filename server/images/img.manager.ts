import { Model } from "mongoose";
import { imgSchema, IImg } from "./img.model";
import { AbstractManager } from "../utils/shared/abstract.manager";

export class AdminManager extends AbstractManager {
  private Image: Model<IImg>;

  protected initModel() {
    this.Image = this.connection.model<IImg>("Admin", imgSchema);
  }

}
