import "./components/AppClock.js";
import "./components/AppAppsGallery.js"

const APPS = [
    {
        name: 'Notion',
        icon: 'book',
        link: 'https://www.notion.so/'
    },
    {
        name: 'Github',
        icon: 'github',
        link: 'https://github.com/'
    },
    {
        name: 'Codewars',
        icon: 'code',
        link: 'https://www.codewars.com/'
    },
    {
        name: 'Figma',
        icon: 'figma',
        link: 'https://www.figma.com/'
    },
    {
        name: 'Youtube',
        icon: 'youtube',
        link: 'https://www.figma.com/'
    },
];

document.getElementById('apps-gallery').apps = APPS;