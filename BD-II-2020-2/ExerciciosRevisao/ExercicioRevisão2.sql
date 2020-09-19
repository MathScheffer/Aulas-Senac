

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



