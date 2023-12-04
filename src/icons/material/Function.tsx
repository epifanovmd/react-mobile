import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FunctionIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M15.5999 5.28981C14.4999 5.18981 13.5299 5.99981 13.4299 7.10981L13.1799 9.99981H15.9999V11.9998H12.9999L12.5599 17.0698C12.3699 19.2698 10.4299 20.8998 8.22992 20.6998C6.91992 20.5898 5.81992 19.8598 5.16992 18.8298L6.66992 17.3298C6.90992 18.0698 7.56992 18.6398 8.39992 18.7098C9.49992 18.8098 10.4699 17.9998 10.5699 16.8898L10.9999 11.9998H7.99992V9.99981H11.1699L11.4399 6.92981C11.6299 4.72981 13.5699 3.09981 15.7699 3.29981C17.0799 3.40981 18.1799 4.13981 18.8299 5.16981L17.3299 6.66981C17.0899 5.92981 16.4299 5.35981 15.5999 5.28981Z" />
    </Svg>
  );
};
