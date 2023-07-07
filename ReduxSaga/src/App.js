import React from "react";
import { Button, Form, Input, Container, Row, Col } from "reactstrap";
import { useFormik } from "formik";
import * as yup from "yup";
import Login from "./Login";
const App = () => {
  const validationSchema = yup.object({
    email: yup
      .string("Enter your email")
      .email("Enter a valid email")
      .required("Email is required"),
    password: yup
      .string("Enter your password")
      .min(8, "Password should be of minimum 8 characters length")
      .required("Password is required"),
    name: yup.string("Enter the Name").required(),
    surname: yup.string("Enter the Surname").required(),
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      name: "",
      surname: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div>
      <Login />
      <Container>
        <Row className="justify-content-center align-items-center my-3">
          <Col xs="6">
            <Form onSubmit={formik.handleSubmit}>
              <Input
                type="text"
                name="name"
                placeholder="enter the name"
                className="my-2"
                value={formik.values.name}
                onChange={formik.handleChange}
                error={formik.touched.name && Boolean(formik.errors.name)}
                // helperText={formik.touched.name && formik.errors.name}
              />
              <Input
                type="text"
                name="surname"
                placeholder="enter the surname"
                className="my-2 shadow-none"
                value={formik.values.surname}
                onChange={formik.handleChange}
                error={formik.touched.surname && Boolean(formik.errors.surname)}
                // helperText={formik.touched.surname && formik.errors.surname}
              />

              <Input
                type="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                // helperText={formik.touched.email && formik.errors.email}
                placeholder="enter the email"
                className="my-2 shadow-none"
              />
              <Input
                type="password"
                placeholder="enter the password"
                className="my-2 shadow-none"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                // helperText={formik.touched.password && formik.errors.password}
              />
              <Button className="w-100 py-2" color="primary">
                Login
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
