import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CityVariantOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M15 23H13V21H15V23ZM19 21H17V23H19V21ZM15 17H13V19H15V17ZM7 21H5V23H7V21ZM7 17H5V19H7V17ZM19 17H17V19H19V17ZM15 13H13V15H15V13ZM19 13H17V15H19V13ZM21 9C21.5304 9 22.0391 9.21071 22.4142 9.58579C22.7893 9.96086 23 10.4696 23 11V23H21V11H11V23H9V15H3V23H1V15C1 14.4696 1.21071 13.9609 1.58579 13.5858C1.96086 13.2107 2.46957 13 3 13H9V11C9 10.4696 9.21071 9.96086 9.58579 9.58579C9.96086 9.21071 10.4696 9 11 9V7C11 6.46957 11.2107 5.96086 11.5858 5.58579C11.9609 5.21071 12.4696 5 13 5H15V1H17V5H19C19.5304 5 20.0391 5.21071 20.4142 5.58579C20.7893 5.96086 21 6.46957 21 7V9ZM19 9V7H13V9H19Z" />
    </Svg>
  );
};
