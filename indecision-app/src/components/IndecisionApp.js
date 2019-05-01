import React from 'react';
import Header from './Header';
import Options from './Options';
import Action from './Action';
import AddOption from './AddOption';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    };

    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        this.setState(() => ({ selectedOption: this.state.options[randomNum] }));
    };
  
    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }));
    };
  
    handleDeleteOption = (option) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((element) => element !== option)
        }));
    };
  
    handleAddOption = (option) => {
        if (!option) {
            return 'Enter valid value to add item.';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'The item already exists.';
        }
        this.setState( (prevState) => ({ options: prevState.options.concat(option) }));
    };

    handleClearSelectedOption = () => {
        this.setState( () => ({ selectedOption: undefined }));
    };


  componentDidMount() {
      try {
          const options = JSON.parse(localStorage.getItem('options'));

          if (options) {
              this.setState(() => ({ options }));
          }
      }
      catch(e) {
          // Do nothing at all
      }
  }

  componentDidUpdate (prevProps, prevState){
      if (prevState.options.length !== this.state.options.length) {
          localStorage.setItem('options', JSON.stringify(this.state.options));
      }

  }

  render() {
      const subtitle = 'Put your life in the hands of a computer';
      return (
          <div>
              <Header subtitle={subtitle}/>
              <div className='container'>
                <Action 
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <div className='widget'>
                    <Options 
                        options={this.state.options}
                        handleDeleteOptions={this.handleDeleteOptions}
                        handleDeleteOption={this.handleDeleteOption}
                    />
                    <AddOption handleAddOption={this.handleAddOption}/>
                </div>
              </div>
              <OptionModal selectedOption={this.state.selectedOption} handleClearSelectedOption={this.handleClearSelectedOption}/>
          </div>
      );
  }
}

Header.defaultProps = {
  title: 'Indecision'
};