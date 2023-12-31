import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CardBulletedOffIcon: FC<FlexSvgProps> = ({
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
      <Path d="M3.34998 3.58012L20.65 20.8701L19.23 22.2901L16.94 20.0001H3.99998C3.46955 20.0001 2.96084 19.7894 2.58577 19.4143C2.21069 19.0393 1.99998 18.5306 1.99998 18.0001V6.00012C1.99998 5.72012 2.05998 5.46012 2.15998 5.22012L1.22998 4.29012L2.64998 2.87012L3.34998 3.58012ZM6.59998 4.00012H20C20.5304 4.00012 21.0391 4.21083 21.4142 4.5859C21.7893 4.96098 22 5.46968 22 6.00012V18.0001C22 18.4001 21.88 18.7701 21.68 19.0801L17.6 15.0001H20V13.0001H15.6L13.6 11.0001H20V9.00012H11.6L6.59998 4.00012ZM9.93998 13.0001H8.99998V15.0001H11V14.0601L9.93998 13.0001ZM5.93998 9.00012H4.99998V11.0001H6.99998V10.0601L5.93998 9.00012Z" />
    </Svg>
  );
};
