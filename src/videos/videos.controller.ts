import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Delete,
    UseGuards,
} from '@nestjs/common';
import { VideosService } from './videos.service';
import { Video } from './video.entity';
import { AuthGuard } from '../auth/auth.guard'; // Adjust path if needed

@Controller('/videos')
export class VideosController {
    constructor(private videosService: VideosService) { }

    // Public route (no guard)
    @Get()
    findAll() {
        return this.videosService.findAll();
    }

    // Protected routes
    @UseGuards(AuthGuard)
    @Post()
    create(@Body() body: Partial<Video>) {
        return this.videosService.create(body);
    }

    @UseGuards(AuthGuard)
    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.videosService.findOne(+id);
    }

    @UseGuards(AuthGuard)
    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.videosService.delete(+id);
    }
}
