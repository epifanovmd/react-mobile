import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const PaperclipIcon: FC<FlexSvgProps> = ({
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
      <Path d="M16.5 6V17.5C16.5 18.5609 16.0786 19.5783 15.3284 20.3284C14.5783 21.0786 13.5609 21.5 12.5 21.5C11.4391 21.5 10.4217 21.0786 9.67157 20.3284C8.92143 19.5783 8.5 18.5609 8.5 17.5V5C8.5 4.33696 8.76339 3.70107 9.23223 3.23223C9.70107 2.76339 10.337 2.5 11 2.5C11.663 2.5 12.2989 2.76339 12.7678 3.23223C13.2366 3.70107 13.5 4.33696 13.5 5V15.5C13.5 15.7652 13.3946 16.0196 13.2071 16.2071C13.0196 16.3946 12.7652 16.5 12.5 16.5C12.2348 16.5 11.9804 16.3946 11.7929 16.2071C11.6054 16.0196 11.5 15.7652 11.5 15.5V6H10V15.5C10 16.163 10.2634 16.7989 10.7322 17.2678C11.2011 17.7366 11.837 18 12.5 18C13.163 18 13.7989 17.7366 14.2678 17.2678C14.7366 16.7989 15 16.163 15 15.5V5C15 3.93913 14.5786 2.92172 13.8284 2.17157C13.0783 1.42143 12.0609 1 11 1C9.93913 1 8.92172 1.42143 8.17157 2.17157C7.42143 2.92172 7 3.93913 7 5V17.5C7 18.9587 7.57946 20.3576 8.61091 21.3891C9.64236 22.4205 11.0413 23 12.5 23C13.9587 23 15.3576 22.4205 16.3891 21.3891C17.4205 20.3576 18 18.9587 18 17.5V6H16.5Z" />
    </Svg>
  );
};
