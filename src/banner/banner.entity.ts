import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Banner {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    bannerTitle: string;

    @Column()
    bannerStatement: string;
}
