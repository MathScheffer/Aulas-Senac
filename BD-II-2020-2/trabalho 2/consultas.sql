update HOSPEDE SET datanascimento = '1975/06/12' WHERE codhospede = 4
SELECT * FROM HOSPEDE
select * from HOSPEDAGEM

--Funcao para calcular idade
CREATE OR REPLACE FUNCTION calcularAnos(  dataInicio Date) returns integer AS
	$$
	DECLARE
		_dataAtual DATE:= to_char(CURRENT_DATE,'YYYY/MM/DD');
		_retorno int;
	BEGIN
		_retorno:= to_char( AGE( _dataAtual,dataInicio),'YYYY');
		return  _retorno;
	END
	$$
	LANGUAGE PLPGSQL
	
drop function calcularAnos(date)

SELECT calcularAnos('1974/06/12')

--View de hospedes entre 40 a 45 anos
CREATE OR REPLACE VIEW Vw_hospedes_40_X_45 AS SELECT hpd.nome, hdm.dataentrada 
	FROM HOSPEDE hpd, HOSPEDAGEM hdm
	WHERE (SELECT calcularAnos(hpd.datanascimento)) > 39 AND (SELECT calcularAnos(hpd.datanascimento)) < 46
		AND hpd.codhospede = hdm.codhospede
		
-- criar função para verificar os hospedes de 21+ que se hospederam entre as datas dos hospedes entre 40 e 45
CREATE OR REPLACE FUNCTION fn_pegar_hospedes_21(dataHospedagem21 date) RETURNS VOID AS
$$
DECLARE
	_CURSOR REFCURSOR;
	_DATA date;
	_NEXTDATA date;
BEGIN
	OPEN _CURSOR  FOR select dataentrada from Vw_hospedes_40_X_45 order by dataentrada asc;
	
	FETCH _CURSOR INTO _DATA;
	fetch next IN _cursor INTO _NEXTDATA;
	WHILE FOUND LOOP
		
		RAise notice 'Data: %',_DATA;
		RAise notice 'Data: %',_NEXTDATA ;
		FETCH _CURSOR INTO _DATA;
	END LOOP;
	CLOSE _CURSOR;
	return;
END
$$ LANGUAGE PLPGSQL

SELECT fn_pegar_hospedes_21('1999/04/27')

select dataentrada from Vw_hospedes_40_X_45 order by dataentrada asc
select * from hospede
select * from atendente
select * from HOSPEDAGEM

-- CONSULTA 1
SELECT hpd.nome, hpd.datanascimento, hdm.numquarto, atd.nome, hdm.valorDiaria
	from HOSPEDE hpd, HOSPEDAGEM hdm, ATENDENTE  atd
	WHERE 
		hpd.codhospede = hdm.codhospede AND hpd.codhospede = 1 
		AND atd.codatendente = hdm.codatendente AND hdm.datasaida IS NOT NULL
		AND (SELECT calcularAnos(hpd.datanascimento) ) > 20
		AND
		
