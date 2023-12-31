import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const DivingScubaIcon: FC<FlexSvgProps> = ({
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
      <Path d="M12 15C13.31 15 14.42 15.83 14.83 17H18C19.0609 17 20.0783 17.4214 20.8284 18.1716C21.5786 18.9217 22 19.9391 22 21V22H20V21C20 20.4696 19.7893 19.9609 19.4142 19.5858C19.0391 19.2107 18.5304 19 18 19H14.83C14.42 20.17 13.31 21 12 21C11.2044 21 10.4413 20.6839 9.87868 20.1213C9.31607 19.5587 9 18.7956 9 18C9 17.2044 9.31607 16.4413 9.87868 15.8787C10.4413 15.3161 11.2044 15 12 15ZM12 17C11.7348 17 11.4804 17.1054 11.2929 17.2929C11.1054 17.4804 11 17.7348 11 18C11 18.2652 11.1054 18.5196 11.2929 18.7071C11.4804 18.8946 11.7348 19 12 19C12.2652 19 12.5196 18.8946 12.7071 18.7071C12.8946 18.5196 13 18.2652 13 18C13 17.7348 12.8946 17.4804 12.7071 17.2929C12.5196 17.1054 12.2652 17 12 17ZM18 3C18.5304 3 19.0391 3.21071 19.4142 3.58579C19.7893 3.96086 20 4.46957 20 5V10C20 10.5304 19.7893 11.0391 19.4142 11.4142C19.0391 11.7893 18.5304 12 18 12H14.85C14.43 12 14.05 12.24 13.9 12.63C13.7 13.23 13.23 13.71 12.62 13.91C11.58 14.25 10.44 13.68 10.1 12.63C9.95 12.24 9.57 12 9.15 12H6C5.46957 12 4.96086 11.7893 4.58579 11.4142C4.21071 11.0391 4 10.5304 4 10V5C4 4.46957 4.21071 3.96086 4.58579 3.58579C4.96086 3.21071 5.46957 3 6 3H18ZM18 10V5H6V10H10.65C10.9 9.46 11.41 9.09 12 9C12.59 9.09 13.1 9.46 13.35 10H18Z" />
    </Svg>
  );
};
