
// class IndecisionApp extends React.Component {
//     constructor(props) {
//       super(props);
//       this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
//       this.handlePick = this.handlePick.bind(this);
//       this.handleAddOption = this.handleAddOption.bind(this);
//       this.handleDeleteOption = this.handleDeleteOption.bind(this);
//       this.state = {
//         options: []
//       };
//     }
//     componentDidMount(){
//       try {
//         const json = localStorage.getItem('options');
//         const options = JSON.parse(json);
//         if(options){
//           this.setState(() => ({options}))
//         }
//       } catch (e){

//       }

//     }

//     componentDidUpdate(prevProps, prevState){
//       if(prevState.options.length !== this.state.options.length){
//         const json = JSON.stringify(this.state.options);
//         localStorage.setItem('options', json);

//       }
        
//     }

//     componentWillUnmount(){
//         console.log('ComponentWillUnmount');
//     }

//     handleDeleteOptions() {
//       this.setState(() => ({ options: [] }));
//     }
//     handleDeleteOption(optionToRemove) {
//       this.setState((prevState) => ({
//         options: prevState.options.filter((option) => optionToRemove !== option)
//       }));
//     }
//     handlePick() {
//       const randomNum = Math.floor(Math.random() * this.state.options.length);
//       const option = this.state.options[randomNum];
//       alert(option);
//     }
//     handleAddOption(option) {
//       if (!option) {
//         return 'Enter valid value to add item';
//       } else if (this.state.options.indexOf(option) > -1) {
//         return 'This option already exists';
//       }
  
//       this.setState((prevState) => ({
//         options: prevState.options.concat(option)
//       }));
//     }
//     render() {
//       const subtitle = 'Put your life in the hands of a computer';
  
//       return (
//         <div>
//           <Header subtitle={subtitle} />
//           <Action
//             hasOptions={this.state.options.length > 0}
//             handlePick={this.handlePick}
//           />
//           <Options
//             options={this.state.options}
//             handleDeleteOptions={this.handleDeleteOptions}
//             handleDeleteOption={this.handleDeleteOption}
//           />
//           <AddOption
//             handleAddOption={this.handleAddOption}
//           />
//         </div>
//       );
//     }
//   }
  
//   const Header = (props) => {
//     return (
//       <div>
//         <h1>{props.title}</h1>
//         {props.subtitle && <h2>{props.subtitle}</h2>}
//       </div>
//     );
//   };
  
//   Header.defaultProps = {
//     title: 'Indecision'
//   };
  
//   const Action = (props) => {
//     return (
//       <div>
//         <button
//           onClick={props.handlePick}
//           disabled={!props.hasOptions}
//         >
//           What should I do?
//         </button>
//       </div>
//     );
//   };
  
//   const Options = (props) => {
//     return (
//       <div>
//         <button onClick={props.handleDeleteOptions}>Remove All</button>
//         {props.options.length === 0 && <p>Please add an option to get started!</p>}
//         {
//           props.options.map((option) => (
//             <Option
//               key={option}
//               optionText={option}
//               handleDeleteOption={props.handleDeleteOption}
//             />
//           ))
//         }
//       </div>
//     );
//   };
  
//   const Option = (props) => {
//     return (
//       <div>
//         {props.optionText}
//         <button
//           onClick={(e) => {
//             props.handleDeleteOption(props.optionText);
//           }}
//         >
//           remove
//         </button>
//       </div>
//     );
//   };
  
//   class AddOption extends React.Component {
//     constructor(props) {
//       super(props);
//       this.handleAddOption = this.handleAddOption.bind(this);
//       this.state = {
//         error: undefined
//       };
//     }
//     handleAddOption(e) {
//       e.preventDefault();
  
//       const option = e.target.elements.option.value.trim();
//       e.target.elements.option.value = ''
//       const error = this.props.handleAddOption(option);
  
//       this.setState(() => ({ error }));
//     }
//     render() {
//       return (
//         <div>
//           {this.state.error && <p>{this.state.error}</p>}
//           <form onSubmit={this.handleAddOption}>
//             <input type="text" name="option" />
//             <button>Add Option</button>
//           </form>
//         </div>
//       );
//     }
//   }
  

//   ReactDOM.render(<IndecisionApp />, document.querySelector('.app'));



  // ==================================================================================
  
class Anime extends React.Component{
  constructor(props){
    super(props);
    this.randomAnimeHandler = this.randomAnimeHandler.bind(this);
    this.removeAllHandler = this.removeAllHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
    this.state = {
      options: ['Dr Stone', 'Demon Slayer', 'Are You Lost?']
    }
  }

  componentDidMount(){
      try {
        const json = localStorage.getItem('options');
        const options = JSON.parse(json);
        if(options){
          this.setState(() => ({options}))
        }
      } catch (e){

      }     
    }



  componentDidUpdate(prevProps, prevState){
    if(prevState.options.length !== this.state.options.length){
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }

  randomAnimeHandler(){
    let optionLength = Math.floor(Math.random() * this.state.options.length) ;
    console.log(optionLength)
    alert(this.state.options[optionLength]);
  }

  removeAllHandler(){
    this.setState(() => {
      return {
        options: []
      }
    })
  }

  submitHandler(option){
    this.setState((prev) => {
      return {
        options: prev.options.concat(option)
      }
    })
  }


  render(){
    return(
      <div>
        <Header />
        <Options 
        randomAnimeHandler={this.randomAnimeHandler} 
        removeAllHandler={this.removeAllHandler}
        options={this.state.options}
        />
        <AddOptions submitHandler={this.submitHandler} options={this.state.options}/>
      </div>
    )
  }
}

const Header = () => {
  const title = 'Top Anime lists'
  const subtitle = 'Some of the best'
  return(
    <div>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </div>
  )
}

const Options = (props) => {
  return(
    <div>
      <button onClick={props.randomAnimeHandler}>Generate top animes</button>
      <OptionsList removeAllHandler={props.removeAllHandler} options={props.options}/>
    </div>
  )
}

const OptionsList = (props) => {
  return(
    <div>
      <button onClick={props.removeAllHandler}>Remove All</button>
      {props.options.map(option => <p key={option}>{option}</p>)}
    </div>
  )
}

class AddOptions extends React.Component{
  constructor(props){
    super(props);
    this.submitFormHandler = this.submitFormHandler.bind(this);
  }
  submitFormHandler(e){
    e.preventDefault();
    const value = e.target.elements.options.value.trim();
    e.target.elements.options.value = ''
    this.props.submitHandler(value);
  }
  render(){
    return(
      <div>
        <form onSubmit={this.submitFormHandler}>
          <input type='text' placeholder='Add Anime' name='options'></input>
          <button>Add Option</button>      
        </form>
      </div>
    )    
  }
}



ReactDOM.render(<Anime /> , document.querySelector('.app'));




