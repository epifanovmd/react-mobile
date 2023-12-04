import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const TagOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M21.41 11.58L12.41 2.58C12.035 2.20808 11.5281 1.99958 11 2H4C3.46957 2 2.96086 2.21071 2.58579 2.58579C2.21071 2.96086 2 3.46957 2 4V11C1.99979 11.2639 2.05182 11.5253 2.15308 11.769C2.25434 12.0127 2.40283 12.2339 2.59 12.42L11.59 21.42C11.965 21.7919 12.4719 22.0004 13 22C13.5296 21.9978 14.0367 21.7856 14.41 21.41L21.41 14.41C21.7856 14.0367 21.9978 13.5296 22 13C22.0002 12.7361 21.9482 12.4747 21.8469 12.231C21.7457 11.9873 21.5972 11.7661 21.41 11.58ZM13 20L4 11V4H11L20 13L13 20ZM6.5 5C6.79667 5 7.08668 5.08797 7.33336 5.2528C7.58003 5.41762 7.77229 5.65189 7.88582 5.92598C7.99935 6.20006 8.02906 6.50166 7.97118 6.79264C7.9133 7.08361 7.77044 7.35088 7.56066 7.56066C7.35088 7.77044 7.08361 7.9133 6.79264 7.97118C6.50166 8.02906 6.20006 7.99935 5.92598 7.88582C5.65189 7.77229 5.41762 7.58003 5.2528 7.33336C5.08797 7.08668 5 6.79667 5 6.5C5 6.10218 5.15804 5.72064 5.43934 5.43934C5.72064 5.15804 6.10218 5 6.5 5Z" />
    </Svg>
  );
};
