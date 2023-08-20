import React from "react";
import {
  Box,
  Image,
  Text,
  Button,
  Badge,
  Flex,
  Stack,
  Tooltip,
  IconButton
} from "@chakra-ui/react";
import { FaLeaf, FaStar } from "react-icons/fa";
import { GiFlame } from "react-icons/gi";
import { Link } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { recipeRemoveFromBookmarked } from "../Redux/action";

const BookmarkRecipeCard = ({ recipe }) => {
  const dispatch = useDispatch()
  const {
    title,
    image,
    healthScore,
    diets,
    aggregateLikes,
    vegan,
    veryPopular,
    readyInMinutes,
    sourceName,
    sourceUrl,
    id
  } = recipe;
  const {userId ,token} = useSelector(
    (store) => store.authReducer
  );
  // console.log("userId :",userId)
  const handleDeleteBookmark = (id) => {
    let data = {
      userId,recipeId:id
    }
 dispatch(recipeRemoveFromBookmarked(data,token))
  };


  return (
    <Box
      p={4}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
    >
      <Flex justify="space-between" align="center">
        <Image src={image} alt={title} maxH="150px" />
        <Tooltip label="Remove Bookmark">
          <IconButton
            icon={<AiFillDelete />}
            variant="ghost"
            colorScheme="red"
            onClick={()=>handleDeleteBookmark(id)}
            aria-label="Remove Bookmark"
          />
        </Tooltip>
      </Flex>
      <Text mt={2} fontSize="xl" fontWeight="semibold">
        {title}
      </Text>
      <Flex mt={2} align="center">
        <Badge colorScheme="green" mr={2}>
          {vegan ? "Vegan" : "Vegetarian"}
        </Badge>
        {veryPopular && (
          <Badge colorScheme="red" mr={2}>
            Very Popular
          </Badge>
        )}
        <Badge colorScheme="gray" mr={2}>
          {healthScore}% Health Score
        </Badge>
      </Flex>
      <Flex mt={2} align="center">
        <GiFlame size={20} />
        <Text ml={1} fontSize="sm">
          Hotness: {aggregateLikes}
        </Text>
      </Flex>
      <Text mt={2} fontSize="sm" color="gray.600">
        Diets: {diets.join(", ")}
      </Text>
      <Text mt={2} fontSize="sm" color="gray.600">
        Ready in: {readyInMinutes} minutes
      </Text>
      <Flex mt={3} justify="space-between" align="center">
        <Box>
          <Text fontSize="sm" fontWeight="semibold" className='link-text'>
            Source:{" "}
            <Link
             
              to={`/single-recipe/${id}`}
              fontSize="sm"
              
            >
              View Recipe
            </Link>
          </Text>
        </Box>
        <Stack direction="row" spacing={2}>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </Stack>
      </Flex>
    </Box>
  );
};

export default BookmarkRecipeCard;
