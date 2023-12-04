import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const BusArticulatedEndIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M21.5 6L20 7.5L21.5 9L20 10.5L21.5 12L20 13.5L21.5 15H12.5C12.5 15.7956 12.1839 16.5587 11.6213 17.1213C11.0587 17.6839 10.2956 18 9.5 18C8.70435 18 7.94129 17.6839 7.37868 17.1213C6.81607 16.5587 6.5 15.7956 6.5 15H2.5V8C2.5 6.89 3.39 6 4.5 6H21.5ZM18.5 7.5H15V10H18.5V7.5ZM13.5 7.5H9.5V10H13.5V7.5ZM8 7.5H4V10H8V7.5ZM9.5 13.5C9.10218 13.5 8.72064 13.658 8.43934 13.9393C8.15804 14.2206 8 14.6022 8 15C8 15.3978 8.15804 15.7794 8.43934 16.0607C8.72064 16.342 9.10218 16.5 9.5 16.5C9.89782 16.5 10.2794 16.342 10.5607 16.0607C10.842 15.7794 11 15.3978 11 15C11 14.6022 10.842 14.2206 10.5607 13.9393C10.2794 13.658 9.89782 13.5 9.5 13.5Z" />
    </Svg>
  );
};
