import Chart from '../Chart/Chart'


//ExpenseChar component is going to receive the expense
//and pass the data to Chart(bottom component)
const ExpenseChart = props =>{
const chartDataPoint =[
    {label:'Jan',value:0},
    {label:'Feb',value:0},
    {label:'Mar',value:0},
    {label:'Apr',value:0},
    {label:'May',value:0},
    {label:'Jun',value:0},
    {label:'Jul',value:0},
    {label:'Aug',value:0},
    {label:'Sep',value:0},
    {label:'Oct',value:0},
    {label:'Nov',value:0},
    {label:'Dec',value:0},
];

for(const expense of props.expenses){
    const expenseMonth = expense.date.getMonth()
    // start at 0 => January
    chartDataPoint[expenseMonth].value += expense.amount;
    //use array index number to target specific month/sum up amount
}
 

    return <Chart dataPoints={chartDataPoint}/>
    
}

export default ExpenseChart