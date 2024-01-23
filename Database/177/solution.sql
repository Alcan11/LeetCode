CREATE FUNCTION getNthHighestSalary(N INT) RETURNS INT
BEGIN
  RETURN (
      SELECT distinct(sub.salary) from (

      select salary, dense_rank() over (order by salary DESC) as r
        from employee) as sub
        where sub.r = N
  );
END
