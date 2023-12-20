SELECT p1.email as 'Email' FROM Person p1 GROUP BY p1.email HAVING COUNT(p1.id) > 1;
