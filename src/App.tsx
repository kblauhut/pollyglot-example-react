import { HStack, Stack, VStack, styled } from "panda-css/jsx";
import { useIntl } from "react-intl";

export const App = () => {
  const intl = useIntl();
  console.log(intl.locale);
  return (
    <VStack minH="100vh" py="8" gap="12">
      <VStack px="8" maxW="1200px" w="full" gap="10">
        <HStack w="full" justifyContent="space-between">
          <styled.h1 fontSize="3xl" fontWeight="bold">
            Generic AI Solutions
          </styled.h1>
          <styled.button
            fontSize="lg"
            fontWeight="semibold"
            bg="yellow.400"
            px="4"
            py="2"
            borderRadius="full"
          >
            Contact Us
          </styled.button>
        </HStack>

        <Stack>
          <styled.h1 fontSize="6xl" fontWeight="bold">
            Just Another AI Company
          </styled.h1>
          <styled.div fontSize="xl" fontWeight="semibold">
            Welcome to Generic AI Solutions, where we promise to revolutionize
            the world with... wait for it... AI! Yes, you heard it right.
            Because who needs originality when you have the power of artificial
            intelligence at your fingertips?
          </styled.div>
        </Stack>

        <Stack w="full" h="800px" borderRadius="2xl" bg="yellow.400" p="8">
          {[
            "Predictability: Because who needs surprises? Our AI solutions offer the same old outcomes every time, ensuring you never have to worry about innovation throwing a wrench in your plans.",
            "Efficiency: Why bother with human effort when you can automate everything with our AI? Sit back, relax, and let the robots do the work while you sip your coffee.",
            "Familiarity: Change is hard, so why bother? Our AI mimics the status quo so closely, you'll forget you ever upgraded – until you see the bill, that is.",
            "Data-driven decisions: Because who needs gut feelings when you can rely on cold, hard data? Let our algorithms crunch the numbers while you ponder why you're paying for something you could've done yourself.",
          ].map((feature) => (
            <styled.div fontSize="lg" fontWeight="semibold" maxW="50%">
              {feature}
            </styled.div>
          ))}
        </Stack>
      </VStack>
    </VStack>
  );
};
