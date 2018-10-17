import { Request, Response, } from "express";
import { AbstractRouter } from "../utils/shared/abstract.router";
// import { IImg } from "./img.model";
import axios, { AxiosResponse } from 'axios';

export class ImagesRouter extends AbstractRouter {

  protected initRoutes() {
    this.router.get("/api/images", this.getImages.bind(this));
  }


  private getImages(request: Request, response: Response) {
    return axios.get("https://api.imgur.com/3/album/tKyy5mh/images/authorize?client_id=1e030c742a13702")
    .then(
      (res: AxiosResponse) => {
        return response.status(200).json(res.data);
      }
    )
    .catch(
      (err:any)=> {
        return response.status(400).json(err);
      }
    )
  }

}