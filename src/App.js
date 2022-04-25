import { type } from '@testing-library/user-event/dist/type';
import React, { useEffect, useState } from 'react';
import './App.css';
import ListItems from './Components/ListItems';
import ListItemsFiltered from './Components/ListItemsFiltered';

function App() {
  const [song, setSong] = useState("")
  const [artist, setArtist] = useState("")
  const [genre, setGenre] = useState("")
  const [rating, setRating] = useState("")
  const [arrayOfObjects, setArrayOfObjects] = useState([])

  // const [isRock, setIsRock] = useState(false)
  // const [isJazz, setIsJazz] = useState(false)
  // const [isPop, setIsPop] = useState(false)

  // const [hasObj, setHasObj] = useState(false)

  // const [filteredArray, setFilteredArray] = useState([])
  // const [filtered, setFiltered] = useState(false)


  const [types, setTypes] = useState({
    rock: false,
    jazz: false,
    pop: false
  })

  const [text, setText] = useState("")
  arrayOfObjects.sort((a, b) => {
    if (a.song > b.song) {
      return 1
    } else if (b.song > a.song) {
      return -1
    } else {
      return 0
    }
  })

  const handleDelete = (item) => {
    const x = arrayOfObjects.filter(obj => obj != item)
    setArrayOfObjects(x)


  }


  const submitHandler = (e) => {
    setSong("")
    setArtist("")
    setGenre(" --- ")
    setRating(" --- ")
    e.preventDefault()

    setArrayOfObjects([...arrayOfObjects, { song, artist, genre, rating }])
    // setHasObj(true)
  }


  const handleChange = (e) => {
    setTypes({ ...types, [e.target.name]: e.target.checked })
    setText(e.target.name)
    // if (types.rock) {
    //   setArrayOfObjects(arrayOfObjects.filter(item => item.genre === "rock"))
    // }

  }

  useEffect(() => {
    if (types.rock && types.jazz && types.pop) {
      console.log(arrayOfObjects.filter(item => item.genre === "rock" || item.genre === "jazz" || item.genre === "pop"))
    }// else if (
    // hier moet ik door met alle mogelijkheiden en dat is niet goed dus else if(types.rock && types.jazz) { ... } // else if(types.rock && types.pop) { ... } ... ezv 😢
    // )
  }, [types.rock, types.jazz, types.pop])

  //console.log(types)

  // console.log(arrayOfObjects)
  // if (e.target.value === "all") {
  //   setHasObj(true)
  //   setFiltered(false);

  // } else {
  //   let x = arrayOfObjects.filter(item => item.genre === e.target.value)
  //   setFiltered(true)
  //   setFilteredArray(x)
  //   setHasObj(false)
  //   console.log(x);
  // }




  // const handleDeleteFiltered = (item) => {
  //   setFilteredArray(filteredArray.filter(item => item != item))
  // }
  return (

    <div className="App">
      <h1>Winc Lil' Liedjeslijst</h1>
      <form className='marginStyle' onSubmit={(e) => submitHandler(e)}>
        <input required type="text" value={song} onChange={(e) => setSong(e.target.value)} />
        <input required type="text" value={artist} onChange={(e) => setArtist(e.target.value)} />
        <select required value={genre} onChange={(e) => setGenre(e.target.value)}>
          <option value=""> --- </option>
          <option value="rock"> Rock </option>
          <option value="jazz"> Jazz </option>
          <option value="pop"> Pop </option>

        </select>
        <select required value={rating} onChange={(e) => setRating(e.target.value)}>
          <option value=""> --- </option>
          <option value="1"> 1 </option>
          <option value="2"> 2 </option>
          <option value="3"> 3 </option>
          <option value="4"> 4 </option>
          <option value="5"> 5 </option>

        </select>
        <button>Add Song</button>

      </form>
      {/* <form className='filterRadio'>
        <span>Filter songs by genre : </span>
        <input type="radio" name="genre" value="rock" id="rock" onChange={(e) => handleChange(e)} />
        <label htmlFor="rock">Rock</label>
        <input type="radio" name="genre" value="jazz" id="jazz" onChange={(e) => handleChange(e)} />
        <label htmlFor="jazz">Jazz</label>
        <input type="radio" name="genre" value="pop" id="pop" onChange={(e) => handleChange(e)} />
        <label htmlFor="pop">Pop</label>
        <input type="radio" name="genre" value="all" id="all" onChange={(e) => handleChange(e)} />
        <label htmlFor="all">All</label>

      </form> */}

      <form className='filterCheckbox'>
        <span>Filter songs by genre : </span>
        <input type="checkbox" name="rock" checked={types.rock} value="rock" id="rock" onChange={(e) => handleChange(e)} />
        <label htmlFor="rock">Rock</label>
        <input type="checkbox" name="jazz" checked={types.jazz} value="jazz" id="jazz" onChange={(e) => handleChange(e)} />
        <label htmlFor="jazz">Jazz</label>
        <input type="checkbox" name="pop" checked={types.pop} value="pop" id="pop" onChange={(e) => handleChange(e)} />
        <label htmlFor="pop">Pop</label>
      </form>
      <table style={{ width: "100%" }}>
        <thead>
          <tr>

            <td>Song</td>
            <td>Artist</td>
            <td>Genre</td>
            <td>Rating</td>


          </tr>
        </thead>
        <tbody>
          {arrayOfObjects.length > 0 ? (
            arrayOfObjects.map(item => <ListItems key={item.song} item={item} handleDelete={handleDelete} />)
          ) : null}

          {/* {filtered && filteredArray.length > 0 ? filteredArray.map(item => <ListItemsFiltered key={item.song} item={item} handleDeleteFiltered={handleDeleteFiltered} />) : null} */}
        </tbody>
      </table>
    </div>
  );
}

export default App;
