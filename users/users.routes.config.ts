import { CommonRoutesConfig } from "../common/common.routes.config";
import express from "express";

export class UsersRoutes extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app, "UsersRoutes");
  }

  configureRoutes() {
    return this.app;
  }
}
