import React, { useEffect } from "react";
import BookmarkRecipeCard from "../Components/BookmarkRecipeCard";
import { recipeBookMarkedDataFetch } from "../Redux/action";
import { useDispatch, useSelector } from "react-redux";

import {
 
  Divider,
  Flex,
  Grid,
  Heading,
  HStack,
  
  Spinner,
  Text,
  VStack,
 
  Alert,
  AlertIcon,
} from "@chakra-ui/react";

const BookmarkData = () => {
  const dispatch = useDispatch();
  const { loading, error, token, bookmarkedData, userId } = useSelector(
    (store) => store.authReducer
  );

  useEffect(() => {
    dispatch(recipeBookMarkedDataFetch(userId, token));
  }, []);

  return (
    <VStack justify={"space-between"} p="10px" w="90%" m="auto" my="90px">
      <HStack justify={"space-between"} w="full">
        <Heading
          fontWeight={"medium"}
          fontSize={{
            base: "20px",
            sm: "30px",
            md: "30px",
            lg: "35px",
          }}
        >
          Bookmarked Recipes
        </Heading>
      </HStack>
      <Divider borderColor={"black"} />
      {loading ? (
        <Spinner size="xl" mt={8} />
      ) : (
        <Grid
          gridTemplateColumns={{
            base: "1fr",
            md: "repeat(2,1fr)",
            lg: "repeat(3,1fr)",
          }}
          gap="5"
        >
          {error ? (
            <Alert status="error">
              <AlertIcon />
              {error}
            </Alert>
          ) : (
            <>
              {bookmarkedData && bookmarkedData.length > 0 ? (
                bookmarkedData.map((el, index) => (
                  <BookmarkRecipeCard key={el.id} recipe={el} />
                ))
              ) : (
                <Text>No bookmarked Data</Text>
              )}
            </>
          )}
        </Grid>
      )}
    </VStack>
  );
};

export default BookmarkData;
