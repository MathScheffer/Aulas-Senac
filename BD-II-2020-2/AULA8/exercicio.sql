/*
Monte um procedimento o qual possa gerenciar as
mensagens de erro fm_msg() o qual receba um tipo de erro e
gere uma respectiva mensagem;
*/


/*
• Crie um procedimento fm_lista() o qual liste os motoristas
(nome) e seu total de multas, caso o parametro sejam
TODOS ou apenas de um CNH;*/

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


/*
• Monte um procedimento fm_totalMultas() o qual retorne o
total de multas de cada motorista. Use na função fm_lista()
*/

/*
• OBS: use o procedimento fm_msg() para que gere
mensagens do tipo:
– Motorista não cadastrado;
– Motorista sem multas, etc*/