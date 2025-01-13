import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "Word Bank",
    description:
      "A real-time multiplayer word game where players compete by finding words in specific categories. Built with Node.js, Express.js, MySQL, and Socket.IO.",
    getImageSrc: () => require("../images/word-bank.png"),
  },
  {
    title: "My Portfolio Project",
    description:
    "A responsive personal portfolio website showcasing projects and skills. Built with React, Chakra UI, and Formik for form management.",
        getImageSrc: () => require("../images/portfolio-project.png"),
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#2D3748"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns={{
          base: "1fr",            // Mobil: tek sütun
          md: "repeat(2,1fr)"     // Tablet ve üstü: iki sütun
        }}
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
