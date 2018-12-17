-- MySQL dump 10.13  Distrib 8.0.12, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: db_verta2
-- ------------------------------------------------------
-- Server version	8.0.12

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `apoderados`
--

DROP TABLE IF EXISTS `apoderados`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `apoderados` (
  `Id_Apoderado` int(10) NOT NULL AUTO_INCREMENT,
  `Id_Banco` int(10) NOT NULL,
  `Num_Apoderado` int(10) NOT NULL,
  `Nombre` varchar(255) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `Apellido1` varchar(255) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `Apellido2` varchar(255) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  PRIMARY KEY (`Id_Apoderado`),
  KEY `Contratan` (`Id_Banco`),
  CONSTRAINT `Contratan` FOREIGN KEY (`Id_Banco`) REFERENCES `banco` (`id_banco`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `apoderados`
--

LOCK TABLES `apoderados` WRITE;
/*!40000 ALTER TABLE `apoderados` DISABLE KEYS */;
INSERT INTO `apoderados` VALUES (1,1,457526,'Alberto','Gavilán','Hernandez');
/*!40000 ALTER TABLE `apoderados` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `banco`
--

DROP TABLE IF EXISTS `banco`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `banco` (
  `Id_Banco` int(10) NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(255) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `Sede` varchar(255) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `Pais` varchar(255) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  PRIMARY KEY (`Id_Banco`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `banco`
--

LOCK TABLES `banco` WRITE;
/*!40000 ALTER TABLE `banco` DISABLE KEYS */;
INSERT INTO `banco` VALUES (1,'La Caixa','Valencia','España');
/*!40000 ALTER TABLE `banco` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cliente`
--

DROP TABLE IF EXISTS `cliente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `cliente` (
  `Id_Cliente` int(10) NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(255) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `Apellido1` varchar(255) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `Apellido2` varchar(255) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `NIF` varchar(255) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  PRIMARY KEY (`Id_Cliente`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cliente`
--

LOCK TABLES `cliente` WRITE;
/*!40000 ALTER TABLE `cliente` DISABLE KEYS */;
INSERT INTO `cliente` VALUES (1,'Christian','Granado','Rodríguez','65481234P');
/*!40000 ALTER TABLE `cliente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `firma`
--

DROP TABLE IF EXISTS `firma`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `firma` (
  `Id_Firma` int(10) NOT NULL AUTO_INCREMENT,
  `Id_Apoderado` int(10) NOT NULL,
  `Id_Oficinas` int(10) NOT NULL,
  `Num_Escritura` int(10) NOT NULL,
  `Fecha` varchar(255) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `Precio_Vivienda` double NOT NULL,
  `Num_Caras` int(10) NOT NULL,
  `Garaje` varchar(2) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `Trastero` varchar(2) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `Num_Persona` int(10) NOT NULL,
  PRIMARY KEY (`Id_Firma`),
  KEY `Son tratadas en` (`Id_Oficinas`),
  KEY `Gestionan` (`Id_Apoderado`),
  CONSTRAINT `Gestionan` FOREIGN KEY (`Id_Apoderado`) REFERENCES `apoderados` (`id_apoderado`),
  CONSTRAINT `Son tratadas en` FOREIGN KEY (`Id_Oficinas`) REFERENCES `oficinas` (`id_oficinas`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `firma`
--

LOCK TABLES `firma` WRITE;
/*!40000 ALTER TABLE `firma` DISABLE KEYS */;
INSERT INTO `firma` VALUES (1,1,1,67,'01/09/1985',150000,20,'Si','No',2);
/*!40000 ALTER TABLE `firma` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `firma_cliente`
--

DROP TABLE IF EXISTS `firma_cliente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `firma_cliente` (
  `Id_firma_cliente` int(11) NOT NULL AUTO_INCREMENT,
  `Id_Firma` int(11) NOT NULL,
  `Id_Cliente` int(11) NOT NULL,
  PRIMARY KEY (`Id_firma_cliente`),
  KEY `FK_Firma_idx` (`Id_Firma`),
  KEY `FK_Cliente_idx` (`Id_Cliente`),
  CONSTRAINT `FK_Cliente` FOREIGN KEY (`Id_Cliente`) REFERENCES `cliente` (`id_cliente`),
  CONSTRAINT `FK_Firma` FOREIGN KEY (`Id_Firma`) REFERENCES `firma` (`id_firma`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `firma_cliente`
--

LOCK TABLES `firma_cliente` WRITE;
/*!40000 ALTER TABLE `firma_cliente` DISABLE KEYS */;
/*!40000 ALTER TABLE `firma_cliente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `oficinas`
--

DROP TABLE IF EXISTS `oficinas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `oficinas` (
  `Id_Oficinas` int(10) NOT NULL AUTO_INCREMENT,
  `Id_Banco` int(10) NOT NULL,
  `Nombre` varchar(255) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `Direccion` varchar(255) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `Horario` varchar(255) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  PRIMARY KEY (`Id_Oficinas`),
  KEY `poseen` (`Id_Banco`),
  CONSTRAINT `poseen` FOREIGN KEY (`Id_Banco`) REFERENCES `banco` (`id_banco`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `oficinas`
--

LOCK TABLES `oficinas` WRITE;
/*!40000 ALTER TABLE `oficinas` DISABLE KEYS */;
INSERT INTO `oficinas` VALUES (1,1,' Caixabank',' Calle Fernando Guanarteme, 52, 35010 Las Palmas de Gran Canaria, Las Palmas','12:00');
/*!40000 ALTER TABLE `oficinas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `role`
--

DROP TABLE IF EXISTS `role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `role` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `role` varchar(45) NOT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_User_idx` (`user_id`),
  CONSTRAINT `FK_User` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `role`
--

LOCK TABLES `role` WRITE;
/*!40000 ALTER TABLE `role` DISABLE KEYS */;
INSERT INTO `role` VALUES (1,'ROLE_ADMIN',1);
/*!40000 ALTER TABLE `role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(45) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username_UNIQUE` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'Administrador','$2a$10$ioQ/YHzUC3CxESNDWNA6guAGmlL00tlbQhaDFK02hqVBjPEJmAewS');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-12-16 22:39:10
