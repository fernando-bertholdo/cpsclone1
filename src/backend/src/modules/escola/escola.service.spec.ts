import { Test, TestingModule } from '@nestjs/testing';
import { EscolaService } from './escola.service';
import { DatabaseService } from 'src/config/database.service';
import { NotFoundException } from '@nestjs/common';

// Bloco principal de testes para o EscolaService
describe('EscolaService', () => {
 let service: EscolaService;
 // Define um tipo parcial para o DatabaseService para facilitar o mock
 let databaseService: Partial<DatabaseService>;

 // Configuração executada antes de cada teste
 beforeEach(async () => {
   // Inicializa o mock do DatabaseService com o método query mockado
   databaseService = {
     query: jest.fn(),
   };

   // Criação do módulo de teste com as dependências necessárias
   const module: TestingModule = await Test.createTestingModule({
     providers: [
       EscolaService, // Serviço real que será testado
       {
         provide: DatabaseService, // Fornece uma implementação mockada do DatabaseService
         useValue: databaseService,
       },
     ],
   }).compile();

   // Obtém a instância do serviço para uso nos testes
   service = module.get<EscolaService>(EscolaService);
 });

 // Grupo de testes para o método getAllEscolas
 describe('getAllEscolas', () => {
   // Teste para verificar se o método retorna todas as escolas corretamente
   it('deve retornar todas as escolas', async () => {
     // Mock dos dados que serão retornados pelo DatabaseService
     const mockRows = [{ id: 1, nome: 'Escola A' }];
     // Configura o mock para retornar os dados mockados
     (databaseService.query as jest.Mock).mockResolvedValue({ rows: mockRows });

     // Executa o método do serviço que está sendo testado
     const result = await service.getAllEscolas();
     // Verifica se a query SQL correta foi executada
     expect(databaseService.query).toHaveBeenCalledWith('SELECT * FROM escola');
     // Verifica se o resultado é igual ao mock esperado
     expect(result).toEqual(mockRows);
   });
 });

 // Grupo de testes para o método getEscolaById
 describe('getEscolaById', () => {
   // Teste para verificar se o método retorna uma escola quando encontrada
   it('deve retornar uma escola quando encontrada', async () => {
     // Mock da escola que será retornada
     const mockEscola = { id: 1, nome: 'Escola A' };
     // Configura o mock para retornar a escola mockada
     (databaseService.query as jest.Mock).mockResolvedValue({ rows: [mockEscola] });

     // Executa o método do serviço com o ID 1
     const result = await service.getEscolaById(1);
     // Verifica se a query SQL correta foi executada com o parâmetro correto
     expect(databaseService.query).toHaveBeenCalledWith('SELECT * FROM escola WHERE id = $1', [1]);
     // Verifica se o resultado é igual ao mock esperado
     expect(result).toEqual(mockEscola);
   });

   // Teste para verificar se o método lança exceção quando a escola não é encontrada
   it('deve lançar NotFoundException quando a escola não for encontrada', async () => {
     // Configura o mock para retornar um array vazio (escola não encontrada)
     (databaseService.query as jest.Mock).mockResolvedValue({ rows: [] });
     // Verifica se a execução do método com ID 1 lança uma NotFoundException
     await expect(service.getEscolaById(1)).rejects.toThrow(NotFoundException);
   });
 });

 // Grupo de testes para o método getProfissionaisByEscola
 describe('getProfissionaisByEscola', () => {
   // Teste para verificar se o método retorna os profissionais da escola corretamente
   it('deve retornar os profissionais da escola', async () => {
     // Mock dos profissionais que serão retornados
     const mockProfissionais = [{ id: 1, nome: 'Profissional A' }];
     // Configura o mock para retornar os profissionais mockados
     (databaseService.query as jest.Mock).mockResolvedValue({ rows: mockProfissionais });

     // Executa o método do serviço com o ID 1
     const result = await service.getProfissionaisByEscola(1);
     // Verifica se a query SQL correta foi executada com o parâmetro correto
     expect(databaseService.query).toHaveBeenCalledWith('SELECT * FROM profissional WHERE escola_id = $1', [1]);
     // Verifica se o resultado é igual ao mock esperado
     expect(result).toEqual(mockProfissionais);
   });
 });

 // Grupo de testes para o método getEquipamentosByEscola
 describe('getEquipamentosByEscola', () => {
   // Teste para verificar se o método retorna os equipamentos da escola corretamente
   it('deve retornar os equipamentos da escola', async () => {
     // Mock dos equipamentos que serão retornados
     const mockEquipamentos = [{ id: 1, nome: 'Equipamento A' }];
     // Configura o mock para retornar os equipamentos mockados
     (databaseService.query as jest.Mock).mockResolvedValue({ rows: mockEquipamentos });

     // Executa o método do serviço com o ID 1
     const result = await service.getEquipamentosByEscola(1);
     // Verifica se a query SQL correta foi executada com o parâmetro correto
     expect(databaseService.query).toHaveBeenCalledWith('SELECT * FROM equipamento WHERE escola_id = $1', [1]);
     // Verifica se o resultado é igual ao mock esperado
     expect(result).toEqual(mockEquipamentos);
   });
 });
});