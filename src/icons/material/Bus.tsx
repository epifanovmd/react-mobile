import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const BusIcon: FC<FlexSvgProps> = ({
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
      <Path d="M18 11H6V6H18V11ZM16.5 17C16.1022 17 15.7206 16.842 15.4393 16.5607C15.158 16.2794 15 15.8978 15 15.5C15 15.1022 15.158 14.7206 15.4393 14.4393C15.7206 14.158 16.1022 14 16.5 14C16.8978 14 17.2794 14.158 17.5607 14.4393C17.842 14.7206 18 15.1022 18 15.5C18 15.8978 17.842 16.2794 17.5607 16.5607C17.2794 16.842 16.8978 17 16.5 17ZM7.5 17C7.10218 17 6.72064 16.842 6.43934 16.5607C6.15804 16.2794 6 15.8978 6 15.5C6 15.1022 6.15804 14.7206 6.43934 14.4393C6.72064 14.158 7.10218 14 7.5 14C7.89782 14 8.27936 14.158 8.56066 14.4393C8.84196 14.7206 9 15.1022 9 15.5C9 15.8978 8.84196 16.2794 8.56066 16.5607C8.27936 16.842 7.89782 17 7.5 17ZM4 16C4 16.88 4.39 17.67 5 18.22V20C5 20.2652 5.10536 20.5196 5.29289 20.7071C5.48043 20.8946 5.73478 21 6 21H7C7.26522 21 7.51957 20.8946 7.70711 20.7071C7.89464 20.5196 8 20.2652 8 20V19H16V20C16 20.2652 16.1054 20.5196 16.2929 20.7071C16.4804 20.8946 16.7348 21 17 21H18C18.2652 21 18.5196 20.8946 18.7071 20.7071C18.8946 20.5196 19 20.2652 19 20V18.22C19.61 17.67 20 16.88 20 16V6C20 2.5 16.42 2 12 2C7.58 2 4 2.5 4 6V16Z" />
    </Svg>
  );
};
