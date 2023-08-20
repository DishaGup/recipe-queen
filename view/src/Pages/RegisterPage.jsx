import React, { useState } from "react";
import { FcCheckmark, FcCancel } from "react-icons/fc";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Button,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  VStack,
  useToast,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import { registerUserRequest } from "../Redux/action";

const initialState = {
  name: "",
  password: "",
  email: "",
  confirmpassword: "",
};

const RegisterPage = () => {
  const [formData, setData] = useState(initialState);
  const [showpass1, setShowpass1] = useState(false);
  const navigate = useNavigate();
  const toast = useToast();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const { loading, error } = useSelector((store) => store.authReducer);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmpassword) {
      return toast({
        title: "Error in Creating Your Account",
        description: "Password doesn't match",
        position: "top",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    }
    dispatch(registerUserRequest(formData))
      .then(() => {
        toast({
          title: "Registration Successful",
          description: "We've created an account for you.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        navigate("/login");
      })
      .catch((error) => {
        const errorMessage =
          error?.response?.data?.message ||
          "An error occurred during registration.";
        toast({
          title: "Registration Failed",
          description: errorMessage,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      });
    setData(initialState);
  };

  return (
    <VStack align="center" justify="center" h="100vh" p={4} mt="50px">
      <Box
        borderWidth={1}
        borderRadius={5}
        boxShadow="md"
        bgColor="white"
        w={{ base: "90vw", md: "45vw" }}
        p={6}
      >
        <Text fontSize="1.8rem" fontWeight={500} mb={4} textAlign="center">
          Create New Account
        </Text>
        {error && (
          <Alert status="error">
            <AlertIcon />
            {error}
          </Alert>
        )}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Name</label>
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter Your Name"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Email</label>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter Your Email"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Password</label>
            <InputGroup>
              <Input
                type={showpass1 ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Type Strong Password"
              />
              <InputRightElement width="4.5rem">
                <Button
                  h="1.75rem"
                  size="sm"
                  onClick={() => setShowpass1((prev) => !prev)}
                >
                  {showpass1 ? <AiFillEye /> : <AiFillEyeInvisible />}
                </Button>
              </InputRightElement>
            </InputGroup>
          </div>

          <div className="form-group">
            <label className="form-label">Confirm Password</label>
            <InputGroup>
              <Input
                type="password"
                name="confirmpassword"
                value={formData.confirmpassword}
                onChange={handleChange}
                placeholder="Confirm Password"
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm">
                  {formData.password === formData.confirmpassword ? (
                    <FcCheckmark />
                  ) : (
                    <FcCancel />
                  )}
                </Button>
              </InputRightElement>
            </InputGroup>
          </div>
          <Button
            isLoading={loading}
            loadingText="Submitting"
            type="submit"
            className="btn btn-primary has-after"
            w="100%"
            mt={4}
          >
            Register
          </Button>

          <Text mt={4} className="link-text">
            Already have an account? <Link to="/login">Login</Link>
          </Text>
        </form>
      </Box>
    </VStack>
  );
};

export default RegisterPage;
