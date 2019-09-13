let count = 0;
const addOne = () => {
    count++;
    renderApp();
}

const minusOne = () => {
    count --;
    renderApp();
}

const resetHandler = () => {
    count = 0;
    renderApp();
}


const renderApp = () => {
    const template2 = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={resetHandler}>Reset</button>
        </div>
    );
    ReactDOM.render(template2, app);
};

renderApp();

// -------------------------------------------------------


class Counter extends React.Component {
    constructor(props){
        super(props)
        this.addOneHandler = this.addOneHandler.bind(this);
        this.minusOneHander = this.minusOneHander.bind(this);
        this.resetHandler = this.resetHandler.bind(this);
        this.state = {
            count: 0
        }
    }

    addOneHandler(){
        this.setState((prevState) => {
            return{
                count: prevState.count += 1
            } 
        });
    };

    minusOneHander(){
        this.setState((prev) => {
            return {
                count: prev.count -= 1
            }   
        });
    };

    resetHandler(){
        this.setState((prev) => {
            return {
                count: 0
            }
        });
    };
    render(){
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.addOneHandler}>+1</button>
                <button onClick={this.minusOneHander}>-1</button>
                <button onClick={this.resetHandler}>Reset</button>
            </div>
        )
    }
}

ReactDOM.render(<Counter/>, document.querySelector('.app'));
