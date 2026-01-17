import { Theme } from "@sapphire-ui/design-tokens";

export const getSizeMultiplier = (size: keyof Theme['fontSizes']): number => {
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
    
    return sizeMap[size];
};
