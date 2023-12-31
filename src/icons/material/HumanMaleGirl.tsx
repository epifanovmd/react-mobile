import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const HumanMaleGirlIcon: FC<FlexSvgProps> = ({
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
      <Path d="M7.5 2C8.03043 2 8.53914 2.21071 8.91421 2.58579C9.28929 2.96086 9.5 3.46957 9.5 4C9.5 4.53043 9.28929 5.03914 8.91421 5.41421C8.53914 5.78929 8.03043 6 7.5 6C6.96957 6 6.46086 5.78929 6.08579 5.41421C5.71071 5.03914 5.5 4.53043 5.5 4C5.5 3.46957 5.71071 2.96086 6.08579 2.58579C6.46086 2.21071 6.96957 2 7.5 2ZM6 7H9C9.53043 7 10.0391 7.21071 10.4142 7.58579C10.7893 7.96086 11 8.46957 11 9V14.5H9.5V22H5.5V14.5H4V9C4 8.46957 4.21071 7.96086 4.58579 7.58579C4.96086 7.21071 5.46957 7 6 7ZM14.5 12C14.5 11.4696 14.7107 10.9609 15.0858 10.5858C15.4609 10.2107 15.9696 10 16.5 10C17.0304 10 17.5391 10.2107 17.9142 10.5858C18.2893 10.9609 18.5 11.4696 18.5 12C18.5 12.5304 18.2893 13.0391 17.9142 13.4142C17.5391 13.7893 17.0304 14 16.5 14C15.9696 14 15.4609 13.7893 15.0858 13.4142C14.7107 13.0391 14.5 12.5304 14.5 12ZM15 15H18L19.5 19H18V22H15V19H13.5L15 15Z" />
    </Svg>
  );
};
