import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ClosedCaptionIcon: FC<FlexSvgProps> = ({
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
      <Path d="M18 11H16.5V10.5H14.5V13.5H16.5V13H18V14C18 14.2652 17.8946 14.5196 17.7071 14.7071C17.5196 14.8946 17.2652 15 17 15H14C13.7348 15 13.4804 14.8946 13.2929 14.7071C13.1054 14.5196 13 14.2652 13 14V10C13 9.73478 13.1054 9.48043 13.2929 9.29289C13.4804 9.10536 13.7348 9 14 9H17C17.2652 9 17.5196 9.10536 17.7071 9.29289C17.8946 9.48043 18 9.73478 18 10V11ZM11 11H9.5V10.5H7.5V13.5H9.5V13H11V14C11 14.2652 10.8946 14.5196 10.7071 14.7071C10.5196 14.8946 10.2652 15 10 15H7C6.73478 15 6.48043 14.8946 6.29289 14.7071C6.10536 14.5196 6 14.2652 6 14V10C6 9.73478 6.10536 9.48043 6.29289 9.29289C6.48043 9.10536 6.73478 9 7 9H10C10.2652 9 10.5196 9.10536 10.7071 9.29289C10.8946 9.48043 11 9.73478 11 10V11ZM19 4H5C3.89 4 3 4.89 3 6V18C3 18.5304 3.21071 19.0391 3.58579 19.4142C3.96086 19.7893 4.46957 20 5 20H19C19.5304 20 20.0391 19.7893 20.4142 19.4142C20.7893 19.0391 21 18.5304 21 18V6C21 4.89 20.1 4 19 4Z" />
    </Svg>
  );
};
