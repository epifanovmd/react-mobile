import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FormatUnderlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M5 21H19V19H5V21ZM12 17C13.5913 17 15.1174 16.3679 16.2426 15.2426C17.3679 14.1174 18 12.5913 18 11V3H15.5V11C15.5 11.9283 15.1313 12.8185 14.4749 13.4749C13.8185 14.1313 12.9283 14.5 12 14.5C11.0717 14.5 10.1815 14.1313 9.52513 13.4749C8.86875 12.8185 8.5 11.9283 8.5 11V3H6V11C6 12.5913 6.63214 14.1174 7.75736 15.2426C8.88258 16.3679 10.4087 17 12 17Z" />
    </Svg>
  );
};
