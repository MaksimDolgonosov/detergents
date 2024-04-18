-- phpMyAdmin SQL Dump
-- version 5.1.2
-- https://www.phpmyadmin.net/
--
-- Хост: localhost:3306
-- Время создания: Апр 16 2024 г., 12:48
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
  `image` text NOT NULL,
  `sale` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `goods`
--

INSERT INTO `goods` (`id`, `title`, `price`, `description`, `category`, `image`, `sale`) VALUES
(1, 'Стиральный порошок Persil', 20, 'Стиральный порошок Персил Premium Гигиена и чистота, 2.43 кг', 'washing powder', 'http://localhost:3001/api/images/1', 0),
(2, 'Стиральный порошок Persil', 23, 'Стиральный порошок «Персил» Color, 3 кг', 'washing powder', 'http://localhost:3001/api/images/2', 0),
(3, 'Средство для мытья посуды', 10, 'Средство для мытья посуды Fairy Сочный лимон (1.35л)', 'Dishwashing liquid', 'http://localhost:3001/api/images/3', 1),
(4, 'Таблетки для посудомоечной машины', 50, 'Таблетки для посудомоечной машины Finish Powerball Quantum All in 1 (84 шт)', 'Dishwasher tablets', 'http://localhost:3001/api/images/4', 0),
(5, 'Кондиционер для белья ВЕРНЕЛЬ', 15, 'Кондиционер для белья ВЕРНЕЛЬ Свежий бриз VERNEL концентрированный, 910 мл', 'Fabric softener', 'http://localhost:3001/api/images/5', 0),
(6, 'Стиральный порошок Persil', 20, 'Стиральный порошок Персил Premium Гигиена и чистота, 2.43 кг', 'washing powder', 'http://localhost:3001/api/images/6', 0),
(7, 'Стиральный порошок Persil', 23, 'Стиральный порошок «Персил» Color, 3 кг', 'washing powder', 'http://localhost:3001/api/images/7', 0),
(8, 'Средство для мытья посуды', 10, 'Средство для мытья посуды Fairy Сочный лимон (1.35л)', 'Dishwashing liquid', 'http://localhost:3001/api/images/8', 1),
(9, 'Таблетки для посудомоечной машины', 50, 'Таблетки для посудомоечной машины Finish Powerball Quantum All in 1 (84 шт)', 'Dishwasher tablets', 'http://localhost:3001/api/images/9', 0),
(10, 'Кондиционер для белья ВЕРНЕЛЬ', 15, 'Кондиционер для белья ВЕРНЕЛЬ Свежий бриз VERNEL концентрированный, 910 мл', 'Fabric softener', 'http://localhost:3001/api/images/10', 0),
(11, 'Стиральный порошок Persil', 20, 'Стиральный порошок Персил Premium Гигиена и чистота, 2.43 кг', 'washing powder', 'http://localhost:3001/api/images/11', 0),
(12, 'Стиральный порошок Persil', 23, 'Стиральный порошок «Персил» Color, 3 кг', 'washing powder', 'http://localhost:3001/api/images/12', 0),
(13, 'Средство для мытья посуды', 10, 'Средство для мытья посуды Fairy Сочный лимон (1.35л)', 'Dishwashing liquid', 'http://localhost:3001/api/images/13', 1),
(14, 'Таблетки для посудомоечной машины', 50, 'Таблетки для посудомоечной машины Finish Powerball Quantum All in 1 (84 шт)', 'Dishwasher tablets', 'http://localhost:3001/api/images/14', 0),
(15, 'Кондиционер для белья ВЕРНЕЛЬ', 15, 'Кондиционер для белья ВЕРНЕЛЬ Свежий бриз VERNEL концентрированный, 910 мл', 'Fabric softener', 'http://localhost:3001/api/images/15', 0),
(16, 'Стиральный порошок Persil', 20, 'Стиральный порошок Персил Premium Гигиена и чистота, 2.43 кг', 'washing powder', 'http://localhost:3001/api/images/16', 0),
(17, 'Стиральный порошок Persil', 23, 'Стиральный порошок «Персил» Color, 3 кг', 'washing powder', 'http://localhost:3001/api/images/17', 0),
(18, 'Средство для мытья посуды', 10, 'Средство для мытья посуды Fairy Сочный лимон (1.35л)', 'Dishwashing liquid', 'http://localhost:3001/api/images/18', 1),
(19, 'Таблетки для посудомоечной машины', 50, 'Таблетки для посудомоечной машины Finish Powerball Quantum All in 1 (84 шт)', 'Dishwasher tablets', 'http://localhost:3001/api/images/19', 0),
(20, 'Кондиционер для белья ВЕРНЕЛЬ', 15, 'Кондиционер для белья ВЕРНЕЛЬ Свежий бриз VERNEL концентрированный, 910 мл', 'Fabric softener', 'http://localhost:3001/api/images/20', 0),
(21, 'Стиральный порошок Persil', 20, 'Стиральный порошок Персил Premium Гигиена и чистота, 2.43 кг', 'washing powder', 'http://localhost:3001/api/images/21', 0),
(22, 'Стиральный порошок Persil', 23, 'Стиральный порошок «Персил» Color, 3 кг', 'washing powder', 'http://localhost:3001/api/images/22', 0),
(23, 'Средство для мытья посуды', 10, 'Средство для мытья посуды Fairy Сочный лимон (1.35л)', 'Dishwashing liquid', 'http://localhost:3001/api/images/23', 1),
(24, 'Таблетки для посудомоечной машины', 50, 'Таблетки для посудомоечной машины Finish Powerball Quantum All in 1 (84 шт)', 'Dishwasher tablets', 'http://localhost:3001/api/images/24', 0),
(25, 'Кондиционер для белья ВЕРНЕЛЬ', 15, 'Кондиционер для белья ВЕРНЕЛЬ Свежий бриз VERNEL концентрированный, 910 мл', 'Fabric softener', 'http://localhost:3001/api/images/25', 0),
(26, 'Стиральный порошок Persil', 20, 'Стиральный порошок Персил Premium Гигиена и чистота, 2.43 кг', 'washing powder', 'http://localhost:3001/api/images/26', 0),
(27, 'Стиральный порошок Persil', 23, 'Стиральный порошок «Персил» Color, 3 кг', 'washing powder', 'http://localhost:3001/api/images/27', 0),
(28, 'Средство для мытья посуды', 10, 'Средство для мытья посуды Fairy Сочный лимон (1.35л)', 'Dishwashing liquid', 'http://localhost:3001/api/images/28', 1),
(29, 'Таблетки для посудомоечной машины', 50, 'Таблетки для посудомоечной машины Finish Powerball Quantum All in 1 (84 шт)', 'Dishwasher tablets', 'http://localhost:3001/api/images/29', 0),
(30, 'Кондиционер для белья ВЕРНЕЛЬ', 15, 'Кондиционер для белья ВЕРНЕЛЬ Свежий бриз VERNEL концентрированный, 910 мл', 'Fabric softener', 'http://localhost:3001/api/images/30', 0),
(31, 'Стиральный порошок Persil', 20, 'Стиральный порошок Персил Premium Гигиена и чистота, 2.43 кг', 'washing powder', 'http://localhost:3001/api/images/31', 0),
(32, 'Стиральный порошок Persil', 23, 'Стиральный порошок «Персил» Color, 3 кг', 'washing powder', 'http://localhost:3001/api/images/32', 0),
(33, 'Средство для мытья посуды', 10, 'Средство для мытья посуды Fairy Сочный лимон (1.35л)', 'Dishwashing liquid', 'http://localhost:3001/api/images/33', 1),
(34, 'Таблетки для посудомоечной машины', 50, 'Таблетки для посудомоечной машины Finish Powerball Quantum All in 1 (84 шт)', 'Dishwasher tablets', 'http://localhost:3001/api/images/34', 0),
(35, 'Кондиционер для белья ВЕРНЕЛЬ', 15, 'Кондиционер для белья ВЕРНЕЛЬ Свежий бриз VERNEL концентрированный, 910 мл', 'Fabric softener', 'http://localhost:3001/api/images/35', 0),
(36, 'Стиральный порошок Persil', 20, 'Стиральный порошок Персил Premium Гигиена и чистота, 2.43 кг', 'washing powder', 'http://localhost:3001/api/images/36', 0),
(37, 'Стиральный порошок Persil', 23, 'Стиральный порошок «Персил» Color, 3 кг', 'washing powder', 'http://localhost:3001/api/images/37', 0),
(38, 'Средство для мытья посуды', 10, 'Средство для мытья посуды Fairy Сочный лимон (1.35л)', 'Dishwashing liquid', 'http://localhost:3001/api/images/38', 1),
(39, 'Таблетки для посудомоечной машины', 50, 'Таблетки для посудомоечной машины Finish Powerball Quantum All in 1 (84 шт)', 'Dishwasher tablets', 'http://localhost:3001/api/images/39', 0),
(40, 'Кондиционер для белья ВЕРНЕЛЬ', 15, 'Кондиционер для белья ВЕРНЕЛЬ Свежий бриз VERNEL концентрированный, 910 мл', 'Fabric softener', 'http://localhost:3001/api/images/40', 0),
(41, 'Стиральный порошок Persil', 20, 'Стиральный порошок Персил Premium Гигиена и чистота, 2.43 кг', 'washing powder', 'http://localhost:3001/api/images/41', 0),
(42, 'Стиральный порошок Persil', 23, 'Стиральный порошок «Персил» Color, 3 кг', 'washing powder', 'http://localhost:3001/api/images/42', 0),
(43, 'Средство для мытья посуды', 10, 'Средство для мытья посуды Fairy Сочный лимон (1.35л)', 'Dishwashing liquid', 'http://localhost:3001/api/images/43', 1),
(44, 'Таблетки для посудомоечной машины', 50, 'Таблетки для посудомоечной машины Finish Powerball Quantum All in 1 (84 шт)', 'Dishwasher tablets', 'http://localhost:3001/api/images/44', 0),
(45, 'Кондиционер для белья ВЕРНЕЛЬ', 15, 'Кондиционер для белья ВЕРНЕЛЬ Свежий бриз VERNEL концентрированный, 910 мл', 'Fabric softener', 'http://localhost:3001/api/images/45', 0),
(46, 'Стиральный порошок Persil', 20, 'Стиральный порошок Персил Premium Гигиена и чистота, 2.43 кг', 'washing powder', 'http://localhost:3001/api/images/46', 0),
(47, 'Стиральный порошок Persil', 23, 'Стиральный порошок «Персил» Color, 3 кг', 'washing powder', 'http://localhost:3001/api/images/47', 0),
(48, 'Средство для мытья посуды', 10, 'Средство для мытья посуды Fairy Сочный лимон (1.35л)', 'Dishwashing liquid', 'http://localhost:3001/api/images/48', 1),
(49, 'Таблетки для посудомоечной машины', 50, 'Таблетки для посудомоечной машины Finish Powerball Quantum All in 1 (84 шт)', 'Dishwasher tablets', 'http://localhost:3001/api/images/49', 0),
(50, 'Кондиционер для белья ВЕРНЕЛЬ', 15, 'Кондиционер для белья ВЕРНЕЛЬ Свежий бриз VERNEL концентрированный, 910 мл', 'Fabric softener', 'http://localhost:3001/api/images/50', 0);
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
