import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const PatreonIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M14.82 2.41016C18.78 2.41016 22 5.65016 22 9.62016C22 13.5802 18.78 16.8002 14.82 16.8002C10.85 16.8002 7.61 13.5802 7.61 9.62016C7.61 5.65016 10.85 2.41016 14.82 2.41016ZM2 21.6002H5.5V2.41016H2V21.6002Z" />
    </Svg>
  );
};
