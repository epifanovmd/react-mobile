import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const NewBoxIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M20 4C21.11 4 22 4.89 22 6V18C22 19.11 21.11 20 20 20H4C2.89 20 2 19.11 2 18V6C2 4.89 2.89 4 4 4H20ZM8.5 15V9H7.25V12.5L4.75 9H3.5V15H4.75V11.5L7.3 15H8.5ZM13.5 10.26V9H9.5V15H13.5V13.75H11V12.64H13.5V11.38H11V10.26H13.5ZM20.5 14V9H19.25V13.5H18.13V10H16.88V13.5H15.75V9H14.5V14C14.5 14.2652 14.6054 14.5196 14.7929 14.7071C14.9804 14.8946 15.2348 15 15.5 15H19.5C19.7652 15 20.0196 14.8946 20.2071 14.7071C20.3946 14.5196 20.5 14.2652 20.5 14Z" />
    </Svg>
  );
};
