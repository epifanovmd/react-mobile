import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FilePdfBoxIcon: FC<FlexSvgProps> = ({
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
      <Path d="M12 10.5H13V13.5H12V10.5ZM7 11.5H8V10.5H7V11.5ZM20 6V18C20 18.5304 19.7893 19.0391 19.4142 19.4142C19.0391 19.7893 18.5304 20 18 20H6C5.46957 20 4.96086 19.7893 4.58579 19.4142C4.21071 19.0391 4 18.5304 4 18V6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4H18C18.5304 4 19.0391 4.21071 19.4142 4.58579C19.7893 4.96086 20 5.46957 20 6ZM9.5 10.5C9.5 10.1022 9.34196 9.72064 9.06066 9.43934C8.77936 9.15804 8.39782 9 8 9H5.5V15H7V13H8C8.39782 13 8.77936 12.842 9.06066 12.5607C9.34196 12.2794 9.5 11.8978 9.5 11.5V10.5ZM14.5 10.5C14.5 10.1022 14.342 9.72064 14.0607 9.43934C13.7794 9.15804 13.3978 9 13 9H10.5V15H13C13.3978 15 13.7794 14.842 14.0607 14.5607C14.342 14.2794 14.5 13.8978 14.5 13.5V10.5ZM18.5 9H15.5V15H17V13H18.5V11.5H17V10.5H18.5V9Z" />
    </Svg>
  );
};
