import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';

const StyledApp = styled.div`
  ${tw`bg-gray-100 h-screen`}
`;

const App: React.FC = () => {
  return (
    <StyledApp>
      {/* Your app content goes here */}
    </StyledApp>
  );
};

export default App;