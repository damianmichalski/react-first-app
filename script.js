var movies = [
    {
        id: 1,
        title: 'Harry Potter',
        desc: 'film o czarodzieju',
        image: 'https://www.cosmopolitan.pl/u/ic/W1/u/a/17/07/harry-potter-powraca-dostaniemy-az-dwie-nowe-ksiazki_5970c9e7.jpeg'
    },
    {
        id: 2,
        title: 'Król Lew',
        desc: 'Film o królu sawanny',
        image: 'http://cdn.galleries.smcloud.net/t/photos/gf-4xtK-Xhd9-g2pY_krol-lew.jpg'
    },
    {
        id: 3,
        title: 'Matrix',
        desc: 'Matrix – australijsko-amerykański film science fiction, pierwszy z trylogii filmowej o tej samej nazwie, napisany i wyreżyserowany przez Larry’ego i Andy’ego Wachowskich.',
        image: 'https://liczysiewynik.pl/wp-content/uploads/2015/05/matrix-1050x700.jpg'
    },
    {
        id: 4,
        title: 'Lord of the rings',
        desc: 'Władca Pierścieni: Drużyna Pierścienia – pierwszy film z trylogii Władca Pierścieni w reżyserii Petera Jacksona. Światowa premiera filmu odbyła się 19 grudnia 2001 r. Film jest adaptacją pierwszej części powieści J.R.R. Tolkiena Władca Pierścieni zatytułowanej Drużyna Pierścienia.',
        image: 'https://www.whats-on-netflix.com/wp-content/uploads/2018/07/is-the-lord-of-the-rings-trilogy-on-netflix-2018.jpg'
    }
];
var moviesElements = movies.map(function(movie) {
    return React.createElement('li', {key: movie.id},
        React.createElement('h2', {}, movie.title),
        React.createElement('p', {}, movie.desc),
        React.createElement('img', {src: movie.image})
    );
});

var element =
    React.createElement('div', {},
        React.createElement('h1', {}, 'Lista filmów'),
        React.createElement('ul', {}, moviesElements)
    );
ReactDOM.render(element, document.getElementById('app'));