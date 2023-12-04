import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const MusicOffIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M2 5.27L3.28 4L20 20.72L18.73 22L9 12.27V17.5C9 18.4283 8.63125 19.3185 7.97487 19.9749C7.3185 20.6313 6.42826 21 5.5 21C4.57174 21 3.6815 20.6313 3.02513 19.9749C2.36875 19.3185 2 18.4283 2 17.5C2 16.5717 2.36875 15.6815 3.02513 15.0251C3.6815 14.3687 4.57174 14 5.5 14C6.04 14 6.55 14.12 7 14.34V10.27L2 5.27ZM21 3V15.5C21 16.5 20.57 17.42 19.88 18.06L14.94 13.12C15.58 12.43 16.5 12 17.5 12C18.04 12 18.55 12.12 19 12.34V6.47L10.17 8.35L7.66 5.84L21 3Z" />
    </Svg>
  );
};
