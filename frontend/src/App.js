// src/App.js
import React from 'react';
import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { SubmitButton } from './submit';
import { 
  AppContainer, 
  Header, 
  HeaderTitle, 
  HeaderSubtitle,
  MainContent,
  FooterContainer
} from './styles/StyledComponents';
import './styles/GlobalStyles.css';

function App() {
  return (
    <AppContainer>
      <Header>
        <HeaderTitle>
          Vector<span>Flow</span> Pipeline Builder
        </HeaderTitle>
        <HeaderSubtitle>
          Build and visualize your data processing pipelines with drag-and-drop simplicity
        </HeaderSubtitle>
      </Header>
      
      <PipelineToolbar />
      
      <MainContent>
        <PipelineUI />
      </MainContent>
      
      <FooterContainer>
        <SubmitButton />
      </FooterContainer>
    </AppContainer>
  );
}

export default App;