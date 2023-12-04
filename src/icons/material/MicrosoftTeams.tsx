import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const MicrosoftTeamsIcon: FC<FlexSvgProps> = ({
  height = 24,
  width = 24,
  scale,
  opacity,
  translateY,
  translateX,
  color = '#ffffff',
  fontSize,
  fontFamily,
  fontStyle,
  fontWeight,
  letterSpacing,
  ...rest
}) => {
  const { style, ownProps } = useFlexProps(rest);

  return (
    <Svg
      viewBox="0 0 24 24"
      height={height}
      width={width}
      scale={scale}
      opacity={opacity}
      translateY={translateY}
      translateX={translateX}
      color={color}
      fontSize={fontSize}
      fontFamily={fontFamily}
      fontStyle={fontStyle}
      fontWeight={fontWeight}
      letterSpacing={letterSpacing}
      style={style}
      {...ownProps}
      fill={ownProps?.fill || color || '#ffffff'}
    >
      <Path d="M19.19 8.77047C18.8833 8.77047 18.5967 8.7138 18.33 8.60047C18.07 8.48714 17.84 8.33047 17.64 8.13047C17.44 7.93047 17.2833 7.70047 17.17 7.44047C17.0567 7.1738 17 6.88714 17 6.58047C17 6.28047 17.0567 5.99714 17.17 5.73047C17.2833 5.4638 17.44 5.2338 17.64 5.04047C17.84 4.84047 18.07 4.6838 18.33 4.57047C18.5967 4.45047 18.8833 4.3938 19.19 4.40047C19.49 4.3938 19.7733 4.45047 20.04 4.57047C20.3067 4.6838 20.54 4.84047 20.74 5.04047C20.9333 5.2338 21.09 5.4638 21.21 5.73047C21.3233 5.99714 21.38 6.28047 21.38 6.58047C21.38 6.88714 21.3233 7.1738 21.21 7.44047C21.0967 7.70047 20.94 7.93047 20.74 8.13047C20.54 8.33047 20.3067 8.48714 20.04 8.60047C19.7733 8.7138 19.49 8.77047 19.19 8.77047ZM19.19 5.65047C18.93 5.65047 18.7 5.74047 18.5 5.92047C18.3333 6.10047 18.25 6.32047 18.25 6.58047C18.25 6.84047 18.3333 7.0638 18.5 7.25047C18.7 7.41714 18.93 7.50047 19.19 7.50047C19.45 7.50047 19.67 7.41714 19.85 7.25047C20.0367 7.0838 20.13 6.86047 20.13 6.58047C20.13 6.32047 20.0367 6.10047 19.85 5.92047C19.67 5.74047 19.45 5.65047 19.19 5.65047ZM22 10.3305V15.0005C22 15.4205 21.92 15.8205 21.76 16.2005C21.5867 16.5805 21.3633 16.9105 21.09 17.1905C20.8033 17.4771 20.47 17.7005 20.09 17.8605C19.6967 18.0271 19.2933 18.1105 18.88 18.1105C18.6267 18.1105 18.3733 18.0738 18.12 18.0005C17.86 17.9538 17.6233 17.8705 17.41 17.7505C17.25 18.2771 17.0133 18.7571 16.7 19.1905C16.3867 19.6238 16.02 19.9938 15.6 20.3005C15.18 20.6071 14.7167 20.8405 14.21 21.0005C13.7033 21.1805 13.1767 21.2705 12.63 21.2705C11.99 21.2705 11.3867 21.1605 10.82 20.9405C10.2733 20.7205 9.77333 20.4071 9.32 20.0005C8.88 19.6205 8.51667 19.1671 8.23 18.6405C7.93667 18.1071 7.74667 17.5271 7.66 16.9005H2.83C2.61 16.9005 2.41333 16.8171 2.24 16.6505C2.08 16.4905 2 16.2971 2 16.0705V7.73047C2 7.5038 2.08 7.30714 2.24 7.14047C2.41333 6.98047 2.61 6.90047 2.83 6.90047H10C9.80667 6.50047 9.71 6.0838 9.71 5.65047C9.71 5.2438 9.78667 4.86047 9.94 4.50047C10.0867 4.16714 10.2933 3.86047 10.56 3.58047C10.8267 3.32047 11.14 3.1138 11.5 2.96047C11.8333 2.80714 12.2067 2.73047 12.62 2.73047C13.0267 2.73047 13.4067 2.80714 13.76 2.96047C14.1133 3.1138 14.4233 3.32047 14.69 3.58047C14.9567 3.86047 15.1633 4.16714 15.31 4.50047C15.4633 4.86047 15.54 5.2438 15.54 5.65047C15.54 6.05047 15.4633 6.43047 15.31 6.79047C15.1633 7.1438 14.9567 7.45047 14.69 7.71047C14.4233 7.97714 14.1133 8.18714 13.76 8.34047C13.4067 8.4938 13.0267 8.57047 12.62 8.57047C12.52 8.57047 12.4167 8.5638 12.31 8.55047C12.21 8.53714 12.1067 8.52047 12 8.50047V9.40047H21.06C21.32 9.40047 21.5433 9.49047 21.73 9.67047C21.91 9.85047 22 10.0705 22 10.3305ZM12.63 4.00047C12.3967 4.00047 12.1867 4.03714 12 4.11047C11.78 4.19714 11.5933 4.31714 11.44 4.47047C11.2933 4.6238 11.1767 4.80047 11.09 5.00047C11.0033 5.20714 10.96 5.4238 10.96 5.65047C10.96 5.8838 11.0033 6.10047 11.09 6.30047C11.1767 6.50047 11.2933 6.67714 11.44 6.83047C11.5933 6.97714 11.78 7.09714 12 7.19047C12.1867 7.27714 12.3967 7.32047 12.63 7.32047C12.8567 7.32047 13.07 7.27714 13.27 7.19047C13.47 7.09714 13.6467 6.97714 13.8 6.83047C13.9533 6.67714 14.0733 6.50047 14.16 6.30047C14.2533 6.10047 14.3 5.8838 14.3 5.65047C14.3 5.4238 14.2533 5.20714 14.16 5.00047C14.0733 4.80047 13.9533 4.6238 13.8 4.47047C13.6467 4.31714 13.47 4.19714 13.27 4.11047C13.07 4.03714 12.8567 4.00047 12.63 4.00047ZM7.78 10.1805H9.66V8.62047H4.34V10.1805H6.22V15.1805H7.78V10.1805ZM16.38 16.2705V10.6505H12V16.0705C12 16.2971 11.92 16.4905 11.76 16.6505C11.5867 16.8171 11.39 16.9005 11.17 16.9005H8.92C9.00667 17.3471 9.16333 17.7638 9.39 18.1505C9.61667 18.5305 9.89 18.8605 10.21 19.1405C10.53 19.4138 10.8967 19.6305 11.31 19.7905C11.7167 19.9305 12.1567 20.0005 12.63 20.0005C13.1433 20.0005 13.6267 19.9105 14.08 19.7305C14.5333 19.5305 14.9333 19.2605 15.28 18.9205C15.62 18.5805 15.8867 18.1838 16.08 17.7305C16.28 17.2771 16.38 16.7905 16.38 16.2705ZM20.75 15.0005V10.6505H17.63V16.3605C17.7967 16.5271 17.9867 16.6538 18.2 16.7405C18.4 16.8205 18.6267 16.8605 18.88 16.8605C19.14 16.8605 19.3833 16.8105 19.61 16.7105C19.8367 16.6105 20.0333 16.4771 20.2 16.3105C20.3733 16.1438 20.5067 15.9438 20.6 15.7105C20.7 15.4838 20.75 15.2471 20.75 15.0005Z" />
    </Svg>
  );
};
