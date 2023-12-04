import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const RecordPlayerIcon: FC<FlexSvgProps> = ({
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
      <Path d="M5 17.5C5 17.6326 4.94732 17.7598 4.85355 17.8536C4.75979 17.9473 4.63261 18 4.5 18H3.5C3.36739 18 3.24021 17.9473 3.14645 17.8536C3.05268 17.7598 3 17.6326 3 17.5V17H2C1.73478 17 1.48043 16.8946 1.29289 16.7071C1.10536 16.5196 1 16.2652 1 16V13C1 12.7348 1.10536 12.4804 1.29289 12.2929C1.48043 12.1054 1.73478 12 2 12H19V10H7L6 11V9C6 8.73478 6.10536 8.48043 6.29289 8.29289C6.48043 8.10536 6.73478 8 7 8H19V7H21V8C21.2652 8 21.5196 8.10536 21.7071 8.29289C21.8946 8.48043 22 8.73478 22 9V10H21V12H22C22.2652 12 22.5196 12.1054 22.7071 12.2929C22.8946 12.4804 23 12.7348 23 13V16C23 16.2652 22.8946 16.5196 22.7071 16.7071C22.5196 16.8946 22.2652 17 22 17H21V17.5C21 17.6326 20.9473 17.7598 20.8536 17.8536C20.7598 17.9473 20.6326 18 20.5 18H19.5C19.3674 18 19.2402 17.9473 19.1464 17.8536C19.0527 17.7598 19 17.6326 19 17.5V17H5V17.5ZM3 14V15H5V14H3ZM6 14V15H8V14H6ZM20.5 13.5C20.2348 13.5 19.9804 13.6054 19.7929 13.7929C19.6054 13.9804 19.5 14.2348 19.5 14.5C19.5 14.7652 19.6054 15.0196 19.7929 15.2071C19.9804 15.3946 20.2348 15.5 20.5 15.5C20.7652 15.5 21.0196 15.3946 21.2071 15.2071C21.3946 15.0196 21.5 14.7652 21.5 14.5C21.5 14.2348 21.3946 13.9804 21.2071 13.7929C21.0196 13.6054 20.7652 13.5 20.5 13.5Z" />
    </Svg>
  );
};
