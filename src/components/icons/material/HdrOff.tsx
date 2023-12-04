import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const HdrOffIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M17.4999 15V13H18.5999L19.4999 15H20.9999L20.0999 12.9C20.5999 12.7 20.9999 12.1 20.9999 11.5V10.5C20.9999 9.7 20.2999 9 19.4999 9H15.9999V13.9L17.0999 15H17.4999ZM17.4999 10.5H19.4999V11.5H17.4999V10.5ZM12.9999 10.5V10.9L14.4999 12.4V10.5C14.4999 9.7 13.7999 9 12.9999 9H11.0999L12.5999 10.5H12.9999ZM9.4999 9.5L2.4999 2.5L1.3999 3.5L6.8999 9H6.4999V11H4.4999V9H2.9999V15H4.4999V12.5H6.4999V15H7.9999V10.1L9.4999 11.6V15H12.8999L20.4999 22.6L21.5999 21.5L9.4999 9.5Z" />
    </Svg>
  );
};
