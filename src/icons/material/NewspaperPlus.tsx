import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const NewspaperPlusIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M17 14H19V17H22V19H19V22H17V19H14V17H17V14ZM20 11V8H4V11H20ZM13 13V14.68C12.37 15.63 12 16.77 12 18C12 19.09 12.29 20.12 12.8 21H4C3.46957 21 2.96086 20.7893 2.58579 20.4142C2.21071 20.0391 2 19.5304 2 19V3L3.67 4.67L5.33 3L7 4.67L8.67 3L10.33 4.67L12 3L13.67 4.67L15.33 3L17 4.67L18.67 3L20.33 4.67L22 3V13.5C20.93 12.58 19.53 12 18 12C16.77 12 15.63 12.37 14.68 13H13ZM11 19V13H4V19H11Z" />
    </Svg>
  );
};
