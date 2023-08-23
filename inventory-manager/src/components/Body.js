import {  Container } from "react-bootstrap";
import ScanItem from "./ScanItem";
import NewItemForm from "./NewItemForm";
import "../css/App.css";
const Body = (props) => {
  return (
    <>
      <Container>
        <ScanItem/>
        <p>&nbsp;</p>
        <NewItemForm className="hidden"/>
      </Container>
    </>
  );
};

export default Body;
