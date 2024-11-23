CREATE DATABASE IF NOT EXISTS moviesutn DEFAULT CHARACTER SET utf8;

USE moviesutn;

CREATE TABLE moviesutn.directors (
id INT(11) NOT NULL AUTO_INCREMENT,
name VARCHAR(150) NULL,
surname VARCHAR(150) NULL,
createdAt DATE NULL,
updatedAt DATE NULL,
nationality VARCHAR(100) NULL,
birthYear YEAR NULL,
PRIMARY KEY (id)
) ENGINE = InnoDB DEFAULT CHARACTER SET = utf8;

CREATE TABLE moviesutn.movies (
id INT(11) NOT NULL AUTO_INCREMENT,
title VARCHAR(150) NULL,
createdAt DATE NULL,
updatedAt DATE NULL,
genre VARCHAR(100) NULL,
released YEAR NULL,
status VARCHAR(15) NULL,
PRIMARY KEY (id)
) ENGINE = InnoDB DEFAULT CHARACTER SET = utf8;

CREATE TABLE moviesutn.movies_directors (
idDirector INT(11) NOT NULL,
idMovie INT(11) NOT NULL,
createdAt DATE NULL,
updatedAt DATE NULL,
PRIMARY KEY (idDirector, idMovie),
FOREIGN KEY (idDirector) REFERENCES directors(id) ON DELETE CASCADE ON UPDATE CASCADE,
FOREIGN KEY (idMovie) REFERENCES movies(id) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB DEFAULT CHARACTER SET = utf8;

INSERT INTO moviesutn.directors (id, name, surname, createdAt, updatedAt, nationality, birthYear) VALUES
(1, 'Julee', 'Keeves', '2023-11-30 22:03:24', '2024-05-02 08:44:50', 'Bolivia', 2016),
(2, 'Barnabas', 'Giannini', '2024-08-07 12:47:07', '2024-02-21 03:13:01', 'Poland', 2006),
(3, 'Kayley', 'Vibert', '2024-03-19 07:24:44', '2024-03-04 15:25:52', 'China', 2008),
(4, 'Helaine', 'Tott', '2024-10-17 23:34:36', '2024-08-21 13:23:18', 'Afghanistan', 2014),
(5, 'William', 'Friedkin', '2023-12-06 06:05:29', '2023-11-27 13:23:42', 'USA', 1935),
(6, 'Thomasina', 'Guille', '2024-10-31 12:07:21', '2024-03-16 02:25:12', 'Albania', 0),
(7, 'Kary', 'Stempe', '2024-06-17 04:17:18', '2024-10-27 15:14:25', 'Indonesia', 2011),
(8, 'Brooks', 'Dingivan', '2024-03-14 10:52:09', '2024-06-18 22:53:06', 'Philippines', 2012),
(9, 'Basilius', 'Bradder', '2024-10-27 18:05:43', '2024-10-28 00:39:00', 'France', 2012),
(10, 'Jobyna', 'MacPhail', '2024-07-14 15:26:12', '2024-06-03 20:12:50', 'Uruguay', 2013),
(11, 'Mathe', 'Darey', '2024-08-17 17:45:19', '2024-11-01 04:16:37', 'China', 2006),
(12, 'Aloysius', 'Pawsey', '2024-01-12 13:49:00', '2024-01-03 18:11:06', 'China', 2014),
(13, 'Wynn', 'Weymouth', '2024-03-30 15:31:35', '2024-09-25 09:38:57', 'Turkey', 2017),
(14, 'Abran', 'Marconi', '2024-02-15 20:25:11', '2024-03-15 20:57:54', 'Ukraine', 2014),
(15, 'Jacenta', 'Pfertner', '2024-05-20 00:01:50', '2024-06-19 16:35:17', 'China', 2014),
(16, 'Candi', 'Goodyear', '2024-06-24 06:20:37', '2024-04-03 03:27:59', 'Ukraine', 2016),
(17, 'Ashla', 'Abyss', '2024-03-26 04:33:18', '2024-04-22 00:03:00', 'Dominican Republic', 0),
(18, 'Vasilis', 'Cawston', '2024-07-05 00:27:40', '2024-03-20 16:48:29', 'Russia', 2015),
(19, 'Kori', 'Naris', '2024-11-10 09:58:49', '2024-01-13 17:33:47', 'Ukraine', 2014),
(20, 'Edi', 'Corzon', '2024-06-18 23:02:37', '2024-10-26 11:47:07', 'China', 2012),
(21, 'Danya', 'Brownstein', '2024-03-31 17:44:46', '2024-10-15 03:32:21', 'Russia', 2006),
(22, 'Darbee', 'Crankhorn', '2024-09-04 00:03:48', '2024-04-08 18:11:03', 'China', 2014),
(23, 'Thatch', 'McPartling', '2023-12-06 09:16:42', '2024-02-15 06:39:50', 'Sweden', 2014),
(24, 'Constantin', 'Barney', '2024-11-05 20:28:05', '2023-11-24 22:40:00', 'China', 2010),
(25, 'Winnie', 'Fillon', '2023-12-17 08:30:40', '2024-05-26 09:11:49', 'China', 2014),
(26, 'Edgar', 'Wright', '2023-12-17 08:30:40', '2024-05-26 09:11:49', 'UK', 1974);

INSERT INTO moviesutn.movies (id, title, genre, createdAt, updatedAt, released, status)
VALUES
(1, 'Rabid Grannies (Mémés cannibales, Les)', 'Comedy|Horror', '2024-01-19 16:45:00', '2024-05-13 07:42:34', 2019, 'inactive'),
(2, 'Casanova', 'Comedy|Drama|Romance', '2024-06-20 06:45:27', '2024-03-31 04:27:13', 2005, 'active'),
(3, 'Once Upon a Time in China and America (Wong Fei Hung: Chi sai wik hung see)', 'Action|Adventure|Western', '2024-07-23 16:52:19', '2024-07-25 13:20:26', 2006, 'active'),
(4, 'Where the Truth Lies', 'Drama|Thriller', '2024-07-25 04:02:41', '2024-09-09 16:35:28', 2006, 'active'),
(5, 'Paris Blues', 'Drama|Romance', '2023-11-26 01:41:35', '2024-06-30 23:08:48', 0, 'inactive'),
(6, 'Dark Angel: Ascent, The', 'Horror|Romance', '2023-12-12 12:31:29', '2024-01-04 04:19:45', 2013, 'inactive'),
(7, 'Crying Game, The', 'Drama|Romance|Thriller', '2024-05-01 00:15:33', '2024-10-13 17:25:56', 2013, 'active'),
(8, 'Tall Story', 'Comedy', '2023-12-05 10:19:28', '2024-01-11 06:41:27', 2007, 'active'),
(9, 'Lemonade Joe (Limonádový Joe aneb Konská opera)', 'Adventure|Comedy|Musical|Romance|Western', '2024-09-08 12:35:12', '2024-04-22 04:29:36', 2017, 'active'),
(10, 'And Your Mother Too (Y tu mamá también)', 'Drama|Romance', '2023-12-29 17:19:32', '2024-03-23 20:01:39', 2010, 'inactive'),
(11, 'Player\'s Club, The', 'Comedy|Drama', '2024-08-27 13:57:57', '2024-11-20 03:18:51', 2007, 'active'),
(12, 'Jekyll + Hyde', 'Horror|Thriller', '2023-12-23 20:26:00', '2024-09-11 19:22:54', 2013, 'inactive'),
(13, 'Home of the Brave', 'Action|Drama|War', '2024-09-23 10:49:50', '2024-06-09 22:47:02', 2017, 'active'),
(14, 'Fall From Grace', 'Documentary', '2023-12-04 22:00:46', '2024-01-09 20:25:37', 2019, 'inactive'),
(15, 'Monte Carlo', 'Adventure|Comedy|Romance', '2024-01-07 23:31:09', '2024-04-15 00:37:54', 2018, 'inactive'),
(16, 'Mannequin 2: On the Move', 'Comedy|Fantasy|Romance', '2024-10-16 04:16:52', '2024-04-28 13:03:18', 2011, 'active'),
(17, 'New One-Armed Swordsman, The (Xin du bi dao)', 'Action|Drama|War', '2024-08-18 19:38:31', '2024-06-13 15:05:17', 2012, 'inactive'),
(18, 'Every Day', 'Comedy|Drama', '2024-03-06 09:59:00', '2024-09-26 00:52:59', 2017, 'active'),
(19, 'Midnight Lace', 'Mystery|Thriller', '2024-04-16 17:02:05', '2024-11-06 13:42:41', 2011, 'active'),
(20, 'Personal Effects', 'Drama', '2024-03-23 04:16:03', '2024-05-23 16:56:59', 2005, 'active'),
(21, 'Sextette', 'Comedy|Musical|Romance', '2024-08-28 02:05:29', '2024-01-13 13:28:48', 2012, 'active'),
(22, 'Lightning Bug', 'Drama|Horror|Thriller', '2024-07-07 11:44:31', '2024-04-09 19:17:12', 2003, 'active'),
(23, 'Brother Bear 2', 'Adventure|Animation|Children|Comedy|Fantasy', '2023-12-01 01:57:06', '2024-06-15 04:54:11', 2011, 'inactive'),
(24, 'Robinson Crusoe (Daniel Defoe\'s Robinson Crusoe)', 'Adventure|Drama', '2024-08-08 05:44:34', '2024-08-08 14:16:15', 2011, 'active'),
(25, 'Hoop Dreams', 'Documentary', '2023-12-30 06:54:28', '2024-10-15 05:34:41', 2020, 'active');

INSERT INTO moviesutn.movies_directors (idDirector, idMovie, createdAt, updatedAt)
VALUES
(1, 1, '2023-11-30 22:03:24', '2024-01-01 10:00:00'),
(2, 1, '2023-11-30 22:03:24', '2024-02-01 10:00:00'),  
(3, 2, '2024-02-01 08:30:00', '2024-02-21 14:00:00'),
(4, 2, '2024-02-01 08:30:00', '2024-02-21 14:00:00'),
(2, 3, '2024-03-01 09:10:12', '2024-03-15 12:20:34'),
(5, 4, '2024-04-05 10:20:45', '2024-04-15 11:45:00'),
(6, 5, '2024-04-10 12:30:50', '2024-05-01 15:10:10'),
(7, 6, '2024-06-20 10:40:00', '2024-06-30 13:50:00'),
(8, 7, '2024-07-10 15:12:00', '2024-07-20 18:30:00'),
(9, 8, '2024-07-15 09:45:00', '2024-07-25 10:25:00'),
(10, 9, '2024-08-01 14:05:00', '2024-08-10 17:20:00'),
(11, 10, '2024-09-05 12:20:00', '2024-09-12 16:30:00'),
(12, 11, '2024-10-01 13:55:00', '2024-10-15 11:00:00'),
(13, 12, '2024-10-10 08:30:00', '2024-10-20 19:00:00'),
(14, 13, '2024-11-01 10:00:00', '2024-11-10 15:10:00'),
(15, 14, '2024-11-05 14:30:00', '2024-11-12 13:00:00'),
(16, 15, '2024-11-05 16:00:00', '2024-11-15 14:10:00'),
(17, 16, '2024-10-20 11:40:00', '2024-11-01 12:50:00'),
(18, 17, '2024-09-28 17:20:00', '2024-10-10 18:30:00'),
(19, 18, '2024-08-05 14:00:00', '2024-09-01 16:00:00'),
(20, 19, '2024-07-15 10:00:00', '2024-07-30 12:00:00'),
(21, 20, '2024-06-12 11:40:00', '2024-06-25 13:30:00'),
(22, 21, '2024-06-01 16:00:00', '2024-06-10 19:10:00'),
(23, 22, '2024-05-01 09:25:00', '2024-05-15 10:15:00'),
(24, 23, '2024-04-15 13:45:00', '2024-04-25 17:00:00'),
(25, 24, '2024-03-25 10:05:00', '2024-04-05 14:30:00'),
(1, 25, '2024-01-15 08:40:00', '2024-02-10 12:50:00');
