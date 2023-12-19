SELECT id
FROM Weather
WHERE temperature > (SELECT temperature FROM Weather w WHERE w.recordDate = DATE_SUB(Weather.recordDate, INTERVAL 1 DAY));
