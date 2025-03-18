import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { AlunoService } from './aluno.service';

@Controller('alunos')
export class AlunoController {
  constructor(private readonly alunoService: AlunoService) {}

  // Criar um aluno
  @Post()
  async createAluno(@Body() data: any): Promise<void> {
    await this.alunoService.createAluno(data);
  }

  // Buscar todos os alunos
  @Get()
  async getAllAlunos(): Promise<any[]> {
    return await this.alunoService.getAllAlunos();
  }

  // Buscar aluno por ID
  @Get(':id')
  async getAlunoById(@Param('id') id: number): Promise<any> {
    return await this.alunoService.getAlunoById(id);
  }

  // Atualizar aluno
  @Put(':id')
  async updateAluno(@Param('id') id: number, @Body() data: any): Promise<void> {
    await this.alunoService.updateAluno(id, data);
  }

  // Deletar aluno
  @Delete(':id')
  async deleteAluno(@Param('id') id: number): Promise<void> {
    await this.alunoService.deleteAluno(id);
  }
}
