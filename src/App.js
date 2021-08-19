import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

function App() {
  return <AnimalList />;
}

function AnimalList() {
  
  const sectors = ['Canine', 'Feline', 'Avian', 'Herbivore']

  const [newAnimal, setNewAnimal] = useState([
    {
      species: '', 
      name: '', 
      dateOfBirth: '',
      sector: sectors[0]
    }
  ])

  const [animals, setAnimals] = useState([
    {species: 'Sloth', name: 'Sid', dateOfBirth: new Date()},
    {species: 'Penguin', name: 'Ricko', dateOfBirth: new Date()},
    {species: 'Lion', name: 'Simba', dateOfBirth: ''},
    {species: 'Elephant', name: 'Dumbo', dateOfBirth: new Date()},
    {species: 'Giraffe', name: 'Melvin', dateOfBirth: ''},
  ])

  const remove = (animalIndex) => {
    setAnimals(animals.filter((animals, index) => index !== animalIndex))
  }

  const moveToTop = (animalIndex) => {
    setAnimals([animals[animalIndex], ...animals.slice(0, animalIndex), ...animals.slice(animalIndex + 1)])
  }

  const handleSpeciesChange = (e) => {
    setNewAnimal({
      ...newAnimal,
      species: e.target.value
    })
  }

  const handleNameChange = (e) => {
    setNewAnimal({
      ...newAnimal,
      name: e.target.value
    })
  }

  const handleDateOfBirthChange = (e) => {
    setNewAnimal({
      ...newAnimal,
      dateOfBirth: new Date(e.target.value)
    })
  }

  const handleSectorChange = (e) => {
    setNewAnimal({
      ...newAnimal,
      sector: e.target.value
    })
  }

  const addAnimal = (e) => {
    e.preventDefault();

    setAnimals([...animals, newAnimal])
    setNewAnimal({
      species: '',
      name: '',
      dateOfBirth: '',
    })
  }

  return (    
    <div>
      <h1>Animals</h1>
      
      <div>
      <form onSubmit={addAnimal}>
        <input type="text" placeholder="Species" value={newAnimal.species} onChange={handleSpeciesChange}/><br />
        <input type="text" placeholder="Name" value={newAnimal.name} onChange={handleNameChange}/><br />
        <input type="text" placeholder="Date of birth" value={newAnimal.dateOfBirth} onChange={handleDateOfBirthChange}/><br />
        <select name="sector" onChange={handleSectorChange} value={newAnimal.sector}>
          {sectors.map((sector, index) => <option  key={index} value={sector}>{sector}</option>)}
        </select><br />
        <button>Add Animal</button><br />
      </form>
      </div>
      
      <div>
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
          <th>
            Sector
          </th>
        </tr>
        {animals.map((animal, index) => (
          <tr>
            <td key={index}>{animal.species}</td>
            <td key={index}>{animal.name}</td>
            {animal.dateOfBirth ? <td key={index}>{animal.dateOfBirth.toLocaleDateString()}</td> : <td>Unknown</td>}
            <td key={index}>{animal.sector ? animal.sector : 'Nepoznat'}</td>
            <button onClick={() => remove(index)}>Remove</button>
            <button onClick={() => moveToTop(index)}>Move to the top</button>
          </tr>
        ))}
      </table>
      </div>
    </div>
  )
}

export default App;
