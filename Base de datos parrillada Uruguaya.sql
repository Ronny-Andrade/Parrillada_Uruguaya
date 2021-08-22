CREATE DATABASE  IF NOT EXISTS `parrilladauruguaya` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `parrilladauruguaya`;
-- MySQL dump 10.13  Distrib 8.0.22, for Win64 (x86_64)
--
-- Host: localhost    Database: parrilladauruguaya
-- ------------------------------------------------------
-- Server version	8.0.21

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `combo`
--

DROP TABLE IF EXISTS `combo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `combo` (
  `idCombo` int NOT NULL AUTO_INCREMENT,
  `idProducto` int NOT NULL,
  `fechaInicio` date DEFAULT NULL,
  `fechaFin` date DEFAULT NULL,
  `cantidad` int DEFAULT NULL,
  `fechaCreacion` datetime NOT NULL,
  `fechaModificacion` datetime NOT NULL,
  PRIMARY KEY (`idCombo`),
  KEY `combo_idProducto_idx` (`idProducto`),
  CONSTRAINT `combo_idProducto` FOREIGN KEY (`idProducto`) REFERENCES `producto` (`idProducto`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `combo`
--

LOCK TABLES `combo` WRITE;
/*!40000 ALTER TABLE `combo` DISABLE KEYS */;
/*!40000 ALTER TABLE `combo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cupon`
--

DROP TABLE IF EXISTS `cupon`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cupon` (
  `idCupon` int NOT NULL AUTO_INCREMENT,
  `idTipoCupon` int NOT NULL,
  `cantidad` int NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `descripcion` varchar(250) NOT NULL,
  `imagen` varchar(100) DEFAULT NULL,
  `visible` tinyint DEFAULT NULL,
  `fechaInicio` date NOT NULL,
  `fechaFin` date NOT NULL,
  `estado` varchar(45) DEFAULT NULL,
  `fechaCreacion` datetime NOT NULL,
  `fechaModificacion` datetime NOT NULL,
  PRIMARY KEY (`idCupon`),
  KEY `cupon_idTipoCupon_idx` (`idTipoCupon`),
  CONSTRAINT `cupon_idTipoCupon` FOREIGN KEY (`idTipoCupon`) REFERENCES `tipocupon` (`idTipoCupon`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cupon`
--

LOCK TABLES `cupon` WRITE;
/*!40000 ALTER TABLE `cupon` DISABLE KEYS */;
/*!40000 ALTER TABLE `cupon` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `detallefactura`
--

DROP TABLE IF EXISTS `detallefactura`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `detallefactura` (
  `idDetalleFactura` int NOT NULL AUTO_INCREMENT,
  `idFactura` int NOT NULL,
  `idTipoProducto` int NOT NULL,
  `idProducto` int NOT NULL,
  `precioUnit` double NOT NULL,
  `cantidad` int NOT NULL,
  `iva` double DEFAULT NULL,
  `descuento` double DEFAULT NULL,
  `subtotal` double NOT NULL,
  `fechaCreacion` datetime NOT NULL,
  `fechaModificacion` datetime NOT NULL,
  PRIMARY KEY (`idDetalleFactura`),
  KEY `detallefactura_idFactura_idx` (`idFactura`),
  KEY `detallefactura_idTipoProducto_idx` (`idTipoProducto`),
  KEY `detallefactura_idProducto_idx` (`idProducto`),
  CONSTRAINT `detallefactura_idFactura` FOREIGN KEY (`idFactura`) REFERENCES `factura` (`idFactura`),
  CONSTRAINT `detallefactura_idProducto` FOREIGN KEY (`idProducto`) REFERENCES `producto` (`idProducto`),
  CONSTRAINT `detallefactura_idTipoProducto` FOREIGN KEY (`idTipoProducto`) REFERENCES `tipoproducto` (`idTipoProducto`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `detallefactura`
--

LOCK TABLES `detallefactura` WRITE;
/*!40000 ALTER TABLE `detallefactura` DISABLE KEYS */;
/*!40000 ALTER TABLE `detallefactura` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `detallepedido`
--

DROP TABLE IF EXISTS `detallepedido`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `detallepedido` (
  `idDetallePedido` int NOT NULL AUTO_INCREMENT,
  `idPedido` int NOT NULL,
  `idTipoProducto` int NOT NULL,
  `idProducto` int NOT NULL,
  `precioUnit` double NOT NULL,
  `cantidad` int NOT NULL,
  `descuento` double DEFAULT NULL,
  `subtotal` double NOT NULL,
  `fechaCreacion` datetime NOT NULL,
  `fechaModificacion` datetime NOT NULL,
  PRIMARY KEY (`idDetallePedido`),
  KEY `detalepedido_id_Pedido_idx` (`idPedido`),
  KEY `detallepedido_idTipoProducto_idx` (`idTipoProducto`),
  KEY `detallepedido_idProducto_idx` (`idProducto`),
  CONSTRAINT `detalepedido_id_Pedido` FOREIGN KEY (`idPedido`) REFERENCES `pedido` (`idPedido`),
  CONSTRAINT `detallepedido_idProducto` FOREIGN KEY (`idProducto`) REFERENCES `producto` (`idProducto`),
  CONSTRAINT `detallepedido_idTipoProducto` FOREIGN KEY (`idTipoProducto`) REFERENCES `tipoproducto` (`idTipoProducto`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `detallepedido`
--

LOCK TABLES `detallepedido` WRITE;
/*!40000 ALTER TABLE `detallepedido` DISABLE KEYS */;
/*!40000 ALTER TABLE `detallepedido` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `direccion`
--

DROP TABLE IF EXISTS `direccion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `direccion` (
  `idDireccion` int NOT NULL AUTO_INCREMENT,
  `idUserCliente` int NOT NULL,
  `ciudad` varchar(45) DEFAULT NULL,
  `seccion` varchar(80) DEFAULT NULL,
  `calle` varchar(80) NOT NULL,
  `latitud` varchar(60) NOT NULL,
  `longitud` varchar(60) NOT NULL,
  `fechaCreacion` datetime NOT NULL,
  `fechaModificacion` datetime NOT NULL,
  PRIMARY KEY (`idDireccion`),
  KEY `idUserCliente_idx` (`idUserCliente`),
  KEY `direccion_idUserCliente_idx` (`idUserCliente`),
  CONSTRAINT `direccion_idUserCliente` FOREIGN KEY (`idUserCliente`) REFERENCES `usuario` (`idUsuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `direccion`
--

LOCK TABLES `direccion` WRITE;
/*!40000 ALTER TABLE `direccion` DISABLE KEYS */;
/*!40000 ALTER TABLE `direccion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `factura`
--

DROP TABLE IF EXISTS `factura`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `factura` (
  `idFactura` int NOT NULL AUTO_INCREMENT,
  `idPedido` int NOT NULL,
  `idUserCliente` int NOT NULL,
  `subtotal` double NOT NULL,
  `descuento` double DEFAULT NULL,
  `iva` double DEFAULT NULL,
  `costoEnvio` double NOT NULL,
  `total` double NOT NULL,
  `fechaCreacion` datetime NOT NULL,
  `fechaModificacion` datetime NOT NULL,
  PRIMARY KEY (`idFactura`),
  KEY `factura_idPedido_idx` (`idPedido`),
  KEY `factura_idUserCliente_idx` (`idUserCliente`),
  CONSTRAINT `factura_idPedido` FOREIGN KEY (`idPedido`) REFERENCES `pedido` (`idPedido`),
  CONSTRAINT `factura_idUserCliente` FOREIGN KEY (`idUserCliente`) REFERENCES `usuario` (`idUsuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `factura`
--

LOCK TABLES `factura` WRITE;
/*!40000 ALTER TABLE `factura` DISABLE KEYS */;
/*!40000 ALTER TABLE `factura` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `favorito`
--

DROP TABLE IF EXISTS `favorito`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `favorito` (
  `idFavorito` int NOT NULL AUTO_INCREMENT,
  `idUserCliente` int NOT NULL,
  `idProducto` int NOT NULL,
  `estado` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `fechaCreacion` datetime NOT NULL,
  `fechaModificacion` datetime NOT NULL,
  PRIMARY KEY (`idFavorito`),
  KEY `favorito_idUserCliente_idx` (`idUserCliente`),
  KEY `favorito_idProducto_idx` (`idProducto`),
  CONSTRAINT `favorito_idProducto` FOREIGN KEY (`idProducto`) REFERENCES `producto` (`idProducto`),
  CONSTRAINT `favorito_idUserCliente` FOREIGN KEY (`idUserCliente`) REFERENCES `usuario` (`idUsuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `favorito`
--

LOCK TABLES `favorito` WRITE;
/*!40000 ALTER TABLE `favorito` DISABLE KEYS */;
/*!40000 ALTER TABLE `favorito` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `imagen`
--

DROP TABLE IF EXISTS `imagen`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `imagen` (
  `idImagen` int NOT NULL AUTO_INCREMENT,
  `idUsuario` int NOT NULL,
  `banner` varchar(90) DEFAULT NULL,
  `logo` varchar(50) DEFAULT NULL,
  `fechaCreacion` datetime NOT NULL,
  `fechaModificacion` datetime NOT NULL,
  PRIMARY KEY (`idImagen`),
  KEY `imagen_idUsuario_idx` (`idUsuario`),
  CONSTRAINT `imagen_idUsuario` FOREIGN KEY (`idUsuario`) REFERENCES `usuario` (`idUsuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `imagen`
--

LOCK TABLES `imagen` WRITE;
/*!40000 ALTER TABLE `imagen` DISABLE KEYS */;
/*!40000 ALTER TABLE `imagen` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `imagencarrusel`
--

DROP TABLE IF EXISTS `imagencarrusel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `imagencarrusel` (
  `idImagenCarrusel` int NOT NULL AUTO_INCREMENT,
  `idImagen` int NOT NULL,
  `url` varchar(250) DEFAULT NULL,
  `estado` varchar(45) DEFAULT NULL,
  `fechaCreacion` datetime NOT NULL,
  `fechaModificacion` datetime NOT NULL,
  PRIMARY KEY (`idImagenCarrusel`),
  KEY `imagencarrusel_idImagen_idx` (`idImagen`),
  CONSTRAINT `imagencarrusel_idImagen` FOREIGN KEY (`idImagen`) REFERENCES `imagen` (`idImagen`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `imagencarrusel`
--

LOCK TABLES `imagencarrusel` WRITE;
/*!40000 ALTER TABLE `imagencarrusel` DISABLE KEYS */;
/*!40000 ALTER TABLE `imagencarrusel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `oferta`
--

DROP TABLE IF EXISTS `oferta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `oferta` (
  `idOferta` int NOT NULL AUTO_INCREMENT,
  `idTipoOferta` int NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `descripcion` varchar(250) NOT NULL,
  `imagen` varchar(100) DEFAULT NULL,
  `visible` tinyint DEFAULT NULL,
  `fechaInicio` date DEFAULT NULL,
  `fechaFin` date DEFAULT NULL,
  `estado` varchar(45) DEFAULT NULL,
  `fechaCreacion` datetime NOT NULL,
  `fechaModificacion` datetime NOT NULL,
  PRIMARY KEY (`idOferta`),
  KEY `oferta_idTipoOferta_idx` (`idTipoOferta`),
  CONSTRAINT `oferta_idTipoOferta` FOREIGN KEY (`idTipoOferta`) REFERENCES `tipooferta` (`idTipoOferta`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `oferta`
--

LOCK TABLES `oferta` WRITE;
/*!40000 ALTER TABLE `oferta` DISABLE KEYS */;
/*!40000 ALTER TABLE `oferta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pedido`
--

DROP TABLE IF EXISTS `pedido`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pedido` (
  `idPedido` int NOT NULL AUTO_INCREMENT,
  `idUserCliente` int NOT NULL,
  `idUserAprobacion` int NOT NULL,
  `subtotal` double NOT NULL,
  `descuento` double DEFAULT NULL,
  `total` double NOT NULL,
  `estado` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `fechaCreacion` datetime NOT NULL,
  `fechaModificacion` datetime NOT NULL,
  PRIMARY KEY (`idPedido`),
  KEY `pedido_idUserCliente_idx` (`idUserCliente`),
  KEY `pedido_idUserAprobacion_idx` (`idUserAprobacion`),
  CONSTRAINT `pedido_idUserAprobacion` FOREIGN KEY (`idUserAprobacion`) REFERENCES `usuario` (`idUsuario`),
  CONSTRAINT `pedido_idUserCliente` FOREIGN KEY (`idUserCliente`) REFERENCES `usuario` (`idUsuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pedido`
--

LOCK TABLES `pedido` WRITE;
/*!40000 ALTER TABLE `pedido` DISABLE KEYS */;
/*!40000 ALTER TABLE `pedido` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `producto`
--

DROP TABLE IF EXISTS `producto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `producto` (
  `idProducto` int NOT NULL AUTO_INCREMENT,
  `idTipoProducto` int NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `descripcion` varchar(250) NOT NULL,
  `precio` double NOT NULL,
  `imagen` varchar(100) DEFAULT NULL,
  `visible` tinyint DEFAULT NULL,
  `puntos` double DEFAULT NULL,
  `fechaCreacion` datetime NOT NULL,
  `fechaModificacion` datetime NOT NULL,
  PRIMARY KEY (`idProducto`),
  KEY `producto_idTipoProducto_idx` (`idTipoProducto`),
  CONSTRAINT `producto_idTipoProducto` FOREIGN KEY (`idTipoProducto`) REFERENCES `tipoproducto` (`idTipoProducto`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `producto`
--

LOCK TABLES `producto` WRITE;
/*!40000 ALTER TABLE `producto` DISABLE KEYS */;
/*!40000 ALTER TABLE `producto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productocombo`
--

DROP TABLE IF EXISTS `productocombo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productocombo` (
  `idProductoCombo` int NOT NULL AUTO_INCREMENT,
  `idProducto` int NOT NULL,
  `idCombo` int NOT NULL,
  `fechaCreacion` datetime NOT NULL,
  `fechaModificacion` datetime NOT NULL,
  PRIMARY KEY (`idProductoCombo`),
  KEY `productocombo_idProducto_idx` (`idProducto`),
  KEY `productocombo_idCombo_idx` (`idCombo`),
  CONSTRAINT `productocombo_idCombo` FOREIGN KEY (`idCombo`) REFERENCES `combo` (`idCombo`),
  CONSTRAINT `productocombo_idProducto` FOREIGN KEY (`idProducto`) REFERENCES `producto` (`idProducto`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productocombo`
--

LOCK TABLES `productocombo` WRITE;
/*!40000 ALTER TABLE `productocombo` DISABLE KEYS */;
/*!40000 ALTER TABLE `productocombo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productocupon`
--

DROP TABLE IF EXISTS `productocupon`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productocupon` (
  `idProductoCupon` int NOT NULL AUTO_INCREMENT,
  `idProducto` int NOT NULL,
  `idCupon` int NOT NULL,
  `fechaCreacion` datetime NOT NULL,
  `fechaModificacion` datetime NOT NULL,
  PRIMARY KEY (`idProductoCupon`),
  KEY `productocupon_idProducto_idx` (`idProducto`),
  KEY `productocupon_idCupon_idx` (`idCupon`),
  CONSTRAINT `productocupon_idCupon` FOREIGN KEY (`idCupon`) REFERENCES `cupon` (`idCupon`),
  CONSTRAINT `productocupon_idProducto` FOREIGN KEY (`idProducto`) REFERENCES `producto` (`idProducto`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productocupon`
--

LOCK TABLES `productocupon` WRITE;
/*!40000 ALTER TABLE `productocupon` DISABLE KEYS */;
/*!40000 ALTER TABLE `productocupon` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productooferta`
--

DROP TABLE IF EXISTS `productooferta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productooferta` (
  `idProductoOferta` int NOT NULL AUTO_INCREMENT,
  `idProducto` int NOT NULL,
  `idOferta` int NOT NULL,
  `fechaCreacion` datetime NOT NULL,
  `fechaModificacion` datetime NOT NULL,
  PRIMARY KEY (`idProductoOferta`),
  KEY `productooferta_idProducto_idx` (`idProducto`),
  KEY `productooferta_idOferta_idx` (`idOferta`),
  CONSTRAINT `productooferta_idOferta` FOREIGN KEY (`idOferta`) REFERENCES `oferta` (`idOferta`),
  CONSTRAINT `productooferta_idProducto` FOREIGN KEY (`idProducto`) REFERENCES `producto` (`idProducto`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productooferta`
--

LOCK TABLES `productooferta` WRITE;
/*!40000 ALTER TABLE `productooferta` DISABLE KEYS */;
/*!40000 ALTER TABLE `productooferta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `punto`
--

DROP TABLE IF EXISTS `punto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `punto` (
  `idPunto` int NOT NULL AUTO_INCREMENT,
  `idZonaCobertura` int NOT NULL,
  `longitud` varchar(45) NOT NULL,
  `latitud` varchar(45) NOT NULL,
  `estado` varchar(45) DEFAULT NULL,
  `fechaCreacion` datetime NOT NULL,
  `fechaModificacion` datetime NOT NULL,
  PRIMARY KEY (`idPunto`),
  KEY `punto_idZonaCobertura_idx` (`idZonaCobertura`),
  CONSTRAINT `punto_idZonaCobertura` FOREIGN KEY (`idZonaCobertura`) REFERENCES `zonacobertura` (`idZonaCobertura`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `punto`
--

LOCK TABLES `punto` WRITE;
/*!40000 ALTER TABLE `punto` DISABLE KEYS */;
/*!40000 ALTER TABLE `punto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reclamo`
--

DROP TABLE IF EXISTS `reclamo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reclamo` (
  `idReclamo` int NOT NULL AUTO_INCREMENT,
  `idUserCliente` int NOT NULL,
  `idProducto` int NOT NULL,
  `imagen` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `comentario` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `fechaCreacion` datetime NOT NULL,
  `fechaModificacion` datetime NOT NULL,
  PRIMARY KEY (`idReclamo`),
  KEY `reclamo_idUserCliente_idx` (`idUserCliente`),
  KEY `reclamo_idProducto_idx` (`idProducto`),
  CONSTRAINT `reclamo_idProducto` FOREIGN KEY (`idProducto`) REFERENCES `producto` (`idProducto`),
  CONSTRAINT `reclamo_idUserCliente` FOREIGN KEY (`idUserCliente`) REFERENCES `usuario` (`idUsuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reclamo`
--

LOCK TABLES `reclamo` WRITE;
/*!40000 ALTER TABLE `reclamo` DISABLE KEYS */;
/*!40000 ALTER TABLE `reclamo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rolusuario`
--

DROP TABLE IF EXISTS `rolusuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rolusuario` (
  `idRolUsuario` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `descripcion` varchar(250) DEFAULT NULL,
  `fechaCreacion` datetime NOT NULL,
  `fechaModificacion` datetime NOT NULL,
  PRIMARY KEY (`idRolUsuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rolusuario`
--

LOCK TABLES `rolusuario` WRITE;
/*!40000 ALTER TABLE `rolusuario` DISABLE KEYS */;
/*!40000 ALTER TABLE `rolusuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tarjeta`
--

DROP TABLE IF EXISTS `tarjeta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tarjeta` (
  `idtarjeta` int NOT NULL AUTO_INCREMENT,
  `idUserCliente` int NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `tokenNumero` varchar(100) DEFAULT NULL,
  `tokenFechaExp` varchar(100) DEFAULT NULL,
  `tokenCodigo` varchar(100) DEFAULT NULL,
  `fechaCreacion` datetime NOT NULL,
  `fechaModificacion` datetime NOT NULL,
  PRIMARY KEY (`idtarjeta`),
  KEY `idUserCliente_idx` (`idUserCliente`),
  CONSTRAINT `tarjeta_idUserCliente` FOREIGN KEY (`idUserCliente`) REFERENCES `usuario` (`idUsuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tarjeta`
--

LOCK TABLES `tarjeta` WRITE;
/*!40000 ALTER TABLE `tarjeta` DISABLE KEYS */;
/*!40000 ALTER TABLE `tarjeta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipocupon`
--

DROP TABLE IF EXISTS `tipocupon`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tipocupon` (
  `idTipoCupon` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `estado` varchar(45) DEFAULT NULL,
  `fechaCreacion` datetime NOT NULL,
  `fechaModificacion` datetime NOT NULL,
  PRIMARY KEY (`idTipoCupon`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipocupon`
--

LOCK TABLES `tipocupon` WRITE;
/*!40000 ALTER TABLE `tipocupon` DISABLE KEYS */;
/*!40000 ALTER TABLE `tipocupon` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipooferta`
--

DROP TABLE IF EXISTS `tipooferta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tipooferta` (
  `idTipoOferta` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `estado` varchar(45) DEFAULT NULL,
  `fechaCreacion` datetime NOT NULL,
  `fechaModificacion` datetime NOT NULL,
  PRIMARY KEY (`idTipoOferta`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipooferta`
--

LOCK TABLES `tipooferta` WRITE;
/*!40000 ALTER TABLE `tipooferta` DISABLE KEYS */;
/*!40000 ALTER TABLE `tipooferta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipoproducto`
--

DROP TABLE IF EXISTS `tipoproducto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tipoproducto` (
  `idTipoProducto` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `fechaCreacion` datetime NOT NULL,
  `fechaModificacion` datetime NOT NULL,
  PRIMARY KEY (`idTipoProducto`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipoproducto`
--

LOCK TABLES `tipoproducto` WRITE;
/*!40000 ALTER TABLE `tipoproducto` DISABLE KEYS */;
/*!40000 ALTER TABLE `tipoproducto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `idUsuario` int NOT NULL AUTO_INCREMENT,
  `idRolUsuario` int NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `cedula` varchar(45) DEFAULT NULL,
  `correo` varchar(100) NOT NULL,
  `telefono` int DEFAULT NULL,
  `pass` varchar(45) NOT NULL,
  `fechaNac` date DEFAULT NULL,
  `fechaRegistro` date DEFAULT NULL,
  `estado` varchar(45) DEFAULT NULL,
  `fechaCreacion` datetime NOT NULL,
  `fechaModificacion` datetime NOT NULL,
  PRIMARY KEY (`idUsuario`),
  KEY `idRolUsuario_idx` (`idRolUsuario`),
  CONSTRAINT `usuario_idRolUsuario` FOREIGN KEY (`idRolUsuario`) REFERENCES `rolusuario` (`idRolUsuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `zonacobertura`
--

DROP TABLE IF EXISTS `zonacobertura`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `zonacobertura` (
  `idZonaCobertura` int NOT NULL AUTO_INCREMENT,
  `idUsuario` int NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `costoEnvio` double NOT NULL,
  `estado` varchar(45) DEFAULT NULL,
  `fechaCreacion` datetime NOT NULL,
  `fechaModificacion` datetime NOT NULL,
  PRIMARY KEY (`idZonaCobertura`),
  KEY `zonacoebrtura_idUsuario_idx` (`idUsuario`),
  CONSTRAINT `zonacoebrtura_idUsuario` FOREIGN KEY (`idUsuario`) REFERENCES `usuario` (`idUsuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `zonacobertura`
--

LOCK TABLES `zonacobertura` WRITE;
/*!40000 ALTER TABLE `zonacobertura` DISABLE KEYS */;
/*!40000 ALTER TABLE `zonacobertura` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-08-16 16:48:27
