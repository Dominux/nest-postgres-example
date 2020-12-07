import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CreateProductDto } from './dto/create-product.dto'
import { Product } from './products.entity'

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product) private productsRepository: Repository<Product>,
  ) {}

  async findAll(): Promise<Product[]> {
    return this.productsRepository.find()
  }

  async findOne(id: string): Promise<Product | null> {
    return this.productsRepository.findOne(id)
  }

  async create(product: CreateProductDto): Promise<Product> {
    return await this.productsRepository.save(product)
  }

  async remove(id: string): Promise<void> {
    await this.productsRepository.delete(id)
  }
}
