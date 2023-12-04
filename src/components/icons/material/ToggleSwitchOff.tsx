import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const ToggleSwitchOffIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M17 7H7C5.67392 7 4.40215 7.52678 3.46447 8.46447C2.52678 9.40215 2 10.6739 2 12C2 13.3261 2.52678 14.5979 3.46447 15.5355C4.40215 16.4732 5.67392 17 7 17H17C18.3261 17 19.5979 16.4732 20.5355 15.5355C21.4732 14.5979 22 13.3261 22 12C22 10.6739 21.4732 9.40215 20.5355 8.46447C19.5979 7.52678 18.3261 7 17 7ZM7 15C6.20435 15 5.44129 14.6839 4.87868 14.1213C4.31607 13.5587 4 12.7956 4 12C4 11.2044 4.31607 10.4413 4.87868 9.87868C5.44129 9.31607 6.20435 9 7 9C7.79565 9 8.55871 9.31607 9.12132 9.87868C9.68393 10.4413 10 11.2044 10 12C10 12.7956 9.68393 13.5587 9.12132 14.1213C8.55871 14.6839 7.79565 15 7 15Z" />
    </Svg>
  );
};
