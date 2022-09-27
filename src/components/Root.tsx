import {Box, Button, HStack} from "@chakra-ui/react";
import {Outlet} from "react-router-dom";
import {GiConverseShoe} from "react-icons/gi";

export default function Root() {
  return (
    <Box>
      <HStack
        justifyContent={"space-between"}
        py={"5"}
        px={"10"}
        borderBottomWidth={2}
      >
        <Box color={"green.500"}>
          <GiConverseShoe size={"48"} />
        </Box>
        <HStack spacing={2}>
          <Button>Log in</Button>
          <Button colorScheme={"green"}>Sign up</Button>
        </HStack>
      </HStack>
      <Outlet />
    </Box>
  );
}
