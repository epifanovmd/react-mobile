import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const MouseOffIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M2 5.27031L3.28 4.00031L20 20.7203L18.73 22.0003L17.5 20.7903C16.08 22.1603 14.14 23.0003 12 23.0003C9.87827 23.0003 7.84344 22.1575 6.34315 20.6572C4.84285 19.1569 4 17.122 4 15.0003V11.0003H7.73L5.73 9.00031H4C4 8.46031 4.05 7.93031 4.15 7.42031L2 5.27031ZM11 1.07031V9.00031H10.82L5.79 3.96031C7.05 2.40031 8.9 1.33031 11 1.07031ZM20 11.0003V15.0003C20 15.9503 19.83 16.8603 19.53 17.7103L12.82 11.0003H20ZM13 1.07031C16.94 1.56031 20 4.92031 20 9.00031H13V1.07031Z" />
    </Svg>
  );
};
