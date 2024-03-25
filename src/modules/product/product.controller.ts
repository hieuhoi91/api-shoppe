import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Post()
  async createProduct(@Body() reqProduct: any) {
    await this.productService.createProduct(reqProduct);
    return { message: 'Product created successfully' };
  }

  @Delete('/:id')
  async deleteProduct(@Param('id') id: string) {
    await this.productService.deleteProduct(id);
    return { message: ' Product deleted successfully' };
  }

  @Get()
  async getAllProducts() {
    return await this.productService.getAllProducts();
  }
}
