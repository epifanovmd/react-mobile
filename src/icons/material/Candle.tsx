import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CandleIcon: FC<FlexSvgProps> = ({
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
      <Path d="M12.5 2C10.84 2 9.5 5.34 9.5 7C9.5 7.79565 9.81607 8.55871 10.3787 9.12132C10.9413 9.68393 11.7044 10 12.5 10C13.2956 10 14.0587 9.68393 14.6213 9.12132C15.1839 8.55871 15.5 7.79565 15.5 7C15.5 5.34 14.16 2 12.5 2ZM12.5 6.5C12.7652 6.5 13.0196 6.60536 13.2071 6.79289C13.3946 6.98043 13.5 7.23478 13.5 7.5C13.5 7.76522 13.3946 8.01957 13.2071 8.20711C13.0196 8.39464 12.7652 8.5 12.5 8.5C12.2348 8.5 11.9804 8.39464 11.7929 8.20711C11.6054 8.01957 11.5 7.76522 11.5 7.5C11.5 7.23478 11.6054 6.98043 11.7929 6.79289C11.9804 6.60536 12.2348 6.5 12.5 6.5ZM10 11C9.73478 11 9.48043 11.1054 9.29289 11.2929C9.10536 11.4804 9 11.7348 9 12V20H7C6.73478 20 6.48043 19.8946 6.29289 19.7071C6.10536 19.5196 6 19.2652 6 19V18C6 17.7348 5.89464 17.4804 5.70711 17.2929C5.51957 17.1054 5.26522 17 5 17C4.73478 17 4.48043 17.1054 4.29289 17.2929C4.10536 17.4804 4 17.7348 4 18V19C4 19.7956 4.31607 20.5587 4.87868 21.1213C5.44129 21.6839 6.20435 22 7 22H19C19.2652 22 19.5196 21.8946 19.7071 21.7071C19.8946 21.5196 20 21.2652 20 21C20 20.7348 19.8946 20.4804 19.7071 20.2929C19.5196 20.1054 19.2652 20 19 20H16V12C16 11.7348 15.8946 11.4804 15.7071 11.2929C15.5196 11.1054 15.2652 11 15 11H10Z" />
    </Svg>
  );
};
