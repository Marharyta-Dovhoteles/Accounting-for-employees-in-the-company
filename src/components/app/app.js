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
                {name: 'Sasha D.', salary: 1100, increase: true, rise: true, id: 1},
                {name: 'Margo D.', salary: 900, increase: false, rise: false, id: 2},
                {name: 'Artem R.', salary: 3000, increase: false, rise: false, id: 3},
            ],
            term: '',
            filter: 'all'
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
            rise: false,
            id: this.maxId++
        }
        this.setState(({data}) =>{
            const newArr = [...data, newItem];
            return{
                data: newArr
            }
        });
    }
    
    onToggleProp = (id, prop) => {
          this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item;
            })
          }))
    }
    
    searchEmp = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }

    onUpdateSearch = (term) => {
        this.setState({term}); 
    }
    
    filterPost = (items, filter) => {
        switch (filter) {
            case 'rise':
                return items.filter(item => item.rise);
            case 'moreThen1000':
                return items.filter(item => item.salary > 1000);
            default:
                return items
        }
    }


    onFilterSelect = (filter) => {
         this.setState({filter});
    }

   render() {
    const {data, term, filter} = this.state;
    const employees = this.state.data.length;
    const increased = this.state.data.filter(item => item.increase).length;
    const visibleData = this.filterPost(this.searchEmp(data, term), filter);

    return (
        <div className="app">
            <AppInfo employees={employees} increased={increased}/>

            <div className='search-panel'>
               <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
               <AppFilter filter={filter} onFilterSelect={this.onFilterSelect}/>
            </div>
            <EmployersList 
            data={visibleData}
            onDelete={this.deleteItem}
            onToggleProp={this.onToggleProp}
            />
            <EmployersAddForm onAdd={this.addItem}/>
        </div>
    )
   };
}

export default App;