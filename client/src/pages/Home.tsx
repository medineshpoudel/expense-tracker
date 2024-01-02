import React from 'react';
import { Spinner, IconButton } from '@chakra-ui/react';

const Home = () => (
  <div>
    <Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" color="blue.500" size="xl" />
    <IconButton colorScheme="blue" aria-label="Search database" />
  </div>
);

export default Home;
