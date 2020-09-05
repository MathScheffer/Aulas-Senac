
/*1 – Criar uma view com o nome de cursosanalista, que contém o nome do curso, nome do
analista e salário do analista com um aumento de 10%.*/
CREATE VIEW cursosanalista as
SELECT C.curso, A.analista, A.salario, A.salario * 1.1 salarioAumentado
	FROM
		curso C,
		analista A
	WHERE
		A.codcurso = C.codcurso;
select * from cursosanalista;

/*
2 – Montar uma consulta que mostra o nome do programador e a quantidade de dias de
férias. Caso o programador tenha idade:
de 20 a 24 anos 18 dias
de 25 a 35 anos 21 dias
acima de 35 anos 25 dias
*/
SELECT P.progranador, P.idade,
	CASE 
		WHEN idade BETWEEN 20 AND 24 THEN '18 dias'
		WHEN idade BETWEEN 25 AND 35 THEN '21 dias'
		WHEN idade > 35 THEN '25 dias'
		ELSE 'Programador menor que 18 anos'
	END
	FROM programador P;
/*
3 – Criar uma view com o nome de ativanalista, contendo o nome do analista e a
quantidade de atividades de análise que ele realizou.
*/
CREATE VIEW ativanalista AS
SELECT  analista, COUNT(*)teste
	FROM 
		analista A,
		atividadesanalise AT
    WHERE A.codanalista = AT.codanalista
	GROUP BY analista;
	SELECT * FROM ativanalista;
/*
4 – Montar uma consulta para atualizar o salário dos analistas a partir da quantidade de
atividades de análise realizadas.
1 atividade 5%
2 atividades 10%
3 atividades ou mais 15%
*/
select ANALISTA, SALARIO,
	CASE
		WHEN count(*) = 1 then salario * 1.05
		WHEN count(*) = 2 then salario * 1.10
		WHEN count(*) >= 3 then salario * 1.15
	end as aumento
	FROM analista A,
		atividadesanalise AT
	where A.codanalista = at.codanalista
	GROUP BY ANALISTA, SALARIO
	ORDER BY 2 DESC, ANALISTA

/* fazendo c/view
SELECT ATV.ANALISTA, SALARIO,
	CASE
		WHEN ATV.teste = 1 then a.salario * 1.1
		WHEN ATV.teste = 2 then a.salario * 1.1
		WHEN ATV.teste >= 3 then a.salario * 1.1
		END AS SALARIObONIFICADO
	FROM ativanalista atv, analista a
	where a.analista = atv.analista
*/
/*
5 – Monte uma consulta para mostrar o nome do(s) analista(s) e o nome de seu respectivo
curso, o(s) qual(is) nunca tive(ram) atividades realizadas com o programador o qual tenha
em seu nome a palavra “Jefer”.
*/

create table exemplo (codigo int, nome varchar(50));
select * from exemplo;

insert into exemplo (codigo, nome) values (100,'Jose da Silva');
insert into exemplo VALUES(200,'Marina da Silva');
--Processo em lote
insert into exemplo
	select codprogramador, progranador 
		from programador
		where salario > 1500

