import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const TagOffIcon: FC<FlexSvgProps> = ({
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
      <Path d="M18.33 8.5L22.92 3.92L21.5 2.5L2.5 21.5L3.92 22.92L8.5 18.33L11.58 21.41C11.7661 21.5972 11.9873 21.7457 12.231 21.8469C12.4747 21.9482 12.7361 22.0002 13 22C13.5296 21.9978 14.0366 21.7856 14.41 21.41L21.41 14.41C21.7856 14.0367 21.9978 13.5296 22 13C22.0002 12.7361 21.9482 12.4747 21.8469 12.231C21.7457 11.9873 21.5972 11.7661 21.41 11.58L18.33 8.5ZM5.61 15.43L15.47 5.65L12.41 2.58C12.035 2.20808 11.5281 1.99958 11 2H4C3.46957 2 2.96086 2.21071 2.58579 2.58579C2.21071 2.96086 2 3.46957 2 4V11C2.00223 11.5296 2.21441 12.0367 2.59 12.41L5.61 15.43ZM5.5 4C5.79667 4 6.08668 4.08797 6.33336 4.2528C6.58003 4.41762 6.77229 4.65189 6.88582 4.92598C6.99935 5.20006 7.02906 5.50166 6.97118 5.79264C6.9133 6.08361 6.77044 6.35088 6.56066 6.56066C6.35088 6.77044 6.08361 6.9133 5.79264 6.97118C5.50166 7.02906 5.20006 6.99935 4.92597 6.88582C4.65189 6.77229 4.41762 6.58003 4.2528 6.33336C4.08797 6.08668 4 5.79667 4 5.5C4 5.10218 4.15804 4.72064 4.43934 4.43934C4.72064 4.15804 5.10218 4 5.5 4Z" />
    </Svg>
  );
};
