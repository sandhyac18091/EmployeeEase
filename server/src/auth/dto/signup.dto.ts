import { IsNotEmpty, IsString, IsEmail, MinLength, Matches } from 'class-validator';

export class SignUpDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @MinLength(6)
  @Matches(/^(?=.*\d)/, { message: 'Password must contain at least one number' })
  password: string;
}
