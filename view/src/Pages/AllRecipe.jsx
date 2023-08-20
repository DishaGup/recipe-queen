import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
//import { results as allRecipes } from "../db";
import { FaLeaf, FaStar } from "react-icons/fa";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  GridItem,
  Divider,
  Flex,
  Grid,
  Heading,
  HStack,
  Image,
  Select,
  Spinner,
  Text,
  VStack,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  CloseButton,
  Tooltip,
  useToast,
  useDisclosure,
} from "@chakra-ui/react";
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from "@chakra-ui/react";

import { GiFlame } from "react-icons/gi";
import {
  fetchAllRecipe,
  recipeAddToBookmarked,
  recipeBookMarkedDataFetch,
} from "../Redux/action";
import Pagination from "../Components/Pagination";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import FiltersSidebar from "../Components/FiltersSidebar";
import RecipeCard from "../Components/RecipeCard";
import FilterSidebarDrawer from "../Components/FilterSidebarDrawer";
const AllRecipe = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [sortvalue, setsortValue] = useState(
    searchParams.get("sortvalue") || 50
  );
  const [showTooltip, setShowTooltip] = useState(false);
  const [sortchoice, setsortChoice] = useState(
    searchParams.get("sortchoice") || ""
  );
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { loading, error, token, bookmarkedData, userId } = useSelector(
    (store) => store.authReducer
  );

  let urlpage = searchParams.get("pageno");
  const [pageno, setpageno] = useState(urlpage || 1);

  useEffect(() => {
    let params = {};
    pageno && (params.pageno = pageno);
    sortvalue && (params.sortvalue = sortvalue);
    sortchoice && (params.sortchoice = sortchoice);
    setSearchParams(params);
  }, [pageno, sortchoice, sortvalue]);

  let queryParams = {
    diet: searchParams.getAll("dietType").join(","),
    cuisine: searchParams.getAll("cuisineType").join(","),
    sort: searchParams.get("sortchoice"),
    healthiness: searchParams.get("sortvalue") && sortchoice,
    //query :searchParams.get("query")
  };

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
    }
  };

  const { allRecipes , loading: recipeLoading, error: recipeError } = useSelector((store) => store.recipeReducer);

  const dispatch = useDispatch();
  useEffect(() => {
     // Dispatch fetchAllRecipe action when the location search changes
  
    dispatch(fetchAllRecipe(searchParams.get("pageno"), queryParams));
  }, [location.search]);

  return (
    <Box my="90px" overflow={"hidden"}>
      <Box
        width={"98%"}
        margin="auto"
        pt={{ base: "30px", md: "60px", lg: "80px" }}
      >
        <Box display={{ base: "block", sm: "block", md: "none" }}>
          {" "}
          <FilterSidebarDrawer />
        </Box>

        <Grid gridTemplateColumns={{ sm: "100%", md: "20% 78%" }} gap={"5px"}>
          {/* filters section start */}
          {/* for large screen */}

          <GridItem>
            <Box display={{ base: "none", sm: "none", md: "block" }}>
              <FiltersSidebar />
            </Box>
          </GridItem>
          {/* for small screen */}

          {/* products section start */}
          <GridItem>
            <VStack justify={"space-between"} p="10px">
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
                  Recipes
                </Heading>
                <HStack
                  w={{ sm: "60%", md: "50%", lg: "40%" }}
                  justify={"space-between"}
                >
                  <Text fontSize={"xl"}>Sort: </Text>
                  <Select onChange={(e) => setsortChoice(e.target.value)}>
                    <option value="">Choose Sort basis</option>
                    <option value="caffeine">caffeine</option>
                    <option value="energy">energy</option>
                    <option value="calories">calories</option>
                    <option value="cholesterol">cholesterol</option>
                  </Select>
                  <Slider
                    aria-label="slider-ex-1"
                    defaultValue={50}
                    onChangeEnd={(e) => {
                      setsortValue(e);
                    }}
                    min={1}
                    max={100}
                    step={1}
                    w="80%"
                    onMouseEnter={() => setShowTooltip(true)}
                    onMouseLeave={() => setShowTooltip(false)}
                  >
                    <SliderTrack>
                      <SliderFilledTrack />
                    </SliderTrack>
                    <Tooltip
                      hasArrow
                      bg="teal.500"
                      color="white"
                      placement="top"
                      isOpen={showTooltip}
                      label={`${sortvalue}%`}
                    >
                      <SliderThumb />
                    </Tooltip>
                  </Slider>
                </HStack>
              </HStack>
              <Divider borderColor={"black"} />
              {/* Display loading spinner while fetching data */}
              {recipeLoading ? (
              <Spinner size="xl" />
            ) : (
              <Grid
                gridTemplateColumns={{
                  base: "1fr",
                  md: "repeat(2,1fr)",
                  lg: "repeat(3,1fr)",
                }}
                gap="5"
              >
                {/* Display recipe cards or error message */}
                {allRecipes && allRecipes.length > 0 ? (
                  allRecipes.map((el, index) => (
                    <RecipeCard
                      key={el.id}
                      el={el}
                      handleAddToBookmark={handleAddToBookmark}
                    />
                  ))
                ) : (
                  // Display error message if there's an error
                  <Text color="red.500">{recipeError || "No recipes found."}</Text>
                )}
              </Grid>
            )}
            </VStack>
          </GridItem>
        </Grid>
        <Box>
          <Flex
            m="10px auto"
            justify={"center"}
            border="2px solid #0076be"
            alignItems="center"
            w="300px"
            borderStyle="dashed"
            borderRadius={"5px"}
            className="pagination"
          >
            {allRecipes && allRecipes.length > 1 && (
              <Pagination
                current={pageno}
                total={20}
                handlePageChange={(page) => setpageno(page)}
              />
            )}
          </Flex>
        </Box>
      </Box>{" "}
    </Box>
  );
};

export default AllRecipe;
