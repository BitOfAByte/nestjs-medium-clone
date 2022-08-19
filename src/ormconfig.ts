import { DataSourceOptions } from 'typeorm';
import { TagEntity } from '@app/tag/tag.entity';

const config: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'btsp',
  password: 'Hyg57aff',
  database: 'mediumclone',
  entities: [TagEntity],
  migrations: ['src/migrations/**/*{.ts,.js}'],
  synchronize: true,
};

export default config;
