import { Module } from '@nestjs/common';
import { AddemployeeController } from './addemployee.controller';
import { AddemployeeService } from './addemployee.service';
import { MongooseModule } from '@nestjs/mongoose';
import { EmpSchema } from './Schemas/employee.schema';

@Module({
  imports:[MongooseModule.forFeature([{name:"Addemp",schema:EmpSchema}])],
  controllers: [AddemployeeController],
  providers: [AddemployeeService]
})
export class AddemployeeModule {}
