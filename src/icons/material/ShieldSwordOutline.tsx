import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ShieldSwordOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M12 1L21 5V11C21 16.5 17.2 21.7 12 23C6.8 21.7 3 16.5 3 11V5L12 1ZM12 3.2L5 6.3V11.2C5 15.5 8.2 20 12 21C15.8 20 19 15.5 19 11.2V6.3L12 3.2ZM12 5.5L14 7.1L13 13H15V15H13V18H11V15H9V13H11L10 7.1L12 5.5Z" />
    </Svg>
  );
};
