import { Model, Table, Column, Unique } from 'sequelize-typescript';

@Table({
  timestamps: true,
  tableName: 'dummy_data',
  createdAt: 'created_at',
  updatedAt: 'updated_at',
})
export class DummyData extends Model {
  @Unique
  @Column
  name: string;
}
