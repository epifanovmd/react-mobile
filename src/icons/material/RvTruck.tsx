import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const RvTruckIcon: FC<FlexSvgProps> = ({
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
      <Path d="M20 8H22V6L20 4H3C2.46957 4 1.96086 4.21071 1.58579 4.58579C1.21071 4.96086 1 5.46957 1 6V15C1 15.5304 1.21071 16.0391 1.58579 16.4142C1.96086 16.7893 2.46957 17 3 17H4C4 17.7956 4.31607 18.5587 4.87868 19.1213C5.44129 19.6839 6.20435 20 7 20C7.79565 20 8.55871 19.6839 9.12132 19.1213C9.68393 18.5587 10 17.7956 10 17H15C15 17.7956 15.3161 18.5587 15.8787 19.1213C16.4413 19.6839 17.2044 20 18 20C18.7956 20 19.5587 19.6839 20.1213 19.1213C20.6839 18.5587 21 17.7956 21 17H23V12L20 8ZM7 18.5C6.60218 18.5 6.22064 18.342 5.93934 18.0607C5.65804 17.7794 5.5 17.3978 5.5 17C5.5 16.6022 5.65804 16.2206 5.93934 15.9393C6.22064 15.658 6.60218 15.5 7 15.5C7.39782 15.5 7.77936 15.658 8.06066 15.9393C8.34196 16.2206 8.5 16.6022 8.5 17C8.5 17.3978 8.34196 17.7794 8.06066 18.0607C7.77936 18.342 7.39782 18.5 7 18.5ZM9 12H3V9H9V12ZM14 15H11V9H14V15ZM18 18.5C17.7033 18.5 17.4133 18.412 17.1666 18.2472C16.92 18.0824 16.7277 17.8481 16.6142 17.574C16.5007 17.2999 16.4709 16.9983 16.5288 16.7074C16.5867 16.4164 16.7296 16.1491 16.9393 15.9393C17.1491 15.7296 17.4164 15.5867 17.7074 15.5288C17.9983 15.4709 18.2999 15.5006 18.574 15.6142C18.8481 15.7277 19.0824 15.92 19.2472 16.1666C19.412 16.4133 19.5 16.7033 19.5 17C19.4899 17.3946 19.3286 17.7703 19.0495 18.0495C18.7703 18.3286 18.3946 18.4899 18 18.5ZM17 12V9.5H19.5L21.5 12H17Z" />
    </Svg>
  );
};
