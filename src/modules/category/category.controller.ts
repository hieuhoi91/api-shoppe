import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController {
  constructor(private categoryService: CategoryService) {}
  @Post()
  async createCategory(@Body() reqCategory: any) {
    await this.categoryService.createCategory(reqCategory);
    return { message: 'Category created successfully' };
  }

  @Delete('/:id')
  async deleteCategory(@Param('id') id: string) {
    await this.categoryService.deleteCategory(id);
    return { message: 'Delete category successfully' };
  }

  @Get()
  async getAllCategory() {
    return this.categoryService.getAllCategory();
  }
}
