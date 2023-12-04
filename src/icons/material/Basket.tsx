import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const BasketIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M5.5 21C4.72 21 4.04 20.55 3.71 19.9L1.1 10.44L1 10C1 9.73478 1.10536 9.48043 1.29289 9.29289C1.48043 9.10536 1.73478 9 2 9H6.58L11.18 2.43C11.36 2.17 11.66 2 12 2C12.34 2 12.65 2.17 12.83 2.44L17.42 9H22C22.2652 9 22.5196 9.10536 22.7071 9.29289C22.8946 9.48043 23 9.73478 23 10L22.96 10.29L20.29 19.9C19.96 20.55 19.28 21 18.5 21H5.5ZM12 4.74L9 9H15L12 4.74ZM12 13C11.4696 13 10.9609 13.2107 10.5858 13.5858C10.2107 13.9609 10 14.4696 10 15C10 15.5304 10.2107 16.0391 10.5858 16.4142C10.9609 16.7893 11.4696 17 12 17C12.5304 17 13.0391 16.7893 13.4142 16.4142C13.7893 16.0391 14 15.5304 14 15C14 14.4696 13.7893 13.9609 13.4142 13.5858C13.0391 13.2107 12.5304 13 12 13Z" />
    </Svg>
  );
};
