# Реализация holy-grail-markup на БЭМ-платформе

Основано на [project-stub](https://github.com/bem/project-stub).

## Поддерживаемые браузеры

Список поддерживаемых браузеров зависит от версий библиотек [bem-core](https://ru.bem.info/libs/bem-core/current/#Поддерживаемые-браузеры) и [bem-components](https://ru.bem.info/libs/bem-components/current/#Поддерживаемые-браузеры).

**Важно:** Internet Explorer 8.0 не входит в перечень браузеров, поддерживаемых библиотеками по умолчанию. При необходимости можно [подключить поддержку IE8](https://ru.bem.info/libs/bem-components/current/#Поддержка-internet-explorer-8) в project-stub.

### Сборка проекта

```bash
npm install
enb make
```
или
```bash
npm install
gulp
```

Тут нет предпочтительного варианта: и Gulp и ENB могут собрать проект и сгенерировать финальные HTML, CSS и JavaScript. Выбор остаётся на усмотрение разработчика, какой модуль и синтаксис конфигов ему больше нравится.

Дополнительные файлы, генерируемые ENB – это кеш для переиспользования между ребилдами. Также они могут быть полезны для отладки.

### Базовые команды ENB

Все команды необходимо выполнять в терминале локально.

#### Старт сервера

```bash
./node_modules/.bin/enb server
```

Команда `npm start` также запускает `enb server`, при этом нет необходимости указывать полный путь до `node_modules`.

```bash
npm start
```

На вашем компьютере запустился сервер для разработки. Чтобы проверить это, откройте в браузере [http://localhost:8080/desktop.bundles/index/index.html](http://localhost:8080/desktop.bundles/index/index.html).

Вы можете указать другой порт, если `8080` уже занят:

```bash
npm start -- --port=8181
```

#### Остановка сервера

Комбинация клавиш `Ctrl` + `C` в активном окне терминала остановит сервер.

#### Создание блока

Можно создавать блоки с помощью команды `bem create` (либо `./node_modules/.bin/bem create`, если вы не дополнили переменную окружения `PATH`):

```bash
bem create new-block
```

По умолчанию будут использованы настройки из `.bemrc`. Подробнее об использовании `bem create` см. [в документации](https://github.com/bem-tools/bem-tools-create/blob/master/README.ru.md).

#### Создание страницы

С помощью `bem create`:

```bash
bem create desktop.bundles/page.bemjson.js
# эквивалентно
bem create -b page -l desktop.bundles -T bemjson.js
```

либо вручную:

```bash
touch desktop.bundles/page/page.bemjson.js
```

Со следующим содержанием:
```js
module.exports = {
    block: 'page',
    title: 'page',
    head: [
        { elem: 'css', url: 'page.min.css' }
    ],
    scripts: [{ elem: 'js', url: 'page.min.js' }],
    content: [
       {
           block: 'new-block',
           content: [
               'new block content'
           ]
       }
    ]
};
```
## Полезные ссылки

* [Собираем статическую страницу на БЭМ](https://ru.bem.info/platform/tutorials/quick-start-static/)
* [Создаём свой проект на БЭМ](https://ru.bem.info/platform/tutorials/start-with-project-stub/)
* [Справочное руководство по BEMJSON](https://ru.bem.info/platform/bemjson/)
* [Руководство пользователя по BEMHTML](https://ru.bem.info/platform/bem-xjst/)
* [Пошаговое руководство по i-bem.js](https://ru.bem.info/platform/tutorials/i-bem/)

## Примеры проектов на основе project-stub

* [Мастер-класс: вы пишете БЭМ-проект, а мы подсказываем](https://github.com/bem/do-it-yourself-workshop)
* [SSSR (Social Services Search Robot)](https://github.com/bem/sssr) — учебное приложение на полном стеке БЭМ

## Видео

* [Автоматизация БЭМ](https://www.youtube.com/watch?v=-un-YYgU6Pg)
* [Мастер-класс: разрабатываем сайт с нуля на полном стеке БЭМ-технологий](https://ru.bem.info/talks/bemup-minsk-2014/#Мастер-класс:-разрабатываем-сайт-с-нуля-на-полном-стеке-БЭМ-технологий-—-Жека-Константинов,-Дима-Белицкий-и-Слава-Аристов)
* [Мастер-класс наоборот: вы пишете БЭМ-проект, а мы подсказываем](https://ru.bem.info/talks/bemup-spb-2014/#Мастер-класс-наоборот:-вы-пишете-БЭМ-проект,-а-мы-подсказываем-—-Евгений-Константинов,-Дима-Белицкий,-Яндекс)
* [Инструменты фронтенд-разработчика](https://ru.bem.info/talks/bemup-moscow-2014/#Инструменты-фронтенд-разработчика-—-Владимир-Гриненко)
