import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
 
} from 'reactstrap';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">LOGO</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="./home">หน้าหลัก</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="educationstudentallstudent">หลักสูตรรับสมัคร</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="./educationstudent">มหาลัยในประเทศไทย</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                ข้อมูล
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem href="./profile">
                 ข้อมูลส่วนตัว
                </DropdownItem>
                <DropdownItem href="./detaileducationstudent">
                 ข้อมูลการศึกษาต่อ
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink href="./dashboardteacher">DashboardTeacher</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="./dashboardadmin">DashboardAdmin</NavLink>
            </NavItem>
          </Nav>
          
          <NavLink href="./login">Login</NavLink>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;