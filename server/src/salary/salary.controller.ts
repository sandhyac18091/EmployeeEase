import { Controller, Get, Param } from '@nestjs/common';
import { SalaryService } from './salary.service';
import { SalarySlip } from './salary.model';

@Controller('salary')
export class SalaryController {
  constructor(private readonly salaryService: SalaryService) {}

  @Get('generate/:employeeName/:month/:year')
  async generateSalarySlip(
    @Param('employeeName') employeeName: string,
    @Param('month') month: number,
    @Param('year') year: number,
  ): Promise<{ slip: SalarySlip }> {
    const salarySlip = await this.salaryService.generateSalarySlip(
      employeeName,
      month,
      year,
    );
    return { slip: salarySlip };
  }
}
