import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FileGifBoxIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M18 4H6C4.9 4 4 4.9 4 6V18C4 19.1 4.9 20 6 20H18C19.1 20 20 19.1 20 18V6C20 4.9 19.1 4 18 4ZM10 10.5H7.5V13.5H8.5V12H10V13.67C10 14.33 9.47 15 8.67 15H7.33C6.53 15 6 14.33 6 13.67V10.33C6 9.67 6.53 9 7.33 9H8.67C9.47 9 10 9.67 10 10.33V10.5ZM13 15H11.5V9H13V15ZM17.5 10.5H16V11.5H17.5V13H16V15H14.5V9H17.5V10.5Z" />
    </Svg>
  );
};
