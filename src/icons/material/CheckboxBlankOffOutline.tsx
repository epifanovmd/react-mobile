import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CheckboxBlankOffOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M22.11 21.46L2.38999 1.72998L1.10999 2.99998L2.99999 4.89998V19C2.99999 20.11 3.89999 21 4.99999 21H19.1L20.84 22.73L22.11 21.46ZM4.99999 19V6.88998L17.11 19H4.99999ZM8.19999 4.99998L6.19999 2.99998H19C20.1 2.99998 21 3.88998 21 4.99998V17.8L19 15.8V4.99998H8.19999Z" />
    </Svg>
  );
};
