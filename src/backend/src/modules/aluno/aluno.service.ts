import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../../config/database.service';

@Injectable()
export class AlunoService {
  constructor(private readonly databaseService: DatabaseService) {}

  // Criar um novo aluno
  async createAluno(data: any): Promise<void> {
    const query = `INSERT INTO aluno (escola_id, nome, tipo_deficiencia, necessidades) VALUES ($1, $2, $3, $4)`;
    const values = [data.escola_id, data.nome, data.tipo_deficiencia, data.necessidades];

    await this.databaseService.query(query, values);
  }

  // Buscar todos os alunos
  async getAllAlunos(): Promise<any[]> {
    const query = `SELECT * FROM aluno`;
    const result = await this.databaseService.query(query);
    return result.rows;
  }

  // Buscar um aluno por ID
  async getAlunoById(id: number): Promise<any> {
    const query = `SELECT * FROM aluno WHERE id = $1`;
    const result = await this.databaseService.query(query, [id]);
    return result.length ? result[0] : null;
  }

  // Atualizar um aluno por ID
  async updateAluno(id: number, data: any): Promise<void> {
    const query = `UPDATE aluno SET escola_id = $1, nome = $2, tipo_deficiencia = $3, necessidades = $4 WHERE id = $5`;
    const values = [data.escola_id, data.nome, data.tipo_deficiencia, data.necessidades, id];

    await this.databaseService.query(query, values);
  }

  // Deletar um aluno por ID
  async deleteAluno(id: number): Promise<void> {
    const query = `DELETE FROM aluno WHERE id = $1`;
    await this.databaseService.query(query, [id]);
  }
}
