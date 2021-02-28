import React, { useState } from 'react'; 
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText,  Card, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle,NavLink  } from 'reactstrap';

const ViewInsertdetailEducationStudent = (props) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(prevState => !prevState);
    return (
        <div>
<div class="container">
<Form>
    <center><h3> เเก้ไขข้อมูลการศึกษาต่อ </h3></center>
    <Row >
    <Col >
    <FormGroup>
    <Label for="id_stu">รหัสประจำตัว</Label>
      <Input type="text" name="id_stu" id="id_stu" placeholder="ยังไม่ได้เชื่อมครับ" disabled/>
      </FormGroup>
      </Col>
      <Col > </Col ><Col ></Col ><Col ></Col >
      </Row>
      <Row form>
        <Col md={6}>
        <FormGroup>
        <Label for="id_university">มหาวิทยาลัย</Label>
        <Input type="select" name="id_university" id="id_university">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Input>
      </FormGroup>
        </Col>
        <Col md={6}>
        <FormGroup>
        <Label for="id_faculty">คณะ</Label>
        <Input type="select" name="id_faculty" id="id_faculty">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Input>
      </FormGroup>
        </Col>
      </Row>
      <Row form>
        <Col md={6}>
        <FormGroup>
        <Label for="id_course">สาขา</Label>
        <Input type="select" name="id_course" id="id_course">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Input>
      </FormGroup>
        </Col>
        <Col md={6}>
        <FormGroup>
        <Label for="id_major">หลักสูตร</Label>
        <Input type="select" name="id_major" id="id_major">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Input>
      </FormGroup>
        </Col>
      </Row>
      <Button>ตกลง</Button>


      <Row>
        <Col></Col>
        <Col></Col>
        <Col></Col>
        <Col><NavLink href="./detaileducationstudent">กลับไปข้อมูลการศึกษาต่อ</NavLink>
</Col>

      </Row>
    </Form>
</div>    




</div>
);
  }
  
  export default ViewInsertdetailEducationStudent;