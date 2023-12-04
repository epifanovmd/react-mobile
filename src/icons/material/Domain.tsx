import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const DomainIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M18 15H16V17H18V15ZM18 11H16V13H18V11ZM20 19H12V17H14V15H12V13H14V11H12V9H20V19ZM10 7H8V5H10V7ZM10 11H8V9H10V11ZM10 15H8V13H10V15ZM10 19H8V17H10V19ZM6 7H4V5H6V7ZM6 11H4V9H6V11ZM6 15H4V13H6V15ZM6 19H4V17H6V19ZM12 7V3H2V21H22V7H12Z" />
    </Svg>
  );
};
