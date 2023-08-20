import React from "react";
import {
  IconButton,
  HStack,Button
} from "@chakra-ui/react";
import { RxDoubleArrowLeft, RxDoubleArrowRight } from "react-icons/rx";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const BTN_COUNT = 5;

const getStartingIdx = (current, total) => {
  if (total - current < 2)
    return Math.max(current - (BTN_COUNT - 1 - total + current), 1);
  return Math.max(current - 2, 1);
};

const Pagination = ({ current, total, handlePageChange }) => {
  console.log(current,total)
  if (!current || isNaN(current)) {
    current = 1;
  }
  current = Number(current);

  const btns = [];
  const start = getStartingIdx(current, total);
  for (let i = start; i < Math.min(start + BTN_COUNT, total + 1); i++) {
    btns.push(
      <Button
        key={i}
        isActive={i === current}
        onClick={() => handlePageChange(i)}
      // aria-label={`Page ${i}`}
        size="sm"
        bg="transparent"
        outline="0"
        color={i === current ? "blue.500" : "gray.600"} // Adjust text color
     textColor={'black'}
      >
        {i}
      </Button>
    );
  }

  return (
    <HStack spacing={2} align="center" justifyContent="center">
      <IconButton
        bg='0'
        outline='0'
        disabled={current === 1}
        onClick={() => handlePageChange(1)}
        aria-label="First Page"
        icon={<RxDoubleArrowLeft />}
        size="sm"
      />
      <IconButton
        disabled={current === 1}
        bg='0'
        outline='0'
        onClick={() => handlePageChange(current - 1)}
        aria-label="Previous Page"
        icon={<IoIosArrowBack />}
        size="sm"
      />
      {btns}
      <IconButton
        disabled={current === total}
        bg='0'
        outline='0'
        onClick={() => handlePageChange(current + 1)}
        aria-label="Next Page"
        icon={<IoIosArrowForward />}
        size="sm"
      />
      <IconButton
        disabled={current === total}
        bg='0'
        outline='0'
        onClick={() => handlePageChange(total)}
        aria-label="Last Page"
        icon={<RxDoubleArrowRight />}
        size="sm"

      />
    </HStack>
  );
};

export default Pagination;
