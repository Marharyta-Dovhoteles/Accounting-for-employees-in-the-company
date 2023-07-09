import './AppFilter.css';

const AppFilter = (props) => {
    const buttinsData = [
        {name: 'all', label: 'Все сотрудники'},
        {name: 'rise', label: 'На повышение'},
        {name: 'moreThen1000', label: 'З/П больше 1000$'}
    ];

    const buttons = buttinsData.map(({name, label}) => {
      const active = props.filter === name;
      const clazz = active ? 'btn-light' : 'btn-outline-light';
      return (
         <button type='button'
                  className={`btn ${clazz}`}
                  key={name}
                  onClick={() => props.onFilterSelect(name)}>
                  {label}
         </button>
      )
    })

    return(
        <div className="btn-group">
         {buttons}
        </div>
    )
}

export default AppFilter;