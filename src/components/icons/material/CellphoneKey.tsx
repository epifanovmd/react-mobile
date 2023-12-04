import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const CellphoneKeyIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M7 1C5.9 1 5 1.9 5 3V7H7V4H17V20H7V17H5V21C5 22.1 5.9 23 7 23H17C18.1 23 19 22.1 19 21V3C19 1.9 18.1 1 17 1H7ZM6 9C4.3 9 3 10.3 3 12C3 13.7 4.3 15 6 15C7.3 15 8.4 14.2 8.8 13H11V15H13V13H15V11H8.8C8.4 9.8 7.3 9 6 9ZM6 11C6.6 11 7 11.4 7 12C7 12.6 6.6 13 6 13C5.4 13 5 12.6 5 12C5 11.4 5.4 11 6 11Z" />
    </Svg>
  );
};
