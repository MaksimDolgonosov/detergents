-- phpMyAdmin SQL Dump
-- version 5.1.2
-- https://www.phpmyadmin.net/
--
-- Хост: localhost:3306
-- Время создания: Май 01 2024 г., 17:11
-- Версия сервера: 5.7.24
-- Версия PHP: 8.0.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `detergents`
--

-- --------------------------------------------------------

--
-- Структура таблицы `basket`
--

CREATE TABLE `basket` (
  `id` varchar(100) NOT NULL,
  `id_user` varchar(100) NOT NULL,
  `title` text NOT NULL,
  `price` int(10) NOT NULL,
  `quantity` tinyint(50) NOT NULL,
  `image` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `basket`
--

INSERT INTO `basket` (`id`, `id_user`, `title`, `price`, `quantity`, `image`) VALUES
('2', 'x8m1HZZWYrd9eE9lqxY0e19EL4H2', 'Стиральный порошок Persil', 23, 1, 'https://node.webmaks.site/api/images/2'),
('3', 'x8m1HZZWYrd9eE9lqxY0e19EL4H2', 'Гель для мытья посуды', 30, 4, 'https://node.webmaks.site/api/images/3'),
('6', 'x8m1HZZWYrd9eE9lqxY0e19EL4H2', 'Стиральный порошок Persil', 20, 1, 'https://node.webmaks.site/api/images/6'),
('4', 'x8m1HZZWYrd9eE9lqxY0e19EL4H2', 'Таблетки для посудомоечной машины', 50, 1, 'https://node.webmaks.site/api/images/4');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `basket`
--
ALTER TABLE `basket`
  ADD KEY `id_user` (`id_user`);

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `basket`
--
ALTER TABLE `basket`
  ADD CONSTRAINT `basket_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
