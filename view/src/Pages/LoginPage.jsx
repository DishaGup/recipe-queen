import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useToast,Alert,AlertIcon, Button, Input, InputGroup, InputRightElement, FormControl, FormLabel, Heading, Box, Center, VStack, Text, Container } from "@chakra-ui/react";


import { useNavigate, Link, useLocation } from "react-router-dom";
import { loginUserRequest } from "../Redux/action";

const initial = {
  email: "",
  password: "",
};

const LoginPage = () => {
  const [showpass1, setShowpass1] = useState(false);
  const [formData, setFormData] = useState(initial);
  const toast = useToast();
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const { loading, error, token, userId } = useSelector(
    (store) => store.authReducer
  );
  // console.log(loading, error, token, userId);

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(loginUserRequest(formData))
      .then((res) => {
        toast({
          title: "Login Successful",
          description: `Welcome ${res.data.message}`,
          position: "top",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
        setTimeout(() => {
          navigate("/all-recipe");
        }, 2000);
        
      })
      .catch((error) => {
        const errorMessage =
          error?.response?.data?.message || "An error occurred during login.";
        toast({
          title: "Login Failed",
          description: errorMessage,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      });

    setFormData(initial);
  };

  return (
    <Center minH="100vh" >
    <VStack spacing={6} maxW="400px"  borderWidth={1}
      borderRadius={5}
      boxShadow="md"
      bgColor="white"
      w={{ base: "90vw", md: "45vw" }}
      p={6}>


      <Heading size="lg">Login</Heading>
      {error && (
          <Alert status="error">
            <AlertIcon />
            {error}
          </Alert>
        )}
      <Box as="form" onSubmit={handleSubmit} w="100%">
        <FormControl className="form-group">
          <FormLabel className="form-label">Email</FormLabel>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter Your Email"
          />
        </FormControl>
        <FormControl className="form-group">
          <FormLabel className="form-label">Password</FormLabel>
          <InputGroup>
            <Input
              name="password"
              placeholder="Type Password"
              value={formData.password}
              onChange={handleChange}
              type={showpass1 ? "text" : "password"}
            />
            <InputRightElement>
              <Button
                variant="unstyled"
                onClick={() => setShowpass1((prev) => !prev)}
              >
                {showpass1 ? <AiFillEye /> : <AiFillEyeInvisible />}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <Button my='10px' type="submit" className="btn btn-primary has-after">
          Login
        </Button>
      </Box>
      <Text className="link-text">
        Don't have an account? <Link to="/register">Register</Link>
      </Text>
    </VStack>
  </Center>
  );
};

export default LoginPage;
