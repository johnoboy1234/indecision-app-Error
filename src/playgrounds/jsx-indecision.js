

const apps = {
    title: 'Top Animes',
    subtitle: 'List of Animes',
    animes: []
}

const formSubmitHandler = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;

    if(option){
        apps.animes.push(option);
        e.target.elements.option.value = '';
        reRender();
    }
}

const makeDecisionHandler = () => {
    const randomNum = Math.floor(Math.random() * apps.animes.length);
    const option = apps.animes[randomNum];
    alert(option);
}

const removeAllhandler = () =>{
    apps.animes = [];
    reRender();
}
const app = document.querySelector(".app");

const reRender = () => {
    const template = (
        <div>
            <h1>{apps.title}</h1>
            {apps.subtitle && <p>{apps.subtitle}</p>}
            <p>{apps.animes.length > 0 ? 'Here Are The Lists' : 'Unkown'}</p>
            <button disabled={apps.animes.length === 0} onClick={makeDecisionHandler}>What should i do?</button>
            <button onClick={removeAllhandler}>Remove All</button>
            <ul>
                {apps.animes.map((arr) => <li key={arr}>{arr}</li>)}
            </ul>
            <form onSubmit={formSubmitHandler}>
                <input type="text" name="option"/>
                <button>Add Options</button>
            </form>
        </div>    
    )
    ReactDOM.render(template, app);
}

reRender();