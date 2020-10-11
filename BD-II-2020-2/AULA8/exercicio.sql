/*
Monte um procedimento o qual possa gerenciar as
mensagens de erro fm_msg() o qual receba um tipo de erro e
gere uma respectiva mensagem;
*/
DROP FUNCTION fn_msg(varchar(5));
CREATE OR REPLACE FUNCTION fn_msg(cod varchar(5)) RETURNS varchar(100) AS
$$
DECLARE
msg VARCHAR(100);
BEGIN
	IF cod = '00001' THEN	
		msg = 'Motorista não encontrado';
	ELSIF cod = '00002' THEN
		msg = 'Motorista sem multa';
	ELSIF cod = '00003' THEN
		msg = 'Não há motoristas cadastrados';
	END IF;
	RETURN msg;
END;
$$
LANGUAGE PLPGSQL;
select fn_msg('00002')
/*
• Crie um procedimento fm_lista() o qual liste os motoristas
(nome) e seu total de multas, caso o parametro sejam
TODOS ou apenas de um CNH;*/

drop function fn_lista(char(5))

CREATE OR REPLACE FUNCTION fn_lista( param char(5) ) RETURNS TABLE(n varchar(20), tm decimal) AS
$$
DECLARE 
msg varchar(100);

BEGIN
	IF $1 = 'TODOS'  THEN
	 	PERFORM nome, totalmultas FROM EX_MOTORISTA;
		IF NOT FOUND THEN
				select fn_msg('00003') into msg;
				RAISE EXCEPTION 'Atenção: %.',msg;
		END IF;
		RETURN QUERY 
			SELECT ex_motorista.nome, ex_motorista.totalmultas 
				FROM ex_motorista;
	ELSE
		
		RETURN QUERY 
			SELECT nome, totalmultas FROM ex_motorista 
				WHERE ex_motorista.cnh = $1;
		IF NOT FOUND THEN
			select fn_msg('00001') into msg;
			RAISE EXCEPTION 'Atenção: %.',msg;
			
		ELSIF (SELECT totalmultas FROM ex_motorista WHERE ex_motorista.cnh = $1) ISNULL THEN
			select fn_msg('00002') into msg;
			RAISE EXCEPTION 'Atenção: %.',msg;
			
		END IF;
	END IF;
END;
$$
LANGUAGE PLPGSQL;


select fn_lista('123AC') -- result set fica acoplado numa linha e separado por virgulas;
select  * from fn_lista('TODOS') -- result set fica separado por colunas
select fn_lista('123dC') -- Retorna erro 00001
select fn_lista('123AB') -- Retorna erro 00002

BEGIN TRANSACTION;
	DELETE FROM ex_multa;
	DELETE FROM ex_motorista;
	select  * from fn_lista('TODOS'); -- Retorna Erro 0003.
ROLLBACK;
BEGIN TRANSACTION;
	DELETE FROM ex_multa;
	DELETE FROM ex_motorista;
	select  * from fn_lista('TODOS'); -- Retorna Erro 0003.
ROLLBACK;

/*
• Monte um procedimento fm_totalMultas() o qual retorne o
total de multas de cada motorista. Use na função fm_lista()
*/
drop function fn_totalMultas();
CREATE OR REPLACE FUNCTION fn_totalMultas() RETURNS  TABLE (nome varchar(20), total_multa decimal) AS
$$
DECLARE 
	msg varchar(100);
BEGIN

	PERFORM * FROM fn_lista('TODOS') limit 1;
	
	IF NOT FOUND THEN
		SELECT fn_msg('00003') INTO msg;
		RAISE EXCEPTION 'Atenção: %.',msg;
	END IF;
	
	RETURN QUERY
		SELECT N, TM FROM fn_lista('TODOS');
END;
$$
LANGUAGE PLPGSQL;

SELECT * from fn_totalMultas();
/*
• OBS: use o procedimento fm_msg() para que gere
mensagens do tipo:
– Motorista não cadastrado;
– Motorista sem multas, etc*/

SELECT CNH FROM ex_motorista
