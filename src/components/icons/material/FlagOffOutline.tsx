import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const FlagOffOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M22.1101 21.4605L2.39011 1.73047L1.11011 3.00047L5.00011 6.89047V21.0005H7.00011V14.0005H12.1101L12.7201 14.6105L13.0001 16.0005H14.1101L20.8401 22.7305L22.1101 21.4605ZM7.00011 12.0005V8.89047L10.1101 12.0005H7.00011ZM9.20011 6.00047L7.20011 4.00047H14.0001L14.4001 6.00047H20.0001V16.0005H19.2001L17.2001 14.0005H18.0001V8.00047H12.7601L12.3601 6.00047H9.20011Z" />
    </Svg>
  );
};
