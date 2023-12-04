import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const SetTopBoxIcon: FC<FlexSvgProps> = ({
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
      <Path d="M5 15.5C5 15.6326 4.94732 15.7598 4.85355 15.8536C4.75979 15.9473 4.63261 16 4.5 16H3.5C3.36739 16 3.24021 15.9473 3.14645 15.8536C3.05268 15.7598 3 15.6326 3 15.5V15H2C1.73478 15 1.48043 14.8946 1.29289 14.7071C1.10536 14.5196 1 14.2652 1 14V11C1 10.7348 1.10536 10.4804 1.29289 10.2929C1.48043 10.1054 1.73478 10 2 10H22C22.2652 10 22.5196 10.1054 22.7071 10.2929C22.8946 10.4804 23 10.7348 23 11V14C23 14.2652 22.8946 14.5196 22.7071 14.7071C22.5196 14.8946 22.2652 15 22 15H21V15.5C21 15.6326 20.9473 15.7598 20.8536 15.8536C20.7598 15.9473 20.6326 16 20.5 16H19.5C19.3674 16 19.2402 15.9473 19.1464 15.8536C19.0527 15.7598 19 15.6326 19 15.5V15H5V15.5ZM3 12V13H5V12H3ZM6 12V13H8V12H6ZM20.5 11.5C20.2348 11.5 19.9804 11.6054 19.7929 11.7929C19.6054 11.9804 19.5 12.2348 19.5 12.5C19.5 12.7652 19.6054 13.0196 19.7929 13.2071C19.9804 13.3946 20.2348 13.5 20.5 13.5C20.7652 13.5 21.0196 13.3946 21.2071 13.2071C21.3946 13.0196 21.5 12.7652 21.5 12.5C21.5 12.2348 21.3946 11.9804 21.2071 11.7929C21.0196 11.6054 20.7652 11.5 20.5 11.5Z" />
    </Svg>
  );
};
