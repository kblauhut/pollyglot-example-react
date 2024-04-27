import { VStack, styled } from "panda-css/jsx";

export const App = () => {
  return (
    <VStack minH="100vh" py="8">
      <VStack maxW="1200px" w="full" textAlign="center">
        <styled.h1 fontSize="5xl" fontWeight="bold">
          Welcome to the Landing page
        </styled.h1>
        <styled.div fontSize="xl" fontWeight="semibold">
          Hello World
        </styled.div>
      </VStack>
    </VStack>
  );
};
