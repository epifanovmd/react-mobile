import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const AccountMultipleIcon: FC<FlexSvgProps> = ({
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
      <Path d="M16 17V19H2V17C2 17 2 13 9 13C16 13 16 17 16 17ZM12.5 7.49999C12.5 6.80776 12.2947 6.13107 11.9101 5.5555C11.5256 4.97992 10.9789 4.53132 10.3394 4.26641C9.69985 4.00151 8.99612 3.93219 8.31718 4.06724C7.63825 4.20229 7.01461 4.53563 6.52513 5.02512C6.03564 5.5146 5.7023 6.13824 5.56725 6.81718C5.4322 7.49611 5.50152 8.19984 5.76642 8.83938C6.03133 9.47892 6.47993 10.0256 7.0555 10.4101C7.63108 10.7947 8.30777 11 9 11C9.92826 11 10.8185 10.6312 11.4749 9.97486C12.1313 9.31849 12.5 8.42825 12.5 7.49999ZM15.94 13C16.5547 13.4757 17.0578 14.0804 17.4137 14.7715C17.7696 15.4626 17.9697 16.2232 18 17V19H22V17C22 17 22 13.37 15.94 13ZM15 3.99999C14.3117 3.99616 13.6385 4.20195 13.07 4.58999C13.6774 5.43873 14.0041 6.45628 14.0041 7.49999C14.0041 8.54371 13.6774 9.56125 13.07 10.41C13.6385 10.798 14.3117 11.0038 15 11C15.9283 11 16.8185 10.6312 17.4749 9.97486C18.1313 9.31849 18.5 8.42825 18.5 7.49999C18.5 6.57173 18.1313 5.6815 17.4749 5.02512C16.8185 4.36874 15.9283 3.99999 15 3.99999Z" />
    </Svg>
  );
};
