import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from './User';

@Entity({ name: 'user_posts' })
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  // updateAt
  @UpdateDateColumn()
  updatedAt: Date;

  // removeAt
  @Column({ nullable: true, type: 'timestamp' })
  removedAt: Date;

  @ManyToOne(() => User, (user) => user.posts)
  user: User;
}
