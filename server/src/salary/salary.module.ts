import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SalaryController } from './salary.controller';
import { SalaryService } from './salary.service';
import { SalarySlip, SalarySlipSchema } from './salary.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'SalarySlip', schema: SalarySlipSchema },
    ]),
  ],
  controllers: [SalaryController],
  providers: [SalaryService],
})
export class SalaryModule {}
