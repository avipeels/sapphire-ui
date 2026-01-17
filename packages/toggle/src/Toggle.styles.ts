import styled from "styled-components";
import { Theme } from "@sapphire-ui/design-tokens";
import { getSizeMultiplier } from "./utils/sizeMapping";

interface StyledToggleProps {
  size: keyof Theme['fontSizes'];
  checked?: boolean;
}

export const StyledToggle = styled.button<StyledToggleProps>`
    ${({ theme, size }) => {
        const sizeMultiplier = getSizeMultiplier(size);
        
        return `
        font-size: ${theme.fontSizes[size]};
        border: none; 
        height: ${theme.sizing[size]};
        width: ${theme.sizing[String(sizeMultiplier * 2) as keyof typeof theme.sizing]};
        border-radius: ${theme.borderRadius["2xl"]};
        background-color: ${theme.semanticColors.background.brandPrimary};
        position: relative;
    `;
    }}
`;

export const Toggler = styled.div<StyledToggleProps>`
    ${({ theme, size, checked }) => `
        font-size: ${theme.fontSizes[size]};
        height: ${theme.sizing[size]};
        width: ${theme.sizing[size]};
        border-radius: ${theme.borderRadius["2xl"]};
        background-color: white;
        position: absolute;
        top: 0;
        ${checked ? `left: 0` : `right:  0`}
    `}
`;