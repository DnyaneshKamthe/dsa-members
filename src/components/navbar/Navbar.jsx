import { Box, Flex, HStack, Heading, Spacer, Avatar, Icon,Image} from "@chakra-ui/react";
import { BsBell} from "react-icons/bs";
// import { ChevronDownIcon } from '@chakra-ui/icons'
// import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  // const auth = useAuth()
  return (
    <div>
      <Flex  gap={{base:"1rem" , sm:"2rem", md:"4rem", lg:"8rem"}} justifyContent="space-between">
        <Box boxSize="100px" mt="1rem" ml="2rem" bg="white">
          <Image src="LOGO.svg" alt="Logo" />
        </Box>
        {/* <Spacer w="2rem"/> */}
        <Flex  as="nav" p="10px" bg="blue.900" alignItems="center" justifyContent="space-between" gap="10px" w={{base:"100%"}}>
            
            <Heading as="h1" color="white">Dashboard</Heading>
            <Spacer/>
            <HStack spacing="10px">
                <Avatar name='Dan Abrahmov' src='user.png' />
                {/* <Text color="white">{auth.user.userName}</Text> */}
                <Box bg="white" borderRadius="50px" w="50px" h="50px"><Icon as={BsBell} mx="1em" my="1em" /></Box>
            </HStack>
        </Flex>
      </Flex>
    </div>
  )
}
{/* <Icon as={ChevronDownIcon} /> */}