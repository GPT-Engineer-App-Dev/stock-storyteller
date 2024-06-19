import { Container, Text, VStack, Heading, Box, Image, Link, Flex } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.lg" p={4}>
      <VStack spacing={8} align="stretch">
        <Heading as="h1" size="2xl" textAlign="center" my={8}>
          Financial Times
        </Heading>
        <Box>
          <Image src="/images/financial-times-header.jpg" alt="Financial Times Header" borderRadius="md" />
        </Box>
        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Top Stories
          </Heading>
          <VStack spacing={4} align="stretch">
            <Box p={4} shadow="md" borderWidth="1px" borderRadius="md">
              <Heading as="h3" size="md" mb={2}>
                Story Title 1
              </Heading>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
              </Text>
              <Link color="teal.500" href="#">
                Read more
              </Link>
            </Box>
            <Box p={4} shadow="md" borderWidth="1px" borderRadius="md">
              <Heading as="h3" size="md" mb={2}>
                Story Title 2
              </Heading>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
              </Text>
              <Link color="teal.500" href="#">
                Read more
              </Link>
            </Box>
          </VStack>
        </Box>
        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Latest News
          </Heading>
          <VStack spacing={4} align="stretch">
            <Box p={4} shadow="md" borderWidth="1px" borderRadius="md">
              <Heading as="h3" size="md" mb={2}>
                News Title 1
              </Heading>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
              </Text>
              <Link color="teal.500" href="#">
                Read more
              </Link>
            </Box>
            <Box p={4} shadow="md" borderWidth="1px" borderRadius="md">
              <Heading as="h3" size="md" mb={2}>
                News Title 2
              </Heading>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
              </Text>
              <Link color="teal.500" href="#">
                Read more
              </Link>
            </Box>
          </VStack>
        </Box>
        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Market Data
          </Heading>
          <Flex justify="space-around">
            <Box p={4} shadow="md" borderWidth="1px" borderRadius="md" flex="1" mx={2}>
              <Heading as="h3" size="md" mb={2}>
                Market 1
              </Heading>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
              </Text>
            </Box>
            <Box p={4} shadow="md" borderWidth="1px" borderRadius="md" flex="1" mx={2}>
              <Heading as="h3" size="md" mb={2}>
                Market 2
              </Heading>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
              </Text>
            </Box>
          </Flex>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;