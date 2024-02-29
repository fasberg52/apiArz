import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Mesghal {
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