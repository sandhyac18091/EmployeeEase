import { IsString, IsNumber, IsDateString } from 'class-validator';

export class UpdateEmployeeDto {
  @IsString()
  employeeid: string;

  @IsString()
  fullname: string;

  @IsString()
  designation: string;

  @IsDateString()
  joiningdate: string;  

  @IsNumber()
  salary: number;
}
