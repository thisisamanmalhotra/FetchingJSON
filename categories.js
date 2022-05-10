const container = document.querySelector('.cate');


const renderposts = async()=> {
    let uri='http://localhost:3001/categories';
    const res = await fetch(uri);
    const categories = await res.json();
    console.log(categories);
    let template = '';
    categories.forEach(categories => {
        template += `
                    <div class="category item">
                        <div class="content">
                            <div class="header">${categories.name}</div>
                        </div>
                    </div>


        `
    })
    container.innerHTML = template;
}
window.addEventListener('DOMContentLoaded', ()=>renderposts());
