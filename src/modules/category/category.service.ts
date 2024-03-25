import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryEntity } from './category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(CategoryEntity)
    private categoryRepository: Repository<CategoryEntity>,
  ) {}

  async createCategory(reqCategory: any) {
    const category = this.categoryRepository.create({
      name: reqCategory.name,
      thumbnail: reqCategory.thumbnail,
      slug: reqCategory.slug,
    });

    await this.categoryRepository.save(category);
  }

  async deleteCategory(id: string) {
    await this.categoryRepository.delete(id);
  }

  async getAllCategory() {
    return await this.categoryRepository.find({
      select: ['id', 'name', 'thumbnail', 'slug'],
    });
  }
}
