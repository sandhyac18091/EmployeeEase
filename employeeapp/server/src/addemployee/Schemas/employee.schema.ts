import { Prop,Schema,SchemaFactory } from "@nestjs/mongoose";




@Schema({
    timestamps:true
})
    export class Addemp{
        @Prop({required:true})
        fullname:string;

        @Prop ({required:true,unique:true})
        employeeid:string;

        @Prop({required:true})
        designation:string;

        @Prop ({required:true})
        mobileno:string;

        @Prop({required:true})
        dateofbirth:Date;

        @Prop ({required:true})
        joiningdate:Date;

        @Prop({required:true})
        salary:number;

        @Prop({required:true})
        address:string;
    }
    export const EmpSchema=SchemaFactory.createForClass(Addemp)