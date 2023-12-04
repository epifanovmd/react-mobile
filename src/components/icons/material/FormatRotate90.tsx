import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const FormatRotate90Icon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M7.33999 6.40977L0.859985 12.8998L7.34999 19.3798L13.84 12.8998L7.33999 6.40977ZM3.68999 12.8998L7.34999 9.23977L11 12.8998L7.33999 16.5598L3.68999 12.8998ZM19.36 6.63977C17.61 4.87977 15.3 3.99977 13 3.99977V0.759766L8.75999 4.99977L13 9.23977V5.99977C14.79 5.99977 16.58 6.67977 17.95 8.04977C20.68 10.7798 20.68 15.2198 17.95 17.9498C16.58 19.3198 14.79 19.9998 13 19.9998C12.03 19.9998 11.06 19.7898 10.16 19.3898L8.66999 20.8798C9.99999 21.6198 11.5 21.9998 13 21.9998C15.3 21.9998 17.61 21.1198 19.36 19.3598C22.88 15.8498 22.88 10.1498 19.36 6.63977Z" />
    </Svg>
  );
};
