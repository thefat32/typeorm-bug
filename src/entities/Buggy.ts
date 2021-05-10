import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn
} from 'typeorm';

@Entity()
export default class Buggy {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ nullable: true })
  buggyColumn!: string;

  @Column({ nullable: true, default: null })
  buggyColumn2!: string;

  @Column()
  @CreateDateColumn()
  createdAt!: Date;

  @Column()
  @UpdateDateColumn()
  updatedAt!: Date;
}