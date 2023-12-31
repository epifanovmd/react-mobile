import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const StandardDefinitionIcon: FC<FlexSvgProps> = ({
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
      <Path d="M13 7H16C16.7956 7 17.5587 7.31607 18.1213 7.87868C18.6839 8.44129 19 9.20435 19 10V14C19 14.7956 18.6839 15.5587 18.1213 16.1213C17.5587 16.6839 16.7956 17 16 17H13V7ZM16 15C16.2652 15 16.5196 14.8946 16.7071 14.7071C16.8946 14.5196 17 14.2652 17 14V10C17 9.73478 16.8946 9.48043 16.7071 9.29289C16.5196 9.10536 16.2652 9 16 9H15V15H16ZM7 7H11V9H7V11H9C9.53043 11 10.0391 11.2107 10.4142 11.5858C10.7893 11.9609 11 12.4696 11 13V15C11 15.5304 10.7893 16.0391 10.4142 16.4142C10.0391 16.7893 9.53043 17 9 17H5V15H9V13H7C6.46957 13 5.96086 12.7893 5.58579 12.4142C5.21071 12.0391 5 11.5304 5 11V9C5 8.46957 5.21071 7.96086 5.58579 7.58579C5.96086 7.21071 6.46957 7 7 7Z" />
    </Svg>
  );
};
