import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Addemp } from './Schemas/employee.schema'; 
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { CreateEmployeeDto } from './dto/employee.dto';

@Injectable()
export class AddemployeeService {
  constructor(
    @InjectModel(Addemp.name) private readonly employeeModel: Model<Addemp>, 
  ) {}

  async findAll(): Promise<Addemp[]> {
    return this.employeeModel.find();
  }

  async create(employeeData: CreateEmployeeDto): Promise<Addemp> {
    const newEmployee = new this.employeeModel(employeeData);
    return newEmployee.save();
  }

  async findById(id: string): Promise<Addemp | null> {
    return this.employeeModel.findById(id);
  }

  async updateById(id: string, employeeData: UpdateEmployeeDto): Promise<Addemp> {
    const updatedEmp = await this.employeeModel.findByIdAndUpdate(id, employeeData, { new: true });
    if (!updatedEmp) {
      throw new Error('Employee not found');
    }
    return updatedEmp;
  }

  async deleteById(id: string): Promise<Addemp | null> {
    const deletedEmp = await this.employeeModel.findByIdAndDelete(id);
    return deletedEmp;
  }
  
  
  
}