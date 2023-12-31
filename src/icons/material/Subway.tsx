import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const SubwayIcon: FC<FlexSvgProps> = ({
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
      <Path d="M8.5 15C8.76522 15 9.01957 15.1054 9.20711 15.2929C9.39464 15.4804 9.5 15.7348 9.5 16C9.5 16.2652 9.39464 16.5196 9.20711 16.7071C9.01957 16.8946 8.76522 17 8.5 17C8.23478 17 7.98043 16.8946 7.79289 16.7071C7.60536 16.5196 7.5 16.2652 7.5 16C7.5 15.7348 7.60536 15.4804 7.79289 15.2929C7.98043 15.1054 8.23478 15 8.5 15ZM7 9H17V14H7V9ZM15.5 15C15.7652 15 16.0196 15.1054 16.2071 15.2929C16.3946 15.4804 16.5 15.7348 16.5 16C16.5 16.2652 16.3946 16.5196 16.2071 16.7071C16.0196 16.8946 15.7652 17 15.5 17C15.2348 17 14.9804 16.8946 14.7929 16.7071C14.6054 16.5196 14.5 16.2652 14.5 16C14.5 15.7348 14.6054 15.4804 14.7929 15.2929C14.9804 15.1054 15.2348 15 15.5 15ZM18 15.88V9C18 6.38 15.32 6 12 6C9 6 6 6.37 6 9V15.88C6 16.5749 6.27603 17.2413 6.76738 17.7326C7.25873 18.224 7.92513 18.5 8.62 18.5L7.5 19.62V20H9.17L10.67 18.5H13.5L15 20H16.5V19.62L15.37 18.5C16.82 18.5 18 17.33 18 15.88ZM17.8 2.8C20.47 3.84 22 6.05 22 8.86V22H2V8.86C2 6.05 3.53 3.84 6.2 2.8C8 2.09 10.14 2 12 2C13.86 2 16 2.09 17.8 2.8Z" />
    </Svg>
  );
};
