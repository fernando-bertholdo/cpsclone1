# 5.3 Modelagem de Dados e Dicionário de Dados

## 1. Introdução

O dicionário de dados é um documento técnico que descreve detalhadamente as tabelas, campos e relacionamentos do banco de dados utilizado no **GestorIN**. Seu objetivo é padronizar a estrutura das informações armazenadas, garantindo a integridade, consistência e eficiência na manipulação dos dados.

Cada entrada do dicionário inclui:
- **Nome do campo:** Identificação exata do atributo dentro da tabela.
- **Tipo de dado:** Definição do tipo de informação armazenada (ex: inteiro, texto, data).
- **Descrição:** Explicação do propósito do campo dentro do contexto do sistema.
- **Formato/tamanho:** Restrições sobre a estrutura do dado (ex: limite de caracteres).
- **Valores permitidos/restrições:** Definição de possíveis valores ou regras aplicáveis.
- **Origem dos dados:** Indicação de onde os dados são gerados ou inseridos.
- **Relacionamentos:** Conexões entre tabelas que estabelecem integridade referencial.

## 2. Estrutura do Banco de Dados

### 2.1 Tabelas e Campos

| Campo                      | Tipo      | Descrição                                               | Formato/Tamanho    | Valores Permitidos/Restrições       | Origem dos Dados            | Relacionamentos                         |
| -------------------------- | --------- | ------------------------------------------------------- | ------------------ | ----------------------------------- | --------------------------- | --------------------------------------- |
| id                         | Inteiro   | Identificador único de cada registro                    | SERIAL             | Único, sequencial                   | Sistema (auto-incrementado) | Chave primária em todas as tabelas      |
| **Tabela: Escola**         |           |                                                         |                    |                                     |                             |                                         |
| nome                       | Texto     | Nome da escola                                          | Até 255 caracteres | -                                   | Input usuário               | -                                       |
| cnpj                       | Texto     | CNPJ da escola                                          | 18 caracteres      | Formato válido de CNPJ, único       | Input usuário               | -                                       |
| endereco                   | Texto     | Endereço da escola                                      | Até 255 caracteres | -                                   | Input usuário               | -                                       |
| **Tabela: Usuario**        |           |                                                         |                    |                                     |                             |                                         |
| escola_id                 | Inteiro   | Referência à escola onde o usuário está vinculado       | Inteiro            | Deve existir na tabela Escola       | Sistema interno             | Chave estrangeira para Escola(id) ON DELETE CASCADE       |
| nome                       | Texto     | Nome do usuário                                         | Até 255 caracteres | -                                   | Input usuário               | -                                       |
| email                      | Texto     | Endereço de email do usuário                            | Até 255 caracteres | Formato de email válido, único      | Input usuário               | -                                       |
| senha                      | Texto     | Senha criptografada para autenticação                   | Até 255 caracteres | -                                   | Input usuário               | -                                       |
| tipo                       | Texto     | Tipo de usuário                                         | Até 50 caracteres  | Administrador, Profissional, Gestor | Sistema interno             | -                                       |
| **Tabela: Aluno**          |           |                                                         |                    |                                     |                             |                                         |
| escola_id                 | Inteiro   | Referência à escola onde o aluno está matriculado       | Inteiro            | Deve existir na tabela Escola       | Sistema interno             | Chave estrangeira para Escola(id) ON DELETE CASCADE       |
| nome                       | Texto     | Nome completo do aluno                                  | Até 255 caracteres | -                                   | Input usuário               | -                                       |
| tipo_deficiencia          | Texto     | Tipo de deficiência do aluno                            | Até 255 caracteres | Auditiva, Motora, Visual, Outros    | Input usuário               | Pode ser NULL                           |
| necessidades               | Texto     | Necessidades específicas do aluno                       | Texto              | -                                   | Input usuário               | Pode ser NULL                           |
| **Tabela: Atendimento**    |           |                                                         |                    |                                     |                             |                                         |
| escola_id                 | Inteiro   | Referência à escola onde ocorreu o atendimento          | Inteiro            | Deve existir na tabela Escola       | Sistema interno             | Chave estrangeira para Escola(id) ON DELETE CASCADE       |
| aluno_id                  | Inteiro   | Referência ao aluno atendido                            | Inteiro            | Deve existir na tabela Aluno        | Sistema interno             | Chave estrangeira para Aluno(id) ON DELETE CASCADE       |
| profissional_id           | Inteiro   | Referência ao profissional responsável pelo atendimento | Inteiro            | Pode ser NULL                       | Sistema interno             | Chave estrangeira para Profissional(id) ON DELETE SET NULL |
| data_inicio               | Data/Hora | Data e hora de início do atendimento                    | TIMESTAMP          | Data válida                         | Sistema interno             | -                                       |
| data_fim                  | Data/Hora | Data e hora de término do atendimento                   | TIMESTAMP          | Pode ser NULL                       | Sistema interno             | -                                       |
| descricao                  | Texto     | Descrição do atendimento realizado                      | Texto              | -                                   | Profissional                | -                                       |
| **Tabela: Caso**           |           |                                                         |                    |                                     |                             |                                         |
| aluno_id                  | Inteiro   | Referência ao aluno associado ao caso                   | Inteiro            | Deve existir na tabela Aluno        | Sistema interno             | Chave estrangeira para Aluno(id) ON DELETE CASCADE       |
| data_abertura             | Data      | Data de abertura do caso                                | DATE               | Data válida                         | Sistema interno             | -                                       |
| status                     | Texto     | Status do caso                                          | Até 50 caracteres  | Aberto, Em andamento, Fechado       | Profissional                | **NOT NULL**                            |
| descricao                  | Texto     | Descrição do caso                                       | Texto              | -                                   | Profissional                | -                                       |
| historico_modificacoes    | Texto     | Histórico de modificações do caso                       | Texto              | -                                   | Sistema interno             | -                                       |

---
