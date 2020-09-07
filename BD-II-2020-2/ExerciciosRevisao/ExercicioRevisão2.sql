create  table produto(
	cod_prod integer not null,
	nome char(30) not null,
	preco  float not null,
	categoria char(20) not null,
	primary key (cod_prod)
);


create table cliente
(
	cod_cli char(10) not null,
	nome char(40) not null,
	cidade char(20) not null,
	uf char(2) not null,
	telefone char(20),
	status char(05) not null,
	limite float not null,
	primary key (cod_cli)
);


create table pedido(
	nro_ped char(10) not null,
	data_elab date not null,
	data_ent date,
	cod_cli char(10) not null,
	primary key (nro_ped),
	foreign key (cod_cli) references cliente
);

create table movimento(
	nro_ped char(10) not null,
	cod_prod integer not null,
	qtde integer not null,
	total_mov float not null,
	primary key (nro_ped, cod_prod),
	foreign key (nro_ped) references pedido,
	foreign key (cod_prod) references produto
);

alter table pedido add total_ped float;

create  index Ch_Pr_Mov on movimento 
(qtde);

insert into cliente values ('c1','Super Merco', 'Porto Alegre',
'RS', '3308990','bom',400);
insert into cliente values ('c2','Shop Ltda', 'Canoas',
'RS', null,'otimo',1500);
insert into cliente values ('c3','Cia Limpar', 'Porto Alegre',
'RS', '3328791','medio',800);
insert into cliente values ('c4','Clean Ltda', 'Canoas',
'RS', '4776742','otimo',2300);

insert into produto values (1, 'OMO' ,2.65,'sabão');
insert into produto values (2,'Pinho Sol', 1.34, 'desinfetante');
insert into produto values (3,'Minerva', 1.98, 'sabão');
insert into produto values (4,'Confort', 1.54, 'amaciante');
insert into produto values (5,'Limpol', 1.54, 'Sabão');
insert into produto values (6,'Veja', 1.54, 'alvejante');

insert into pedido values ('ped1','1997-06-13','1997-06-15','c2',null);
insert into pedido values ('ped2','1997-06-15','1997-07-20','c1',null);
insert into pedido values ('ped3','1997-06-15','1997-07-19','c4',null);
insert into movimento values('ped1',1,20,53.00);
insert into movimento values('ped1',3,15,29.70);
insert into movimento values('ped1',4,10,15.40);
insert into movimento values('ped2',4,12,18.48);
insert into movimento values('ped2',3,10,19.80);
insert into movimento values('ped3',1,15,39.75);

/*
1) Recuperar os nomes de produtos solicitados em pelo menos um 
pedido*/
SELECT
	A.nome, B.nro_ped
	FROM produto A, pedido B, movimento C
	WHERE A.cod_prod = C.cod_prod AND B.nro_ped = C.nro_ped
/*
2) Recuperar o nome e telefone de clientes que solicitaram
pelo menos um produto de nome Confort
*/
SELECT
	D.nome, D.telefone, A.nome, B.nro_ped
	FROM produto A, pedido B, movimento C, cliente D
	WHERE  A.nome = 'Confort' AND
			B.cod_cli = D.cod_cli AND
			C.nro_ped = B.nro_ped AND
			C.cod_prod = A.cod_prod;
/*
3) Selecionar código e nome de clientes cujos 
nomes contenham Ltda
*/
SELECT
	cod_cli, nome
	FROM cliente 
	WHERE nome iLIKE ' %ltda'
/*
4) Recuperar o nome de cada produto e o seu preço em dólares
*/
SELECT 
	A.nome, A.preco, A.preco*5.30 AS emDolar
	FROM produto A
/*
5) Recuperar o nome de cada produto e o seu preço em dólares.
Ordenar a consulta em ordem decrescente de preço
*/
SELECT 
	A.nome, A.preco*5.30 AS emDolar
	FROM produto A	
	ORDER BY emDolar DESC



