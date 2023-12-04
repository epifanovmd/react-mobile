import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CardAccountPhoneIcon: FC<FlexSvgProps> = ({
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
      <Path d="M22 3H2C1.46957 3 0.960859 3.21071 0.585786 3.58579C0.210714 3.96086 0 4.46957 0 5L0 19C0 19.5304 0.210714 20.0391 0.585786 20.4142C0.960859 20.7893 1.46957 21 2 21H22C22.5304 21 23.0391 20.7893 23.4142 20.4142C23.7893 20.0391 24 19.5304 24 19V5C24 4.46957 23.7893 3.96086 23.4142 3.58579C23.0391 3.21071 22.5304 3 22 3ZM8 6C8.79565 6 9.55871 6.31607 10.1213 6.87868C10.6839 7.44129 11 8.20435 11 9C11 9.79565 10.6839 10.5587 10.1213 11.1213C9.55871 11.6839 8.79565 12 8 12C7.20435 12 6.44129 11.6839 5.87868 11.1213C5.31607 10.5587 5 9.79565 5 9C5 8.20435 5.31607 7.44129 5.87868 6.87868C6.44129 6.31607 7.20435 6 8 6ZM14 18H2V17C2 15 6 13.9 8 13.9C10 13.9 14 15 14 17V18ZM17.85 14H19.5L21 16L19 18C17.7 17 16.73 15.61 16.28 14C16.1 13.36 16 12.69 16 12C16 11.31 16.1 10.64 16.28 10C16.73 8.38 17.7 7 19 6L21 8L19.5 10H17.85C17.63 10.63 17.5 11.3 17.5 12C17.5 12.7 17.63 13.37 17.85 14Z" />
    </Svg>
  );
};
