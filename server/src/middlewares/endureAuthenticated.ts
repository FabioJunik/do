import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { EmployeesRepository } from "../repositories/implementations/EmployeesRepository";

type JwtPayloadProps = {
  id: string;
};

export class EndureAuthenticated {
  async auth(request: Request, response: Response, next: NextFunction) {
    const { authorization } = request.headers;

    if (!authorization) {
      return response.status(401).json({ message: "unauthorized" });
    }

    try {
      const token = authorization.replace("Bearer", "").trim();

      const { id } = jwt.verify(token, "321e61c589079ea0fe776cc96eaa7fc7") as JwtPayloadProps;

      const repository = EmployeesRepository.getINSTANCE();
      const employee = await repository.findById(id);

      if (!employee) {
        throw new Error("unauthorized");
      }

      request.employee = employee.id;

      next();

    } catch (err) {
      return response
        .status(401)
        .json({ message: err.message || "unexpected error" });
    }
  }
}