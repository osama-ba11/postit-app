import loginImage from "../Images/loginImage.jpg";
import { userSchemaValidation } from "../Validations/UserValidations";
import * as yup from "yup";

import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import {
  Button,
  Col,
  Label,
  Container,
  Row,
  FormGroup,
  Input,
  Form,
} from "reactstrap";
import logo from "../Images/logo-t.png";
import { Link } from "react-router-dom";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSchemaValidation),
  });
  // Handle form submission

  const onSubmit = (data) => {
    console.log("Form Data", data); // You can handle the form submission here
  };
  return (
    <div>
      <Container>
        <h1>Register</h1>
        <img src={logo} />
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Row>
            <Col md={5}>
              Name <br></br>
              <input type="text" name="name" {...register("name")}></input>
            </Col>
            <p className="error">{errors.name?.message}</p>
          </Row>

          <Row>
            <Col md={5}>
              Email <br></br>
              <input type="email" name="email" {...register("email")}></input>
            </Col>
            <p className="error">{errors.email?.message}</p>
          </Row>
          <Row>
            <Col md={5}>
              Password<br></br>
              <input
                type="password"
                name="password"
                {...register("password")}
              ></input>
            </Col>
            <p className="error">{errors.password?.message}</p>
          </Row>
          <Row>
            <Col md={5}>
              Confirm Password<br></br>
              <input
                type="password"
                name="ConfirmPassword"
                {...register("confirmPassword")}
              ></input>
            </Col>
            <p className="error">{errors.confirmPassword?.message}</p>
          </Row>

          <Row>
            <Col md={3}>
              <Button>Register</Button>
            </Col>
          </Row>

          <Row>
            <Col md={3}>
              <p className="smalltext">
                No Account? <Link to="/register">Sign Up now.</Link>
              </p>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
};

export default Register;
