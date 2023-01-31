import * as nodePath from 'path';
const rootFolder = nodePath. basename (nodePath. resolve () );   //Получаем имя папки проекта
const buildFolder = `./dist`;   //Папка с результатами
const srcFolder = `./src`;   //Папка с исходниками

export const path = {   //Создаем общий объект path
    build: {
        images: `${buildFolder}/img/`,
        fonts: `${buildFolder}/fonts/`,
        js: `${buildFolder}/js/`,
        libs: `${buildFolder}/libs/`,
        css: `${buildFolder}/css/`,
        html: `${buildFolder}/`,
        files: `${buildFolder}/files/`
    },
    src: {
        images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp,ico}`,
        svg: `${srcFolder}/img/**/*.svg`,
        js: `${srcFolder}/js/script.js`,
        libs: `${srcFolder}/libs/**/*.*`,
        scss: `${srcFolder}/scss/style.scss`,
        html: `${srcFolder}/*.html`,
        files: `${srcFolder}/files/**/*.*`
    },
    watch: {
        images: `${srcFolder}/img/**/*.{jpg,jpeg,png,svg,gif,ico,webp}`,
        js: `${srcFolder}/js/script.js`,
        libs: `${srcFolder}/libs/**/*.*`,
        scss: `${srcFolder}/scss/**/*.scss`,
        html: `${srcFolder}/**/*.html`,
        files: `${srcFolder}/files/**/*.*`
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    ftp: ``
}