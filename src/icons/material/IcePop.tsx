import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const IcePopIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M18.15 14.9608L9.94998 18.6508L5.84998 9.65082C7.20998 9.13082 8.11998 7.82083 8.14998 6.36083C8.13998 5.00082 7.35998 3.76083 6.14998 3.15083C6.53998 2.80082 6.99998 2.50082 7.44998 2.25082C9.70998 1.25082 12.37 2.23082 13.45 4.46082L18.15 14.9608ZM13.15 18.3608L14.75 21.8608L17.45 20.6508L15.85 17.1508" />
    </Svg>
  );
};
