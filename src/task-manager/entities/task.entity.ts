import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ default: false })
  isCompleted: boolean;

  constructor(title: string) {
    this.title = title;
  }

  public complete(): void {
    this.isCompleted = true;
  }

  public unComplete(): void {
    this.isCompleted = false;
  }
}
