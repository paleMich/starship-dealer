import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import './App.css';
import Card from "./Card";
import ShipForm from "./ShipForm";
axios.defaults.headers.post['Content-Type'] = 'application/json';


function App() {
  const [starships, setStarships] = useState([])
  const [showFormModal, setShowFormModal] = useState(false)
  const [newStarship, setNewStarship] = useState({})

  const getAllStarShips = async () => {
    const { data: starships } = await axios.get('http://localhost:3000/starships')
    setStarships(starships)
  }

  useEffect(() => {

    getAllStarShips()
  }, [])

  const checkForm = () => newStarship.name && newStarship.manufacturer && newStarship.image && newStarship.crew >= 0 && newStarship.passengers >= 0 && newStarship.cargo_capacity >= 0

  const onInputChange = (e) => {
    setNewStarship(starship => ({ ...starship, [e.target.name]: e.target.value }))
  }

  const closeForm = () => {
    setNewStarship({})
    setShowFormModal(false)
  }

  const addNewStarShip = async e => {
    e.preventDefault()
    if (checkForm()) {
      await axios.post('http://localhost:3000/starships', newStarship)
      await getAllStarShips()
    } else {
      throw new Error('Form not Valid')
    }
  }


  return (
    <div className={"App"}>
      <div className={"PostsContainer"}>
        {starships.map(starship => (
          <Card
            fetchAll={getAllStarShips}
            starship={starship}
            key={starship.id}
          />
        ))}
      </div>
      <ShipForm
        starship={newStarship}
        show={showFormModal}
        handleClose={closeForm}
        onInputChange={onInputChange}
        addPost={addNewStarShip}
      />
      <Button
        className={'addButton'}
        size={'lg'}
        variant={'primary'}
        onClick={() => setShowFormModal(true)}
      > +
      </Button>
    </div>
  );
}

export default App;