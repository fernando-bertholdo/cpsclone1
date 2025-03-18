<Table>
  <tr>
    <td><a href= "https://www.cps.sp.gov.br/"><img src="/documentos/img/logo-CPS.jpg" alt="Centro Paula Souza" border="0"></td>
    <td>
      <a href= "https://www.inteli.edu.br/"><img src="/documentos/img/logo-Inteli.png" alt="Inteli - Instituto de Tecnologia e Liderança" border="0"></a>
    </td>
  </tr>
</table>

# GestorIN

## IntegraEdu

---
# Banco de Dados do GestorIN

Este diretório contém toda a documentação e scripts relacionados ao banco de dados do sistema **GestorIN**, desenvolvido pelo grupo **IntegraEdu**. O GestorIN foi projetado para otimizar a gestão escolar, integrando informações de escolas, alunos, profissionais, equipamentos, atendimentos e casos.
---

## 1. Script SQL de Criação do Banco de Dados (`01_create_database.sql`)

*   **Descrição**: Este script define todas as tabelas do banco de dados, incluindo colunas, tipos de dados, chaves primárias, chaves estrangeiras e restrições de integridade.
*   **Versionamento**: O script é versionado no repositório GitHub para rastrear todas as alterações.
*   **Funcionalidade e Otimização**: O script é funcional, otimizado e adere às boas práticas de modelagem de banco de dados.

### 1.1 Tabelas Criadas

*   `Escola`: Dados das escolas.
*   `Usuario`: Dados dos usuários do sistema.
*   `Aluno`: Dados dos alunos matriculados.
*   `Profissional`: Dados dos profissionais que realizam atendimentos.
*   `Atendimento`: Dados dos atendimentos realizados.
*   `Equipamento`: Dados dos equipamentos disponíveis.
*   `UsoEquipamento`: Dados do uso de equipamentos por alunos.
*   `Caso`: Dados dos casos associados aos alunos.

### 1.2 Como Executar

1.  Conecte-se ao banco de dados PostgreSQL.
2.  Execute o script `01_create_database.sql`.

```sql
--- i caminho/para/01_create_database.sql
```  

## 2. Script de Inserção de Dados Iniciais (`02_initial_data.sql`)

*   **Descrição**: Este script contém dados iniciais para popular o banco de dados com exemplos de registros, facilitando testes e demonstrações.
*   **Funcionalidade**: O script pode ser executado sem erros para inserir os dados iniciais.

### 2.1 Dados Inseridos:
- **Escola**: Duas escolas de exemplo.
- **Usuario**: Dois usuários administradores, um para cada escola.
- **Aluno**: Dois alunos, cada um vinculado a uma escola.
- **Profissional**: Dois profissionais (um fisioterapeuta e uma psicóloga).
- **Atendimento**: Dois atendimentos, um para cada aluno.
- **Equipamento**: Dois equipamentos, um para cada escola.
- **UsoEquipamento**: Dois registros de uso de equipamentos.
- **Caso**: Dois casos, um para cada aluno.

### 2.2 Como Executar:
1. Certifique-se de que as tabelas já foram criadas (execute `01_create_database.sql` primeiro).
2. Execute o script `02_initial_data.sql` para inserir os dados iniciais.

```sql
--i caminho/para/02_initial_data.sql
```
## 3. Estrutura do Banco de Dados

O banco de dados do GestorIN foi modelado em três níveis:

1. **Modelo Conceitual**: Define as entidades e seus relacionamentos de forma abstrata.
2. **Modelo Lógico**: Transforma as entidades em tabelas, com definição de colunas, tipos de dados e relacionamentos.
3. **Modelo Físico**: Implementa as tabelas no banco de dados, com tipos de dados específicos, chaves primárias, chaves estrangeiras e restrições.

