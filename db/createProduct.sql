
insert into products (id, name, description, price, imageurl) 
values($1, $2, $3, $4, $5) returning id

-- values (1, 'headphones', 'light and inexpensive', 12.99, 'www.google.com/headphones');