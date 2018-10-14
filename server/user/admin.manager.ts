import { Model } from "mongoose";
import { adminSchema, IAdmin } from "./admin.model";
import { AbstractManager } from "../utils/shared/abstract.manager";

/*** INTERFACE ***/
import { adminSignup } from "./admin.interfaces";
import { Admin } from "mongodb";

export class AdminManager extends AbstractManager {
  private Admin: Model<IAdmin>;

  protected initModel() {
    this.Admin = this.connection.model<IAdmin>("Admin", adminSchema);
  }

  public createAdmin(data: adminSignup, success: Function, fail: Function) {
    const admin = new this.Admin(data);
    admin.save(this.replay(success, fail).bind(this));
  }

  public findOneAdmin(email: string, success: Function, fail: Function) {
    this.Admin.findOne({ email: email })
      .then(this.replay(success, fail).bind(this))
      .catch(this.replay(success, fail).bind(this));
  }

  public checkForEmailCreateIfNotFound(
    data: adminSignup,
    success: Function,
    fail: Function
  ) {
    const receivedEmail = data.email;
    this.findOneAdmin(receivedEmail, success, fail);
  }

  public addProfileInfo(
    id: string,
    profile: any,
    succes: Function,
    fail: Function
  ) {
    this.Admin.findOneAndUpdate(
      { _id: id },
      {
        $push: {
          profile: profile
        }
      },
      { new: true },
      this.replay(succes, fail).bind(this)
    );
  }

  public login(
    email: string,
    password: string,
    success: Function,
    fail: Function
  ) {
    this.Admin.findOne(
      { email, password },
      this.replay(success, fail).bind(this)
    );
  }

  public getUserAndProfile(id: string, succes: Function, fail: Function) {
    this.Admin.findOne({ _id: id }, this.replay(succes, fail)).populate(
      "profile"
    );
  }

  public getAdmins(success: Function, fail: Function) {
    this.Admin.find(this.replay(success, fail).bind(this));
  }

  public getAdmin(id: string, success: Function, fail: Function) {
    this.Admin.findOne({ _id: id }, this.replay(success, fail).bind(this));
  }

  public updateUser(id: string, data: any, success: Function, fail: Function) {
    this.Admin.findOneAndUpdate(
      { _id: id },
      {
        $set: data
      },
      { new: true },
      this.replay(success, fail).bind(this)
    );
  }

  public removeAdmin(id: string, success: Function, fail: Function) {
    this.Admin.findOneAndRemove(
      { _id: id },
      this.replay(success, fail).bind(this)
    );
  }
}
