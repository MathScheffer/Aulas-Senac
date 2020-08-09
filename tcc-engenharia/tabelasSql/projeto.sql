-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 06-Jul-2020 às 23:00
-- Versão do servidor: 10.4.13-MariaDB
-- versão do PHP: 7.4.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `projeto`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `dadospessoal`
--

CREATE TABLE `dadospessoal` (
  `IDDADOPESSOAL` bigint(20) NOT NULL,
  `NOME` varchar(20) NOT NULL,
  `EMAIL` varchar(30) DEFAULT NULL,
  `TELEFONE` char(11) NOT NULL,
  `IDUSUARIO` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `dadosusuario`
--

CREATE TABLE `dadosusuario` (
  `IDUSUARIO` bigint(20) NOT NULL,
  `NOME` varchar(20) NOT NULL,
  `SENHA` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `dadospessoal`
--
ALTER TABLE `dadospessoal`
  ADD PRIMARY KEY (`IDDADOPESSOAL`),
  ADD KEY `FK_IDUSUARIO` (`IDUSUARIO`);

--
-- Índices para tabela `dadosusuario`
--
ALTER TABLE `dadosusuario`
  ADD PRIMARY KEY (`IDUSUARIO`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `dadospessoal`
--
ALTER TABLE `dadospessoal`
  MODIFY `IDDADOPESSOAL` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de tabela `dadosusuario`
--
ALTER TABLE `dadosusuario`
  MODIFY `IDUSUARIO` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `dadospessoal`
--
ALTER TABLE `dadospessoal`
  ADD CONSTRAINT `FK_IDUSUARIO` FOREIGN KEY (`IDUSUARIO`) REFERENCES `dadosusuario` (`IDUSUARIO`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