Para mais detalhes sobre cada modelo, consulte a [documentação completa](https://github.com/Inteli-College/2025-1A-T13-ES05-G05/blob/main/documentos/Projeto.md).

---

## 4. Tabelas do Banco de Dados

O banco de dados é composto pelas seguintes tabelas:

| Tabela           | Descrição                                                                 |
|------------------|---------------------------------------------------------------------------|
| **Usuario**      | Armazena os dados dos usuários do sistema, com diferentes níveis de acesso. |
| **Escola**       | Armazena os dados das escolas associadas ao sistema.                      |
| **Aluno**        | Armazena os dados dos alunos matriculados nas escolas.                    |
| **Profissional** | Armazena os dados dos profissionais que realizam atendimentos.            |
| **Equipamento**  | Armazena os dados dos equipamentos disponíveis nas escolas.               |
| **Atendimento**  | Armazena os dados dos atendimentos realizados por profissionais.          |
| **Caso**         | Armazena os dados dos casos associados aos alunos.                        |
| **UsoEquipamento** | Armazena os dados do uso de equipamentos por alunos.                     |

## 5 Dicionário de Dados
*   **Descrição**: O dicionário de dados detalha cada tabela, incluindo seus atributos, tipos de dados, restrições e relacionamentos.

### Estrutura do Dicionário

Cada entrada do dicionário inclui:
- **Nome do campo:** Identificação exata do atributo dentro da tabela.
- **Tipo de dado:** Definição do tipo de informação armazenada (ex: inteiro, texto, data).
- **Descrição:** Explicação do propósito do campo dentro do contexto do sistema.
- **Formato/tamanho:** Restrições sobre a estrutura do dado (ex: limite de caracteres).
- **Valores permitidos/restrições:** Definição de possíveis valores ou regras aplicáveis.
- **Origem dos dados:** Indicação de onde os dados são gerados ou inseridos.
- **Relacionamentos:** Conexões entre tabelas que estabelecem integridade referencial.

### 5.1 Tabela: Escola

| Campo          | Tipo      | Descrição                                               | Formato/Tamanho    | Valores Permitidos/Restrições       | Origem dos Dados            | Relacionamentos                         |
|----------------|-----------|-------------------------------------------------------|------------------|-----------------------------------|---------------------------|---------------------------------------|
| id             | Inteiro   | Identificador único da escola                           | SERIAL             | Único, sequencial                   | Sistema (auto-incrementado) | Chave primária                         |
| nome           | Texto     | Nome da escola                                          | Até 255 caracteres | -                                   | Input usuário               | -                                       |
| cnpj           | Texto     | CNPJ da escola                                          | 18 caracteres      | Formato válido de CNPJ, único       | Input usuário               | -                                       |
| endereco       | Texto     | Endereço da escola                                      | Até 255 caracteres | -                                   | Input usuário               | -                                       |

---

### 5.2 Tabela: Usuario

| Campo          | Tipo      | Descrição                                               | Formato/Tamanho    | Valores Permitidos/Restrições       | Origem dos Dados            | Relacionamentos                         |
|----------------|-----------|-------------------------------------------------------|------------------|-----------------------------------|---------------------------|---------------------------------------|
| id             | Inteiro   | Identificador único do usuário                          | SERIAL             | Único, sequencial                   | Sistema (auto-incrementado) | Chave primária                         |
| escola_id      | Inteiro   | Referência à escola onde o usuário está vinculado       | Inteiro            | Deve existir na tabela Escola       | Sistema interno             | Chave estrangeira para Escola(id) ON DELETE CASCADE       |
| nome           | Texto     | Nome do usuário                                         | Até 255 caracteres | -                                   | Input usuário               | -                                       |
| email          | Texto     | Endereço de email do usuário                            | Até 255 caracteres | Formato de email válido, único      | Input usuário               | -                                       |
| senha          | Texto     | Senha criptografada para autenticação                   | Até 255 caracteres | -                                   | Input usuário               | -                                       |
| tipo           | Texto     | Tipo de usuário                                         | Até 50 caracteres  | Administrador, Profissional, Gestor | Sistema interno             | -                                       |

---

### 5.3 Tabela: Aluno

| Campo          | Tipo      | Descrição                                               | Formato/Tamanho    | Valores Permitidos/Restrições       | Origem dos Dados            | Relacionamentos                         |
|----------------|-----------|-------------------------------------------------------|------------------|-----------------------------------|---------------------------|---------------------------------------|
| id             | Inteiro   | Identificador único do aluno                            | SERIAL             | Único, sequencial                   | Sistema (auto-incrementado) | Chave primária                         |
| escola_id      | Inteiro   | Referência à escola onde o aluno está matriculado       | Inteiro            | Deve existir na tabela Escola       | Sistema interno             | Chave estrangeira para Escola(id) ON DELETE CASCADE       |
| nome           | Texto     | Nome completo do aluno                                  | Até 255 caracteres | -                                   | Input usuário               | -                                       |
| tipo_deficiencia| Texto     | Tipo de deficiência do aluno                            | Até 255 caracteres | Auditiva, Motora, Visual, Outros    | Input usuário               | Pode ser NULL                           |
| necessidades   | Texto     | Necessidades específicas do aluno                       | Texto              | -                                   | Input usuário               | Pode ser NULL                           |

---

### 5.4 Tabela: Profissional

| Campo          | Tipo      | Descrição                                               | Formato/Tamanho    | Valores Permitidos/Restrições       | Origem dos Dados            | Relacionamentos                         |
|----------------|-----------|-------------------------------------------------------|------------------|-----------------------------------|---------------------------|---------------------------------------|
| id             | Inteiro   | Identificador único do profissional                    | SERIAL             | Único, sequencial                   | Sistema (auto-incrementado) | Chave primária                         |
| nome           | Texto     | Nome do profissional                                    | Até 255 caracteres | -                                   | Input usuário               | -                                       |
| especialidade  | Texto     | Especialidade do profissional                           | Até 255 caracteres | -                                   | Input usuário               | -                                       |

---

### 5.5 Tabela: Atendimento

| Campo          | Tipo      | Descrição                                               | Formato/Tamanho    | Valores Permitidos/Restrições       | Origem dos Dados            | Relacionamentos                         |
|----------------|-----------|-------------------------------------------------------|------------------|-----------------------------------|---------------------------|---------------------------------------|
| id             | Inteiro   | Identificador único do atendimento                     | SERIAL             | Único, sequencial                   | Sistema (auto-incrementado) | Chave primária                         |
| escola_id      | Inteiro   | Referência à escola onde ocorreu o atendimento          | Inteiro            | Deve existir na tabela Escola       | Sistema interno             | Chave estrangeira para Escola(id) ON DELETE CASCADE       |
| aluno_id       | Inteiro   | Referência ao aluno atendido                            | Inteiro            | Deve existir na tabela Aluno        | Sistema interno             | Chave estrangeira para Aluno(id) ON DELETE CASCADE       |
| profissional_id| Inteiro   | Referência ao profissional responsável pelo atendimento | Inteiro            | Pode ser NULL                       | Sistema interno             | Chave estrangeira para Profissional(id) ON DELETE SET NULL |
| data_inicio    | Data/Hora | Data e hora de início do atendimento                    | TIMESTAMP          | Data válida                         | Sistema interno             | -                                       |
| data_fim       | Data/Hora | Data e hora de término do atendimento                   | TIMESTAMP          | Pode ser NULL                       | Sistema interno             | -                                       |
| descricao      | Texto     | Descrição do atendimento realizado                      | Texto              | -                                   | Profissional                | -                                       |

---

### 5.6 Tabela: Equipamento

| Campo          | Tipo      | Descrição                                               | Formato/Tamanho    | Valores Permitidos/Restrições       | Origem dos Dados            | Relacionamentos                         |
|----------------|-----------|-------------------------------------------------------|------------------|-----------------------------------|---------------------------|---------------------------------------|
| id             | Inteiro   | Identificador único do equipamento                     | SERIAL             | Único, sequencial                   | Sistema (auto-incrementado) | Chave primária                         |
| escola_id      | Inteiro   | Referência à escola onde o equipamento está localizado  | Inteiro            | Deve existir na tabela Escola       | Sistema interno             | Chave estrangeira para Escola(id) ON DELETE CASCADE       |
| nome           | Texto     | Nome do equipamento                                     | Até 255 caracteres | -                                   | Input usuário               | -                                       |
| descricao      | Texto     | Descrição do equipamento                                | Texto              | -                                   | Input usuário               | -                                       |

---

### 5.7 Tabela: UsoEquipamento

| Campo          | Tipo      | Descrição                                               | Formato/Tamanho    | Valores Permitidos/Restrições       | Origem dos Dados            | Relacionamentos                         |
|----------------|-----------|-------------------------------------------------------|------------------|-----------------------------------|---------------------------|---------------------------------------|
| id             | Inteiro   | Identificador único do uso de equipamento               | SERIAL             | Único, sequencial                   | Sistema (auto-incrementado) | Chave primária                         |
| aluno_id       | Inteiro   | Referência ao aluno que utilizou o equipamento         | Inteiro            | Deve existir na tabela Aluno        | Sistema interno             | Chave estrangeira para Aluno(id) ON DELETE CASCADE       |
| equipamento_id | Inteiro   | Referência ao equipamento utilizado                     | Inteiro            | Deve existir na tabela Equipamento  | Sistema interno             | Chave estrangeira para Equipamento(id) ON DELETE CASCADE |
| data_uso       | Data      | Data de uso do equipamento                              | DATE               | Data válida                         | Sistema interno             | -                                       |

---

### 5.8 Tabela: Caso

| Campo          | Tipo      | Descrição                                               | Formato/Tamanho    | Valores Permitidos/Restrições       | Origem dos Dados            | Relacionamentos                         |
|----------------|-----------|-------------------------------------------------------|------------------|-----------------------------------|---------------------------|---------------------------------------|
| id             | Inteiro   | Identificador único do caso                             | SERIAL             | Único, sequencial                   | Sistema (auto-incrementado) | Chave primária                         |
| aluno_id       | Inteiro   | Referência ao aluno associado ao caso                   | Inteiro            | Deve existir na tabela Aluno        | Sistema interno             | Chave estrangeira para Aluno(id) ON DELETE CASCADE       |
| data_abertura  | Data      | Data de abertura do caso                                | DATE               | Data válida                         | Sistema interno             | -                                       |
| status         | Texto     | Status do caso                                          | Até 50 caracteres  | Aberto, Em andamento, Fechado       | Profissional                | **NOT NULL**                            |
| descricao      | Texto     | Descrição do caso                                       | Texto              | -                                   | Profissional                | -                                       |
| historico_modificacoes| Texto     | Histórico de modificações do caso                       | Texto              | -                                   | Sistema interno             | -                                       |

## 6. Informações de Implantação e Configuração

### 6.1 Configuração no Supabase

*   **Versão do Banco de Dados**: PostgreSQL (gerenciado pelo Supabase)
*   **Dependências**: Nenhuma dependência externa necessária, pois o Supabase fornece um ambiente gerenciado.
*   **Configurações de Ambiente**:

    *   Criar um projeto no [Supabase](https://supabase.com/).
    *   Obter a string de conexão do banco de dados no painel do Supabase em "Database settings".
*   **Ajustes Necessários**:

    *   Configurar as políticas de Row Level Security (RLS) conforme necessário para proteger os dados.
    *   Utilizar o SQL Editor do Supabase ou ferramentas como pgAdmin/DBeaver para executar scripts SQL.


### 6.2 Passos para Implantação

1.  **Criar um Projeto no Supabase**:
    *   Acesse o site do Supabase e crie uma conta, se necessário.
    *   Crie um novo projeto no painel do Supabase.
2.  **Configurar o Banco de Dados**:
    *   O Supabase provisiona automaticamente um banco de dados PostgreSQL.
    *   Obtenha a string de conexão para acessar o banco de dados.
3.  **Executar os Scripts SQL**:
    *   Utilize o SQL Editor do Supabase ou uma ferramenta externa como pgAdmin/DBeaver.
    *   Execute o script `01_create_database.sql` para criar as tabelas.
    *   Execute o script `02_initial_data.sql` para inserir os dados iniciais.

## 7. Como Utilizar

### 7.1 Pré-requisitos
Para configurar o banco de dados, siga os passos abaixo:

*   Conta no [Supabase](https://supabase.com/).
*   Ferramenta para acessar o banco de dados (SQL Editor do Supabase, pgAdmin, DBeaver).

### 7.2 Execução dos Scripts

1.  Conecte-se ao banco de dados PostgreSQL via Supabase.
2.  Execute os scripts SQL na ordem: `01_create_database.sql` e `02_initial_data.sql`.

### 7.3 Controle de Acesso

*   O controle de acesso é gerenciado pela tabela `Usuario`. O campo `tipo` define as permissões de cada usuário.

## 8. Relacionamentos entre Tabelas

Abaixo estão os principais relacionamentos entre as tabelas:

| Relacionamento     | Tabela 1       | Tabela 2          | Descrição                                                                 |
|--------------------|----------------|-------------------|---------------------------------------------------------------------------|
| **Gerencia**       | Usuario        | Escola            | Um usuário (gestor) pode gerenciar várias escolas.                        |
| **Possui**         | Escola         | Aluno             | Uma escola pode ter vários alunos.                                       |
| **Possui**         | Escola         | Equipamento       | Uma escola pode ter vários equipamentos.                                 |
| **Acompanha**      | Profissional   | Caso              | Um profissional pode acompanhar vários casos.                            |
| **Realiza**        | Profissional   | Atendimento       | Um profissional pode realizar vários atendimentos.                       |
| **Recebe**         | Aluno          | Atendimento       | Um aluno pode receber vários atendimentos.                               |
| **Utiliza**        | Aluno          | UsoEquipamento    | Um aluno pode utilizar vários equipamentos.                              |
| **Utilizado_em**   | Equipamento    | UsoEquipamento    | Um equipamento pode ser utilizado em vários registros de uso.            |