import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const WaterPercentIcon: FC<FlexSvgProps> = ({
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
      <Path d="M12 3.25C12 3.25 6 10 6 14C6 17.32 8.69 20 12 20C13.5913 20 15.1174 19.3679 16.2426 18.2426C17.3679 17.1174 18 15.5913 18 14C18 10 12 3.25 12 3.25ZM14.47 9.97L15.53 11.03L9.53 17.03L8.47 15.97L14.47 9.97ZM9.75 10C10.0815 10 10.3995 10.1317 10.6339 10.3661C10.8683 10.6005 11 10.9185 11 11.25C11 11.5815 10.8683 11.8995 10.6339 12.1339C10.3995 12.3683 10.0815 12.5 9.75 12.5C9.41848 12.5 9.10054 12.3683 8.86612 12.1339C8.6317 11.8995 8.5 11.5815 8.5 11.25C8.5 10.9185 8.6317 10.6005 8.86612 10.3661C9.10054 10.1317 9.41848 10 9.75 10ZM14.25 14.5C14.5815 14.5 14.8995 14.6317 15.1339 14.8661C15.3683 15.1005 15.5 15.4185 15.5 15.75C15.5 16.0815 15.3683 16.3995 15.1339 16.6339C14.8995 16.8683 14.5815 17 14.25 17C13.9185 17 13.6005 16.8683 13.3661 16.6339C13.1317 16.3995 13 16.0815 13 15.75C13 15.4185 13.1317 15.1005 13.3661 14.8661C13.6005 14.6317 13.9185 14.5 14.25 14.5Z" />
    </Svg>
  );
};
