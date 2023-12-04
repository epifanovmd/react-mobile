import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const MailboxIcon: FC<FlexSvgProps> = ({
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
      <Path d="M17 4H7C5.67392 4 4.40215 4.52678 3.46447 5.46447C2.52678 6.40215 2 7.67392 2 9V20H20C20.5304 20 21.0391 19.7893 21.4142 19.4142C21.7893 19.0391 22 18.5304 22 18V9C22 7.67392 21.4732 6.40215 20.5355 5.46447C19.5979 4.52678 18.3261 4 17 4ZM10 18H4V9C4 8.20435 4.31607 7.44129 4.87868 6.87868C5.44129 6.31607 6.20435 6 7 6C7.79565 6 8.55871 6.31607 9.12132 6.87868C9.68393 7.44129 10 8.20435 10 9V18ZM19 15H17V13H13V11H19V15ZM9 11H5V9H9V11Z" />
    </Svg>
  );
};
