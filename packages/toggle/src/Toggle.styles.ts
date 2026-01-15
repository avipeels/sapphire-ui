import styled from "styled-components";
import { Theme } from "@sapphire-ui/design-tokens";

interface StyledToggleProps {
  size: keyof Theme['fontSizes'];
  checked?: boolean;
}

export const StyledToggle = styled.button<StyledToggleProps>`
    ${({ theme, size }) => {
        const sizeMap: Record<keyof Theme['fontSizes'], number> = {
            xs: 3,
            sm: 4,
            md: 6,
            lg: 8,
            xl: 12,
            '2xl': 16,
            '3xl': 24,
            '4xl': 32,
            '5xl': 40,
            '6xl': 48,
        };
        
        return `
        font-size: ${theme.fontSizes[size]};
        border: none; 
        height: ${theme.sizing[size]};
        width: ${theme.sizing[String(sizeMap[size] * 2) as keyof typeof theme.sizing]};
        border-radius: ${theme.borderRadius["2xl"]};
        background-color: ${theme.semanticColors.background.brandPrimary};
        position: relative;
    `;
    }}
`;

export const ToggleBall = styled.div<StyledToggleProps>`
    ${({ theme, size, checked }) => `
        font-size: ${theme.fontSizes[size]};
        height: ${theme.sizing[size]};
        width: ${theme.sizing[size]};
        border-radius: ${theme.borderRadius["2xl"]};
        background-color: white;
        position: absolute;
        top: 0;
        ${checked ? `left: ${theme.spacing[size]}` : `right:  ${theme.spacing[size]}`}
    `}
`;