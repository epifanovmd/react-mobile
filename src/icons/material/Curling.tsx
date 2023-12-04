import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CurlingIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M10 2.99994V4.99994C12.5 4.99994 13.9 5.04994 14.72 5.40994C15.26 5.64994 15.73 6.20994 16.25 6.99994H5V8.99994H19.62L18.89 7.54994C17.86 5.49994 16.96 4.21994 15.53 3.58994C14.1 2.94994 12.5 2.99994 10 2.99994ZM6 10.9999C3.78 10.9999 2 12.7799 2 14.9999V17.9999C2 20.2199 3.78 21.9999 6 21.9999H18C20.22 21.9999 22 20.2199 22 17.9999V14.9999C22 12.7799 20.22 10.9999 18 10.9999H6Z" />
    </Svg>
  );
};