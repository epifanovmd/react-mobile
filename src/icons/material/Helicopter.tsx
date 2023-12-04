import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const HelicopterIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M3 3H17V5H3V3ZM23 6V10.5L14.75 12.2C14.91 12.6 15 13.04 15 13.5C15 14.9 14.18 16.1 13 16.66V17V19H16V21H4C3.20435 21 2.44129 20.6839 1.87868 20.1213C1.31607 19.5587 1 18.7956 1 18V17H3V18C3 18.2652 3.10536 18.5196 3.29289 18.7071C3.48043 18.8946 3.73478 19 4 19H5V16.74C3.25 16.13 2 14.46 2 12.5C2 10 4 8 6.5 8H9V6H11V8H21V6H23ZM11 19V17H7V19H11ZM7.5 10C6.12 10 5 10.9 5 12C5 13.1 6.12 14 7.5 14C8.88 14 10 13.1 10 12C10 10.9 8.88 10 7.5 10Z" />
    </Svg>
  );
};
