import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const LeadPencilIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M16.84 2.73047C16.45 2.73047 16.07 2.88047 15.77 3.17047L13.65 5.29047L18.95 10.6005L21.07 8.50047C21.67 7.89047 21.67 6.94047 21.07 6.36047L17.9 3.17047C17.6 2.88047 17.22 2.73047 16.84 2.73047ZM12.94 6.00047L4.84 14.1105L7.4 14.3905L7.58 16.6805L9.86 16.8505L10.15 19.4105L18.25 11.3005L12.94 6.00047ZM4.25 15.0405L2.5 21.7305L9.2 19.9405L8.96 17.7805L6.65 17.6105L6.47 15.2905" />
    </Svg>
  );
};
