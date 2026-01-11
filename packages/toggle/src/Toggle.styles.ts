import styled from "styled-components";
import { Theme } from "@sapphire-ui/design-tokens";

interface StyledToggleProps {
  size: keyof Theme['fontSizes'];
}

export const StyledToggle = styled.button<StyledToggleProps>`
    font-size: ${props => props.theme.fontSizes[props.size]}
`;