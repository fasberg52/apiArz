import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity()
export class Dollar {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  price!: string;

  @Column()
  lowPrice!: string;

  @Column({ nullable: true })
  highPrice!: string;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt!: Date;
}