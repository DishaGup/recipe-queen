import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Heading,
  HStack,
  Image,
  Text,
  useToast,
  Spinner,
  Stack,
} from "@chakra-ui/react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { TbTruckDelivery } from "react-icons/tb";
import { AiOutlineQuestionCircle, AiFillStar } from "react-icons/ai";
import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import axios from "axios";
import { apiKey, recipeAddToBookmarked, singleRecipeDetailsFetch } from "../Redux/action";

const SingleRecipePage = () => {
  const { recipe_id } = useParams();
  const dispatch =useDispatch()
  const { error, token, bookmarkedData, userId ,loading} = useSelector(
    (store) => store.authReducer
  );

  const navigate = useNavigate();
  const toast = useToast();
  const { allRecipes ,singleRecipe } = useSelector((store) => store.recipeReducer);
 
  const handleAddToBookmark = (recipeId) => {
    if (!token) {
      toast({
        title: "Login to Your Account",
        position: "top",
        status: "info",
        variant: "top-accent",
        duration: 3000,
        isClosable: true,
      });

      setTimeout(() => {
        navigate("/login");
      }, 2000);
      alert("No token");
      return;
    }

    const isAlreadyBookmarked = bookmarkedData.some(
      (item) => item === recipeId
    );

    if (!isAlreadyBookmarked) {
      dispatch(recipeAddToBookmarked({ recipeId, userId }, token));
    } else {
      toast({
        title: "Already in Bookmarked List",
        position: "top",
        status: "info",
        variant: "top-accent",
        duration: 2000,
        isClosable: true,
      });
      alert("already in wishlist");
    }
  };

  useEffect(() => {
   
dispatch(singleRecipeDetailsFetch(recipe_id))

  }, []);

  // console.log(singleRecipe);
  if (loading)
    return (
      <>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </>
    );
  return (
    <Box p={4} w="85%" m="auto" overflow={"hidden"} my='120px'>
      <Image src={singleRecipe.image} alt={singleRecipe.title} maxH="300px" />
    <HStack  my="10px">
    <Heading m={4} textDecor={"underline"}>
        {singleRecipe.title}
      </Heading>
      <Button onClick={() => handleAddToBookmark(singleRecipe.id)}  className="btn btn-primary has-after" > Bookmark </Button> 
    </HStack>
      <Text
        color="gray.600"
        mt={2}
        dangerouslySetInnerHTML={{ __html: singleRecipe.summary }}
      />
      <Divider my={4} />

<Box my='10px' position={"relative"}>
<Box position={"absolute"} top="0" right="0" m='10px'>
          <Image
            src={`https://api.spoonacular.com/recipes/${singleRecipe.id}/nutritionLabel.png?apiKey=${apiKey}`}
          />
        </Box>
 <Heading>All Ingredients</Heading>
<Image src={`https://api.spoonacular.com/recipes/${singleRecipe.id}/ingredientWidget.png?apiKey=${apiKey}`} /> 
<Divider  my={4} />
{singleRecipe.extendedIngredients &&
          singleRecipe.extendedIngredients.map((ingredient, index) => (
            <Text key={index} color="gray.600">
              {ingredient.original}
            </Text>
          ))}
  </Box>



      <Stack >
        {/* Render recipe instructions */}
       
        <Heading size="xl" mb={2}>
          Instructions:
        </Heading>
        {singleRecipe.instructions && (
            <Text
            color="gray.600"
            mt={2}
            dangerouslySetInnerHTML={{ __html: singleRecipe.instructions }}
          />
        
        )}
      </Stack>

      <Divider my={4} />

      <Box>
        <Text fontSize="15px" color="gray.600">
         <b> Price per serving:</b> ${singleRecipe.pricePerServing}
        </Text>
      </Box>
    </Box>
  );
};

export default SingleRecipePage;
