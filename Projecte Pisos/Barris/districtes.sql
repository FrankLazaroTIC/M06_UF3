SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";

CREATE TABLE `districtes` (
  `id` int(11) NOT NULL,
  `slug` varchar(128) NOT NULL,
  `name` varchar(128) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `districtes` (`id`, `slug`, `name`) VALUES
(1, 'ciutat-vella', 'Ciutat Vella'),
(2, 'eixample', 'Eixample'),
(3, 'sants-montjuic', 'Sants- Montuïc'),
(4, 'les-corts', 'Les Corts'),
(5, 'sarria-sant-gervasi', 'Sarrià- Sant Gervasi'),
(6, 'gracia', 'Gràcia'),
(7, 'horta-guinardo', 'Horta- Guinardó'),
(8, 'nou-barris', 'Nou Barris'),
(9, 'sant-andreu', 'Sant Andreu'),
(10, 'sant-marti', 'Sant Martí');

ALTER TABLE `districtes`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `districtes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;