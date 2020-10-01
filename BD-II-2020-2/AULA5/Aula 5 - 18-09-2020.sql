CREATE OR REPLACE FUNCTION limparMovimento() RETURNS void AS '
DELETE FROM movimento;
' LANGUAGE SQL;

--Para executar a função
select * from movimento
begin transaction
select limparMovimento() 
rollback 


CREATE FUNCTION atualizarMovimento(char(10),integer, integer) 
returns integer AS
$$
UPDATE movimento set qtde = $3 where
nro_ped = $1 and cod_prod = $2;
select 1;
$$
LANGUAGE SQL;

select * from movimento
select atualizarMovimento('ped1', 1,21);
select * from movimento
select atualizarMovimento('ped1', 100,20);
select * from movimento

-- Para dropar uma função
drop function atualizarPrecoProduto(integer, decimal(5,2))


-- usando setof como retorno, apenas para um campo do select.
CREATE OR REPLACE FUNCTION
atualizarPrecoProduto(integer, decimal(5,2)) returns setof double precision AS $$
UPDATE produto set preco = preco * (1.00 + $2/100.00)
where cod_prod = $1;
select preco from produto ;
$$
LANGUAGE SQL;

select * from produto;
select * from atualizarPrecoProduto(1, 10.00);

-- usando setof como retorno, para todos os campos da tabela
CREATE OR REPLACE FUNCTION
atualizarPrecoProduto01(integer, decimal(5,2)) returns setof produto AS $$
UPDATE produto set preco = preco * (1.00 + $2/100.00)
where cod_prod = $1;
select * from produto ;
$$
LANGUAGE SQL;

select * from produto;
select * from atualizarPrecoProduto01(1, 10.00);
