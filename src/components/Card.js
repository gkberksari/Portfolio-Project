import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {

  const getGithubLink = (projectTitle) => {
    switch(projectTitle) {
      case "My Portfolio Project":
        return "https://github.com/gkberksari/portfolio-project";
      case "Word Bank":
        return "https://github.com/gkberksari/word-bank";
      default:
        return "#";
    }
  };

  return (
    <VStack
      bg="white"
      borderRadius="xl"
      overflow="hidden"
      spacing={4}
      align="stretch"
    >
      <Image
        src={imageSrc}
        alt={title}
        borderTopRadius="xl"
        height="340px"  // Sabit yükseklik
        width="100%"    // Genişlik kartın tamamını kaplasın
        objectFit="cover"  // Resmi kırpmadan, en iyi şekilde sığdır
        objectPosition="center"  // Resmi ortala
        />
      <VStack 
        align="flex-start" 
        p={5} 
        spacing={4}
      >
        <Heading size="md">
          {title}
        </Heading>
        <Text color="gray.600">
          {description}
        </Text>
        <HStack 
          spacing={2}
          color="black"
          as="a"
          href={getGithubLink(title)}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Text fontWeight="medium">See more</Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Card;
