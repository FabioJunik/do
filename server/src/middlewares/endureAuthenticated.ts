import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { AdminsRepository } from "../repositories/implementations/AdminsRepository";
import { EmployeesRepository } from "../repositories/implementations/EmployeesRepository";

type JwtPayloadProps = {
  id: string;
};

type UserProps = {
  id: string;
}

export class EndureAuthenticated {
  async auth(request: Request, response: Response, next: NextFunction) {
    const { authorization } = request.headers;

    if (!authorization) {
      return response.status(401).json({ message: "unauthorized" });
    }

    try {
      const token = authorization.replace("Bearer", "").trim();

      const { id } = jwt.verify(token, "321e61c589079ea0fe776cc96eaa7fc7") as JwtPayloadProps;

      const adminsRepository = AdminsRepository.getINSTANCE();
      const admin = await adminsRepository.findById(id);

      if (admin) {
        request.adminId = admin.id;
        return next();
      }

      const employeesRepository = EmployeesRepository.getINSTANCE();
      const employee = await employeesRepository.findById(id);

      if (employee) {
        request.employeeId = employee.id;
        return next();
      }

      throw new Error("unauthorized");

    } catch (err) {
      return response
        .status(401)
        .json({ message: err.message || "unexpected error" });
    }
  }
}