import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const RelationOnlyOneToZeroOrManyIcon: FC<FlexSvgProps> = ({
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
      <Path d="M21 13L19 15H18.79C18.5951 14.5549 18.2747 14.1763 17.868 13.9104C17.4613 13.6445 16.9859 13.5029 16.5 13.5029C16.0141 13.5029 15.5387 13.6445 15.132 13.9104C14.7253 14.1763 14.4049 14.5549 14.21 15H13V7H8V5H6V7H5V5H3V7H2V9H3V11H5V9H6V11H8V9H11V17H14.21C14.4049 17.4451 14.7253 17.8237 15.132 18.0896C15.5387 18.3555 16.0141 18.4971 16.5 18.4971C16.9859 18.4971 17.4613 18.3555 17.868 18.0896C18.2747 17.8237 18.5951 17.4451 18.79 17H19L21 19H22V13H21ZM16.5 17C16.3022 17 16.1089 16.9414 15.9444 16.8315C15.78 16.7216 15.6518 16.5654 15.5761 16.3827C15.5004 16.2 15.4806 15.9989 15.5192 15.8049C15.5578 15.6109 15.653 15.4327 15.7929 15.2929C15.9327 15.153 16.1109 15.0578 16.3049 15.0192C16.4989 14.9806 16.7 15.0004 16.8827 15.0761C17.0654 15.1518 17.2216 15.28 17.3315 15.4444C17.4414 15.6089 17.5 15.8022 17.5 16C17.5 16.2652 17.3946 16.5196 17.2071 16.7071C17.0196 16.8946 16.7652 17 16.5 17Z" />
    </Svg>
  );
};
