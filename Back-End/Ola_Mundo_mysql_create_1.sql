CREATE TABLE `Tema` (
	`id_tema` bigint NOT NULL AUTO_INCREMENT,
	`tema_da_postagem` varchar(255) NOT NULL,
	`descricao` varchar(2000) NOT NULL,
	`acessibilidade` varchar(255) NOT NULL,
	`palavras_chaves` varchar(300) NOT NULL,
	PRIMARY KEY (`id_tema`)
);

CREATE TABLE `Usuario` (
	`id` bigint NOT NULL AUTO_INCREMENT,
	`nome` varchar(255) NOT NULL,
	`email` varchar(255) NOT NULL,
	`senha` varchar(255) NOT NULL,
	`foto` varchar(255) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `Postagem` (
	`id_postagem` bigint NOT NULL AUTO_INCREMENT,
	`id_usuario` varchar(255) NOT NULL,
	`tipo_de_postagem` varchar(255) NOT NULL,
	`titulo` varchar(255) NOT NULL,
	`texto` varchar(5000) NOT NULL,
	`agenda` varchar(500) NOT NULL,
	`contato` varchar(255) NOT NULL,
	PRIMARY KEY (`id_postagem`)
);

ALTER TABLE `Postagem` ADD CONSTRAINT `Postagem_fk0` FOREIGN KEY (`id_usuario`) REFERENCES `Usuario`(`id`);

ALTER TABLE `Postagem` ADD CONSTRAINT `Postagem_fk1` FOREIGN KEY (`tipo_de_postagem`) REFERENCES `Tema`(`id_tema`);

