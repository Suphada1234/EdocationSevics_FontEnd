import React, { useState } from 'react'; 
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText,  Card, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle,NavLink  } from 'reactstrap';

const ViewProfile = (props) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(prevState => !prevState);
    return (
        <div>
<div class="container">
<Form>
    <center><h3> ข้อมูลส่วนตัว </h3></center>
      <Row form>
      <Col>
          <FormGroup>
            <Label for="exampleEmail">รหัสประจำตัว</Label>&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;
            ใส่รหัสประจำตัว
          </FormGroup>
        </Col>
      <Col>
          <FormGroup>
            <Label for="exampleEmail">คำนำหน้า</Label>&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;
            ใส่คำนำหน้า
          </FormGroup>
        </Col>
      <Col>
          <FormGroup>
            <Label for="exampleEmail">ชื่อ</Label>&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;
            ใส่ชื่อ
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
          <Label for="exampleEmail">นามสกุล</Label>&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;
            ใส่นามสกุล
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col>
        <FormGroup>
        <Label for="exampleEmail">สายการเรียน</Label>&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;
            ใส่สายการเรียน
        </FormGroup></Col>
        <Col>
        <FormGroup>
        <Label for="exampleEmail">GPA</Label>&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;
            ใส่GPA
        </FormGroup></Col>
        <Col>
        <FormGroup>
        <Label for="exampleEmail">ปีการศึกษา</Label>&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;
            ใส่GPA
        </FormGroup></Col>       
      </Row>
      <Row>
        <Col>
        <FormGroup>
        <Label for="exampleEmail">ชั้น</Label>&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;
            ใส่ชั้น
        </FormGroup></Col>
        <Col>
        <FormGroup>
        <Label for="exampleEmail">ห้อง</Label>&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;
            ใส่ห้อง
        </FormGroup></Col>
        <Col></Col>

      </Row>
 
      <Row>
        <Col></Col>
        <Col></Col>
        <Col></Col>
        <Col><NavLink href="./home">กลับหน้าหลัก</NavLink></Col>
        <Col><NavLink href="./editprofile">เเก้ไขข้อมูลส่วนตัว</NavLink>
</Col>

      </Row>
    </Form>
</div>    




</div>
);
  }
  
  export default ViewProfile;