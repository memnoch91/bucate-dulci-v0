import { Request, Response } from "express";
import { AbstractRouter } from "../utils/shared/abstract.router";
import axios, { AxiosResponse } from "axios";

//CONSTANTS
import { imgurUserID } from "../utils/constants";
import { albumNames } from "../utils/constants";

export class ImagesRouter extends AbstractRouter {
  protected initRoutes() {
    this.router.get("/api/images", this.getImage.bind(this));
  }

  private getImage(request: Request, response: Response) {
    const { sliderAlbum } = albumNames;
    return axios
      .get(
        `https://api.imgur.com/3/album/${sliderAlbum}/images/authorize?client_id=${imgurUserID}`
      )
      .then((res: AxiosResponse) => {
        return response.status(200).json(res.data);
      })
      .catch((err: any) => {
        return response.status(400).json(err);
      });
  }
}
