import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const EthereumIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M12 1.75L5.75 12.25L12 16L18.25 12.25L12 1.75ZM5.75 13.5L12 22.25L18.25 13.5L12 17.25L5.75 13.5Z" />
    </Svg>
  );
};
