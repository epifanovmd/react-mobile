import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const PriorityHighIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M14 19H22V17H14V19ZM14 13.5H22V11.5H14V13.5ZM14 8H22V6H14V8ZM2 12.5C2 8.92 4.92 6 8.5 6H9V4L12 7L9 10V8H8.5C6 8 4 10 4 12.5C4 15 6 17 8.5 17H12V19H8.5C4.92 19 2 16.08 2 12.5Z" />
    </Svg>
  );
};
