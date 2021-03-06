import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Category } from './category.entity';
import { CategoryMapper } from './category.mapper';
import { CategoryService } from './category.service';
import { CategoryPublic } from './dto/category';
import { CreateCategoryInput } from './dto/category-create.input';

@Resolver(of => CategoryPublic)
export class CategoryResolver {
  constructor(private categoryService: CategoryService) {}

  @Query(returns => [CategoryPublic], { name: 'getAllCategories' })
  async getAllCategories(): Promise<CategoryPublic[]> {
    return this.categoryService.getAll();
  }

  @Mutation(returns => CategoryPublic, { name: 'createCategory' })
  async createCategory(
    @Args('input') categoryInput: CreateCategoryInput,
  ): Promise<CategoryPublic> {
    return this.categoryService.create(CategoryMapper.toEntity(categoryInput));
  }
}
