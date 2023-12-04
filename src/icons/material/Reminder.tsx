import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ReminderIcon: FC<FlexSvgProps> = ({
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
      <Path d="M7.25 3C7.9 3 8.5 3.21 9 3.56V3C9 2.46957 9.21071 1.96086 9.58579 1.58579C9.96086 1.21071 10.4696 1 11 1C11.5304 1 12.0391 1.21071 12.4142 1.58579C12.7893 1.96086 13 2.46957 13 3V3.57C13.5 3.22 14.1 3 14.75 3C15.5456 3 16.3087 3.31607 16.8713 3.87868C17.4339 4.44129 17.75 5.20435 17.75 6C17.75 7.58 16.54 8.87 15 9H13V10H14.24L14.72 10.13L19.31 12.42C20.13 12.73 20.53 13.34 20.53 14.25L20.5 14.39V14.53L19.5 21.28C19.44 21.75 19.22 22.16 18.84 22.5C18.47 22.84 18.05 23 17.58 23H10C9.45 23 9 22.81 8.58 22.41L2 15.84L3.05 14.77C3.33 14.5 3.69 14.34 4.13 14.34H4.45L9 15.33V10V9H7C5.46 8.86 4.25 7.57 4.25 6C4.25 5.20435 4.56607 4.44129 5.12868 3.87868C5.69129 3.31607 6.45435 3 7.25 3ZM9 6C9 5.53587 8.81563 5.09075 8.48744 4.76256C8.15925 4.43437 7.71413 4.25 7.25 4.25C6.78587 4.25 6.34075 4.43437 6.01256 4.76256C5.68437 5.09075 5.5 5.53587 5.5 6C5.5 6.88 6.15 7.61 7 7.73V7.75H9V6ZM15 7.75V7.74C15.85 7.62 16.5 6.89 16.5 6C16.5 5.04 15.72 4.26 14.75 4.26C13.78 4.26 13 5.04 13 6V7.75H15Z" />
    </Svg>
  );
};
