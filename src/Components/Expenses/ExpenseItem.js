import React from "react";

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {

    // console.log(props);

    // const expenseDate = new Date(2021, 2, 28);
    // const expenseTitle = 'Car Insurance';
    // const expenseAmount = 294.67;

    // const month = props.date.toLocaleString('en-US', { month: 'long' });
    // const day = props.date.toLocaleString('en-US', { day: '2-digit' });
    // const year = props.date.getFullYear();

    // const [title, setTitle] = useState(props.title);

    // let title = props.title;

    // const clickHandler = () => {
    //     // console.log('Clicked!!!');
    //     // title = 'Updated';
    //     setTitle('Updated');
    // };

    return (
        <li /* ovaj li i ne mora da se stavi. Radice i bez njega */ > 
            <Card className='expense-item'>
                {/* <div>{ props.date.toISOString() }</div> */}
                {/* <div className='expense-item__description'>
                    <h2>{ props.title }</h2>
                    <div className='expense-item__price'>${ props.amount }</div>
                </div> */}
                {/* <div>{month}</div>
                <div>{day}</div>
                <div>{year}</div> */}
                <ExpenseDate date={props.date} />
                <div className='expense-item__description'>
                    <h2>{ props.title }</h2>
                    <div className='expense-item__price'>${ props.amount }</div>
                </div>
                {/* <button className="expense-item__price" onClick={clickHandler}>Change Title</button> */}
            </Card>
        </li>
    );
};

export default ExpenseItem;