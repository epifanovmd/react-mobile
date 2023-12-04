import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const MicrophonePlusIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M9 2C9.79565 2 10.5587 2.31607 11.1213 2.87868C11.6839 3.44129 12 4.20435 12 5V11C12 11.7956 11.6839 12.5587 11.1213 13.1213C10.5587 13.6839 9.79565 14 9 14C8.20435 14 7.44129 13.6839 6.87868 13.1213C6.31607 12.5587 6 11.7956 6 11V5C6 4.20435 6.31607 3.44129 6.87868 2.87868C7.44129 2.31607 8.20435 2 9 2ZM16 11C16 14.5 13.44 17.43 10 17.93V21H8V17.93C4.56 17.43 2 14.5 2 11H4C4 12.3261 4.52678 13.5979 5.46447 14.5355C6.40215 15.4732 7.67392 16 9 16C9.65661 16 10.3068 15.8707 10.9134 15.6194C11.52 15.3681 12.0712 14.9998 12.5355 14.5355C12.9998 14.0712 13.3681 13.52 13.6194 12.9134C13.8707 12.3068 14 11.6566 14 11H16ZM15 5H18V2H20V5H23V7H20V10H18V7H15V5Z" />
    </Svg>
  );
};
