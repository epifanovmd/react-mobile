import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const LightbulbMultipleOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M12 21.0001C12 21.5501 12.45 22.0001 13 22.0001H15C15.55 22.0001 16 21.5501 16 21.0001V20.0001H12V21.0001ZM14 7.0001C11.24 7.0001 8.99998 9.2401 8.99998 12.0001C8.99998 13.5701 9.73997 15.0601 11 16.0001V18.0001C11 18.5501 11.45 19.0001 12 19.0001H16C16.55 19.0001 17 18.5501 17 18.0001V16.0001C19.21 14.3401 19.66 11.2101 18 9.0001C17.06 7.7401 15.57 7.0001 14 7.0001ZM15 14.8201V17.0001H13V14.8201C11.44 14.2701 10.62 12.5501 11.17 11.0001C11.72 9.4301 13.44 8.6101 15 9.1601C16.56 9.7201 17.38 11.4301 16.83 13.0001C16.53 13.8501 15.85 14.5001 15 14.8201ZM7.67998 15.0001H6.99998V16.0001C6.99998 16.5501 7.44998 17.0001 7.99998 17.0001H8.99998V16.8801C8.45998 16.3301 7.99997 15.7001 7.67998 15.0001ZM13.6 5.0001C12.5 2.4701 9.52997 1.3301 6.99998 2.4501C4.46998 3.5701 3.33997 6.5001 4.44997 9.0401C4.78997 9.8101 5.32998 10.5001 5.99998 11.0001V13.0001C5.99998 13.5501 6.44998 14.0001 6.99998 14.0001H7.29998C7.09998 13.3501 6.99998 12.6801 6.99998 12.0001C6.99998 8.2901 9.88998 5.2101 13.6 5.0001Z" />
    </Svg>
  );
};
