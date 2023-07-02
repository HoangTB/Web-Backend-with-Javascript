-- create table if not exists `users`(
--   id INT PRIMARY KEY AUTO_INCREMENT,
--   name VARCHAR(255) NOT NULL,
--   username VARCHAR(255) NOT NULL,
--   email VARCHAR(255) NOT NULL,
--   phone VARCHAR(255) NOT NULL,
--   website VARCHAR(255) NOT NULL
-- )engine=InnoDB DEFAULT CHARSET=utf8;

-- create table if not exists `address`(
--   id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
--   street VARCHAR(255) NOT NULL,
--   suite VARCHAR(255) NOT NULL,
--   city VARCHAR(255) NOT NULL,
--   zipcode VARCHAR(255) NOT NULL,
--      FOREIGN KEY (id) REFERENCES users(id)
-- )engine=InnoDB DEFAULT CHARSET=utf8;


-- create table if not exists `geo`(
--   id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
--   lat DECIMAL(9,6) NOT NULL,
--   lng DECIMAL(9,6) NOT NULL,
--     FOREIGN KEY (id) REFERENCES address(id)
-- )engine=InnoDB DEFAULT CHARSET=utf8;


-- create table if not exists `company`(
--   id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
--   name VARCHAR(255) NOT NULL,
--   catchPhrase VARCHAR(255) NOT NULL,
--   bs VARCHAR(255) NOT NULL,
--      FOREIGN KEY (id) REFERENCES users(id)
-- )engine=InnoDB DEFAULT CHARSET=utf8;


-- create table if not exists `blogs`(
--   id INT PRIMARY KEY AUTO_INCREMENT,
--   title VARCHAR(255) NOT NULL,
-- 	body VARCHAR(255) NOT NULL,
--     userId INT NOT NULL,
--    FOREIGN KEY (userId) REFERENCES users(id)
-- )engine=InnoDB DEFAULT CHARSET=utf8;