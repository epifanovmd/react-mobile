import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const WifiStrength3AlertIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M11.9999 3C7.7999 3 3.6999 4.4 0.399902 7C4.3999 12.1 7.8999 16.4 11.9999 21.5C14.3999 18.5 16.6999 15.7 18.9999 12.8V9.6L18.7999 9.9C17.2999 9 14.8999 8 11.9999 8C8.9999 8 6.6999 9 5.1999 9.8L3.2999 7.4C5.8999 5.8 8.8999 5 11.9999 5C15.0999 5 18.0999 5.9 20.6999 7.4L20.2999 8H22.8999C23.0999 7.7 23.4999 7.3 23.6999 7C20.2999 4.4 16.1999 3 11.9999 3ZM20.9999 10V16H22.9999V10H20.9999ZM20.9999 18V20H22.9999V18" />
    </Svg>
  );
};
