import { Injectable, BadRequestException, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { User } from './Schemas/user.schema';
import { SignUpDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
    constructor(
        @InjectModel(User.name)
        private userModel: Model<User>,
        private jwtService: JwtService,
    ) {}

    async signUp(signUpDto: SignUpDto): Promise<{ message: string; token: string }> {
        const { name, email, password } = signUpDto;
    
        const existingUser = await this.userModel.findOne({ email });
        if (existingUser) {
            throw new BadRequestException('Email is already in use');
        }
    
        const hashedPassword = await bcrypt.hash(password, 10);
    
        const user = await this.userModel.create({
            name,
            email,
            password: hashedPassword,
        });
    
        const token = this.jwtService.sign({ id: user._id });
    
        return {
            message: 'Signup successful',
            token,
        };
    }
    
    async login(credentials: LoginDto): Promise<{ message: string; token: string }> {
        const { email, password } = credentials;
    
        const user = await this.userModel.findOne({ email });
        if (!user) {
            throw new UnauthorizedException('Invalid email or password');
        }
    
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            throw new UnauthorizedException('Invalid email or password');
        }
    
        const token = this.jwtService.sign({ id: user._id });
    
        return {
            message: 'Login successful',
            token,
        };
    }
}    