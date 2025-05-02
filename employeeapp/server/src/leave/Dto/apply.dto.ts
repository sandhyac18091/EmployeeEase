import { IsString, IsNotEmpty } from 'class-validator';

export class ApplyLeaveDto {
  @IsNotEmpty()
  @IsString()
  employeeId: string;

  @IsNotEmpty()
  @IsString()
  leaveType: string;

  @IsNotEmpty()
  @IsString()
  startDate: string; 

  @IsNotEmpty()
  @IsString()
  endDate: string; 

  @IsNotEmpty()
  @IsString()
  reason: string;
}
