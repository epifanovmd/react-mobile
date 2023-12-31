import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const RecordRecIcon: FC<FlexSvgProps> = ({
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
      <Path d="M12.5 5C10.5109 5 8.60322 5.79018 7.1967 7.1967C5.79018 8.60322 5 10.5109 5 12.5C5 14.4891 5.79018 16.3968 7.1967 17.8033C8.60322 19.2098 10.5109 20 12.5 20C14.4891 20 16.3968 19.2098 17.8033 17.8033C19.2098 16.3968 20 14.4891 20 12.5C20 10.5109 19.2098 8.60322 17.8033 7.1967C16.3968 5.79018 14.4891 5 12.5 5ZM7 10H9C9.26522 10 9.51957 10.1054 9.70711 10.2929C9.89464 10.4804 10 10.7348 10 11V12C10 12.5 9.62 12.9 9.14 12.97L10.31 15H9.15L8 13V15H7V10ZM12 10H14V11H12V12H14V13H12V14H14V15H12C11.7348 15 11.4804 14.8946 11.2929 14.7071C11.1054 14.5196 11 14.2652 11 14V11C11 10.7348 11.1054 10.4804 11.2929 10.2929C11.4804 10.1054 11.7348 10 12 10ZM16 10H18V11H16V14H18V15H16C15.7348 15 15.4804 14.8946 15.2929 14.7071C15.1054 14.5196 15 14.2652 15 14V11C15 10.7348 15.1054 10.4804 15.2929 10.2929C15.4804 10.1054 15.7348 10 16 10ZM8 11V12H9V11" />
    </Svg>
  );
};
