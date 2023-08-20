import React from "react";
import { Button } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import { Box, Heading } from "@chakra-ui/layout";
import {
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerOverlay,
} from "@chakra-ui/modal";
import FiltersSidebar from "./FiltersSidebar";
const FilterSidebarDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box>
      <Button colorScheme="blue" onClick={onOpen}>
        <Heading fontWeight={"medium"} fontSize="25px">
          Filters
        </Heading>
      </Button>

      <Drawer placement={"left"} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton onClick={onClose} />
          <FiltersSidebar />
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default FilterSidebarDrawer;
