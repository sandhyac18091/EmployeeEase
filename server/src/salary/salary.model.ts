import { Schema, Document } from 'mongoose';

export interface SalarySlip extends Document {
  employeeName: string;
  baseSalary: number;
  approvedLeaves: number;
  excessLeaves: number;
  totalDeduction: number;
  finalSalary: number;
  month: number;
  year: number;
}

export const SalarySlipSchema = new Schema({
  employeeName: { type: String, required: true },
  baseSalary: { type: Number, required: true },
  approvedLeaves: { type: Number, required: true },
  excessLeaves: { type: Number, required: true },
  totalDeduction: { type: Number, required: true },
  finalSalary: { type: Number, required: true },
  month: { type: Number, required: true },
  year: { type: Number, required: true },
});
