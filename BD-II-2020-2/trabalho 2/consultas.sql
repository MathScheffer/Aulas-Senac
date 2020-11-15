-- INSERTS PARA TESTE
		
INSERT INTO HOSPEDE(nome,cidade,dataNascimento) VALUES('Matheus','Cachoeirinha','1999/04/27');
INSERT INTO HOSPEDE(nome,cidade,dataNascimento) VALUES('Geraldo','Cachoeirinha',to_date('27/04/1997','DD/MM/YYYY'));
INSERT INTO HOSPEDE(nome, cidade, datanascimento ) VALUES(Pafuncio,Viamao,'1979-04-27');
INSERT INTO HOSPEDE(nome, cidade, datanascimento ) VALUES('Edemar','Canoas','1975/06/12');

INSERT INTO ATENDENTE(codSuperior, nome) VALUES(0,'Atendente básico');
INSERT INTO ATENDENTE(codSuperior, nome) VALUES(1,'Atendente Superior');

INSERT INTO HOSPEDAGEM(codatendente,codhospede,dataentrada,datasaida,numquarto,valordiaria)
	VALUES(1,1,to_date('28/12/2020','DD/MM/YYYY'),
		   to_date('7/01/2021','DD/MM/YYYY'),371,145.0);
INSERT INTO HOSPEDAGEM(codatendente,codhospede,dataentrada,datasaida,numquarto,valordiaria)
	VALUES(1,2,to_date('01/01/2021','DD/MM/YYYY'),
		   to_date('10/01/2021','DD/MM/YYYY'),372,150.5);
INSERT INTO 
HOSPEDAGEM(codatendente, codhospede,dataentrada,numquarto,valordiaria)
	VALUES(1,3,'2021/02/6',123,340.0)
INSERT INTO 
HOSPEDAGEM(codatendente, codhospede,dataentrada,numquarto,valordiaria)
	VALUES(1,4,'2020/12/28',123,180.0)




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
CREATE OR REPLACE FUNCTION fn_pegar_hospedes_21(dataHospedagem21 date) RETURNS boolean AS
$$
DECLARE
	_CURSOR REFCURSOR;
	_DATA date;
	_NEXTDATA date;
	_VERIFICADOR BOOLEAN := FALSE;
BEGIN
	OPEN _CURSOR  FOR select dataentrada from Vw_hospedes_40_X_45 order by dataentrada asc;
	
	FETCH _CURSOR INTO _DATA;
	WHILE FOUND LOOP	
		RAISE NOTICE 'Primeira data: %, Segunda data: %', _DATA,dataHospedagem21; 
		RAISE NOTICE 'resultado da comparação: %','2021-02-06 '= _DATA;
		IF dataHospedagem21 = _DATA THEN 
			_VERIFICADOR:=TRUE;
			RETURN TRUE	;
		END IF;
		FETCH _CURSOR INTO _DATA;
	END LOOP;
	CLOSE _CURSOR;
	if _VERIFICADOR is not TRUE then
		RAISE NOTICE 'Não há hóspedes com 21 anos que se hospedaram no mesmo dia que algum entre 40 e 45 anos.';
	end if;
	return FALSE; 
END
$$ LANGUAGE PLPGSQL

SELECT fn_pegar_hospedes_21('2020/12/28') -- retorna true: é está hospedado junto com um de 40 a 45 anos
SELECT fn_pegar_hospedes_21('2021/02/06') 
SELECT fn_pegar_hospedes_21('2021/01/01') -- retorna false: não há hospedes entre 40 e 45 anos nesta data

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
		AND (SELECT fn_pegar_hospedes_21(hdm.dataentrada)) 
		
