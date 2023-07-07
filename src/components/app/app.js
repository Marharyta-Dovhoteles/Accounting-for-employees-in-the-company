import { Component } from 'react';

import AppInfo from '../app-info/AppInfo';
import SearchPanel from '../search-panel/SearchPanel';
import AppFilter from '../app-filter/AppFilter';
import EmployersList from '../employers-list/EmployersList';
import EmployersAddForm from '../employers-add-form/EmployersAddForm';

import './app.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [
                {name: 'Sasha D.', salary: 1100, increase: true, id: 1},
                {name: 'Margo D.', salary: 900, increase: false, id: 2},
                {name: 'Artem R.', salary: 3000, increase: false, id: 3},
            ]
        }
        this.maxId = 4;
    }
    
    deleteItem = (id) => {
       this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    addItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            id: this.maxId++
        }
        this.setState(({data}) =>{
            const newArr = [...data, newItem];
            return{
                data: newArr
            }
        });
    }
    
   render() {
    return (
        <div className="app">
            <AppInfo/>

            <div className='search-panel'>
               <SearchPanel/>
               <AppFilter/>
            </div>
            <EmployersList 
            data={this.state.data}
            onDelete={this.deleteItem}/>
            <EmployersAddForm onAdd={this.addItem}/>
        </div>
    )
   };
}

export default App;