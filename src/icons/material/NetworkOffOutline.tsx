import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const NetworkOffOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M1.04004 5.27L5.00004 9.23V15C5.00004 15.5304 5.21075 16.0391 5.58583 16.4142C5.9609 16.7893 6.46961 17 7.00004 17H11V19H10C9.73482 19 9.48047 19.1054 9.29293 19.2929C9.1054 19.4804 9.00004 19.7348 9.00004 20H2.00004V22H9.00004C9.00004 22.2652 9.1054 22.5196 9.29293 22.7071C9.48047 22.8946 9.73482 23 10 23H14C14.2653 23 14.5196 22.8946 14.7071 22.7071C14.8947 22.5196 15 22.2652 15 22H17.77L19.77 24L21.04 22.72L2.32004 4L1.04004 5.27ZM7.00004 11.23L10.77 15H7.00004V11.23ZM15 20C15 19.7348 14.8947 19.4804 14.7071 19.2929C14.5196 19.1054 14.2653 19 14 19H13V17.23L15.77 20H15ZM22 20V21.14L20.86 20H22ZM7.00004 6.14L5.14004 4.28C5.43004 3.53 6.16004 3 7.00004 3H17C17.5305 3 18.0392 3.21071 18.4143 3.58579C18.7893 3.96086 19 4.46957 19 5V15C19 15.85 18.47 16.57 17.72 16.86L15.86 15H17V5H7.00004V6.14Z" />
    </Svg>
  );
};
