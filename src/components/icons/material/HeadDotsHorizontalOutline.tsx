import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const HeadDotsHorizontalOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M13 3C16.9 3 20 6.1 20 10C20 12.8 18.4 15.2 16 16.3V21H9.00002V18H8.00002C6.90002 18 6.00002 17.1 6.00002 16V13H4.50002C4.10002 13 3.80002 12.5 4.10002 12.2L6.00002 9.7C6.20002 5.9 9.20002 3 13 3ZM13 1C8.40002 1 4.60002 4.4 4.10002 8.9L2.50002 11C1.90002 11.8 1.90002 12.8 2.30002 13.6C2.70002 14.3 3.30002 14.8 4.00002 14.9V16C4.00002 17.9 5.30002 19.4 7.00002 19.9V23H18V17.5C20.5 15.8 22 13.1 22 10C22 5 18 1 13 1ZM10 10C9.40002 10 9.00002 9.6 9.00002 9C9.00002 8.4 9.40002 8 10 8C10.6 8 11 8.4 11 9C11 9.6 10.6 10 10 10ZM13 10C12.4 10 12 9.6 12 9C12 8.4 12.4 8 13 8C13.6 8 14 8.4 14 9C14 9.6 13.6 10 13 10ZM16 10C15.5 10 15 9.6 15 9C15 8.4 15.5 8 16 8C16.5 8 17 8.4 17 9C17 9.6 16.5 10 16 10Z" />
    </Svg>
  );
};
