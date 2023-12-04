import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const PowershellIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M21.8299 4C22.3199 4 22.6299 4.4 22.4999 4.89L19.3399 19.11C19.2299 19.6 18.7499 20 18.2599 20H2.16992C1.67992 20 1.36992 19.6 1.49992 19.11L4.65992 4.89C4.76992 4.4 5.24992 4 5.73992 4H21.8299ZM15.8299 16H11.8299C11.3699 16 10.9999 16.38 10.9999 16.84C10.9999 17.31 11.3699 17.69 11.8299 17.69H15.8299C16.2999 17.69 16.6799 17.31 16.6799 16.84C16.6799 16.38 16.2999 16 15.8299 16ZM5.77992 16.28C5.37992 16.56 5.28992 17.11 5.56992 17.5C5.84992 17.92 6.40992 18 6.80992 17.73C14.1599 12.56 14.2099 12.5 14.2599 12.47C14.4399 12.31 14.5299 12.09 14.5399 11.87C14.5499 11.67 14.4999 11.5 14.3799 11.31L9.45992 6.03C9.12992 5.67 8.56992 5.65 8.20992 6C7.84992 6.32 7.82992 6.88 8.15992 7.24L12.3099 11.68L5.77992 16.28Z" />
    </Svg>
  );
};
