import { BadRequestException, Body, Controller, Delete, Get, Inject, NotFoundException, Param, Post, Put } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProdutoDTO } from 'src/dto/ProdutoDto';
import { ProdutoModel } from 'src/models/ProdutoModel';
import { Repository } from 'typeorm';

@Controller('produtos')
export class ProdutosController {
    constructor(
        @InjectRepository(ProdutoModel) private readonly repository: Repository<ProdutoModel>,
    ) {}

    @Get()
    public findAll() {
        return this.repository.find();
    }

    @Get('/:id')
    public async findById(@Param('id') id: number) {
        const produto = await this.repository.findOne({where: { 
            id: id
        }});

        if (!produto) {
            throw new NotFoundException();
        }

        return produto;
    }

    @Post()
    public create(@Body() produto: ProdutoDTO) {
        const model = produto as unknown as ProdutoModel;
        return this.repository.save(model)
    }

    @Put('/:id')
    public update(@Param('id') id: number,  @Body() produto: ProdutoDTO) {
        const model = produto as unknown as ProdutoModel;
        return this.repository.update({id: id}, model);
    }

    @Delete('/:id')
    public delete(@Param('id') id: number) {
        return this.repository.delete({ id: id })
    }
}
