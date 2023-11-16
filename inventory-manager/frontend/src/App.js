
import { useState, useEffect} from "react";

function App() {
  const [repos, setRepos] = useState([])
  const [dropDownSelected, setDropDownSelected] = useState('');


  const handleSelectChange = (e)=>{
    setDropDownSelected(e.target.value);
    console.log(dropDownSelected)
  }

  const fetchData = async () => {

    let res = await fetch('http://127.0.0.1:4000/items')
    let data = await res.json()
    
    const unique = Array.from(new Set(data.map((item) => item.Nomenclature)));
    
    setRepos(data)
    console.log(repos);
    var select = document.getElementById("selItems");

    // Iterate the data, create a <option> element and append it to
    // the select
    for (let i = 0; i < unique.length; i++) {
        var option = document.createElement("option");
        option.text = unique[i];
        option.value = unique[i];

        select.appendChild(option);

    }
  }


  useEffect(() => {
    // fetch call used to be here
    fetchData()
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
				<p>
					Use this tool to track the usage of all G2 assets.
				</p>
				<p>
					<button className="btn btn-primary btn-large">Learn more</button>
				</p>
			</div>
		</div>
	</div>
  <div className="row">
  <div className="col-md-12">&nbsp;</div>
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
			<h2>
				Heading
			</h2>
			<p>
				Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.
			</p>
			<p>
				<a className="btn" href="/">View details »</a>
			</p>
		</div>
		<div className="col-md-6">
			<div className="card">
				<h5 className="card-header">
					Card title
				</h5>
				<div className="card-body">
					<p className="card-text">
          Select Inventory Item: <select id='selItems' onChange={(e) => handleSelectChange(e)}><option>SELECT AN ITEM</option></select>
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