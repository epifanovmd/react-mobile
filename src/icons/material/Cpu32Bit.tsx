import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const Cpu32BitIcon: FC<FlexSvgProps> = ({
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
      <Path d="M9 3V5H7C6.46957 5 5.96086 5.21071 5.58579 5.58579C5.21071 5.96086 5 6.46957 5 7V9H3V11H5V13H3V15H5V17C5 17.5304 5.21071 18.0391 5.58579 18.4142C5.96086 18.7893 6.46957 19 7 19H9V21H11V19H13V21H15V19H17C17.5304 19 18.0391 18.7893 18.4142 18.4142C18.7893 18.0391 19 17.5304 19 17V15H21V13H19V11H21V9H19V7C19 6.46957 18.7893 5.96086 18.4142 5.58579C18.0391 5.21071 17.5304 5 17 5H15V3H13V5H11V3H9ZM7 9H10.5C10.7652 9 11.0196 9.10536 11.2071 9.29289C11.3946 9.48043 11.5 9.73478 11.5 10V14C11.5 14.2652 11.3946 14.5196 11.2071 14.7071C11.0196 14.8946 10.7652 15 10.5 15H7V13.5H10V12.75H8.5V11.25H10V10.5H7V9ZM12.5 9H16C16.2652 9 16.5196 9.10536 16.7071 9.29289C16.8946 9.48043 17 9.73478 17 10V11.75C17 12.0152 16.8946 12.2696 16.7071 12.4571C16.5196 12.6446 16.2652 12.75 16 12.75H14V13.5H17V15H12.5V12.25C12.5 11.9848 12.6054 11.7304 12.7929 11.5429C12.9804 11.3554 13.2348 11.25 13.5 11.25H15.5V10.5H12.5" />
    </Svg>
  );
};
