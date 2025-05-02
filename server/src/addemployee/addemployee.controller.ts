import { Body, Controller, Delete, Get, Param, Patch, Post,Put } from '@nestjs/common';
import { AddemployeeService } from './addemployee.service';
import { Addemp } from './Schemas/employee.schema';
import { CreateEmployeeDto } from './dto/employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';

@Controller('addemployee')
export class AddemployeeController {
  constructor(private readonly addemployeeService: AddemployeeService) {}

  

  @Get('findAll')  
async findAll(): Promise<Addemp[]> {
  return this.addemployeeService.findAll();
}


  @Post()
  async createEmployee(
    @Body() employee: CreateEmployeeDto
  ): Promise<Addemp> {
    return this.addemployeeService.create(employee);
  }

  @Get(':id')
async getEmployee(
  @Param('id') id: string
): Promise<Addemp | null> {
  return this.addemployeeService.findById(id);
}



@Patch('update/:id')
async updateEmployee(
  @Param('id') id: string,
  @Body() updateData: UpdateEmployeeDto
): Promise<Addemp | null> {
  return this.addemployeeService.updateById(id, updateData);
}



@Delete(':id')
async deleteEmployee(
  @Param('id') id: string
): Promise<Addemp | null> {
  return this.addemployeeService.deleteById(id);
}



}
