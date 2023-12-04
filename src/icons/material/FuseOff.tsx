import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FuseOffIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M15 11.8L10.2 7H15V11.8ZM16 6V2C16 1.45 15.55 1 15 1H7.99999C7.44999 1 6.99999 1.45 6.99999 2V3.8L9.19999 6H16ZM2.38999 1.73L1.10999 3L7.99999 9.89V17H15.11L20.84 22.73L22.11 21.46L2.38999 1.73ZM6.99999 22C6.99999 22.55 7.44999 23 7.99999 23H15C15.55 23 16 22.55 16 22V18H6.99999V22Z" />
    </Svg>
  );
};
