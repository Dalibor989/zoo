import logo from './logo.svg';
import './App.css';

function App() {
  return <AnimalList />;
}

function AnimalList() {
  const animals = [
    {species: 'Sloth', name: 'Sid', dateOfBirth: new Date()},
    {species: 'Penguin', name: 'Ricko', dateOfBirth: new Date()},
    {species: 'Lion', name: 'Simba', dateOfBirth: new Date()},
    {species: 'Elephant', name: 'Dumbo', dateOfBirth: new Date()},
    {species: 'Giraffe', name: 'Melvin', dateOfBirth: new Date()},
  ];

  return (    
    <div>
      <h1>Animals</h1>
      <table>
        <tr>
          <th>
            Species
          </th>
          <th>
            Name
          </th>
          <th>
            Date of birth
          </th>
        </tr>
        {animals.map((animal, index) => (
          <tr>
            <td key={index}>{animal.species}</td>
            <td key={index}>{animal.name}</td>
            <td key={index}>{animal.dateOfBirth.toLocaleDateString()}</td>
          </tr>
        ))}
        
      </table>
    </div>
  )
}

export default App;
