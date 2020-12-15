import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './modules/category/category.entity';
import { CategoryModule } from './modules/category/category.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: 'postgres://postgres:daniel06@localhost:5433/devshop',
      autoLoadEntities: true,
      synchronize: true,
      entities: [Category],
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
    }),
    CategoryModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
