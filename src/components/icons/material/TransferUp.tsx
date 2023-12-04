import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const TransferUpIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M8 21V19H16V21H8ZM8 17V15H16V17H8ZM8 13V11H16V13H8ZM19 9H5L12 2L19 9Z" />
    </Svg>
  );
};
