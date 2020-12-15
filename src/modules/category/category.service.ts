import { Injectable } from '@nestjs/common';
import { CategoryResolver } from './category.resolver';
import { Category } from './dto/category';

@Injectable()
export class CategoryService {
  constructor(private categoryResolver: CategoryResolver) {}

  async getAll(): Promise<Category[]> {
    return await this.categoryResolver.getAllCategories();
  }
}
