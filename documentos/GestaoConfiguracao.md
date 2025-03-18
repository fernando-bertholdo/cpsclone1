<Table>
  <tr>
    <td><a href= "https://www.cps.sp.gov.br/"><img src="img/logo-CPS.jpg" alt="Centro Paula Souza" border="0"></td>
    <td>
      <a href= "https://www.inteli.edu.br/"><img src="img/logo-Inteli.png" alt="Inteli - Instituto de Tecnologia e Liderança" border="0"></a>
    </td>
  </tr>
</table>

# Nome do Projeto: GestorIN

## Nome do Grupo: IntegraEDU

## Integrantes:
- <a href="https://www.linkedin.com/in/calebe-matias/">Calebe Matias</a>
- <a href="https://www.linkedin.com/in/fernando-tavares-bertholdo/">Fernando Bertholdo</a>
- <a href="https://www.linkedin.com/in/kauanmassuia/">Kauan Massuia</a>
- <a href="https://www.linkedin.com/in/larissa-temoteo/">Larissa Temoteo</a>
- <a href="https://www.linkedin.com/in/marlos-do-carmo-guedes-366987250/">Marlos Guedes</a>
- <a href="https://www.linkedin.com/in/Matheus Ribeiro dos Santos">Matheus Ribeiro dos Santos</a>
- <a href="https://www.linkedin.com/in/renan-reis-483a10289/">Renan Reis</a>
- <a href="https://www.linkedin.com/in/vinicius-maciel-flor/">Vinicius Maciel</a>

# Sumário

