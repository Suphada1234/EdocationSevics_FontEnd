import React, { useState  } from 'react';
import axios from 'axios';
import * as yup from 'yup';
import { storage } from "../firebase/index";
import { useFormik } from "formik";
import { Container, Row, Button, Form, Label, Input, Jumbotron, Alert, Progress } from 'reactstrap';

const ViewInsertUniversity = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);

  const initUniversity = {
    name_uni: "",
    url_uni: "",
    logo_uni: "",
    detail_uni: "",
  };

  const [progress, setProgress] = useState(0);
  const uploadFileToFirebase = (logo_uni) => {
    const useId = "u001";
    const timestamp = Math.floor(Date.now() / 1000);
    const newName = useId + "_" + timestamp;
    const uploadTask = Storage.ref(`images/${newName}`).put(logo_uni);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const uploadProgress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(uploadProgress);
      },
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(newName)
          .getDownloadURL()
          .then((imagesURL) => {
            console.log(imagesURL);
            saveUniversity(imagesURL);
          })
      }
    );
  }

  const FILE_SIZE = 2000 * 1224
  const SUPPORTED_TYPE = [
    "image/jpg",
    "image/jpeg",
    "image/png",
    "image/gif",
    "applivation/pdf",
  ]

  const formik = useFormik({
    initialValues: initUniversity,
    validationSchema: yup.object().shape({
      name_uni: yup.string().required("กรุณากรอกชื่อมหาวิทยาลัย"),
      url_uni: yup.string().required("กรุณากรอก URL"),
      logo_uni: yup
      .mixed()
      .test("fileSize", "ไฟล์ใหญ่เกินเกินไป", (logo_uni) => {
        if (logo_uni) {
          return logo_uni.size <= FILE_SIZE;
        } else {
          return true;
        }
      })
        .test("fileType", "รองรับเฉพาะณูปภาพ", (logo_uni) => {
          if (logo_uni) {
            return SUPPORTED_TYPE.includes(logo_uni.type);
          } else {
            return true;
          }
        }),
    }),
    onSubmit: (values) => {
      console.log(values);
      if (values.logo_uni) {
        uploadFileToFirebase(values.logo_uni);
      } else {
        saveUniversity("");
      }
    },
    detail_uni: yup.string().required("กรุณาที่อยู่")

  })

 
  const [submitted, setSubmitted] = useState(false);



  const saveUniversity = (imagesURL) => {
    var data = {
      name_uni: formik.values.name_uni,
      url_uni: formik.values.url_uni,
      logo_uni: imagesURL,
      detail_uni: formik.values.detail_uni,
    };
    axios.post("http://localhost:8080/university", data)
      .then((response) => {
        console.log(response.data);
        setSubmitted(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const newUniversity = () => {
    formik.resetForm();
    setProgress(0);
    setSubmitted(false);
  };
  return (
    <Container>
      <Row>
        <h2>เพิ่มมหาวิทยาลัย</h2>
      </Row>
            <Form onSubmit={formik.handleSubmit}>
              <Jumbotron>
                <Label for="examplePassword">ชื่อมหาลัย</Label>
                <h1 className="display-3">
                  <Input
                    type="text"
                    name="name_uni"
                    id="universityName"
                    value={formik.values.name_uni}
                    onChange={formik.handleChange}
                    placeholder="ระบุชื่อมหาลัย"
                  /></h1>
                
                <br />

                <Label for="examplePassword">ที่อยู่</Label>
                <p className="lead">
                  <Input
                    type="textarea"
                    name="detail_uni"
                    id="niversityDetail"
                    value={formik.values.detail_uni}
                    onChange={formik.handleChange}
                    placeholder="ระบุที่อยู่"
                  /></p>
                
                <br />

                <Label for="examplePassword">URL</Label>
                <h1 className="display-3">
                  <Input
                    type="text"
                    name="url_uni"
                    id="universityUrl"
                    value={formik.values.url_uni}
                    onChange={formik.handleChange}
                    placeholder="ระบุลิงค์"
                  /></h1>
                
                <br />
                <Label for="examplePassword">โลโก้มหาลัย</Label>
                <Input
                  type="file"
                  name="logo_uni"
                  id="universityLogo"
                  value={formik.values.logo_uni}
                  onChange={(event) => { formik.setFieldValue("file", event.currentTarget.files[0]) }}
                  placeholder="เลือกรูป"
                />
                {progress !== 0 && <Progress value={progress}>{progress}%</Progress>}

               
              </Jumbotron>
              <Button type="submit" className="btn btn-success">บันทึก</Button>
            </Form>
    </Container>

  );
};

export default ViewInsertUniversity;