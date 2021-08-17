import logo from './logo.svg';
import './App.css';

function App() {
  return <AnimalList />;
}

function AnimalList() {
  const animals = [
    {species: 'Sloth', name: 'Sid', dateOfBirth: new Date()},
    {species: 'Penguin', name: 'Ricko', dateOfBirth: new Date()},
    {species: 'Lion', name: 'Simba', dateOfBirth: ''},
    {species: 'Elephant', name: 'Dumbo', dateOfBirth: new Date()},
    {species: 'Giraffe', name: 'Melvin', dateOfBirth: ''},
  ];

  return (    
    <div>
      <h1>Animals</h1>
      <table>
        <tr>
          <th>
            Name
          </th>
          <th>
            Species
          </th>
          <th>
            Date of birth
          </th>
        </tr>
        {animals.map((animal, index) => (
          <tr>
            {animal.species && <td key={index}>{animal.species}</td>}
            <td key={index}>{animal.name}</td>
            {animal.dateOfBirth ? <td key={index}>{animal.dateOfBirth.toLocaleDateString()}</td> : <td>Unknown</td>}
          </tr>
        ))}
        
      </table>
    </div>
  )
}

export default App;
