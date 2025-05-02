import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SalarySlip } from './salary.model';

@Injectable()
export class SalaryService {
  constructor(
    @InjectModel('SalarySlip') private readonly salaryModel: Model<SalarySlip>,
  ) {}

  // Fetch salary slip based on employee name, month, and year
  async generateSalarySlip(employeeName: string, month: number, year: number): Promise<SalarySlip> {
    const salarySlip = await this.salaryModel
      .findOne({ employeeName, month, year })
      .exec();

    if (!salarySlip) {
      throw new NotFoundException('Salary slip not found for the given details');
    }

    return salarySlip;
  }
}
