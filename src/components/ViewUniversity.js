import React, { useState, useEffect } from 'react';
import axios from "axios";
import {
  Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText, Card, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle, NavLink
} from 'reactstrap';

const ViewUniversity = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);


  const [university, setUniversity] = useState([]);

  const updateUniversity = () => {
    axios.get("http://localhost:8080/university").then((response) => {
      console.log(response);
      setUniversity(response.data.university);
      console.log("Updating University.....");
    });
  };

  useEffect(() => {
    updateUniversity();
  }, []);

  return (
    <div>
      <Container>
        <br />
        <Row>
          <h3>มหาวิทยาลัย</h3>
          <Col xs="6">
            <FormGroup>
            <br />
              <Label for="id_university">ชื่อมหาวิทยาลัย</Label>
              <Input type="select" name="id_university" id="id_university">
                {university.map((university) =>{
                  return(
                    <option key = {university.id_university}>{university.name_uni}</option>
                  );
                })}
              </Input>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col><NavLink href="./insertuniversity">เพิ่มมหาวิทยาลัย</NavLink>
          </Col>

        </Row>
      </Container>
      <br />
      <Container>
        <Row>
        <h3>รายชื่อมหาลัยมหาวิทยาลัย</h3>
          <Col>
            <Card>
              {university.map((university) => {
                return (
                  <CardBody key = {university.id_university}>
                    
                    <CardTitle tag="h5" href={university.url_uni}>{university.name_uni}</CardTitle>
                    <CardText>{university.detail_uni}</CardText>
                    <Button href={"./editUniversity/" + university.id_university}>เเก้ไข</Button>
                    </CardBody>
                  );
                })}    
            </Card>
          </Col>
        </Row>
      </Container>




    </div>
  );
}

export default ViewUniversity;