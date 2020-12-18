import { Category } from './category.entity';
import { CreateCategoryInput } from './dto/category-create.input';

export class CategoryMapper {
  public static toEntity(input: CreateCategoryInput): Category {
    const entity = new Category();
    entity.name = input.name;
    entity.slug = input.slug;
    return entity;
  }
}
