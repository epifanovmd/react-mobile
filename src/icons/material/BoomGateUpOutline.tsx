import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const BoomGateUpOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M19.9 3.00004C19.3 2.00004 18.1 1.70004 17.2 2.30004L6.9 8.20004C6.6 8.10004 6.3 8.00004 6 8.00004C4.3 8.00004 3 9.30004 3 11V20C2.4 20 2 20.4 2 21V22H10V21C10 20.4 9.6 20 9 20V11.6L19.1 5.80004C20.1 5.20004 20.4 4.00004 19.9 3.00004ZM7.5 20H4.5V13.6C5.4 14.1 6.6 14.1 7.5 13.6V20ZM6 12.5C5.2 12.5 4.5 11.8 4.5 11C4.5 10.2 5.2 9.50004 6 9.50004C6.8 9.50004 7.5 10.2 7.5 11C7.5 11.8 6.8 12.5 6 12.5ZM10.4 9.60004L8.1 8.60004L9.4 7.80004L11.7 8.80004L10.4 9.60004ZM13.9 7.60004L11.6 6.60004L12.9 5.80004L15.2 6.80004L13.9 7.60004ZM17.3 5.60004L15 4.60004L16.3 3.80004L18.6 4.80004L17.3 5.60004Z" />
    </Svg>
  );
};
