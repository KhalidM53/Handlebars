DROP DATABASE IF EXISTS burgers_db;
CREATE database burgers_db;

USE burgers_db;

CREATE TABLE burgers(
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR (300) NULL,
    devoured BOOLEAN NOT NULL DEFAULT false,
    PRIMARY KEY(id)
    
);
INSERT INTO burgers (burger_name)
VALUES
    ("Black-Bean Burger"),
    ("Turkey Burger"),
    ("Bacon Cheeseburger");