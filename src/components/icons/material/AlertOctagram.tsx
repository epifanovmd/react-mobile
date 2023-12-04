import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const AlertOctagramIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M2.19995 16.06L3.87995 12L2.19995 7.94001L6.25995 6.26001L7.93995 2.20001L12 3.88001L16.06 2.20001L17.74 6.26001L21.7999 7.94001L20.12 12L21.7999 16.06L17.74 17.74L16.06 21.8L12 20.12L7.93995 21.8L6.25995 17.74L2.19995 16.06ZM13 17V15H11V17H13ZM13 13V7.00001H11V13H13Z" />
    </Svg>
  );
};
