--Usando RECORD
/*
drop function fn_lista()
CREATE OR REPLACE FUNCTION fn_lista() RETURNS SETOF RECORD AS
$$
BEGIN
	RETURN QUERY SELECT nome, totalmultas FROM EX_MOTORISTA;
	return;
END;
$$
LANGUAGE PLPGSQL;

select nome, totalmultas FROM fn_lista() AS (nome varchar(20), totalmultas decimal)
*/

--Retornando uma table
drop function fn_lista(char(5))

CREATE OR REPLACE FUNCTION fn_lista( param char(5) ) RETURNS TABLE(n varchar(20), tm decimal) AS
$$

BEGIN
	IF $1 = 'TODOS'  THEN
	 	PERFORM nome, totalmultas FROM EX_MOTORISTA;
		IF NOT FOUND THEN
				RAISE EXCEPTION 'NÃO HÁ MOTORISTAS CADASTRADOS.';
		END IF;
		RETURN QUERY SELECT nome, totalmultas FROM ex_motorista;
		return;
	ELSE
		
		RETURN QUERY SELECT nome, totalmultas FROM ex_motorista WHERE ex_motorista.cnh = $1;
			IF NOT FOUND THEN
				RAISE EXCEPTION 'Motorista de CNH % não encontrado.',$1;
				RAISE NOTICE 'Verifique se está digitando uma CNH válida ou está digitando TODOS para consultar todos os motoristas.';
			END IF;
		
		return;

	END IF;
END;
$$
LANGUAGE PLPGSQL;

select fn_lista('123ac') --AS (nome varchar(20), totalmultas decimal)





