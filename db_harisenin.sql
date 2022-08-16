CREATE DATABASE  IF NOT EXISTS `db_harisenin` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `db_harisenin`;
-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: db_harisenin
-- ------------------------------------------------------
-- Server version	8.0.29

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
-- Table structure for table `assets`
--

DROP TABLE IF EXISTS `assets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `assets` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `path` varchar(255) NOT NULL,
  `size` int NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `assets`
--

LOCK TABLES `assets` WRITE;
/*!40000 ALTER TABLE `assets` DISABLE KEYS */;
INSERT INTO `assets` VALUES (1,'Test Product Name','https://res.cloudinary.com/reinhaaard/image/upload/v1660616095/hs_casestudy/eaxfcxptgwoqmdphbrz1.jpg',204636,'2022-08-16 09:14:55','2022-08-16 09:14:55'),(2,'Screenshot 2021-10-17 233920','https://res.cloudinary.com/reinhaaard/image/upload/v1660616489/hs_casestudy/lrpwqspfvyoecm7iuiua.png',214349,'2022-08-16 09:21:30','2022-08-16 09:21:30'),(3,'business-team-developing-renewable-energy-project-PEJK86Q','https://res.cloudinary.com/reinhaaard/image/upload/v1660640943/hs_casestudy/ad4recpnkxrv7jdvo19l.jpg',200977,'2022-08-16 16:09:04','2022-08-16 16:09:04'),(4,'Management-Training-2020','https://res.cloudinary.com/reinhaaard/image/upload/v1660641004/hs_casestudy/byezu8izk1gumy9e3eui.jpg',589436,'2022-08-16 16:10:06','2022-08-16 16:10:06'),(5,'RAH-3-2','https://res.cloudinary.com/reinhaaard/image/upload/v1660641058/hs_casestudy/xgyzmtfm4h0uvmm9wnw0.jpg',616741,'2022-08-16 16:10:59','2022-08-16 16:10:59'),(6,'Human Resources','https://res.cloudinary.com/reinhaaard/image/upload/v1660641553/hs_casestudy/hrlj9vj0sxvnhnp9fpiz.jpg',1627220,'2022-08-16 16:19:14','2022-08-16 16:19:14'),(7,'Digital Marketer','https://res.cloudinary.com/reinhaaard/image/upload/v1660641618/hs_casestudy/jqywgg4mr9ohfeaysxxa.jpg',58941,'2022-08-16 16:20:19','2022-08-16 16:20:19'),(8,'UI/UX Design & Product Management','https://res.cloudinary.com/reinhaaard/image/upload/v1660641664/hs_casestudy/gnefro8s71ndospxtqa3.jpg',86351,'2022-08-16 16:21:05','2022-08-16 16:21:05'),(9,'English for Professional','https://res.cloudinary.com/reinhaaard/image/upload/v1660641735/hs_casestudy/eyg5geh2pjzpuaqlw8o5.jpg',200977,'2022-08-16 16:22:16','2022-08-16 16:22:16'),(10,'Harisenin Career Camp - Human Resources','https://res.cloudinary.com/reinhaaard/image/upload/v1660641802/hs_casestudy/tpwpqwelwurv59cw3kbr.jpg',637948,'2022-08-16 16:23:23','2022-08-16 16:23:23'),(11,'Harisenin Career Camp - Digital Marketing','https://res.cloudinary.com/reinhaaard/image/upload/v1660641834/hs_casestudy/obe9o8m0boyvu9txykzq.jpg',589436,'2022-08-16 16:23:56','2022-08-16 16:23:56'),(12,'Risebinar 48 X Ekrut','https://res.cloudinary.com/reinhaaard/image/upload/v1660641891/hs_casestudy/vjomxq6kzasmm1jn4vmu.jpg',616741,'2022-08-16 16:24:52','2022-08-16 16:24:52'),(13,'MK009','https://res.cloudinary.com/reinhaaard/image/upload/v1660666610/hs_casestudy/enlxnjermrovkq2bto7z.jpg',86351,'2022-08-16 23:16:53','2022-08-16 23:16:53'),(14,'professional-girl-with-white-laptop','https://res.cloudinary.com/reinhaaard/image/upload/v1660666612/hs_casestudy/zgjpwtbtwgvpkj8ma3af.jpg',58941,'2022-08-16 23:16:53','2022-08-16 23:16:53'),(15,'Management-Training-2020','https://res.cloudinary.com/reinhaaard/image/upload/v1660667017/hs_casestudy/qg5g1g1fgvimvhf6fbf7.jpg',589436,'2022-08-16 23:23:42','2022-08-16 23:23:42'),(16,'MK009','https://res.cloudinary.com/reinhaaard/image/upload/v1660667019/hs_casestudy/rfsuhoceo7qoujno1xrq.jpg',86351,'2022-08-16 23:23:42','2022-08-16 23:23:42'),(17,'professional-girl-with-white-laptop','https://res.cloudinary.com/reinhaaard/image/upload/v1660667022/hs_casestudy/izpc6ozqubht86ytprqg.jpg',58941,'2022-08-16 23:23:42','2022-08-16 23:23:42'),(18,'business-team-developing-renewable-energy-project-PEJK86Q','https://res.cloudinary.com/reinhaaard/image/upload/v1660667229/hs_casestudy/n9blglm1za1rodymqob2.jpg',200977,'2022-08-16 23:27:15','2022-08-16 23:27:15'),(19,'iStock-964807996','https://res.cloudinary.com/reinhaaard/image/upload/v1660667234/hs_casestudy/pnwxpv7u05r4pyxglpkl.jpg',637948,'2022-08-16 23:27:15','2022-08-16 23:27:15'),(20,'iStock-1125597444','https://res.cloudinary.com/reinhaaard/image/upload/v1660668257/hs_casestudy/juuw5l4eft1e9xnktxkn.jpg',1627220,'2022-08-16 23:44:18','2022-08-16 23:44:18'),(21,'business-team-developing-renewable-energy-project-PEJK86Q','https://res.cloudinary.com/reinhaaard/image/upload/v1660676512/hs_casestudy/jucorbrhqm1a9a1pk2xh.jpg',200977,'2022-08-17 02:01:57','2022-08-17 02:01:57'),(22,'iStock-964807996','https://res.cloudinary.com/reinhaaard/image/upload/v1660676517/hs_casestudy/u5msgcclzgeexj5sgdmu.jpg',637948,'2022-08-17 02:01:57','2022-08-17 02:01:57'),(23,'professional-girl-with-white-laptop','https://res.cloudinary.com/reinhaaard/image/upload/v1660677954/hs_casestudy/ye89151onbwrfddlafsf.jpg',58941,'2022-08-17 02:25:59','2022-08-17 02:25:59'),(24,'RAH-3-2','https://res.cloudinary.com/reinhaaard/image/upload/v1660677958/hs_casestudy/rvtoed1rbkjzes38d2vr.jpg',616741,'2022-08-17 02:25:59','2022-08-17 02:25:59'),(25,'Management-Training-2020','https://res.cloudinary.com/reinhaaard/image/upload/v1660678115/hs_casestudy/dysw4ijewsbtdx2wegbc.jpg',589436,'2022-08-17 02:28:39','2022-08-17 02:28:39'),(26,'MK009','https://res.cloudinary.com/reinhaaard/image/upload/v1660678118/hs_casestudy/qcd65nxe0s8ukua17x5j.jpg',86351,'2022-08-17 02:28:39','2022-08-17 02:28:39'),(27,'RAH-3-2','https://res.cloudinary.com/reinhaaard/image/upload/v1660678221/hs_casestudy/neisrbjroomk7scvchay.jpg',616741,'2022-08-17 02:30:22','2022-08-17 02:30:22'),(28,'business-team-developing-renewable-energy-project-PEJK86Q','https://res.cloudinary.com/reinhaaard/image/upload/v1660678279/hs_casestudy/dguapldgbbfmyhdhtgbd.jpg',200977,'2022-08-17 02:31:22','2022-08-17 02:31:22'),(29,'iStock-964807996','https://res.cloudinary.com/reinhaaard/image/upload/v1660678281/hs_casestudy/rbajhlj2hxvpcodapogf.jpg',637948,'2022-08-17 02:31:22','2022-08-17 02:31:22');
/*!40000 ALTER TABLE `assets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `category_name` varchar(255) NOT NULL,
  `category_slug` varchar(255) NOT NULL,
  `asset_id` int DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `asset_id` (`asset_id`),
  CONSTRAINT `categories_ibfk_1` FOREIGN KEY (`asset_id`) REFERENCES `assets` (`id`) ON UPDATE CASCADE,
  CONSTRAINT `categories_ibfk_2` FOREIGN KEY (`asset_id`) REFERENCES `assets` (`id`) ON UPDATE CASCADE,
  CONSTRAINT `categories_ibfk_3` FOREIGN KEY (`asset_id`) REFERENCES `assets` (`id`) ON UPDATE CASCADE,
  CONSTRAINT `categories_ibfk_4` FOREIGN KEY (`asset_id`) REFERENCES `assets` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Test Category Name','test category slug',2,'2022-08-16 09:21:30','2022-08-16 09:21:30'),(2,'Bootcamp','bootcamp is good',3,'2022-08-16 16:09:04','2022-08-16 16:09:04'),(3,'ProClass','proclass is worth',4,'2022-08-16 16:10:06','2022-08-16 16:10:06'),(4,'Event & Workshop','event workshop are like diamond',5,'2022-08-16 16:10:59','2022-08-16 16:10:59'),(5,'Test New Category','category test for new one',20,'2022-08-16 23:44:18','2022-08-16 23:44:18');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category_products`
