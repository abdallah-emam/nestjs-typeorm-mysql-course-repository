import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './User';

@Entity({ name: 'user_profiles' })
export class Profile extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  age: number;

  @Column()
  dob: string;

  @ManyToOne(() => User, (user) => user.profile)
  user: User;

  static createProfile(
    firstName: string,
    lastName: string,
    age: number,
    dob: string,
  ) {
    return Profile.create({ firstName, lastName, age, dob });
  }
}
