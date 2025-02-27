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

const Login = () => {
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
        <img src={logo} />
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Row>
            <Col md={3}>
              Username<br></br>
              <input type="text" {...register("email")}></input>
            </Col>
            <p className="error">{errors.name?.message}</p>
          </Row>

          <Row>
            <Col md={3}>
              Password<br></br>
              <input type="password" {...register("password")}></input>
            </Col>
            <p className="error">{errors.password?.message}</p>
          </Row>

          <Row>
            <Col md={3}>
              <Button>Login</Button>
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

export default Login;
