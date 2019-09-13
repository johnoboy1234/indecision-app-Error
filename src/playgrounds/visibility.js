class Visibility extends React.Component{
    constructor(props){
        super(props);
        this.toggleHandler = this.toggleHandler.bind(this);
        this.state = {
            visibility: true
        }
    }

    toggleHandler(){
        this.setState((prev) => {
            return {
                visibility: !prev.visibility
            }
        });
        console.log(this.state.visibility);
    };

    render(){
        return(
            <div>
                {this.state.visibility && <h1>Visible</h1>}
                <button onClick={this.toggleHandler}>
                    {this.state.visibility ? 'Hide Details' : 'Show Details'}
                </button>
            </div>
        )
    }
}


ReactDOM.render(<Visibility />, document.querySelector('.app'));