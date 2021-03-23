import { Button, Card } from 'react-bootstrap'
import { useState } from 'react'
import CardDetail from "./CardDetail";
import axios from 'axios'


export default ({ starship, fetchAll }) => {
  const [open, setOpen] = useState(false)

  const deleteStarship = async () => {
    try {
      const res = await axios.delete(`http://localhost:3000/starships/${starship.id}`)
      if (res.status !== 200) throw new Error('Delete Failed')
      fetchAll()
    }
    catch (e) {
      alert(e)
    }
  }

  return (
    <Card className={"Card"}>
      <Card.Img style={{ height: 150, objectFit: 'cover' }} variant="top" src={starship.image} />
      <Card.Body>
        <Card.Title>{starship.name}</Card.Title>
        <Card.Text style={{ minHeight: 50 }}>
          Manufacturer: {starship.manufacturer}
        </Card.Text>
        <div>
          <Button variant="primary" onClick={() => setOpen(true)}>Details</Button>
          <Button variant="danger" onClick={deleteStarship}>Delete</Button>
        </div>
      </Card.Body>
      <CardDetail starship={starship} show={open} handleClose={() => setOpen(false)} />
    </Card>
  )
}