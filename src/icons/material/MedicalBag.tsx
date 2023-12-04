import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const MedicalBagIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M9.99992 3L7.99992 5V7H4.99992C3.84992 7 3.11992 8 2.99992 9L1.99992 19C1.87992 20 2.53992 21 3.99992 21H19.9999C21.4599 21 22.1199 20 21.9999 19L20.9999 9C20.8799 8 20.0599 7 18.9999 7H15.9999V5L13.9999 3H9.99992ZM9.99992 5H13.9999V7H9.99992V5ZM10.9999 10H12.9999V13H15.9999V15H12.9999V18H10.9999V15H7.99992V13H10.9999V10Z" />
    </Svg>
  );
};
