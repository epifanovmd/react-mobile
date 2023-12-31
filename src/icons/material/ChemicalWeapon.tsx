import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ChemicalWeaponIcon: FC<FlexSvgProps> = ({
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
      <Path d="M11 7.83C9.83004 7.42 9.00004 6.3 9.00004 5C9.00004 4.20435 9.31611 3.44129 9.87872 2.87868C10.4413 2.31607 11.2044 2 12 2C12.7957 2 13.5588 2.31607 14.1214 2.87868C14.684 3.44129 15 4.20435 15 5C15 6.31 14.16 7.42 13 7.83V10.64C12.68 10.55 12.35 10.5 12 10.5C11.65 10.5 11.32 10.55 11 10.64V7.83ZM18.3 21.1C17.16 20.45 16.62 19.18 16.84 17.96L14.4 16.55C14.88 16.09 15.24 15.5 15.4 14.82L17.84 16.23C18.78 15.42 20.16 15.26 21.29 15.91C22.73 16.74 23.22 18.57 22.39 20C21.56 21.44 19.73 21.93 18.3 21.1ZM2.70004 15.9C3.83004 15.25 5.21004 15.42 6.15004 16.22L8.60004 14.81C8.76004 15.5 9.11004 16.08 9.60004 16.54L7.15004 17.95C7.38004 19.17 6.83004 20.45 5.70004 21.1C4.26004 21.93 2.43004 21.44 1.60004 20C0.770042 18.57 1.26004 16.73 2.70004 15.9ZM14 14C14 14.5304 13.7893 15.0391 13.4143 15.4142C13.0392 15.7893 12.5305 16 12 16C10.89 16 10 15.1 10 14C10 13.4696 10.2108 12.9609 10.5858 12.5858C10.9609 12.2107 11.4696 12 12 12C13.11 12 14 12.9 14 14ZM17 14L16.97 14.57L15.5 13.71C15.4 12.64 14.83 11.71 14 11.12V9.41C15.77 10.19 17 11.95 17 14ZM14.97 18.03C14.14 18.64 13.11 19 12 19C10.89 19 9.86004 18.64 9.03004 18L10.5 17.17C10.96 17.38 11.47 17.5 12 17.5C12.53 17.5 13.03 17.38 13.5 17.17L14.97 18.03ZM7.03004 14.56L7.00004 14C7.00004 11.95 8.23004 10.19 10 9.42V11.13C9.17004 11.71 8.60004 12.64 8.50004 13.7L7.03004 14.56Z" />
    </Svg>
  );
};
