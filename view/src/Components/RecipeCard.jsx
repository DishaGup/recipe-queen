import React from "react";
import { FaLeaf, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { GiFlame } from "react-icons/gi";
import {
  Box,
  Badge,
  Flex,
  Image,
  Link as ChakraLink,
  Text,
  VStack,
  Button,
} from "@chakra-ui/react";
const RecipeCard = ({ el, handleAddToBookmark }) => {
  return (
 
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="base"
      _hover={{ boxShadow: "lg" }}
      position={"relative"}
    >
      <Image
        src={el.image}
        alt={el.title}
        width="100%"
        objectFit="cover"
        maxHeight="200px"
      />
      {el.aggregateLikes > 300 && el.veryPopular && el.vegan ? (
        <Flex
          alignItems="center"
          justifyContent="center"
          bg="red.500"
          color="white"
          fontWeight="bold"
          position="absolute"
          top="0"
          left="0"
          p={2}
          zIndex="1"
        >
          <FaLeaf />
          <GiFlame />
          <Text ml={1}>Hot</Text>
        </Flex>
      ) : el.vegan ? (
        <Badge
          variant="solid"
          colorScheme="green"
          position="absolute"
          top="0"
          left="0"
          p={2}
          zIndex="1"
        >
          Vegan
        </Badge>
      ) : el.aggregateLikes > 300 && el.veryPopular ? (
        <Badge
          variant="solid"
          colorScheme="red"
          position="absolute"
          top="0"
          left="0"
          p={2}
          zIndex="1"
        >
          Hot
        </Badge>
      ) : null}
      <VStack p={4} align="start">
        <Text fontSize="xl" fontWeight="bold">
          {el.title}
        </Text>
        <Flex alignItems="center">
          <FaStar color="yellow" />
          <FaStar color="yellow" />
          <FaStar color="yellow" />
          <FaStar color="yellow" />
        </Flex>
        <Text fontSize="sm" color="gray.600">
          Diets: {el.diets.join(", ")}
        </Text>
        <Flex justifyContent="space-between" w="100%">
          <Flex align="center">
            <Box as="span" fontSize="sm" mr={1}>
              💛
            </Box>
            <Text fontSize="sm" fontWeight="bold">
              {el.healthScore}
            </Text>
          </Flex>
          <Button onClick={() => handleAddToBookmark(el.id)}> Bookmark </Button>
          <ChakraLink
            as={Link}
            to={`/single-recipe/${el.id}`}
            fontSize="sm"
            color="blue.500"
          >
            View Recipe
          </ChakraLink>
        </Flex>
      </VStack>
    </Box>

    // </Link>
  );
};

export default RecipeCard;
