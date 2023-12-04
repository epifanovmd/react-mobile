import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const HeadAlertOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M13 3C16.9 3 20 6.1 20 10C20 12.8 18.4 15.2 16 16.3V21H9.00002V18H8.00002C6.90002 18 6.00002 17.1 6.00002 16V13H4.50002C4.10002 13 3.80002 12.5 4.10002 12.2L6.00002 9.7C6.20002 5.9 9.20002 3 13 3ZM13 1C8.40002 1 4.60002 4.4 4.10002 8.9L2.50002 11C1.90002 11.8 1.90002 12.8 2.30002 13.6C2.70002 14.3 3.30002 14.8 4.00002 14.9V16C4.00002 17.9 5.30002 19.4 7.00002 19.9V23H18V17.5C20.5 15.8 22 13.1 22 10C22 5 18 1 13 1ZM14 15H12V13H14V15ZM14 11H12V5H14" />
    </Svg>
  );
};
