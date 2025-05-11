import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Video } from './video.entity';

@Injectable()
export class VideosService {
    constructor(
        @InjectRepository(Video)
        private videoRepo: Repository<Video>,
    ) { }

    create(video: Partial<Video>) {
        return this.videoRepo.save(video);
    }

    findAll() {
        return this.videoRepo.find();
    }

    findOne(id: number) {
        return this.videoRepo.findOneBy({ id });
    }

    delete(id: number) {
        return this.videoRepo.delete(id);
    }
}