--

DROP TABLE IF EXISTS `category_products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category_products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `category_id` int NOT NULL,
  `product_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Category_Products_product_id_category_id_unique` (`category_id`,`product_id`),
  KEY `product_id` (`product_id`),
  CONSTRAINT `category_products_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `category_products_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `category_products_ibfk_3` FOREIGN KEY (`category_id`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `category_products_ibfk_4` FOREIGN KEY (`product_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `category_products_ibfk_5` FOREIGN KEY (`category_id`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `category_products_ibfk_6` FOREIGN KEY (`product_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category_products`
--

LOCK TABLES `category_products` WRITE;
/*!40000 ALTER TABLE `category_products` DISABLE KEYS */;
INSERT INTO `category_products` VALUES (1,1,1),(2,2,2),(3,3,2),(4,4,2),(5,5,3),(6,6,4),(7,7,4),(8,8,4),(12,17,1),(13,18,3),(14,19,3),(15,20,5);
/*!40000 ALTER TABLE `category_products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_assets`
--

DROP TABLE IF EXISTS `product_assets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_assets` (
  `id` int NOT NULL AUTO_INCREMENT,
  `asset_id` int NOT NULL,
  `product_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `asset_id` (`asset_id`),
  KEY `product_id` (`product_id`),
  CONSTRAINT `product_assets_ibfk_1` FOREIGN KEY (`asset_id`) REFERENCES `assets` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `product_assets_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_assets`
--

LOCK TABLES `product_assets` WRITE;
/*!40000 ALTER TABLE `product_assets` DISABLE KEYS */;
INSERT INTO `product_assets` VALUES (1,1,1),(2,6,2),(3,7,3),(4,8,4),(5,9,5),(6,10,6),(7,11,7),(8,12,8),(9,13,17),(10,14,17),(11,15,18),(12,16,18),(13,17,18),(14,18,19),(15,19,19),(16,21,20),(17,22,20),(18,23,20),(19,24,20),(20,25,3),(21,26,3),(22,27,3),(23,28,1),(24,29,1);
/*!40000 ALTER TABLE `product_assets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `product_name` varchar(255) NOT NULL,
  `product_slug` varchar(255) NOT NULL,
  `price` int NOT NULL,
  `description` text NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Test Product Name','test product slug',100,'Test Product Description Test Product Description Test Product Description','2022-08-16 09:14:55','2022-08-16 09:14:55'),(2,'Human Resources','human resource bootcamp',80,'Nulla quis lorem ut libero malesuada feugiat. Proin eget tortor risus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.','2022-08-16 16:19:14','2022-08-16 16:19:14'),(3,'Digital Marketer','digital marketer bootcamp',90,'Nulla quis lorem ut libero malesuada feugiat. Proin eget tortor risus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.','2022-08-16 16:20:18','2022-08-16 16:20:18'),(4,'UI/UX Design & Product Management','ui ux bootcamp',95,'Nulla quis lorem ut libero malesuada feugiat. Proin eget tortor risus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.','2022-08-16 16:21:05','2022-08-16 16:21:05'),(5,'English for Professional','new programme english proclass',110,'Curabitur aliquet quam id dui posuere blandit. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Quisque velit nisi, pretium ut lacinia in, elementum id enim.','2022-08-16 16:22:16','2022-08-16 16:22:16'),(6,'Harisenin Career Camp - Human Resources','harisenin career camp hcc human resources',150,'Curabitur aliquet quam id dui posuere blandit. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Quisque velit nisi, pretium ut lacinia in, elementum id enim.','2022-08-16 16:23:23','2022-08-16 16:23:23'),(7,'Harisenin Career Camp - Digital Marketing','harisenin career camp hcc digital marketing',140,'Curabitur aliquet quam id dui posuere blandit. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Quisque velit nisi, pretium ut lacinia in, elementum id enim.','2022-08-16 16:23:56','2022-08-16 16:23:56'),(8,'Risebinar 48 X Ekrut','risebinar 48 ekrut',180,'Curabitur aliquet quam id dui posuere blandit. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Quisque velit nisi, pretium ut lacinia in, elementum id enim.','2022-08-16 16:24:52','2022-08-16 16:24:52'),(17,'Test New Product','product for testing',220,'Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.','2022-08-16 23:16:53','2022-08-16 23:16:53'),(18,'React ProClass','react javascript framework proclass',120,'Donec sollicitudin molestie malesuada. Proin eget tortor risus. Proin eget tortor risus.','2022-08-16 23:23:42','2022-08-16 23:23:42'),(19,'Flutter ProClass','flutter dart framework proclass',150,'Donec rutrum congue leo eget malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat.','2022-08-16 23:27:15','2022-08-16 23:27:15'),(20,'Test New Product','product for testing',212,'Vivamus suscipit tortor eget felis porttitor volutpat. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Quisque velit nisi, pretium ut lacinia in, elementum id enim.','2022-08-17 02:01:57','2022-08-17 02:01:57');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-08-17  4:42:20
