import { Test, TestingModule } from '@nestjs/testing';
import { EscolaModule } from './escola.module';
import { EscolaController } from './escola.controller';
import { EscolaService } from './escola.service';

// Bloco principal de testes para o EscolaModule
describe('EscolaModule', () => {
 let module: TestingModule;

 // Configuração executada antes de cada teste
 beforeEach(async () => {
   // Criação do módulo de teste importando o EscolaModule real
   module = await Test.createTestingModule({
     imports: [EscolaModule], // Importa o módulo completo para testar suas configurações
   }).compile(); // Compila o módulo para uso nos testes
 });

 // Teste para verificar se o módulo foi compilado com sucesso
 it('deve compilar o módulo corretamente', () => {
   expect(module).toBeDefined();
 });

 // Teste para verificar se o EscolaController está disponível no módulo
 it('deve ter o EscolaController definido', () => {
   // Tenta obter o controlador do módulo compilado
   const controller = module.get<EscolaController>(EscolaController);
   // Verifica se o controlador foi encontrado e inicializado
   expect(controller).toBeDefined();
 });

 // Teste para verificar se o EscolaService está disponível no módulo
 it('deve ter o EscolaService definido', () => {
   // Tenta obter o serviço do módulo compilado
   const service = module.get<EscolaService>(EscolaService);
   // Verifica se o serviço foi encontrado e inicializado
   expect(service).toBeDefined();
 });
});