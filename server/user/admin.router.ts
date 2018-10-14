import { Request, Response } from "express";
import { AdminManager } from "./admin.manager";
import { IAdmin } from "./admin.model";
import { AbstractRouter } from "../utils/shared/abstract.router";
import { adminSignup } from "./admin.interfaces";

export class AdminRouter extends AbstractRouter {
  private adminManager: AdminManager = new AdminManager();

  protected initRoutes() {
    this.router.post("/api/registerAdmin", this.registerAdmin.bind(this));
    this.router.delete("/api/removeAdmin/:id", this.removeAdmin.bind(this));
    this.router.get("/api/admins", this.getAdmins.bind(this));
    this.router.get("/api/admin/:id", this.getAdmin.bind(this));
    // this.router.get("/api/admin/:id/profile", this.getUserAndProfile.bind(this));
    // this.router.post("/api/login", this.login.bind(this));
    // this.router.post(
    //   "/api/linkProfileUser/:id",
    //   this.linkProfileToUser.bind(this)
    // );
    // this.router.put("/api/update/:id", this.updateUser.bind(this));
  }

  private registerAdmin(request: Request, response: Response) {

    const data: adminSignup = {
      firstName: request.body.firstName,
      lastName: request.body.lastName,
      email: request.body.email,
      password: request.body.password,
      role: request.body.role,
      username: request.body.username
    };
    this.adminManager.findOneAdmin(
      data.email,
      () => {
        this.adminManager.createAdmin(data,
          (admin:IAdmin) => {
             return response.status(200).json(admin);
          },
          (error:any) => {
            return response.status(200).json(error);
          }
          )
        //return response.status(200).json(admin);;
      },
      (error: any) => {
        const message =`Enail: ${error.email} already in use`
        // this.adminManager.createAdmin(data,
        // (admin:IAdmin)=> {
        //   return response.status(200).json(admin);
        // },
        // ()=> {

        // })
        return response.status(400).json(message);
      }
      )
      console.log("oop", data);
    }

  private removeAdmin(request: Request, response: Response) {
    const id: string = request.params.id;

    this.adminManager.removeAdmin(
      id,
      (admin: IAdmin) => {
        response.status(200).json(admin);
      },
      (error:any) => {
        response.status(500).json(error);
      }
    );
  }

  private getAdmins(request: Request, response: Response) {
    this.adminManager.getAdmins(
      (admins: Array<IAdmin>) => {
        response.status(200).json(admins);
      },
      (error:any) => {
        response.status(500).json(error);
      }
    );
  }

  private getAdmin(request: Request, response: Response) {
    const id: string = request.params.id;
    console.log(response);
    this.adminManager.getAdmin(
      id,
      (admin: IAdmin) => {
        response.status(200).json(admin);
      },
      (error:any) => {
        response.status(500).json(error);
      }
    );
  }

  /*
  private login(request: Request, response: Response) {
    const email: string = request.body.email;
    const password: string = request.body.password;

    this.adminManager.login(
      email,
      password,
      (admin: IAdmin) => {
        response.status(200).json(admin);
      },
      (error:any) => {
        response.status(500).json(error);
      }
    );
  }



  private getUserAndProfile(request: Request, response: Response) {
    const id: string = request.params.id;
    this.adminManager.getUserAndProfile(
      id,
      (admin: IAdmin) => {
        response.status(200).json(admin);
      },
      (error:any) => {
        response.status(500).json(error);
      }
    );
  }

  private updateUser(request: Request, response: Response) {
    const id: string = request.params.id;
    const data: string = request.body;
    console.log("din router", data);

    this.adminManager.updateUser(
      id,
      data,
      (admin: IAdmin) => {
        response.status(200).json(admin);
      },
      (error:any) => {
        response.status(500).json(error);
      }
    );
  }
  */
}
/*** RESIDUAL CODE ***/
//this.router.put("/api/admin/linkprofile/:id", this.linkProfile.bind(this));
// private linkProfile(request: Request, response: Response) {
//   const id: string = request.params.id;
//   const data: string = request.body;

//   this.adminManager.addProfileInfo(
//     id,
//     data,
//     (profile: IAdmin) => {
//       response.status(200).json(profile);
//     },
//     error => {
//       response.status(500).json(error);
//     }
//   );
// }
