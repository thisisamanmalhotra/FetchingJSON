const container = document.querySelector('.games');
const searchForm = document.querySelector('.search');
const container2 = document.querySelector('.cate');

const renderposts = async(term)=> {
    console.log(term);
    let uri='http://localhost:3001/games?_sort=name&order=desc';
    if (term) {
        uri += `&q=${term}`
            }
    const res = await fetch(uri);
    const games = await res.json();
    console.log(games);

    let template = '';
    games.forEach(games => {
        template += `
        <table>
        <tr>
        <td>
        <div class="game item">
        <div class="ui small image">
            <img src="${games.icon}" alt="game-icon">
        </div>
        </td>
        <td>
        <div class="content">
            <div class="header"><b class="name">${games.name}</b></div>
            <div class="description">${games.description}
            </div>
            <div class="extra">
                <div class="play ui right floated secondary button inverted">
                    Play
                    <i class="right chevron icon"></i>
                </div>

            </div>
        </div>
        </td>
    </div>`
    });
    container2.innerHTML = template;
    let uri2='http://localhost:3001/categories';
    const res2 = await fetch(uri2);
    const categories = await res2.json();
    console.log(categories);
    let template2 = '';
    categories.forEach(categories => {
        template2 += `
                    <div class="category item">
                        <div class="content">
                            <div class="header">${categories.name}</div>
                        </div>
                    </div>


        `
    })
    container.innerHTML = template;
    container2.innerHTML = template2;
}















//search box 
searchForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    renderPosts(searchForm.term.value.trim());
})
window.addEventListener('DOMContentLoaded', ()=>renderposts());
