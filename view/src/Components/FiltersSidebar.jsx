import Checkboxx from "./Checkbox";

import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
} from "@chakra-ui/accordion";
//import { Checkbox } from "@chakra-ui/checkbox";
import {
  Box, Divider, Flex, Heading, HStack, Stack, Text, VStack,Button
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";


const FiltersSidebar = () => {
  const [isCuisineAccordionOpen, setIsCuisineAccordionOpen] = useState(false);
  const [isDietAccordionOpen, setIsDietAccordionOpen] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const [cuisineType, setcuisineType] = useState(
    searchParams.getAll("cuisineType") || []
  );

  const initialdietType = searchParams.getAll("dietType");

  const [dietType, setdietType] = useState(initialdietType || []);

  useEffect(() => {
    let params = {};
    dietType && (params.dietType = dietType);

    cuisineType && (params.cuisineType = cuisineType);

    setSearchParams(params);
  }, [dietType, cuisineType]);

  const handleDietFilter = (e) => {
    let filterdata = [...dietType];
    let value = e;
    if (filterdata.includes(value)) {
      filterdata = filterdata.filter((el) => el !== value);
    } else {
      filterdata.push(value);
    }
    setdietType(filterdata);
  };

  const all_cuisine_type = [
    "African",
    "Asian",
    "American",
    "British",
    "Cajun",
    "Caribbean",
    "Chinese",
    "European",
  ];
  const all_diet_type = [" Gluten Free", "Ketogenic", "Vegan"];
  const handleCuisineFilter = (e) => {
    let cuisinedata = [...cuisineType];
    let value = e;
    if (cuisinedata.includes(value)) {
      cuisinedata = cuisinedata.filter((el) => el !== value);
    } else {
      cuisinedata.push(value);
    }
    setcuisineType(cuisinedata);
  };
  // console.log(cuisineType,dietType);

  return (
    <VStack p="10px" >
   
      <Heading
        fontWeight={"medium"}
        fontSize={{ base: "18px", sm: "20px", md: "25px", lg: "35px" }}>
        Filters
      </Heading>

    <Divider borderColor={"black"} />

    <Box maxH="300px" overflowY="scroll" w="full" >
        <Accordion flex="1" allowToggle>
          <AccordionItem>
           
              <AccordionButton>
                <Box as="span" flex='1' textAlign='left'>
                <Heading fontSize='19px' fontWeight={'5'} alignItems={'center'} >    Cuisine  </Heading>
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <Box as="span" flex="1" textAlign="left">

                <Flex>

                <AccordionPanel  scrollBehavior='smooth' scrollMarginRight={'10px'} maxH='300px'  >

              {all_cuisine_type.map((el, index) => (
                <div key={index} className="checkbox-item">
                  <Checkboxx
                    isChecked={cuisineType.includes(el)}
                    value={el}
                    name="cuisineType"
                    onChange={handleCuisineFilter}

                  >
                    {el}
                  </Checkboxx>
                </div>
              ))}
                </AccordionPanel>

                </Flex>
              </Box>



           
          </AccordionItem>
        </Accordion>
      </Box>


      <Divider borderColor={"black"} />
      <Box maxH="300px" overflowY="scroll" w="full" >
      <Accordion flex="1" allowToggle>
          <AccordionItem>
           
              <AccordionButton>
                <Box as="span" flex='1' textAlign='left'>
                  <Heading fontSize='19px' fontWeight={'5'} alignItems={'center'} >  Diets </Heading>
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <Box as="span" flex="1" textAlign="left">

                <Flex>

                <AccordionPanel  scrollBehavior='smooth' scrollMarginRight={'10px'} maxH='300px'  >
              {all_diet_type.map((el, ind) => (
                <div key={ind} className="checkbox-item">
                  <Checkboxx
                    isChecked={dietType.includes(el)}
                    name="dietType"
                    onChange={handleDietFilter}
                    value={el}
                  >
                    {el}
                  </Checkboxx>
                </div>
              ))}
            </AccordionPanel>

</Flex>
</Box>

</AccordionItem>
</Accordion>
</Box>


<Button>
  <Link to='/bookmarked-data'>See Bookmarks </Link>
</Button>


      </VStack>
  );
};

export default FiltersSidebar;
