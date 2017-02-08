module.exports = {
    block: 'page',
    title: 'Holy Grail Markup',
    favicon: '/favicon.ico',
    head: [
        { elem: 'meta', attrs: { name: 'description', content: 'Done with BEM Platform' } },
        { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
        { elem: 'css', url: 'index.min.css' }
    ],
    scripts: [{ elem: 'js', url: 'index.min.js' }],
    mods: { theme: 'islands' },
    content: [
        {
            block: 'header',
            content: [
                {
                    block: 'heading',
                    mods: { level: 1 },
                    mix: { block: 'header', elem: 'title' },
                    content: 'CompanyName'
                },
                {
                    block: 'form',
                    mix: [
                        { block: 'header', elem: 'search' },
                        { block: 'search' }
                    ],
                    content: [
                        {
                            elem: 'label',
                            mix: { block: 'header', elem: 'label' },
                            content: [
                                'Type to search: ',
                                {
                                    block: 'input'
                                }
                            ]
                        },
                        {
                            block: 'button',
                            mods: { type: 'submit' },
                            content: 'Search'
                        }
                    ]
                }
            ]
        },
        {
            block: 'main',
            content: [
                {
                    block: 'sidebar',
                    content: {
                        block: 'nav',
                        content: [
                            {
                                url: 'https://aleshaoleg.github.io/holy-grail-markup/oocss',
                                content: 'OOCSS'
                            },
                            {
                                url: 'https://aleshaoleg.github.io/holy-grail-markup/smacss',
                                content: 'SMACSS'
                            },
                            {
                                url: 'https://aleshaoleg.github.io/holy-grail-markup/atomic',
                                content: 'Atomic'
                            },
                            {
                                url: 'https://aleshaoleg.github.io/holy-grail-markup/organic',
                                content: 'Organic'
                            },
                            {
                                url: 'https://aleshaoleg.github.io/holy-grail-markup/bem-css/',
                                content: 'BEM CSS'
                            },
                            {
                                url: 'https://aleshaoleg.github.io/holy-grail-markup/bem-flexboxgrid/',
                                content: 'BEM Flexbox Grid'
                            },
                            {
                                url: 'https://aleshaoleg.github.io/holy-grail-markup/bem-platform/',
                                content: 'BEM Platform',
                                isCurrent: true
                            },
                            {
                                url: 'https://aleshaoleg.github.io/holy-grail-markup/css-modules/',
                                content: 'CSS-modules'
                            },
                            {
                                url: 'https://aleshaoleg.github.io/holy-grail-markup/raw',
                                content: 'Raw',
                                isSeparate: true
                            }
                        ].map(function(item) {
                            return {
                                elem: 'item',
                                elemMods: { separate: item.isSeparate },
                                content: {
                                    block: 'link',
                                    mix: {
                                        block: 'nav',
                                        elem: 'link',
                                        elemMods: { current: item.isCurrent }
                                    },
                                    url: item.url,
                                    content: item.content
                                }
                            };
                        })
                    }
                },
                {
                    block: 'content',
                    content: [
                        {
                            block: 'heading',
                            mods: { level: 2 },
                            mix:  { block: 'content', elem: 'title' },
                            content: 'About Company'
                        },
                        {
                            elem: 'article',
                            mix: { block: 'text' },
                            content: [
                                {
                                    tag: 'img',
                                    attrs: { src: 'imgpsh_fullsize.jpg', alt: 'Image' }
                                },
                                {
                                    tag: 'p',
                                    content: [
                                        'Lorem ipsum dolor sit amet,',
                                        'consectetur adipiscing elit. Sed erat diam, posuere rhoncus',
                                        'justo tempus, ornare vehicula lorem. Donec egestas et nisl',
                                        'non dapibus. Morbi congue, purus ac lobortis feugiat, nunc',
                                        'nulla facilisis lacus, ac laoreet urna dui a lorem. Quisque',
                                        'ligula nisi, tristique in ligula vitae, dapibus tempus lectus.'
                                    ]
                                },
                                {
                                    tag: 'p',
                                    content: [
                                        'Cras eget ipsum mattis, pharetra',
                                        'nulla vitae, laoreet dui.'
                                    ]
                                },
                                {
                                    tag: 'p',
                                    content: [
                                        'Duis in erat a lectus consequat',
                                        'auctor quis vel ligula. Quisque rhoncus sapien sit amet augue',
                                        'mollis convallis. Curabitur pharetra nunc a massa dictum, eu',
                                        'iaculis dolor egestas. Suspendisse potenti. Nam id lorem risus.',
                                        'Suspendisse potenti.'
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    block: 'news',
                    content: [
                        {
                            block: 'heading',
                            mods: { level: 3 },
                            mix: { block: 'news', elem: 'title' },
                            content: 'News'
                        },
                        [
                            {
                                date: '01.01.16',
                                text: 'Vestibulum semper convallis mauris vitae lobortis. Pellentesque lobortis sem a cursus varius. Phasellus dignissim diam eget lectus cursus finibus.'
                            },
                            {
                                date: '03.01.16',
                                text: 'Nam placerat tellus vitae rhoncus ornare. Suspendisse scelerisque lorem id turpis efficitur facilisis. Vivamus enim magna, hendrerit id rutrum at, euismod ac orci.',
                                hasCut: true
                            },
                            {
                                date: '08.01.16',
                                text: 'Maecenas sed orci turpis. Donec pretium lorem in purus porta hendrerit. Praesent at placerat lacus, ac ultrices ligula. Cras at consequat velit. Vivamus dapibus metus at nisl imperdiet imperdiet.',
                                hasCut: true
                            },
                        ].map(function(article, idx) {
                            return {
                                elem: 'article',
                                content: [
                                    {
                                        elem: 'date',
                                        content: article.date
                                    },
                                    {
                                        elem: 'text',
                                        content: article.text
                                    },
                                    article.hasCut && [
                                        ' ',
                                        {
                                            block: 'link',
                                            mix: {
                                                block: 'news',
                                                elem: 'link'
                                            },
                                            url: '#' + idx,
                                            content: 'Read more...'
                                        }
                                    ]
                                ]
                            };
                        })
                    ]
                }
            ]
        },
        {
            block: 'footer',
            content: [
                {
                    elem: 'text',
                    content: '© ' + new Date().getFullYear() + ' CompanyName, Inc. All Rights Reserved.'
                },
                {
                    elem: 'text',
                    content: [
                        'Site support: ',
                        {
                            block: 'link',
                            mix: { block: 'footer', elem: 'link' },
                            url: 'mailto:design@megacorp.kk',
                            content: 'design@megacorp.kk'
                        }
                    ]
                }
            ]
        }
    ]
};
