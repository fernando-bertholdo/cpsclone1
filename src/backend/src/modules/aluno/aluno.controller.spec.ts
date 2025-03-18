import { Test } from '@nestjs/testing';
import { AlunoController } from './aluno.controller';
import { AlunoService } from './aluno.service';

describe('AlunoController (Unit)', () => {
  let alunoController: AlunoController;
  let alunoService: AlunoService;

  beforeEach(async () => {
    const mockAlunoService = {
      getAllAlunos: jest.fn().mockResolvedValue([
        {
          "id": 1,
          "escola_id": 1,
          "nome": "João Silva",
          "tipo_deficiencia": "Auditiva",
          "necessidades": "Apoio auditivo"
        },
        {
          "id": 2,
          "escola_id": 2,
          "nome": "Maria Souza",
          "tipo_deficiencia": "Motora",
          "necessidades": "Cadeira de rodas"
        }
      ]),
    };

    const moduleRef = await Test.createTestingModule({
      controllers: [AlunoController],
      providers: [{ provide: AlunoService, useValue: mockAlunoService }],
    }).compile();

    alunoController = moduleRef.get<AlunoController>(AlunoController);
  });

  it('should return an array of students', async () => {
    const result = await alunoController.getAllAlunos();
    
    expect(result).toHaveLength(2);
    expect(result).toEqual([
      {
        "id": 1,
        "escola_id": 1,
        "nome": "João Silva",
        "tipo_deficiencia": "Auditiva",
        "necessidades": "Apoio auditivo"
      },
      {
        "id": 2,
        "escola_id": 2,
        "nome": "Maria Souza",
        "tipo_deficiencia": "Motora",
        "necessidades": "Cadeira de rodas"
      },
    ]);
  });
});
