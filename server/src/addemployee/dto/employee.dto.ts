
import { IsString, IsNumber, IsDateString } from 'class-validator';

export class CreateEmployeeDto {
  @IsString()
  fullname: string;

  @IsString()
  employeeid: string;

  @IsString()
  designation: string;

  @IsString()
  mobileno: string;

  @IsDateString()
  dateofbirth: Date;

  @IsDateString()
  joiningdate: string;

  @IsNumber()
  salary: number;

  @IsString()
  address: string;
}
