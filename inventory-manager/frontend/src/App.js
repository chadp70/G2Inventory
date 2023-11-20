
import { useState, useEffect} from "react";

function App() {
  const [repos, setRepos] = useState([])
  const [dropDownSelected, setDropDownSelected] = useState('');


  const fetchData = async () => {

    let res = await fetch('http://127.0.0.1:4000/items')
    let data = await res.json()
    
    const unique = Array.from(new Set(data.map((item) => item.ScannerID)));
    
    setRepos(data)
    console.log(repos);
    var select = document.getElementById("selItems");

    // Iterate the data, create a <option> element and append it to
    // the select
    for (let i = 0; i < unique.length; i++) {
		if(unique[i]!==undefined){
			var option = document.createElement("option");
			option.text = unique[i];
			option.value = unique[i];
	
			select.appendChild(option);
		}


    }
  }


  	useEffect(() => {
    	fetchData()
  	}, [])

  useEffect(() => {
    console.log(dropDownSelected)
	//fetchData(dropDownSelected)
  }, [dropDownSelected])

  return (
    <>
    
  <div className="container-fluid">
	<div className="row">
		<div className="col-md-12">
      
			<div className="mt-4 p-5 bg-light text-dark rounded">
				<h1>
					Welcome to the G2 Inventory Management Application
				</h1>
			</div>
		</div>
	</div>
  <div className="row">
  <div className="col-md-12">
			Scan Item: <select id='selItems' onChange={(e) => setDropDownSelected(e.target.value)}><option>SELECT AN ITEM</option></select>
			</div>
  </div>
	<div className="row">
		<div className="col-md-2">
			<div className="btn-group btn-group-vertical btn-group-lg" role="group">
				 
				<button className="btn btn-secondary" type="button">Left</button> 
				<button className="btn btn-secondary" type="button">Center</button> 
				<button className="btn btn-secondary" type="button">Right</button> 
				<button className="btn btn-secondary" type="button">Justify</button>
			</div>
		</div>
		<div className="col-md-4">

			<div className="card">
				<h5 className="card-header">
					Card title
				</h5>
				<div className="card-body">
					<p className="card-text">
          
					</p>
				</div>
				<div className="card-footer">
					Card footer
				</div>
			</div>
		</div>
	</div>
</div>
    </>
  )
}

export default App;