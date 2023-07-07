import { computeHeadingLevel } from "@testing-library/react";
import EmployersListItem from "../employers-list-item/EmployersListItem"
import './EmployersList.css';

const EmployersList = ({data, onDelete}) => {

    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <EmployersListItem key={id} 
            {...itemProps}
            onDelete={() => onDelete(id)}/>
        )
    })

    return (
        <ul className="app-list list-grouo">
           {elements}
        </ul>
    )
}

export default EmployersList