- [1. Introdução](#1-introdução)
  - [1.1 Objetivo do Documento](#11-objetivo-do-documento)
- [2. Política de Branches](#2-política-de-branches)
  - [2.1 Visão Geral do Gitflow](#21-visão-geral-do-gitflow)
  - [2.2 Estrutura de Branches](#22-estrutura-de-branches)
  - [2.3 Diretrizes de Uso das Branches](#23-diretrizes-de-uso-das-branches)
- [3. Políticas de Commit](#3-políticas-de-commit)
- [4. Política de Push e Pull Requests](#4-política-de-push-e-pull-requests)
- [Referências](#referências)

# 1. Introdução
&nbsp;&nbsp;&nbsp;&nbsp;O controle de versão é um aspecto fundamental no desenvolvimento de software, pois permite que equipes trabalhem simultaneamente no mesmo projeto, mantendo a organização e a rastreabilidade das mudanças. Para garantir um fluxo de trabalho eficiente, utilizamos o Git como sistema de versionamento e adotamos o modelo Gitflow para gerenciar as branches do projeto.

&nbsp;&nbsp;&nbsp;&nbsp;Este documento apresenta diretrizes para o uso do Git dentro da equipe, abordando boas práticas relacionadas à estrutura de branches, convenções de commits e processos de pull requests.

## 1.1 Objetivo do Documento
&nbsp;&nbsp;&nbsp;&nbsp;Este documento tem como objetivo definir regras e padrões para o uso do Git, garantindo que o código seja versionado de forma organizada, segura e eficiente. Com isso, busca-se minimizar conflitos entre desenvolvedores, facilitar a colaboração e melhorar a rastreabilidade das alterações no código.

&nbsp;&nbsp;&nbsp;&nbsp;Seguir essas diretrizes assegura que todos os membros da equipe estejam alinhados com as melhores práticas de desenvolvimento, mantendo um fluxo de trabalho padronizado e estruturado.

# 2. Política de Branches

## 2.1 Visão Geral do Gitflow
&nbsp;&nbsp;&nbsp;&nbsp;O Gitflow é um modelo de fluxo de trabalho baseado em branches que organiza o desenvolvimento de software de forma estruturada. Ele define um conjunto de regras sobre como as branches devem ser criadas, utilizadas e integradas, permitindo que o código seja desenvolvido de maneira controlada e escalável.

&nbsp;&nbsp;&nbsp;&nbsp;Esse modelo separa o desenvolvimento em diferentes tipos de branches, cada uma com um propósito específico, garantindo que novas funcionalidades sejam desenvolvidas sem impactar diretamente o código de produção. Além disso, ele facilita a manutenção do código ao definir processos claros para correção de bugs, implementação de novas features e lançamentos de versões.

&nbsp;&nbsp;&nbsp;&nbsp;Ao seguir o Gitflow, a equipe pode colaborar de forma eficiente, garantindo que as mudanças sejam revisadas e testadas antes de serem integradas ao código principal.

## 2.2 Estrutura de Branches
Padrão de Nomenclatura das Branches:

> **main**: Contém o código pronto para produção.
> **develop**: Integração contínua das novas funcionalidades em desenvolvimento.
> **feat/[nome-da-feature]**: Para desenvolvimento de novas funcionalidades. Exemplo: feature/integracao-api
> **bugfix/[nome-do-bug]**: Para correção de bugs. Exemplo: bugfix/corrige-login
> **release/[versao]**: Preparação para lançamento de uma nova versão. Exemplo: release/v1.0.0
> **hotfix/[nome-do-hotfix]**: Correção urgente diretamente na produção. Exemplo: hotfix/corrige-bug-em-producao

## 2.3 Diretrizes de Uso das Branches
- Cada nova funcionalidade deve ser desenvolvida em uma branch de feature criada a partir da branch develop.
  - Nomeação das branches de features deve seguir o padrão feat/[nome-da-feature].
- Todas as novas funcionalidades devem ser desenvolvidas em branches de features e integradas na branch develop através de pull requests.
- Commits diretos na branch main são proibidos! 
  - Configurem o Github para proteger de commits direto para a main.
- Branches de hotfix devem ser criadas a partir da branch main para corrigir problemas críticos em produção.
  - Nomeação das branches de hotfix deve seguir o padrão hotfix/[nome-do-hotfix].

## 2.4 Proteção de Branches no GitHub

- Para garantir a segurança do repositório, serão aplicadas regras de proteção nas branches principais:

  - Branch main:

    - Bloqueio de commits diretos.

    - Requer revisão de pull requests antes do merge.

    - Exige aprovação de pelo menos um revisor.

- Branch develop:

    - Bloqueio de commits diretos.

    - Requer revisão de pull requests antes do merge.

# 3. Políticas de Commit
Integrar "Conventional Commits" nas políticas de commit ajuda a manter um histórico de commits claro e estruturado, facilitando a automação de processos como geração de changelogs e versionamento semântico.

As mensagens de commit devem seguir o padrão de Conventional Commits para garantir clareza e consistência.

Formato: [Tipo][Escopo opcional]: Mensagem clara e descritiva.

Os tipos devem ser:

> **feat**: Uma nova funcionalidade para o usuário.
> **fix**: Correção de bug.
> **docs**: Mudanças na documentação.
> **style**: Mudanças que não afetam o significado do código (espaços em branco, formatação, etc.).
> **refactor**: Uma mudança de código que não corrige um bug nem adiciona uma funcionalidade.
> **test**: Adição ou correção de testes.
> **chore**: Atualizações de tarefas de build ou ferramentas auxiliares e bibliotecas, como a geração de documentação.

Exemplo de commit: feat(auth): add login feature with JWT

Proibido:
- O uso de emojis nas mensagens de commit, e commits com mensagens vagas como "melhorias" ou "atualizações".

IMPORTANTE!
- Realizar commits frequentes (diários) para facilitar o rastreamento de mudanças e a colaboração.

# 4. Política de Push e Pull Requests

**Pull Requests**:

&emsp;&emsp;Solicitações feitas por membros da equipe para mesclar suas alterações em uma branch de desenvolvimento principal. Eles fornecem uma maneira de revisar, discutir e aprovar as alterações antes de serem mescladas no código principal. *Pull requests* também podem ser usados para iniciar discussões e colaboração entre membros da equipe.

**Título**: resume sobre o que é o pull request.
ÁREA DO PROJETO | tema do pr
exemplo:
> BACK | user middleware

**Descrição**: Explica o que contém no pull request.
exemplo: ``` :memo: Changelog ```
># :memo: Changelog
> - adds folder structure

&emsp;&emsp;Além do corpo do pull request, o grupo também padronizou revisores, *labels*, *milestones*, prazos e *issues*.

**Políticas de Push**:
- Não é permitido fazer push diretamente para a main ou develop.
- Todas as contribuições devem ser feitas via branches e submetidas por meio de pull requests.

**Regras de Push**:
- Todo código deve passar por revisão de código por pares antes de ser mergeado.
- A revisão só deve ser aprovada se os testes automatizados forem bem-sucedidos e os critérios de qualidade (cobertura de testes, análise de código) forem atendidos.

**Revisão por Pares - Critério de Aprovação**:
- O pull request deve ser revisado por, no mínimo, uma pessoa.
- A revisão de código deve considerar: 
  - Está funcional e resolve o problema proposto.
  - Passou em todos os testes automatizados.
  - Cobertura mínima de testes (60% ou mais). 
  - Verificação de boas práticas de código.
  - Não introduz duplicidade de código.
- Após a aprovação, a branch deve ser mergeada na develop e o pull request pode ser fechado. 
- O Scrum Master da Sprint é responsável por subir os artefatos para a MAIN ao final da Sprint.

## 4.1 Regras de Merge

- Para manter a qualidade do código, as seguintes regras de merge serão seguidas:

  - O merge para main só pode ser feito a partir da branch release.

  - O merge para develop só pode ser feito através de pull requests revisados e aprovados.

  - As branches feature/*, bugfix/* e hotfix/* devem ser removidas após o merge.

# Referências
- Conventional Commits: https://www.conventionalcommits.org/en/v1.0.0/
- GitFlow: https://nvie.com/posts/a-successful-git-branching-model/
- Github/iuricode: https://github.com/iuricode/padroes-de-commits
