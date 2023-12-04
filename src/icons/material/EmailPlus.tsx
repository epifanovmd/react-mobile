import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const EmailPlusIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M3 4C1.89 4 1 4.89 1 6V18C1 18.5304 1.21071 19.0391 1.58579 19.4142C1.96086 19.7893 2.46957 20 3 20H14.09C14.03 19.67 14 19.34 14 19C14 17.4087 14.6321 15.8826 15.7574 14.7574C16.8826 13.6321 18.4087 13 20 13C20.34 13 20.67 13.03 21 13.09V6C21 4.89 20.1 4 19 4H3ZM3 6L11 11L19 6V8L11 13L3 8V6ZM19 15V18H16V20H19V23H21V20H24V18H21V15H19Z" />
    </Svg>
  );
};
