-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema NutriZen
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema NutriZen
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `NutriZen` DEFAULT CHARACTER SET utf8 ;
USE `NutriZen` ;

-- -----------------------------------------------------
-- Table `NutriZen`.`usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `NutriZen`.`usuarios` (
  `id_usuario` INT NOT NULL AUTO_INCREMENT,
  `correo` VARCHAR(50) NOT NULL,
  `contraseña` VARCHAR(50) NOT NULL,
  `nombre` VARCHAR(50) NOT NULL,
  `telefono` INT NOT NULL,
  `apellido` VARCHAR(50) NOT NULL,
  UNIQUE INDEX `correo_UNIQUE` (`correo` ASC) VISIBLE,
  PRIMARY KEY (`id_usuario`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `NutriZen`.`metodo_pagos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `NutriZen`.`metodo_pagos` (
  `id_pago` INT NOT NULL AUTO_INCREMENT,
  `id_usuario` INT NOT NULL,
  `direccion_fact` VARCHAR(200) NOT NULL,
  `num_tarjeta` INT NOT NULL,
  `cuenta_paypal` INT NULL DEFAULT No especificada,
  PRIMARY KEY (`id_pago`),
  UNIQUE INDEX `id_usuario_UNIQUE` (`id_usuario` ASC) VISIBLE,
  UNIQUE INDEX `num_tarjeta_UNIQUE` (`num_tarjeta` ASC) VISIBLE,
  UNIQUE INDEX `cuenta_paypal_UNIQUE` (`cuenta_paypal` ASC) VISIBLE,
  CONSTRAINT `fk_metodo_pagos_usuarios`
    FOREIGN KEY ()
    REFERENCES `NutriZen`.`usuarios` ()
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `NutriZen`.`orden`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `NutriZen`.`orden` (
  `id_orden` INT NOT NULL AUTO_INCREMENT,
  `id_usuario` INT NOT NULL,
  `monto` DECIMAL NOT NULL,
  `dir_envio` VARCHAR(200) NOT NULL,
  `id_metodo_pago` INT NOT NULL,
  PRIMARY KEY (`id_orden`),
  UNIQUE INDEX `id_usuario_UNIQUE` (`id_usuario` ASC) VISIBLE,
  CONSTRAINT `fk_orden_metodo_pagos1`
    FOREIGN KEY ()
    REFERENCES `NutriZen`.`metodo_pagos` ()
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `NutriZen`.`planes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `NutriZen`.`planes` (
  `id_planes` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(50) NOT NULL,
  `duracion` VARCHAR(45) NOT NULL,
  `precio` DECIMAL NOT NULL,
  `descripcion` VARCHAR(300) NOT NULL,
  PRIMARY KEY (`id_planes`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `NutriZen`.`suplementos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `NutriZen`.`suplementos` (
  `id_suplementos` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(50) NOT NULL,
  `sku` VARCHAR(50) NOT NULL,
  `precio` DECIMAL NOT NULL,
  `descripcion` VARCHAR(300) NOT NULL,
  PRIMARY KEY (`id_suplementos`),
  UNIQUE INDEX `sku_UNIQUE` (`sku` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `NutriZen`.`accesorios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `NutriZen`.`accesorios` (
  `id_accesorios` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(50) NOT NULL,
  `sku` VARCHAR(50) NOT NULL,
  `descripcion` VARCHAR(300) NOT NULL,
  PRIMARY KEY (`id_accesorios`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `NutriZen`.`productos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `NutriZen`.`productos` (
  `id_productos` INT NOT NULL AUTO_INCREMENT,
  `id_subcategoria` INT NOT NULL,
  `nombre` VARCHAR(50) NOT NULL,
  `precio` DECIMAL NOT NULL,
  `descripcion` VARCHAR(200) NOT NULL,
  `imagen` VARCHAR(50) NOT NULL,
  `id_carrito` INT NOT NULL,
  PRIMARY KEY (`id_productos`, `id_carrito`),
  INDEX `fk_productos_carrito1_idx` (`id_carrito` ASC) VISIBLE,
  INDEX `fk_productos_subcategorias1_idx` (`id_subcategoria` ASC) VISIBLE,
  CONSTRAINT `fk_productos_carrito1`
    FOREIGN KEY (`id_carrito`)
    REFERENCES `NutriZen`.`carrito` (`id_carrito`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_productos_subcategorias1`
    FOREIGN KEY (`id_subcategoria`)
    REFERENCES `NutriZen`.`subcategorias` (`id_subcat`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `NutriZen`.`usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `NutriZen`.`usuario` (
  `id_usuario` INT NOT NULL AUTO_INCREMENT,
  `correo` VARCHAR(50) NOT NULL,
  `contraseña` VARCHAR(50) NOT NULL,
  `nombre` VARCHAR(50) NOT NULL,
  `apellido` VARCHAR(50) NOT NULL,
  `telefono` INT NOT NULL,
  PRIMARY KEY (`id_usuario`),
  UNIQUE INDEX `correo_UNIQUE` (`correo` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `NutriZen`.`carrito`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `NutriZen`.`carrito` (
  `id_carrito` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(50) NOT NULL,
  `precio` DECIMAL NOT NULL,
  `descripcion` VARCHAR(200) NOT NULL,
  `imagen` VARCHAR(50) NULL,
  `id_usuario` INT NOT NULL,
  `id_servicio` INT NOT NULL,
  `id_producto` INT NOT NULL,
  `id_pagos` INT NOT NULL,
  PRIMARY KEY (`id_carrito`),
  UNIQUE INDEX `id_usuario_UNIQUE` (`id_usuario` ASC) VISIBLE,
  INDEX `fk_carrito_pagos1_idx` (`id_pagos` ASC) VISIBLE,
  CONSTRAINT `fk_carrito_usuario1`
    FOREIGN KEY (`id_usuario`)
    REFERENCES `NutriZen`.`usuario` (`id_usuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_carrito_pagos1`
    FOREIGN KEY (`id_pagos`)
    REFERENCES `NutriZen`.`pagos` (`id_pagos`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `NutriZen`.`usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `NutriZen`.`usuario` (
  `id_usuario` INT NOT NULL AUTO_INCREMENT,
  `correo` VARCHAR(50) NOT NULL,
  `contraseña` VARCHAR(50) NOT NULL,
  `nombre` VARCHAR(50) NOT NULL,
  `apellido` VARCHAR(50) NOT NULL,
  `telefono` INT NOT NULL,
  PRIMARY KEY (`id_usuario`),
  UNIQUE INDEX `correo_UNIQUE` (`correo` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `NutriZen`.`pagos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `NutriZen`.`pagos` (
  `id_pagos` INT NOT NULL AUTO_INCREMENT,
  `id_usuarios` INT NOT NULL,
  `dir_factura` VARCHAR(200) NOT NULL,
  `num_tajeta` INT NOT NULL,
  `cuenta_paypal` INT NULL,
  PRIMARY KEY (`id_pagos`),
  CONSTRAINT `fk_pagos_usuario1`
    FOREIGN KEY (`id_usuarios`)
    REFERENCES `NutriZen`.`usuario` (`id_usuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `NutriZen`.`carrito`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `NutriZen`.`carrito` (
  `id_carrito` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(50) NOT NULL,
  `precio` DECIMAL NOT NULL,
  `descripcion` VARCHAR(200) NOT NULL,
  `imagen` VARCHAR(50) NULL,
  `id_usuario` INT NOT NULL,
  `id_servicio` INT NOT NULL,
  `id_producto` INT NOT NULL,
  `id_pagos` INT NOT NULL,
  PRIMARY KEY (`id_carrito`),
  UNIQUE INDEX `id_usuario_UNIQUE` (`id_usuario` ASC) VISIBLE,
  INDEX `fk_carrito_pagos1_idx` (`id_pagos` ASC) VISIBLE,
  CONSTRAINT `fk_carrito_usuario1`
    FOREIGN KEY (`id_usuario`)
    REFERENCES `NutriZen`.`usuario` (`id_usuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_carrito_pagos1`
    FOREIGN KEY (`id_pagos`)
    REFERENCES `NutriZen`.`pagos` (`id_pagos`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `NutriZen`.`categorias`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `NutriZen`.`categorias` (
  `id_categorias` INT NOT NULL AUTO_INCREMENT,
  `nomb_categoria` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`id_categorias`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `NutriZen`.`subcategorias`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `NutriZen`.`subcategorias` (
  `id_subcat` INT NOT NULL AUTO_INCREMENT,
  `id_categorias` INT NOT NULL,
  `nombre_subcategoria` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`id_subcat`),
  INDEX `fk_subcategorias_categorias1_idx` (`id_categorias` ASC) VISIBLE,
  CONSTRAINT `fk_subcategorias_categorias1`
    FOREIGN KEY (`id_categorias`)
    REFERENCES `NutriZen`.`categorias` (`id_categorias`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `NutriZen`.`productos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `NutriZen`.`productos` (
  `id_productos` INT NOT NULL AUTO_INCREMENT,
  `id_subcategoria` INT NOT NULL,
  `nombre` VARCHAR(50) NOT NULL,
  `precio` DECIMAL NOT NULL,
  `descripcion` VARCHAR(200) NOT NULL,
  `imagen` VARCHAR(50) NOT NULL,
  `id_carrito` INT NOT NULL,
  PRIMARY KEY (`id_productos`, `id_carrito`),
  INDEX `fk_productos_carrito1_idx` (`id_carrito` ASC) VISIBLE,
  INDEX `fk_productos_subcategorias1_idx` (`id_subcategoria` ASC) VISIBLE,
  CONSTRAINT `fk_productos_carrito1`
    FOREIGN KEY (`id_carrito`)
    REFERENCES `NutriZen`.`carrito` (`id_carrito`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_productos_subcategorias1`
    FOREIGN KEY (`id_subcategoria`)
    REFERENCES `NutriZen`.`subcategorias` (`id_subcat`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `NutriZen`.`servicios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `NutriZen`.`servicios` (
  `id_servicios` INT NOT NULL AUTO_INCREMENT,
  `id_subcategoria` INT NOT NULL,
  `nombre` VARCHAR(50) NOT NULL,
  `descripcion` VARCHAR(200) NOT NULL,
  `precio` DECIMAL NOT NULL,
  `id_carrito` INT NOT NULL,
  PRIMARY KEY (`id_servicios`),
  INDEX `fk_servicios_subcategorias1_idx` (`id_subcategoria` ASC) VISIBLE,
  INDEX `fk_servicios_carrito1_idx` (`id_carrito` ASC) VISIBLE,
  CONSTRAINT `fk_servicios_subcategorias1`
    FOREIGN KEY (`id_subcategoria`)
    REFERENCES `NutriZen`.`subcategorias` (`id_subcat`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_servicios_carrito1`
    FOREIGN KEY (`id_carrito`)
    REFERENCES `NutriZen`.`carrito` (`id_carrito`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
