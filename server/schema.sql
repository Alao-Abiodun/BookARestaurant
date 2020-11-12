CREATE TABLE Restaurants(
    Id BIGSERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(50) NOT NULL,
    location VARCHAR(50) NOT NULL,
    price_range INT NOT NULL check(price_range >=1 AND price_range <=5)
);
DROP TABLE Restaurants;
INSERT INTO Restaurants (name, location, price_range) VALUES('Mr Biggs', 'Costain', 1);
INSERT INTO Restaurants (name, location, price_range) VALUES('Tantalizer', 'Oyingbo', 3);