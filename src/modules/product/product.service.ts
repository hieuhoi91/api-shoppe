import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from './product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductEntity)
    private productRepository: Repository<ProductEntity>,
  ) {}

  async createProduct(reqProduct: any) {
    const product = this.productRepository.create({
      name: reqProduct.name,
      thumbnail: reqProduct.thumbnail,
      description: reqProduct.description,
      quantity: reqProduct.quantity,
      price: reqProduct.price,
      sku: reqProduct.sku,
      category_id: reqProduct.category_id,
    });

    await this.productRepository.save(product);
  }

  async deleteProduct(id: string) {
    await this.productRepository.delete(id);
  }

  async getAllProducts() {
    return await this.productRepository.find({
      select: [
        'id',
        'name',
        'thumbnail',
        'description',
        'quantity',
        'price',
        'sku',
        'category_id',
      ],
    });
  }
}
