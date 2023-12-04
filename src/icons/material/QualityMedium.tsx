import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const QualityMediumIcon: FC<FlexSvgProps> = ({
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
      <Path d="M21 6V18C21 18.5304 20.7893 19.0391 20.4142 19.4142C20.0391 19.7893 19.5304 20 19 20H5C4.46957 20 3.96086 19.7893 3.58579 19.4142C3.21071 19.0391 3 18.5304 3 18V6C3 5.46957 3.21071 4.96086 3.58579 4.58579C3.96086 4.21071 4.46957 4 5 4H19C19.5304 4 20.0391 4.21071 20.4142 4.58579C20.7893 4.96086 21 5.46957 21 6ZM12 10C12 9.5 11.5 9 11 9H6.5C6 9 5.5 9.5 5.5 10V15H7V10.5H8V14H9.5V10.5H10.5V15H12V10ZM14.5 9C14.2348 9 13.9804 9.10536 13.7929 9.29289C13.6054 9.48043 13.5 9.73478 13.5 10V14C13.5 14.2652 13.6054 14.5196 13.7929 14.7071C13.9804 14.8946 14.2348 15 14.5 15H15.5V16.5H16.75V15H17.5C17.7652 15 18.0196 14.8946 18.2071 14.7071C18.3946 14.5196 18.5 14.2652 18.5 14V10C18.5 9.73478 18.3946 9.48043 18.2071 9.29289C18.0196 9.10536 17.7652 9 17.5 9H14.5ZM15 10.5H17V13.5H15V10.5Z" />
    </Svg>
  );
};
