import { Controller, Post, Body,Get,Param } from '@nestjs/common';
import { LeaveService } from './leave.service';
import { ApplyLeaveDto } from './Dto/apply.dto';
import { Leave } from './Schema/leave.schema';

@Controller('leave')
export class LeaveController {
  constructor(private readonly leaveService: LeaveService) {}

  @Post('apply')
  async applyLeave(@Body() applyLeaveDto: ApplyLeaveDto): Promise<Leave> {
    return this.leaveService.applyLeave(applyLeaveDto);
  }

  @Get('status/:employeeId')
  async getLeaveStatus(@Param('employeeId') employeeId: string) {
    const leaveApplications = await this.leaveService.getLeaveStatus(employeeId);
    return leaveApplications;
  }
}
