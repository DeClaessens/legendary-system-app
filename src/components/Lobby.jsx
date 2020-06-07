import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Lobby = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const fetchRooms = async () => {
      const {data} = await axios.get('http://localhost:3000/rooms')

      setRooms(data)
    }

    fetchRooms()

  }, [])
  return (
    <div>
      <button>create lobby</button>

      <ul>
        {rooms.map(room => (<li>{room}</li>))}
      </ul>
    </div>
  )
}

export default Lobby;