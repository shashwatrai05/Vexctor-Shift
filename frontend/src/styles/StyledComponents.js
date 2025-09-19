// src/styles/StyledComponents.js
import styled from 'styled-components';
import { theme } from './theme';

export const AppContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: linear-gradient(135deg, ${theme.colors.dark.bg} 0%, ${theme.colors.dark.surface} 100%);
  color: ${theme.colors.dark.text};
`;

export const Header = styled.header`
  background: ${theme.colors.dark.surface};
  border-bottom: 1px solid ${theme.colors.dark.border};
  padding: ${theme.spacing.lg} ${theme.spacing.xl};
  box-shadow: ${theme.shadows.dark};
`;

export const HeaderTitle = styled.h1`
  font-size: ${theme.typography.fontSize['2xl']};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.dark.text};
  margin: 0;
  
  span {
    color: ${theme.colors.primary[400]};
  }
`;

export const HeaderSubtitle = styled.p`
  font-size: ${theme.typography.fontSize.sm};
  color: ${theme.colors.dark.textSecondary};
  margin: ${theme.spacing.xs} 0 0 0;
`;

export const ToolbarContainer = styled.div`
  background: ${theme.colors.dark.surface};
  border-bottom: 1px solid ${theme.colors.dark.border};
  padding: ${theme.spacing.lg} ${theme.spacing.xl};
  min-height: 120px;
`;

export const ToolbarTitle = styled.h2`
  font-size: ${theme.typography.fontSize.lg};
  font-weight: ${theme.typography.fontWeight.semibold};
  color: ${theme.colors.dark.text};
  margin-bottom: ${theme.spacing.md};
`;

export const NodeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: ${theme.spacing.md};
  max-width: 1200px;
`;

export const DraggableNodeContainer = styled.div`
  min-width: 100px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: ${theme.borderRadius.lg};
  background: ${props => props.nodeColor || theme.colors.dark.elevated};
  border: 1px solid ${theme.colors.dark.border};
  cursor: grab;
  transition: ${theme.transitions.normal};
  user-select: none;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: ${theme.shadows.lg};
    border-color: ${props => props.nodeColor || theme.colors.primary[400]};
  }
  
  &:active {
    cursor: grabbing;
    transform: translateY(-2px);
  }
`;

export const NodeLabel = styled.span`
  color: ${theme.colors.dark.text};
  font-size: ${theme.typography.fontSize.sm};
  font-weight: ${theme.typography.fontWeight.medium};
  text-align: center;
  margin-top: ${theme.spacing.xs};
`;

export const NodeIcon = styled.div`
  width: 24px;
  height: 24px;
  border-radius: ${theme.borderRadius.sm};
  background: ${props => props.iconColor || theme.colors.primary[400]};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 12px;
  font-weight: bold;
`;

export const MainContent = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const CanvasContainer = styled.div`
  flex: 1;
  background: ${theme.colors.dark.bg};
  position: relative;
`;

export const FooterContainer = styled.footer`
  background: ${theme.colors.dark.surface};
  border-top: 1px solid ${theme.colors.dark.border};
  padding: ${theme.spacing.lg} ${theme.spacing.xl};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SubmitButtonStyled = styled.button`
  background: linear-gradient(135deg, ${theme.colors.primary[500]} 0%, ${theme.colors.primary[600]} 100%);
  color: white;
  border: none;
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.md} ${theme.spacing.xl};
  font-size: ${theme.typography.fontSize.base};
  font-weight: ${theme.typography.fontWeight.semibold};
  cursor: pointer;
  transition: ${theme.transitions.normal};
  box-shadow: ${theme.shadows.md};
  min-width: 120px;
  
  &:hover {
    background: linear-gradient(135deg, ${theme.colors.primary[600]} 0%, ${theme.colors.primary[700]} 100%);
    transform: translateY(-2px);
    box-shadow: ${theme.shadows.lg};
  }
  
  &:active {
    transform: translateY(0);
  }
  
  &:disabled {
    background: ${theme.colors.gray[600]};
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

export const BaseNodeStyled = styled.div`
  width: ${props => props.width || 200}px;
  min-height: ${props => props.height || 80}px;
  background: ${theme.colors.dark.elevated};
  border: 1px solid ${theme.colors.dark.border};
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.md};
  box-shadow: ${theme.shadows.dark};
  transition: ${theme.transitions.normal};
  
  &:hover {
    border-color: ${props => props.nodeColor || theme.colors.primary[400]};
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
  }
`;

export const NodeHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${theme.spacing.sm};
  gap: ${theme.spacing.xs};
`;

export const NodeTitle = styled.h3`
  font-size: ${theme.typography.fontSize.sm};
  font-weight: ${theme.typography.fontWeight.semibold};
  color: ${theme.colors.dark.text};
  margin: 0;
`;

export const NodeContent = styled.div`
  font-size: ${theme.typography.fontSize.xs};
  color: ${theme.colors.dark.textSecondary};
`;

export const FormField = styled.div`
  margin-bottom: ${theme.spacing.sm};
  
  &:last-child {
    margin-bottom: 0;
  }
`;

export const Label = styled.label`
  display: block;
  font-size: ${theme.typography.fontSize.xs};
  font-weight: ${theme.typography.fontWeight.medium};
  color: ${theme.colors.dark.text};
  margin-bottom: ${theme.spacing.xs};
`;

export const Input = styled.input`
  width: 100%;
  padding: ${theme.spacing.xs} ${theme.spacing.sm};
  background: ${theme.colors.dark.surface};
  border: 1px solid ${theme.colors.dark.border};
  border-radius: ${theme.borderRadius.sm};
  color: ${theme.colors.dark.text};
  font-size: ${theme.typography.fontSize.xs};
  transition: ${theme.transitions.fast};
  
  &:focus {
    outline: none;
    border-color: ${theme.colors.primary[400]};
    box-shadow: 0 0 0 2px rgba(14, 165, 233, 0.2);
  }
  
  &::placeholder {
    color: ${theme.colors.dark.textMuted};
  }
`;

export const Select = styled.select`
  width: 100%;
  padding: ${theme.spacing.xs} ${theme.spacing.sm};
  background: ${theme.colors.dark.surface};
  border: 1px solid ${theme.colors.dark.border};
  border-radius: ${theme.borderRadius.sm};
  color: ${theme.colors.dark.text};
  font-size: ${theme.typography.fontSize.xs};
  transition: ${theme.transitions.fast};
  cursor: pointer;
  
  &:focus {
    outline: none;
    border-color: ${theme.colors.primary[400]};
    box-shadow: 0 0 0 2px rgba(14, 165, 233, 0.2);
  }
  
  option {
    background: ${theme.colors.dark.surface};
    color: ${theme.colors.dark.text};
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: ${theme.spacing.xs} ${theme.spacing.sm};
  background: ${theme.colors.dark.surface};
  border: 1px solid ${theme.colors.dark.border};
  border-radius: ${theme.borderRadius.sm};
  color: ${theme.colors.dark.text};
  font-size: ${theme.typography.fontSize.xs};
  font-family: ${theme.typography.fontFamily.mono};
  resize: none;
  transition: ${theme.transitions.fast};
  
  &:focus {
    outline: none;
    border-color: ${theme.colors.primary[400]};
    box-shadow: 0 0 0 2px rgba(14, 165, 233, 0.2);
  }
  
  &::placeholder {
    color: ${theme.colors.dark.textMuted};
  }
`;