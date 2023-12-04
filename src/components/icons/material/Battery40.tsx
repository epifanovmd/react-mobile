import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const Battery40Icon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M16 14H8V6H16V14ZM16.67 4H15V2H9V4H7.33C6.97726 4 6.63897 4.14012 6.38955 4.38955C6.14012 4.63897 6 4.97726 6 5.33V20.67C6 21.4 6.6 22 7.33 22H16.67C17.0227 22 17.361 21.8599 17.6105 21.6105C17.8599 21.361 18 21.0227 18 20.67V5.33C18 4.6 17.4 4 16.67 4Z" />
    </Svg>
  );
};
