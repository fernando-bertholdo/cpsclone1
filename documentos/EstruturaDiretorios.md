# ESTRUTURA DE DIRETÓRIOS DO PROJETO GESTORIN

## INTRODUÇÃO

Este documento apresenta a estrutura de diretórios do projeto **GestorIN**, explicando a finalidade de cada pasta e arquivo essencial. O objetivo é garantir organização, padronização e facilitar a colaboração entre os desenvolvedores.

---

## ESTRUTURA GERAL

/<br>
│<br>
├── /assets<br>
├── /documentos<br>
│&nbsp;&nbsp;&nbsp;├── /img<br>
│&nbsp;&nbsp;&nbsp;├── GestaoConfiguracao.md<br>
│&nbsp;&nbsp;&nbsp;├── GestaoProjeto.md<br>
│&nbsp;&nbsp;&nbsp;├── GuiaPadroesDesenvolvimento.md<br>
│&nbsp;&nbsp;&nbsp;├── Index.md<br>
│&nbsp;&nbsp;&nbsp;├── Manual-instalacao.md<br>
│&nbsp;&nbsp;&nbsp;└── Projeto.md<br>
│<br>
├── /src<br>
│&nbsp;&nbsp;&nbsp;├── /database<br>
│&nbsp;&nbsp;&nbsp;├── /frontend<br>
│&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;├── /.angular<br>
│&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;├── /.vscode<br>
│&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;├── /libs<br>
│&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;├── /node_modules<br>
│&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;├── /public<br>
│&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;├── /src<br>
│&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;├── /app<br>
│&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;├── index.html<br>
│&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;├── main.ts<br>
│&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;└── styles.css<br>
│&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;├── package.json<br>
│&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;├── tsconfig.app.json<br>
│&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;├── tsconfig.json<br>
│&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;├── tsconfig.spec.json<br>
│&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;├── .editorconfig<br>
│&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;├── .gitignore<br>
│&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;├── angular.json<br>
│&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;├── components.json<br>
│&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;├── package-lock.json<br>
│&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;├── README.md<br>
│&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;└── tailwind.config.js<br>
│&nbsp;&nbsp;&nbsp;│<br>
│<br>
├── .gitignore<br>
├── EstruturaDePastas.md<br>
├── package-lock.json<br>
└── readme.md<br>

## 1. ASSETS

Diretório para armazenar recursos estáticos como imagens, fontes e outros arquivos de mídia.

## 2. DOCUMENTOS

Este diretório contém toda a documentação do projeto:

- **/img**: Armazena imagens usadas na documentação.
- **GestaoConfiguracao.md**: Documentação sobre a gestão de configuração do projeto.
- **GestaoProjeto.md**: Diretrizes e metodologias para a gestão do projeto.
- **GuiaPadroesDesenvolvimento.md**: Define os padrões de desenvolvimento a serem seguidos.
- **Index.md**: Arquivo índice para a documentação.
- **Manual-instalacao.md**: Instruções detalhadas para instalação do ambiente.
- **Projeto.md**: Visão geral do projeto, objetivos e arquitetura.
- **EstruturaDiretorios.md**: Este documento, descrevendo a organização de diretórios do projeto.

## 3. src (SOURCE)

Contém o código-fonte do projeto, dividido em múltiplos componentes:

### 3.1 DATABASE

Armazena scripts e configurações relacionados ao banco de dados.

### 3.2 FRONTEND

Implementação da interface do usuário com Angular:

- **/.angular**: Diretório de cache gerado pelo Angular CLI.
- **/.vscode**: Configurações específicas para o Visual Studio Code.
- **/libs**: Bibliotecas externas utilizadas no projeto.
- **/node_modules**: Pacotes npm instalados.
- **/public**: Arquivos estáticos acessíveis publicamente.
- **/src**: Código-fonte Angular:
  - **/app**: Componentes, serviços e módulos da aplicação.
  - **index.html**: Ponto de entrada HTML da aplicação.
  - **main.ts**: Ponto de entrada TypeScript da aplicação.
  - **styles.css**: Estilos globais da aplicação.
- **package.json**: Gerencia dependências e scripts npm.
- **tsconfig.app.json**: Configuração TypeScript específica da aplicação.
- **tsconfig.json**: Configuração TypeScript principal.
- **tsconfig.spec.json**: Configuração TypeScript para testes.
- **.editorconfig**: Configurações consistentes do editor.
- **.gitignore**: Lista de arquivos ignorados pelo Git.
- **angular.json**: Configuração do Angular CLI.
- **components.json**: Definição de componentes personalizados.
- **package-lock.json**: Controle de versões exatas dos pacotes.
- **README.md**: Informações sobre o frontend.
- **tailwind.config.js**: Configuração do framework Tailwind CSS.

<br>

## 4. ARQUIVOS RAIZ

- **.gitignore**: Define arquivos ignorados pelo repositório Git.
- **package-lock.json**: Controle de versões exatas dos pacotes npm.
- **readme.md**: Visão geral e instruções sobre o projeto.

<br>

## 5. CONSIDERAÇÕES FINAIS

A estrutura de diretórios do GestorIN segue boas práticas para facilitar a organização, escalabilidade e manutenção do sistema. Essa divisão modular permite um desenvolvimento mais eficiente e estruturado.

---

