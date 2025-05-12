import { Body, Controller, Get, Put, UseGuards } from '@nestjs/common';
import { BannerService } from './banner.service';
import { AuthGuard } from 'src/auth/auth.guard';
import { Banner } from './banner.entity';

@Controller('/banner')
export class BannerController {
    constructor(private bannerService: BannerService) { }

    @Get()
    find() {
        return this.bannerService.find(); // gets the only banner
    }

    @UseGuards(AuthGuard)
    @Put()
    upsert(@Body() body: Partial<Banner>) {
        return this.bannerService.upsert(body); // updates or creates the single banner
    }
}
