import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const BellAlertIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M23 7V13H21V7H23ZM21 15H23V17H21V15ZM12 2C11.4696 2 10.9609 2.21071 10.5858 2.58579C10.2107 2.96086 10 3.46957 10 4C9.99298 4.09654 9.99298 4.19346 10 4.29C7.12 5.14 5 7.82 5 11V17L3 19V20H21V19L19 17V11C19 7.82 16.88 5.14 14 4.29C14.007 4.19346 14.007 4.09654 14 4C14 3.46957 13.7893 2.96086 13.4142 2.58579C13.0391 2.21071 12.5304 2 12 2ZM10 21C10 21.5304 10.2107 22.0391 10.5858 22.4142C10.9609 22.7893 11.4696 23 12 23C12.5304 23 13.0391 22.7893 13.4142 22.4142C13.7893 22.0391 14 21.5304 14 21H10Z" />
    </Svg>
  );
};
