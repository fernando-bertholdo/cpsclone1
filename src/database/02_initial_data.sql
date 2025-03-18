INSERT INTO Escola (nome, cnpj, endereco) VALUES
('Escola A', '12.345.678/0001-99', 'Rua A, 123'),
('Escola B', '98.765.432/0001-11', 'Rua B, 456');

INSERT INTO Usuario (escola_id, nome, email, senha, tipo) VALUES
(1, 'Admin A', 'adminA@example.com', 'senha123', 'Administrador'),
(2, 'Admin B', 'adminB@example.com', 'senha456', 'Administrador');

INSERT INTO Aluno (escola_id, nome, tipo_deficiencia, necessidades) VALUES
(1, 'João Silva', 'Auditiva', 'Apoio auditivo'),
(2, 'Maria Souza', 'Motora', 'Cadeira de rodas');

INSERT INTO Profissional (nome, especialidade, contato) VALUES
('Dr. Carlos Mendes', 'Fisioterapeuta', 'carlos@example.com'),
('Dra. Ana Lima', 'Psicóloga', 'ana@example.com');

INSERT INTO Atendimento (escola_id, aluno_id, profissional_id, data_inicio, data_fim, descricao) VALUES
(1, 1, 1, '2024-02-01 08:00:00', '2024-02-01 09:00:00', 'Sessão de fisioterapia'),
(2, 2, 2, '2024-02-02 10:00:00', '2024-02-02 11:00:00', 'Atendimento psicológico');

INSERT INTO Equipamento (escola_id, nome, descricao) VALUES
(1, 'Computador Adaptado', 'Computador com software de acessibilidade'),
(2, 'Cadeira de Rodas', 'Cadeira de rodas motorizada');

INSERT INTO UsoEquipamento (aluno_id, equipamento_id, data_inicio, data_fim, observacao) VALUES
(1, 1, '2024-02-01 08:00:00', '2024-02-01 09:00:00', 'Usado durante a sessão de aula'),
(2, 2, '2024-02-02 10:00:00', '2024-02-02 11:00:00', 'Utilizada para locomoção na escola');

INSERT INTO Caso (aluno_id, data_abertura, status, descricao, historico_modificacoes) VALUES
(1, '2024-01-15', 'Aberto', 'Caso de apoio educacional', 'Histórico inicial registrado'),
(2, '2024-01-20', 'Fechado', 'Caso de acompanhamento psicológico', 'Caso encerrado após progresso satisfatório');
