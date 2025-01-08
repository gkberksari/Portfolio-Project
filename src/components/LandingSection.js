import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import myImage from "../images/my-photo.png";

const greeting = "Hello, I am Gökberk!";
const bio1 = "A Junior";
const bio2 = "Full Stack Developer";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={16}>
      <Avatar 
        src={myImage} 
        size="2xl"
        name="Gökberk"
      />
      <VStack spacing={4}>
        <Heading as="h1" size="xl" noOfLines={1}>
          {greeting}
        </Heading>
        <VStack spacing={2}>
          <Heading as="h2" size="md" noOfLines={1}>
            {bio1}
          </Heading>
          <Heading as="h2" size="md" noOfLines={1}>
            {bio2}
          </Heading>
        </VStack>
      </VStack>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
