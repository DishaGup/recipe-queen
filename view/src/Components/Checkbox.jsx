import React from "react";
import { Box, Checkbox } from "@chakra-ui/react";
const Checkboxx = ({ isChecked, value, name, onChange, children }) => {
  return (
    <Box p={1}>
      <Checkbox
        _hover={{ color: "#24a3b5", fontWeight: "bold" }}
        type="checkbox"
        checked={isChecked}
        value={value}
        name={name}
        onChange={() => onChange(value)}
      >
        {" "}
        {children}
      </Checkbox>
    </Box>
  );
};

export default Checkboxx;
