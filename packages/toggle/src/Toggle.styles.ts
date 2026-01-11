import styled from "styled-components";
import { Theme } from "@sapphire-ui/design-tokens";

interface StyledToggleProps {
  size: keyof Theme['fontSizes'];
  checked?: boolean;
}

export const StyledToggle = styled.button<StyledToggleProps>`
    ${({ theme, size }) => `
        font-size: ${theme.fontSizes[size]};
        border: none;
        height: ${theme.sizing[5]};
        width: ${theme.sizing[10]};
        border-radius: ${theme.borderRadius["2xl"]};
        background-color: ${theme.semanticColors.background.brandPrimary};
        position: relative;
    `}
`;

export const ToggleBall = styled.div<StyledToggleProps>`
    ${({ theme, size, checked }) => `
        font-size: ${theme.fontSizes[size]};
        height: ${theme.sizing[5]};
        width: ${theme.sizing[5]};
        border-radius: ${theme.borderRadius["2xl"]};
        background-color: white;
        position: absolute;
        top: 0;
        ${checked ? `left: 20px` : `right: 20px`}
    `}
`;