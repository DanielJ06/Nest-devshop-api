import { Query, Resolver } from '@nestjs/graphql';
import { Category } from './dto/category';

@Resolver(of => Category)
export class CategoryResolver {
  @Query(returns => [Category], { name: 'getAllCategories' })
  async getAllCategories(): Promise<Category[]> {
    return [];
  }
}
