import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ProjectorIcon: FC<FlexSvgProps> = ({
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
      <Path d="M16 6C14.87 6 13.77 6.35 12.84 7H4C2.89 7 2 7.89 2 9V15C2 16.11 2.89 17 4 17H5V18C5 18.2652 5.10536 18.5196 5.29289 18.7071C5.48043 18.8946 5.73478 19 6 19H8C8.26522 19 8.51957 18.8946 8.70711 18.7071C8.89464 18.5196 9 18.2652 9 18V17H15V18C15 18.2652 15.1054 18.5196 15.2929 18.7071C15.4804 18.8946 15.7348 19 16 19H18C18.2652 19 18.5196 18.8946 18.7071 18.7071C18.8946 18.5196 19 18.2652 19 18V17H20C21.11 17 22 16.11 22 15V9C22 7.89 21.11 7 20 7H19.15C18.23 6.35 17.13 6 16 6ZM16 7.5C16.9283 7.5 17.8185 7.86875 18.4749 8.52513C19.1313 9.1815 19.5 10.0717 19.5 11C19.5 11.9283 19.1313 12.8185 18.4749 13.4749C17.8185 14.1313 16.9283 14.5 16 14.5C15.0717 14.5 14.1815 14.1313 13.5251 13.4749C12.8687 12.8185 12.5 11.9283 12.5 11C12.5 10.0717 12.8687 9.1815 13.5251 8.52513C14.1815 7.86875 15.0717 7.5 16 7.5ZM4 9H8V10H4V9ZM16 9C15.4696 9 14.9609 9.21071 14.5858 9.58579C14.2107 9.96086 14 10.4696 14 11C14 11.5304 14.2107 12.0391 14.5858 12.4142C14.9609 12.7893 15.4696 13 16 13C16.5304 13 17.0391 12.7893 17.4142 12.4142C17.7893 12.0391 18 11.5304 18 11C18 10.4696 17.7893 9.96086 17.4142 9.58579C17.0391 9.21071 16.5304 9 16 9ZM4 11H8V12H4V11ZM4 13H8V14H4V13Z" />
    </Svg>
  );
};
