
UPDATE Products
SET name = $2,
description = $3,
price = $4,
imageurl = $5
where id = $1

