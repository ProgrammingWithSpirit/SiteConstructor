import image from './assets/image.jpg';
import {TitleBlock, ImageBlock, ColumnsBlock, TextBlock} from './classes/block';

const text = 'This app allows dynamically construct UI. Use sidebar to add elements with styles to the page.';

export const model = [
    new TitleBlock('Site Constructor in JavaScript', {
        tag: 'h2',
        styles: {
            background: 'linear-gradient(to right, #bcd8c1, #e3d985)',
            color: '422040',
            padding: '1rem',
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
            height: '300px'
        },
        alt: 'image'
    }),
    new ColumnsBlock([
        'App in vanilla JavaScript without using any libraries',
        'Using SOLID principles and OOP in JavaScript',
        'JavaScript - easy, fun. Learning how to create UI pages'
        ], {
            styles: {
                background: 'linear-gradient(to bottom, #e57a44, #422040)',
                'font-weight': 'bold',
                padding: '2rem',
                color: '#fff'
            }
        }),
    new TextBlock(text, {
        styles: {
            background: 'linear-gradient(to left, #d6dbb2, #e3d985)',
            padding: '1rem',
            'font-weight': 'bold'
        }
    })
]