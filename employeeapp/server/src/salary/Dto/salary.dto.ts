import { IsString, IsNotEmpty } from 'class-validator';

export class CreateLeaveDto {
  @IsNotEmpty({ message: 'Employee ID is required' })
  @IsString()
  employeeId: string;

  @IsNotEmpty({ message: 'Leave Type is required' })
  @IsString()
  leaveType: string;

  @IsNotEmpty({ message: 'From Date is required' })
  @IsString()
  fromDate: string;

  @IsNotEmpty({ message: 'To Date is required' })
  @IsString()
  toDate: string;

  @IsNotEmpty({ message: 'Reason is required' })
  @IsString()
  reason: string;
}
