import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FuseIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M8 7V17H15V7H8ZM11.16 16V12.87H9.41L11.91 8V11.14H13.59L11.16 16ZM16 2V6H7V2C7 1.73478 7.10536 1.48043 7.29289 1.29289C7.48043 1.10536 7.73478 1 8 1H15C15.2652 1 15.5196 1.10536 15.7071 1.29289C15.8946 1.48043 16 1.73478 16 2ZM16 18V22C16 22.2652 15.8946 22.5196 15.7071 22.7071C15.5196 22.8946 15.2652 23 15 23H8C7.73478 23 7.48043 22.8946 7.29289 22.7071C7.10536 22.5196 7 22.2652 7 22V18H16Z" />
    </Svg>
  );
};
