-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 16/10/2024 às 01:44
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
(15, '', 'aaa'),
(16, '', 'a'),
(17, '', 'a'),
(18, '', 'a'),
(19, '', 'a'),
(20, '', 'a'),
(21, '', 'a'),
(22, '', 'a'),
(23, '', 'a'),
(24, '', 'a'),
(25, '', 'a'),
(26, '', 'a'),
(27, '', 'a'),
(28, '', 'a'),
(29, '', 'a'),
(30, 'Movimento2.png', 'a'),
(31, 'rele.jfif', 'dfghd');

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
-- AUTO_INCREMENT de tabela `postagens`
--
ALTER TABLE `postagens`
  MODIFY `Id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT de tabela `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `ID` int(3) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
