import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Leave, LeaveDocument } from './Schema/leave.schema';
import { ApplyLeaveDto } from './Dto/apply.dto';

@Injectable()
export class LeaveService {
  constructor(
    @InjectModel(Leave.name) private leaveModel: Model<LeaveDocument>,
  ) {}

  async applyLeave(applyLeaveDto: ApplyLeaveDto): Promise<Leave> {
    try {
      console.log('Apply Leave DTO:', applyLeaveDto);
      const leave = new this.leaveModel(applyLeaveDto);
      const savedLeave = await leave.save();
      console.log('Saved Leave:', savedLeave);
      return savedLeave;
    } catch (error) {
      console.error('Error applying leave:', error);
      throw new Error('Internal server error');
    }
  }

  async getLeaveStatus(employeeId: string): Promise<Leave[]> {
    return this.leaveModel
      .find({ employeeId })
      .sort({ startDate: -1 })  // Descending order
      .exec();
  }
}
