-- phpMyAdmin SQL Dump
-- version 5.1.2
-- https://www.phpmyadmin.net/
--
-- Хост: localhost:3306
-- Время создания: Фев 12 2024 г., 10:59
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
-- Структура таблицы `goods`
--

CREATE TABLE `goods` (
  `id` int(11) NOT NULL,
  `title` varchar(100) NOT NULL,
  `price` int(11) NOT NULL,
  `description` text NOT NULL,
  `category` varchar(50) NOT NULL,
  `image` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `goods`
--

INSERT INTO `goods` (`id`, `title`, `price`, `description`, `category`, `image`) VALUES
(1, 'Стиральный порошок Persil', 20, 'Стиральный порошок Персил Premium Гигиена и чистота, 2.43 кг', 'washing powder', 'https://cdn.ime.by/UserFiles/images/catalog/Goods/2287/00002287/norm/00002287.n_3.png'),
(2, 'Стиральный порошок Persil', 23, 'Стиральный порошок «Персил» Color, 3 кг', 'washing powder', 'https://cdn.ime.by/UserFiles/images/catalog/Goods/2287/00002287/norm/00002287.n_3.png'),
(3, 'Средство для мытья посуды', 10, 'Средство для мытья посуды Fairy Сочный лимон (1.35л)', 'Dishwashing liquid', 'https://cdn21vek.by/img/galleries/1018/773/preview_b/fairy_04_60bdf7666468c.jpeg'),
(4, 'Таблетки для посудомоечной машины Finish', 50, 'Таблетки для посудомоечной машины Finish Powerball Quantum All in 1 (84 шт)', 'Dishwasher tablets', 'https://img.5element.by/import/images/ut/goods/good_8ca419a2-99ca-11ee-8db3-005056012b6d/tabletki-dlya-pmm-finish-powerball-quantum-84-sht-1_600.jpg'),
(5, 'Кондиционер для белья ВЕРНЕЛЬ', 15, 'Кондиционер для белья ВЕРНЕЛЬ Свежий бриз VERNEL концентрированный, 910 мл', 'Fabric softener', 'https://mila.by/images/cache/_thumb_500x500xin_upload_iblock_cce_60kvv7xcycvt7ps53qu00bht6d9lcs3t_9000101075076.jpg');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `goods`
--
ALTER TABLE `goods`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `goods`
--
ALTER TABLE `goods`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
