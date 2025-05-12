import { Module } from '@nestjs/common';
import { BannerService } from './banner.service';
import { BannerController } from './banner.controller';
import { Banner } from './banner.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Banner])],
  providers: [BannerService],
  controllers: [BannerController]
})
export class BannerModule { }
