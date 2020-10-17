
CREATE OR REPLACE FUNCTION FN_OBTER_TOTAL_MULTA(pCNH CHAR(5)) RETURNS DECIMAL(5,2) AS
$$
DECLARE
_TOTAL DECIMAL(5,2) :=0;
BEGIN
SELECT COALESCE(SUM(VALOR),0) AS VALOR
	INTO _TOTAL FROM EX_MULTA WHERE CNH = pCNH;
RETURN _TOTAL;
END;
$$ LANGUAGE PLPGSQL

SELECT FN_OBTER_TOTAL_MULTA('123AC');



CREATE OR REPLACE FUNCTION FN_ATUALIZAR_TOTAL_MULTA(pCNH CHAR(5)) RETURNS VOID AS
$$
BEGIN
IF pCNH IS NULL THEN
RAISE EXCEPTION 'CNH NÃO PODE SER NULO';
END IF;
IF (SELECT FN_OBTER_TOTAL_MULTA(pCNH)) > 0 THEN
UPDATE EX_MOTORISTA
SET TOTALMULTAS = (SELECT FN_OBTER_TOTAL_MULTA(pCNH))
WHERE CNH = pCNH;
END IF;
RETURN;
END;
$$
LANGUAGE PLPGSQL;
SELECT FN_ATUALIZAR_TOTAL_MULTA('123AB');

SELECT FN_ATUALIZAR_TOTAL_MULTA('123AC');
