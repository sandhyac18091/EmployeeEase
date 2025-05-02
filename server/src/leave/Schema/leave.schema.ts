// leave.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type LeaveDocument = Leave & Document;

@Schema()
export class Leave {
  @Prop()
  employeeId: string;

  @Prop()
  leaveType: string;

  @Prop() 
  startDate: string;

  @Prop() 
  endDate: string;

  @Prop()
  reason: string;

  @Prop({ default: 'Pending' })
  status: string;
}

export const LeaveSchema = SchemaFactory.createForClass(Leave);
