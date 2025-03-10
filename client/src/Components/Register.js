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
import { useSelector, UseDispatch, useDispatch } from "react-redux";
import { useState } from "react";
import { addUser, deleteUser, updateUser } from "../Features/UserSlice";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSchemaValidation),
  });

  const userList = useSelector((state) => state.users.value); // Handle form submission

  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    console.log("Form Data", data); // You can handle the form submission here
    alert("Validation all good.");
    try {
      const userData = {
        name: data.name,
        email: data.email,
        password: data.password,
      };

      dispatch(addUser(userData));
    } catch {
      console.log("error");
    }
  };
  return (
    <div>
      <Container>
        <h1>Register</h1>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <Row>
            <Col md={5}>
              Name <br></br>
              <input
                type="text"
                name="name"
                {...register("name", {
                  onChange: (e) => setname(e.target.value),
                })}
              ></input>
              {name}
            </Col>
            <p className="error">{errors.name?.message}</p>
          </Row>

          <Row>
            <Col md={5}>
              Email <br></br>
              <input
                type="email"
                name="email"
                {...register("email", {
                  onChange: (e) => setemail(e.target.value),
                })}
              ></input>
              {email}
            </Col>
            <p className="error">{errors.email?.message}</p>
          </Row>
          <Row>
            <Col md={5}>
              Password<br></br>
              <input
                type="password"
                name="password"
                {...register("password", {
                  onChange: (e) => setpassword(e.target.value),
                })}
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
                {...register("confirmPassword", {
                  onChange: (e) => setconfirmPassword(e.target.value),
                })}
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
            <Col md={6}>
              <h1> List of Users</h1>
              <table className="table">
                <tbody>
                  {userList.map((user) => (
                    <tr key={user.id}>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.password}</td>
                      <td>
                        <button className="btn btn-primary">Delete</button>
                      </td>
                      <td>
                        <button className="btn btn-primary">Update</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
};

export default Register;
