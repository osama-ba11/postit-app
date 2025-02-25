import loginImage from "../Images/loginImage.jpg";
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
  return (
    <div>
      <Container>
        <img src={logo} />
        <Form>
          <Row>
            <Col md={5}>
              Name <br></br>
              <Input type="text"></Input>
            </Col>
          </Row>

          <Row>
            <Col md={5}>
              Email <br></br>
              <Input type="text"></Input>
            </Col>
          </Row>
          <Row>
            <Col md={5}>
              Password<br></br>
              <Input type="password"></Input>
            </Col>
          </Row>
          <Row>
            <Col md={5}>
              Confirm Password<br></br>
              <Input type="password"></Input>
            </Col>
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

export default Register;
