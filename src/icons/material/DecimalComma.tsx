import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const DecimalCommaIcon: FC<FlexSvgProps> = ({
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
      <Path d="M10 7C10.7956 7 11.5587 7.31607 12.1213 7.87868C12.6839 8.44129 13 9.20435 13 10V13C13 13.7956 12.6839 14.5587 12.1213 15.1213C11.5587 15.6839 10.7956 16 10 16C9.20435 16 8.44129 15.6839 7.87868 15.1213C7.31607 14.5587 7 13.7956 7 13V10C7 9.20435 7.31607 8.44129 7.87868 7.87868C8.44129 7.31607 9.20435 7 10 7ZM10 9C9.73478 9 9.48043 9.10536 9.29289 9.29289C9.10536 9.48043 9 9.73478 9 10V13C9 13.2652 9.10536 13.5196 9.29289 13.7071C9.48043 13.8946 9.73478 14 10 14C10.2652 14 10.5196 13.8946 10.7071 13.7071C10.8946 13.5196 11 13.2652 11 13V10C11 9.73478 10.8946 9.48043 10.7071 9.29289C10.5196 9.10536 10.2652 9 10 9ZM17 7C17.7956 7 18.5587 7.31607 19.1213 7.87868C19.6839 8.44129 20 9.20435 20 10V13C20 13.7956 19.6839 14.5587 19.1213 15.1213C18.5587 15.6839 17.7956 16 17 16C16.2044 16 15.4413 15.6839 14.8787 15.1213C14.3161 14.5587 14 13.7956 14 13V10C14 9.20435 14.3161 8.44129 14.8787 7.87868C15.4413 7.31607 16.2044 7 17 7ZM17 9C16.7348 9 16.4804 9.10536 16.2929 9.29289C16.1054 9.48043 16 9.73478 16 10V13C16 13.2652 16.1054 13.5196 16.2929 13.7071C16.4804 13.8946 16.7348 14 17 14C17.2652 14 17.5196 13.8946 17.7071 13.7071C17.8946 13.5196 18 13.2652 18 13V10C18 9.73478 17.8946 9.48043 17.7071 9.29289C17.5196 9.10536 17.2652 9 17 9ZM5 14C4.73478 14 4.48043 14.1054 4.29289 14.2929C4.10536 14.4804 4 14.7348 4 15L5 18H6V15C6 14.7348 5.89464 14.4804 5.70711 14.2929C5.51957 14.1054 5.26522 14 5 14Z" />
    </Svg>
  );
};
