import image from './assets/image.png'
import {TextBlock, TitleBlock, ColumnsBlock, ImageBlock} from './classes/blocks'

const text = `
    Подробный обзор на фронтенд разработчика: <a href="https://www.youtube.com/watch?v=yO3Ep_bQYgw" target="_blank">Начинающий фронтендер</a>. Каждая квалификация в программировании по своему важна !!!
`

export const model = [
    new TitleBlock('Фронтенд и обучение для новичков', {
        tag: 'h2',
        styles: {
            background: 'linear-gradient(to right, #757685, #2C3785)',
            color: '#fff',
            padding: '1.5rem',
            'text-align': 'center'
        }
    }),
        new ImageBlock(image, {
            styles: {
                padding: '2rem 0',
                display: 'flex',
                'justify-content': 'center'
            },
            imageStyles: {
                width: '500px',
                height: 'auto'
            },
            alt: 'Картинка Фронтенд'
        }),
        new ColumnsBlock([
            'Фронтенд разработчик-занимается внешней разработкой',
            'Бэкенд разработчик-занимается функционалом,системой',
            'Фулстаковый разработчик-занимается и внешней и внутренней разработкой'
        ], {
            styles:{
                background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
                padding: '2rem',
                color: '#fff',
                'font-weight': 'bold'
            }
    }),
    new TextBlock(text, {
        styles: {
            background: 'linear-gradient(to left, #737D85,  #C1772D)', 
        padding: '1rem',
        'font-weight': 'bold'
        }
    })
]
