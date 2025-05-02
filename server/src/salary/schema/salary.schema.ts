import { IsString, IsNotEmpty } from 'class-validator';

export class CreateLeaveDto {
  @IsNotEmpty()
  @IsString()
  employeeId: string;

  @IsNotEmpty()
  @IsString()
  leaveType: string;

  @IsNotEmpty()
  fromDate: string;

  @IsNotEmpty()
  toDate: string;

  @IsNotEmpty()
  @IsString()
  reason: string;

  
}
