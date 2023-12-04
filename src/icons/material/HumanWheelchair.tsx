import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const HumanWheelchairIcon: FC<FlexSvgProps> = ({
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
      <Path d="M8.5 4C8.5 4.53043 8.28929 5.03914 7.91421 5.41421C7.53914 5.78929 7.03043 6 6.5 6C5.96957 6 5.46086 5.78929 5.08579 5.41421C4.71071 5.03914 4.5 4.53043 4.5 4C4.5 3.46957 4.71071 2.96086 5.08579 2.58579C5.46086 2.21071 5.96957 2 6.5 2C7.03043 2 7.53914 2.21071 7.91421 2.58579C8.28929 2.96086 8.5 3.46957 8.5 4ZM5 7C3.89 7 3 7.89 3 9V15H5V22H8.61C7.94318 21.349 7.41306 20.5714 7.05073 19.7128C6.68841 18.8542 6.50117 17.9319 6.5 17C6.50214 15.7733 6.82659 14.5687 7.44086 13.5069C8.05513 12.4451 8.93765 11.5633 10 10.95V9C10 7.89 9.11 7 8 7H5ZM13 8V16H18.5L21.2 19.6L22.8 18.4L19.5 14H15V8H13ZM12 12.23C10.985 12.5492 10.0982 13.1839 9.46878 14.0418C8.83931 14.8997 8.49994 15.936 8.5 17C8.5 18.3261 9.02678 19.5979 9.96447 20.5355C10.9021 21.4732 12.1739 22 13.5 22C14.8261 22 16.0979 21.4732 17.0355 20.5355C17.9732 19.5979 18.5 18.3261 18.5 17H16.5C16.5 17.7956 16.1839 18.5587 15.6213 19.1213C15.0587 19.6839 14.2956 20 13.5 20C12.7044 20 11.9413 19.6839 11.3787 19.1213C10.8161 18.5587 10.5 17.7956 10.5 17C10.5014 16.4748 10.6407 15.9591 10.9039 15.5046C11.1672 15.0501 11.5451 14.6726 12 14.41V12.23Z" />
    </Svg>
  );
};
