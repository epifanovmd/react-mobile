import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const AudioVideoOffIcon: FC<FlexSvgProps> = ({
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
      <Path d="M22.1 21.5L2.39998 1.69995L1.09998 2.99995L5.09998 6.99995H3.99998C2.89998 6.99995 1.99998 7.89995 1.99998 8.99995V15C1.99998 16.1 2.89998 17 3.99998 17H4.99998V18C4.99998 18.6 5.39998 19 5.99998 19H7.99998C8.59998 19 8.99998 18.6 8.99998 18V17H15V18C15 18.6 15.4 19 16 19H17.1L20.8 22.7L22.1 21.5ZM5.99998 15H3.99998V14H5.99998V15ZM3.99998 12V9.99995H8.09998L10.1 12H3.99998ZM9.99998 15H7.99998V14H9.99998V15ZM12 15V14H12.1L13.1 15H12ZM14 9.99995V10.8L20.2 17C21.2 16.9 22 16.1 22 15V8.99995C22 7.89995 21.1 6.99995 20 6.99995H10.2L13.2 9.99995H14ZM18 8.99995C19.1 8.99995 20 9.89995 20 11C20 12.1 19.1 13 18 13C16.9 13 16 12.1 16 11C16 9.89995 16.9 8.99995 18 8.99995Z" />
    </Svg>
  );
};
