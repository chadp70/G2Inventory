import {useState, useEffect} from "react";
function App() {
  const [repos, setRepos] = useState([])
  
  const fetchData = async ()=>{
  
  let res = await fetch('http://localhost:4000/items')
  let data = await res.json()
  setRepos(data)
  
  }
  
  
  useEffect(() => {
      // fetch call used to be here
      fetchData()
  }, [])


  return (
      <div>
      {
          repos.map(items => console.log(items))
      }
      </div>
  )
}

export default App;