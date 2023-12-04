import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ExcavatorIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M18.5 18.5C19.04 18.5 19.5 18.96 19.5 19.5C19.5 20.04 19.04 20.5 18.5 20.5H6.49997C5.95997 20.5 5.49997 20.04 5.49997 19.5C5.49997 18.96 5.95997 18.5 6.49997 18.5H18.5ZM18.5 17H6.49997C5.12997 17 3.99997 18.13 3.99997 19.5C3.99997 20.87 5.12997 22 6.49997 22H18.5C19.88 22 21 20.88 21 19.5C21 18.12 19.88 17 18.5 17ZM21 11H18V7H13L9.99997 11V16H22L21 11ZM11.54 11L13.5 8.5H16V11H11.54ZM9.75997 3.41L4.75997 2L1.99997 11.83C1.65997 13.11 2.40997 14.44 3.69997 14.8L4.85997 15.12L8.14997 12.29L4.26997 11.21L6.14997 4.46L8.93997 5.24C9.49997 5.53 10.71 6.34 11.47 7.37L12.5 6H12.94C11.68 4.41 9.84998 3.46 9.75997 3.41Z" />
    </Svg>
  );
};
