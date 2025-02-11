-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 12/02/2025 às 00:26
-- Versão do servidor: 10.4.32-MariaDB
-- Versão do PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `tcc_atlas`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `mensagens`
--

CREATE TABLE `mensagens` (
  `Id` int(10) NOT NULL,
  `Remetente` varchar(1000) NOT NULL,
  `Destinatário` varchar(1000) NOT NULL,
  `Data` datetime NOT NULL DEFAULT current_timestamp(),
  `Mensagem` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `mensagens`
--

INSERT INTO `mensagens` (`Id`, `Remetente`, `Destinatário`, `Data`, `Mensagem`) VALUES
(1, 'eu', 'eu', '2025-02-04 19:55:32', 'mensagem'),
(2, '', '', '2025-02-04 19:57:21', ''),
(3, '', '', '2025-02-04 19:57:21', ''),
(4, '', '', '2025-02-04 19:57:21', ''),
(5, '', '', '2025-02-04 19:57:21', ''),
(6, '', '', '2025-02-04 19:57:21', ''),
(7, '', '', '2025-02-04 19:57:21', ''),
(8, '', '', '2025-02-04 19:57:21', ''),
(9, '', '', '2025-02-04 19:57:21', ''),
(10, '', '', '2025-02-04 19:57:25', ''),
(11, '', '', '2025-02-04 19:57:25', ''),
(12, '', '', '2025-02-04 19:57:25', ''),
(13, '', '', '2025-02-04 19:57:25', ''),
(14, '', '', '2025-02-04 19:57:25', ''),
(15, '', '', '2025-02-04 19:57:25', ''),
(16, '', '', '2025-02-04 19:57:25', ''),
(17, '', '', '2025-02-04 19:57:25', ''),
(18, '', '', '2025-02-04 19:58:11', ''),
(19, '', '', '2025-02-04 19:58:23', ''),
(20, 'mensagem3', 'mensagem2', '2025-02-04 20:04:35', 'mensagem1'),
(21, 'mensagem3', 'mensagem2', '2025-02-04 20:04:35', 'mensagem1'),
(22, 'mensagem3', 'mensagem2', '2025-02-04 20:04:35', 'mensagem1'),
(23, 'mensagem3', 'mensagem2', '2025-02-04 20:04:35', 'mensagem1'),
(24, 'mensagem3', 'mensagem2', '2025-02-04 20:04:35', 'mensagem1'),
(25, 'mensagem3', 'mensagem2', '2025-02-04 20:04:35', 'mensagem1'),
(26, 'mensagem3', 'mensagem2', '2025-02-04 20:04:35', 'mensagem1'),
(27, 'mensagem3', 'mensagem2', '2025-02-04 20:04:35', 'mensagem1'),
(28, 'mensagem3', 'mensagem2', '2025-02-04 20:04:35', 'mensagem1'),
(29, 'mensagem3', 'mensagem2', '2025-02-04 20:04:35', 'mensagem1'),
(30, 'mensagem3', 'mensagem2', '2025-02-04 20:04:35', 'mensagem1'),
(31, 'mensagem3', 'mensagem2', '2025-02-04 20:04:35', 'mensagem1'),
(32, '1', '2', '2025-02-04 20:05:48', '3'),
(33, '1', '2', '2025-02-04 20:06:15', '3'),
(34, '', '', '2025-02-11 20:24:20', '');

-- --------------------------------------------------------

--
-- Estrutura para tabela `postagens`
--

CREATE TABLE `postagens` (
  `Id` int(255) NOT NULL,
  `Imagem` varchar(255) NOT NULL,
  `Texto` varchar(2300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `postagens`
--

INSERT INTO `postagens` (`Id`, `Imagem`, `Texto`) VALUES
(33, 'arquivos/673d20a1bd533.png', 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'),
(34, 'arquivos/674647c249716.png', 'Pokemon'),
(35, 'arquivos/674647db95383.png', 'Outro pomemon'),
(36, 'arquivos/6758bc7b22436.png', 'abaaba'),
(37, 'arquivos/6761f1ad1fa58.png', 'adadadad'),
(38, 'arquivos/678ed5ea2b3e1.png', 'aaaaaaaaaaaa');

-- --------------------------------------------------------

--
-- Estrutura para tabela `usuarios`
--

CREATE TABLE `usuarios` (
  `ID` int(3) UNSIGNED NOT NULL,
  `Nome` varchar(20) NOT NULL,
  `Idade` int(2) UNSIGNED NOT NULL,
  `Email` varchar(30) NOT NULL,
  `Senha` varchar(20) NOT NULL,
  `ADM` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `usuarios`
--

INSERT INTO `usuarios` (`ID`, `Nome`, `Idade`, `Email`, `Senha`, `ADM`) VALUES
(1, 'Fabio', 15, 'fabio.com', '123', 0),
(2, 'Gabriel', 17, 'gabriel.com', '123', 0),
(3, 'juninho', 12, 'juninho123', '202020', 0);

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `mensagens`
--
ALTER TABLE `mensagens`
  ADD PRIMARY KEY (`Id`);

--
-- Índices de tabela `postagens`
--
ALTER TABLE `postagens`
  ADD PRIMARY KEY (`Id`);

--
-- Índices de tabela `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `mensagens`
--
ALTER TABLE `mensagens`
  MODIFY `Id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT de tabela `postagens`
--
ALTER TABLE `postagens`
  MODIFY `Id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;

--
-- AUTO_INCREMENT de tabela `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `ID` int(3) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
