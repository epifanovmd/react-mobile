import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ReplayIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M12 5V1L7 6L12 11V7C13.5913 7 15.1174 7.63214 16.2426 8.75736C17.3679 9.88258 18 11.4087 18 13C18 14.5913 17.3679 16.1174 16.2426 17.2426C15.1174 18.3679 13.5913 19 12 19C10.4087 19 8.88258 18.3679 7.75736 17.2426C6.63214 16.1174 6 14.5913 6 13H4C4 15.1217 4.84285 17.1566 6.34315 18.6569C7.84344 20.1571 9.87827 21 12 21C14.1217 21 16.1566 20.1571 17.6569 18.6569C19.1571 17.1566 20 15.1217 20 13C20 10.8783 19.1571 8.84344 17.6569 7.34315C16.1566 5.84285 14.1217 5 12 5Z" />
    </Svg>
  );
};
