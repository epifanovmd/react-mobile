import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const HammerWrenchIcon: FC<FlexSvgProps> = ({
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
      <Path d="M13.7801 15.3006L19.7801 21.3006L21.8901 19.1406L15.8901 13.1406L13.7801 15.3006ZM17.5001 10.1006C17.1101 10.1006 16.6901 10.0506 16.3601 9.91062L4.97011 21.2506L2.86011 19.1406L10.2701 11.7406L8.50011 9.96063L7.78011 10.6606L6.33011 9.25063V12.1106L5.63011 12.8106L2.11011 9.25063L2.81011 8.55063H5.62011L4.22011 7.14062L7.78011 3.58062C8.95011 2.41062 10.8301 2.41062 12.0001 3.58062L9.89011 5.74062L11.3001 7.14062L10.5901 7.85063L12.3801 9.63063L14.2001 7.75063C14.0601 7.42063 14.0001 7.00063 14.0001 6.63063C14.0001 4.66063 15.5601 3.11062 17.5001 3.11062C18.0901 3.11062 18.6101 3.25063 19.0801 3.53062L16.4101 6.20062L17.9101 7.70062L20.5801 5.03063C20.8601 5.50063 21.0001 6.00063 21.0001 6.63063C21.0001 8.55063 19.4501 10.1006 17.5001 10.1006Z" />
    </Svg>
  );
};
