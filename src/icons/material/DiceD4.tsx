import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const DiceD4Icon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M10.25 15.1498L11.92 12.4698V15.1498H10.25ZM21.92 20.9998H2.08C1.24 20.9998 0.72 20.0798 1.16 19.3598L11.08 3.1298C11.5 2.4398 12.5 2.4398 12.92 3.1298L22.84 19.3598C23.28 20.0798 22.76 20.9998 21.92 20.9998ZM14.29 15.1498H13.43V10.4198H11.91L8.75 15.4098L8.82 16.3598H11.92V17.9998H13.43V16.3598H14.29V15.1498Z" />
    </Svg>
  );
};
