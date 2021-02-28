import React, { useState } from 'react'; 
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText,  Card, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle,NavLink  } from 'reactstrap';

const ViewEditProfile = (props) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(prevState => !prevState);
    return (
        <div>
<div class="container">
<Form>
    <center><h3> เเก้ไขข้อมูลส่วนตัว </h3></center>
      <Row form>
      <Col >
          <FormGroup>
            <Label for="id_stu">รหัสประจำตัว</Label>
            <Input type="text" name="id_stu" id="id_stu" placeholder="ยังไม่ได้เชื่อมครับ" />
          </FormGroup>
        </Col>
        <Col >
          <FormGroup>
            <Label for="id_title ">คำนำหน้า</Label>
            <Input type="select" name="id_title" id="id_title">
            <option>นาย</option>
            <option>นาง</option>
            <option>นางสาว</option>
          </Input></FormGroup>
        </Col>
        <Col >
          <FormGroup>
            <Label for="fname_stu">ชื่อ</Label>
            <Input type="text" name="fname_stu" id="fname_stu" placeholder="ยังไม่ได้เชื่อมครับ" />
          </FormGroup>
        </Col>
        <Col >
          <FormGroup>
            <Label for="lname_stu">นามสกุล</Label>
            <Input type="text" name="lname_stu" id="lname_stu" placeholder="ยังไม่ได้เชื่อมครับ" />
          </FormGroup>
        </Col>
      </Row>
      <Row form>
        <Col >
          <FormGroup>
            <Label for="id_curriculum  ">สายการเรียน</Label>
            <Input type="select" name="id_curriculum " id="id_curriculum ">
            <option>สายวิทย์-คณิต</option>
            <option>สายศิลป์ภาษา</option>
            <option>สายศิลป์คำนวณ</option>
          </Input></FormGroup>
        </Col>
        <Col >
          <FormGroup>
            <Label for="GPA_stu">GPA</Label>
            <Input type="text" name="GPA_stu" id="GPA_stu" placeholder="ยังไม่ได้เชื่อมครับ" />
          </FormGroup>
        </Col>
        <Col >
        <FormGroup>
            <Label for="year_stu">ปีการศึกษา</Label>
            <Input type="select" name="year_stu" id="year_stu">
            <option>2540</option>
            <option>2541</option>
            <option>2542</option>
          </Input></FormGroup>
        </Col>
      </Row>
      <Row form>
        <Col >
          <FormGroup>
            <Label for="year_class">ชั้น</Label>
            <Input type="select" name="year_class" id="year_class">
            <option>มัธยมปีที่4</option>
            <option>มัธยมปีที่5</option>
            <option>มัธยมปีที่6</option>
          </Input></FormGroup>
        </Col>
        <Col >
        <FormGroup>
            <Label for="class">ห้อง</Label>
            <Input type="select" name="class" id="class">
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </Input></FormGroup>
        </Col>
        <Col >
        </Col >
      </Row>
      <Row form>
        <Col >
          <FormGroup>
            <Label for="password_stu">รหัสผ่าน</Label>
            <Input type="text" name="password_stu" id="password_stu" placeholder="ยังไม่ได้เชื่อมครับ" />
          </FormGroup>
        </Col>
        <Col >
        </Col > <Col >
        </Col > <Col >
        </Col >
      </Row>
      <Button>ตกลง</Button>


      <Row>
        <Col></Col>
        <Col></Col>
        <Col></Col>
        <Col><NavLink href="./home">กลับหน้าหลัก</NavLink></Col>
        <Col><NavLink href="./profile">กลับไปข้อมูลส่วนตัว</NavLink>
</Col>

      </Row>
    </Form>
</div>    




</div>
);
  }
  
  export default ViewEditProfile;