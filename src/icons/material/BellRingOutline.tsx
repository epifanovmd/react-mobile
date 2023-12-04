import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const BellRingOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M10 21H14C14 21.5304 13.7893 22.0391 13.4142 22.4142C13.0391 22.7893 12.5304 23 12 23C11.4696 23 10.9609 22.7893 10.5858 22.4142C10.2107 22.0391 10 21.5304 10 21ZM21 19V20H3V19L5 17V11C5 7.9 7.03 5.17 10 4.29C10 4.19 10 4.1 10 4C10 3.46957 10.2107 2.96086 10.5858 2.58579C10.9609 2.21071 11.4696 2 12 2C12.5304 2 13.0391 2.21071 13.4142 2.58579C13.7893 2.96086 14 3.46957 14 4C14 4.1 14 4.19 14 4.29C16.97 5.17 19 7.9 19 11V17L21 19ZM17 11C17 9.67392 16.4732 8.40215 15.5355 7.46447C14.5979 6.52678 13.3261 6 12 6C10.6739 6 9.40215 6.52678 8.46447 7.46447C7.52678 8.40215 7 9.67392 7 11V18H17V11ZM19.75 3.19L18.33 4.61C20.04 6.3 21 8.6 21 11H23C23 8.07 21.84 5.25 19.75 3.19ZM1 11H3C3 8.6 3.96 6.3 5.67 4.61L4.25 3.19C2.16 5.25 1 8.07 1 11Z" />
    </Svg>
  );
};
