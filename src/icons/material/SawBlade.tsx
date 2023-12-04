import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const SawBladeIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M20 15C20 15 18.6 16.3 21.1 17L18.3 19.8H15.5C15.5 19.8 13.6 19.7 15 22H11L9 20C9 20 7.7 18.6 7 21.1L4.2 18.3V15.5C4.2 15.5 4.3 13.6 2 15V11L4 9C4 9 5.4 7.7 2.8 7.1L5.6 4.2H8.5C8.5 4.2 10.4 4.3 9 2H13L15 4C15 4 16.3 5.4 17 2.8L19.8 5.6V8.5C19.8 8.5 19.7 10.4 22 9V13L20 15ZM14 12C14 11.4696 13.7893 10.9609 13.4142 10.5858C13.0391 10.2107 12.5304 10 12 10C11.4696 10 10.9609 10.2107 10.5858 10.5858C10.2107 10.9609 10 11.4696 10 12C10 12.5304 10.2107 13.0391 10.5858 13.4142C10.9609 13.7893 11.4696 14 12 14C12.5304 14 13.0391 13.7893 13.4142 13.4142C13.7893 13.0391 14 12.5304 14 12Z" />
    </Svg>
  );
};
