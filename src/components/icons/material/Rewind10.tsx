import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const Rewind10Icon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M12.5 3C17.15 3 21.08 6.03 22.47 10.22L20.1 11C19.05 7.81 16.04 5.5 12.5 5.5C10.54 5.5 8.77 6.22 7.38 7.38L10 10H3V3L5.6 5.6C7.45 4 9.85 3 12.5 3ZM10 12V22H8V14H6V12H10ZM18 14V20C18 21.11 17.11 22 16 22H14C13.4696 22 12.9609 21.7893 12.5858 21.4142C12.2107 21.0391 12 20.5304 12 20V14C12 13.4696 12.2107 12.9609 12.5858 12.5858C12.9609 12.2107 13.4696 12 14 12H16C17.11 12 18 12.9 18 14ZM14 14V20H16V14H14Z" />
    </Svg>
  );
};
