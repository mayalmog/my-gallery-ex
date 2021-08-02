'use strict'

var gProjs = [];


function _createProj(id, name, title, desc, url, publishedAt, labels) {
    return {
        id,
        name,
        title,
        desc,
        url,
        publishedAt,
        labels
    }
}

function createProjs() {
    gProjs.push(_createProj('minesweeper', 'MineSweeper', 'The popular game with extra features', 'The popular interactive game of mine finding, built using html, css and vanilla JS.', 'https://mayalmog.github.io/MineSweeper/', 'July 2021', ['Matrixes', 'MVC']));
    gProjs.push(_createProj('bookshop', 'Bookshop', 'Bookshop management site', 'A website that enables any bookshop owner to manage and display inventory, and receive costumer reviews.', 'https://mayalmog.github.io/Bookshop-demo/', 'July 2021', ['localStorage', 'Pagination']));
}

function getProjs() {
    return gProjs;
}
