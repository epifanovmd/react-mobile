import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const DomainPlusIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M12 7V3H2V21H13.35C13.1166 20.3591 12.9982 19.6821 13 19H12V17H13.35C13.5013 16.5338 13.7203 16.0925 14 15.69V15H12V13H14V11H12V9H20V13.09C20.7066 13.1996 21.3856 13.4441 22 13.81V7H12ZM6 19H4V17H6V19ZM6 15H4V13H6V15ZM6 11H4V9H6V11ZM6 7H4V5H6V7ZM10 19H8V17H10V19ZM10 15H8V13H10V15ZM10 11H8V9H10V11ZM10 7H8V5H10V7ZM16 13H18V11H16V13ZM16 11V13H18V11H16ZM16 11V13H18V11H16ZM20 15V18H23V20H20V23H18V20H15V18H18V15H20Z" />
    </Svg>
  );
};
