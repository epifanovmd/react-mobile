import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const HumanBabyChangingTableIcon: FC<FlexSvgProps> = ({
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
      <Path d="M6.5 6.08C5.72 6.12 5 6.62 4.72 7.4L3 12.13V22H7V12.84L8.42 8.94L10.7 10H14V8H11.15L7.29 6.2C7.03 6.11 6.76 6.07 6.5 6.08ZM9 17H21V19H9V17ZM10 3.5C10 4.03043 9.78929 4.53914 9.41421 4.91421C9.03914 5.28929 8.53043 5.5 8 5.5C7.46957 5.5 6.96086 5.28929 6.58579 4.91421C6.21071 4.53914 6 4.03043 6 3.5C6 2.96957 6.21071 2.46086 6.58579 2.08579C6.96086 1.71071 7.46957 1.5 8 1.5C8.53043 1.5 9.03914 1.71071 9.41421 2.08579C9.78929 2.46086 10 2.96957 10 3.5ZM21 14.5C21 14.8978 20.842 15.2794 20.5607 15.5607C20.2794 15.842 19.8978 16 19.5 16C19.1022 16 18.7206 15.842 18.4393 15.5607C18.158 15.2794 18 14.8978 18 14.5C18 14.1022 18.158 13.7206 18.4393 13.4393C18.7206 13.158 19.1022 13 19.5 13C19.8978 13 20.2794 13.158 20.5607 13.4393C20.842 13.7206 21 14.1022 21 14.5ZM9 11V13H11V14C11 15.11 11.89 16 13 16H15C16.11 16 17 15.11 17 14V11H15V13H13V12C13 11.7348 12.8946 11.4804 12.7071 11.2929C12.5196 11.1054 12.2652 11 12 11H9Z" />
    </Svg>
  );
};
