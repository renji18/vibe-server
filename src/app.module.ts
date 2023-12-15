import { Module, forwardRef } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { ScheduleModule } from '@nestjs/schedule';
import { PostModule } from './post/post.module';

@Module({
  imports: [
    forwardRef(() => AuthModule),
    ConfigModule.forRoot({ isGlobal: true }),
    UserModule,
    ScheduleModule.forRoot(),
    PostModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
