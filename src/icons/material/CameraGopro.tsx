import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CameraGoproIcon: FC<FlexSvgProps> = ({
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
      <Path d="M20 5H15C14.4696 5 13.9609 5.21071 13.5858 5.58579C13.2107 5.96086 13 6.46957 13 7V12C13 12.5304 13.2107 13.0391 13.5858 13.4142C13.9609 13.7893 14.4696 14 15 14H20C20.5304 14 21.0391 13.7893 21.4142 13.4142C21.7893 13.0391 22 12.5304 22 12V7C22 6.46957 21.7893 5.96086 21.4142 5.58579C21.0391 5.21071 20.5304 5 20 5ZM17.5 12.5C16.7044 12.5 15.9413 12.1839 15.3787 11.6213C14.8161 11.0587 14.5 10.2956 14.5 9.5C14.5 8.70435 14.8161 7.94129 15.3787 7.37868C15.9413 6.81607 16.7044 6.5 17.5 6.5C18.2956 6.5 19.0587 6.81607 19.6213 7.37868C20.1839 7.94129 20.5 8.70435 20.5 9.5C20.5 10.2956 20.1839 11.0587 19.6213 11.6213C19.0587 12.1839 18.2956 12.5 17.5 12.5ZM17.5 11C17.1022 11 16.7206 10.842 16.4393 10.5607C16.158 10.2794 16 9.89782 16 9.5C16 9.10218 16.158 8.72064 16.4393 8.43934C16.7206 8.15804 17.1022 8 17.5 8C17.8978 8 18.2794 8.15804 18.5607 8.43934C18.842 8.72064 19 9.10218 19 9.5C19 9.89782 18.842 10.2794 18.5607 10.5607C18.2794 10.842 17.8978 11 17.5 11ZM12 15V5H4C3.46957 5 2.96086 5.21071 2.58579 5.58579C2.21071 5.96086 2 6.46957 2 7V17C2 17.5304 2.21071 18.0391 2.58579 18.4142C2.96086 18.7893 3.46957 19 4 19H20C20.5304 19 21.0391 18.7893 21.4142 18.4142C21.7893 18.0391 22 17.5304 22 17V15H12ZM10 12H4V7H10V12Z" />
    </Svg>
  );
};
