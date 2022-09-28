import {
  Box,
  Button,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";

import {Outlet} from "react-router-dom";
import {GiConverseShoe} from "react-icons/gi";
import {FaMoon, FaUserNinja, FaLock} from "react-icons/fa";

export default function Root() {
  const {isOpen, onClose, onOpen} = useDisclosure();
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
          <IconButton
            variant={"ghost"}
            aria-label="Toggle dark mode"
            icon={<FaMoon />}
          />
          <Button onClick={onOpen}>Log in</Button>
          <Button colorScheme={"green"}>Sign up</Button>
        </HStack>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Log In</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <VStack>
                <InputGroup>
                  <InputLeftElement
                    children={
                      <Box color="gray.500">
                        <FaUserNinja />
                      </Box>
                    }
                  />
                  <Input variant={"filled"} placeholder="Email"></Input>
                </InputGroup>
                <InputGroup>
                  <InputLeftElement
                    children={
                      <Box color="gray.500">
                        <FaLock />
                      </Box>
                    }
                  />
                  <Input variant={"filled"} placeholder="Password"></Input>
                </InputGroup>
                <Button colorScheme={"green"} w="100%">
                  Log in
                </Button>
              </VStack>
            </ModalBody>
          </ModalContent>
        </Modal>
      </HStack>
      <Outlet />
    </Box>
  );
}
