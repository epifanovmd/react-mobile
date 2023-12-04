import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const GestureSwipeIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M20.11 3.89L22 2V7H17L19.08 4.92C18.55 4.23 17.64 3.66 16.36 3.19C15.08 2.72 13.63 2.5 12 2.5C10.38 2.5 8.92 2.72 7.64 3.19C6.36 3.66 5.45 4.23 4.92 4.92L7 7H2V2L3.89 3.89C4.64 3 5.74 2.31 7.2 1.78C8.65 1.25 10.25 1 12 1C13.75 1 15.35 1.25 16.8 1.78C18.26 2.31 19.36 3 20.11 3.89ZM19.73 16.27V16.45L19 21.7C18.92 22.08 18.76 22.39 18.5 22.64C18.23 22.89 17.91 23 17.53 23H10.73C10.36 23 10 22.86 9.7 22.55L4.73 17.63L5.53 16.83C5.75 16.61 6 16.5 6.33 16.5H6.56L10 17.25V6.5C10 6.11 10.13 5.76 10.43 5.46C10.73 5.16 11.08 5 11.5 5C11.89 5 12.24 5.16 12.54 5.46C12.84 5.76 13 6.11 13 6.5V12.5H13.78C13.88 12.5 14.05 12.55 14.3 12.61L18.84 14.86C19.44 15.14 19.73 15.61 19.73 16.27Z" />
    </Svg>
  );
};
