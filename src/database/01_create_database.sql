CREATE TABLE Escola (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    cnpj VARCHAR(18) UNIQUE NOT NULL,
    endereco VARCHAR(255)
);

CREATE TABLE Usuario (
    id SERIAL PRIMARY KEY,
    escola_id INT REFERENCES Escola(id) ON DELETE CASCADE,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    senha VARCHAR(255) NOT NULL,
    tipo VARCHAR(50) NOT NULL
);

CREATE TABLE Aluno (
    id SERIAL PRIMARY KEY,
    escola_id INT REFERENCES Escola(id) ON DELETE CASCADE,
    nome VARCHAR(255) NOT NULL,
    tipo_deficiencia VARCHAR(255),
    necessidades TEXT
);

CREATE TABLE Profissional (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    especialidade VARCHAR(255),
    contato VARCHAR(255)
);

CREATE TABLE Atendimento (
    id SERIAL PRIMARY KEY,
    escola_id INT REFERENCES Escola(id) ON DELETE CASCADE,
    aluno_id INT REFERENCES Aluno(id) ON DELETE CASCADE,
    profissional_id INT REFERENCES Profissional(id) ON DELETE SET NULL,
    data_inicio TIMESTAMP NOT NULL,
    data_fim TIMESTAMP,
    descricao TEXT
);

CREATE TABLE Equipamento (
    id SERIAL PRIMARY KEY,
    escola_id INT REFERENCES Escola(id) ON DELETE CASCADE,
    nome VARCHAR(255) NOT NULL,
    descricao TEXT
);

CREATE TABLE UsoEquipamento (
    id SERIAL PRIMARY KEY,
    aluno_id INT REFERENCES Aluno(id) ON DELETE CASCADE,
    equipamento_id INT REFERENCES Equipamento(id) ON DELETE CASCADE,
    data_inicio TIMESTAMP NOT NULL,
    data_fim TIMESTAMP,
    observacao TEXT
);

CREATE TABLE Caso (
    id SERIAL PRIMARY KEY,
    aluno_id INT REFERENCES Aluno(id) ON DELETE CASCADE,
    data_abertura DATE NOT NULL,
    status VARCHAR(50) NOT NULL,
    descricao TEXT,
    historico_modificacoes TEXT
);
