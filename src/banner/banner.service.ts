import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Banner } from './banner.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BannerService {
    constructor(
        @InjectRepository(Banner)
        private bannerRepo: Repository<Banner>,
    ) { }

    async find() {
        return this.bannerRepo.findOne({ where: {} });
    }

    async upsert(banner: Partial<Banner>) {
        const existing = await this.find();

        if (existing) {
            this.bannerRepo.merge(existing, banner);
            return this.bannerRepo.save(existing);
        } else {
            return this.bannerRepo.save(banner);
        }
    }
}
