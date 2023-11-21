
import { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap"
function App() {
	const [repos, setRepos] = useState([])
	const [dropDownSelected, setDropDownSelected] = useState('');


	const buildDropdown = async () => {

		let res = await fetch('http://127.0.0.1:4000/items')
		let data = await res.json()

		const unique = Array.from(new Set(data.map((item) => item.ScannerID)));

		setRepos(data)
		console.log(repos);
		var select = document.getElementById("selItems");

		// Iterate the data, create a <option> element and append it to
		// the select
		for (let i = 0; i < unique.length; i++) {
			if (unique[i] !== undefined) {
				var option = document.createElement("option");
				option.text = unique[i];
				option.value = unique[i];

				select.appendChild(option);
			}


		}
	}

	const getItem = async (val) => {

		let res = await fetch('http://127.0.0.1:4000/items/' + val)
		let data = await res.json()
		console.log(data);
	}

	useEffect(() => {
		let ignore = false;

		if (!ignore) buildDropdown()
		return () => { ignore = true; }
	}, []);



	useEffect(() => {
		console.log(dropDownSelected)
		getItem(dropDownSelected)
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

						<Card style={{ width: '18rem' }}>
							<Card.Img variant="top" src="./images/placeholder.png" />
							<Card.Body>
								<Card.Title>Card Title</Card.Title>
								<Card.Text>
									Some quick example text to build on the card title and make up the
									bulk of the card's content.
								</Card.Text>
								<Button variant="primary">Go somewhere</Button>
							</Card.Body>
						</Card>
					</div>
				</div>
			</div>
		</>
	)
}

export default App;