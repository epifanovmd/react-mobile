import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FormTextboxIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M17 7H22V17H17V19C17 19.2652 17.1054 19.5196 17.2929 19.7071C17.4804 19.8946 17.7348 20 18 20H20V22H17.5C16.95 22 16 21.55 16 21C16 21.55 15.05 22 14.5 22H12V20H14C14.2652 20 14.5196 19.8946 14.7071 19.7071C14.8946 19.5196 15 19.2652 15 19V5C15 4.73478 14.8946 4.48043 14.7071 4.29289C14.5196 4.10536 14.2652 4 14 4H12V2H14.5C15.05 2 16 2.45 16 3C16 2.45 16.95 2 17.5 2H20V4H18C17.7348 4 17.4804 4.10536 17.2929 4.29289C17.1054 4.48043 17 4.73478 17 5V7ZM2 7H13V9H4V15H13V17H2V7ZM20 15V9H17V15H20Z" />
    </Svg>
  );
};
