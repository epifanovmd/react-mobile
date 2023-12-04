import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const BowlMixOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M15.6 11.9999H2V14.9999C2 18.8999 5.1 21.9999 9 21.9999H15C18.9 21.9999 22 18.8999 22 14.9999V11.9999H15.6ZM20 14.9999C20 17.7999 17.8 19.9999 15 19.9999H9C6.2 19.9999 4 17.7999 4 14.9999V13.9999H20V14.9999ZM16.2 10.9999L20.3 4.3999L22 5.4999L18.6 10.9999H16.2Z" />
    </Svg>
  );
};
