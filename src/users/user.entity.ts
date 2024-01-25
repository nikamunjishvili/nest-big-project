import {
  AfterInsert,
  AfterRemove,
  AfterUpdate,
  Entity,
  Column,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @AfterInsert()
  logInsert() {
    console.log(`User with ID "${this.id}" was inserted`);
  }

  @AfterUpdate()
  logUpdate() {
    console.log(`Update User ID "${this.id}";`);
  }

  @AfterRemove()
  logRemove() {
    console.log(`Remove User ID "${this.id}";`);
  }
}
