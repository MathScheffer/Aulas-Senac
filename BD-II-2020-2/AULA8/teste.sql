/*Um teste para, ao invés de retornar uma linha, retornar uma tabela bem estruturada*/
create table teste (id int, firstname varchar, lastname varchar);
insert into teste values (1, 'aaa','bbb'),(2,'ccc','ddd');
drop function my_function(integer);
CREATE OR REPLACE FUNCTION my_function(user_id integer) RETURNS TABLE(id integer, firstname character varying, lastname character varying) AS $$
    --DECLARE
        --ids INTEGER[];
    BEGIN
         --ids := ARRAY[1,2];
         RETURN QUERY
             SELECT teste.id, teste.firstname, teste.lastname
             FROM teste
             --WHERE teste.id = ANY(ids);
			 WHERE teste.id = 1;
    END;
$$ LANGUAGE plpgsql;

select * from my_function(1);