import TableWiev from './components/TableWiev';

const categories = [{
  category: 'Food',
  description: 'Dinner with John',
  date: '26/12/2019',
  money: '$13.00'
},
{
  category: 'Clothes',
  description: '',
  date: '23/12/2019',
  money: '$26.10'
}
];

function App() {
  return (
    <div >
      <TableWiev data={categories}/>
    </div>
  );
}

export default App;
