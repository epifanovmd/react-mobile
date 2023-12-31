import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const WaterPumpIcon: FC<FlexSvgProps> = ({
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
      <Path d="M19 14.5C19 14.5 21 16.67 21 18C21 18.5304 20.7893 19.0391 20.4142 19.4142C20.0391 19.7893 19.5304 20 19 20C18.4696 20 17.9609 19.7893 17.5858 19.4142C17.2107 19.0391 17 18.5304 17 18C17 16.67 19 14.5 19 14.5ZM5 18V9C4.46957 9 3.96086 8.78929 3.58579 8.41421C3.21071 8.03914 3 7.53043 3 7C3 6.46957 3.21071 5.96086 3.58579 5.58579C3.96086 5.21071 4.46957 5 5 5V4C5 3.46957 5.21071 2.96086 5.58579 2.58579C5.96086 2.21071 6.46957 2 7 2H9C9.53043 2 10.0391 2.21071 10.4142 2.58579C10.7893 2.96086 11 3.46957 11 4V5H19C19.5304 5 20.0391 5.21071 20.4142 5.58579C20.7893 5.96086 21 6.46957 21 7V9V11C21.2652 11 21.5196 11.1054 21.7071 11.2929C21.8946 11.4804 22 11.7348 22 12C22 12.2652 21.8946 12.5196 21.7071 12.7071C21.5196 12.8946 21.2652 13 21 13H17C16.7348 13 16.4804 12.8946 16.2929 12.7071C16.1054 12.5196 16 12.2652 16 12C16 11.7348 16.1054 11.4804 16.2929 11.2929C16.4804 11.1054 16.7348 11 17 11V9H11V18H12C12.5304 18 13.0391 18.2107 13.4142 18.5858C13.7893 18.9609 14 19.4696 14 20V22H2V20C2 19.4696 2.21071 18.9609 2.58579 18.5858C2.96086 18.2107 3.46957 18 4 18H5Z" />
    </Svg>
  );
};
