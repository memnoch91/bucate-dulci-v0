import { Request, Response } from "express";
import { AbstractRouter } from "../utils/shared/abstract.router";
// import { IImg } from "./img.model";

import axios, { AxiosResponse } from "axios";

import { imgurUserID } from "../utils/constants";
import { albumNames } from "../utils/constants";

export class LogoRouter extends AbstractRouter {
  protected initRoutes() {
    this.router.get("/api/logo", this.getLogo.bind(this));
  }

  private getLogo(request: Request, response: Response) {
    const { logoAlbum } = albumNames;

    return axios
      .get(
        `https://api.imgur.com/3/album/${logoAlbum}/images/authorize?client_id=${imgurUserID}`
      )
      .then((res: AxiosResponse) => {
        return response.status(200).json(res.data);
      })
      .catch((err: any) => {
        return response.status(400).json(err);
      });
  }
}
