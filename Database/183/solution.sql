# Write your MySQL query statement below
SELECT c.name as 'Customers' FROM Customers c LEFT JOIN Orders o ON c.id LIKE o.customerId WHERE o.id IS NULL;
