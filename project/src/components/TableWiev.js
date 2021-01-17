import React, { Component } from 'react';
import './style-project.css';

// const categories = [{
//     category: 'Food',
//     description: 'Dinner with John',
//     date: '26/12/2019',
//     money: '$13.00'
//   },
//   {
//     category: 'Clothes',
//     description: '',
//     date: '23/12/2019',
//     money: '$26.10'
//   }
// ];


class TableWiev extends Component {

    
    constructor(props) {
        super(props);
        this.state = {
          categories: props.data,
          value: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.addItem = this.addItem.bind(this);
    }
    
    // state = {
    //     categories: categories,
    //     value: ''
    //   };

    handleChange(e){
        this.setState({value: e.target.value});
    }

    addItem = () => {
        this.setState({categories: [...this.state.categories, {category: this.state.value}]});
    }
        
    render() {

        return (
        <>
        
        <div>
            <form>
                <label>
                    <input type="text" value={this.state.value} onChange={this.handleChange}></input>
                </label>
                <button type="submit" onClick={this.addItem}>Submit</button>
            </form>
        </div>

        <table className="table">
            <thead>
                <tr>
                    <th>Category</th>
                    <th>Description</th>
                    <th>Date</th>
                    <th>Money</th>
                </tr>
            </thead>
            <tbody>
                {this.state.categories.map((row, index) => {
                    return (
                        <tr>
                            <td>
                                <div className='category'>{this.state.categories[index].category}</div>
                            </td>
                            <td>
                                <div className='description'>{this.state.categories[index].description}</div>
                            </td>
                            <td>
                                <div className='date'>{this.state.categories[index].date}</div>
                            </td>
                            <td>
                                <div className='money'>{this.state.categories[index].money}</div>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
        </>
    );
    }
}

export default TableWiev;