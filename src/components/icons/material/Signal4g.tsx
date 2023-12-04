import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const Signal4gIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M22 16.5V10.5H17.5V13.5H19V16.5H16V7.5H22V4.5H16C15.2044 4.5 14.4413 4.81607 13.8787 5.37868C13.3161 5.94129 13 6.70435 13 7.5V16.5C13 17.2956 13.3161 18.0587 13.8787 18.6213C14.4413 19.1839 15.2044 19.5 16 19.5H19C19.7956 19.5 20.5587 19.1839 21.1213 18.6213C21.6839 18.0587 22 17.2956 22 16.5ZM8 19.5H11V4.5H8V10.5H5V4.5H2V13.5H8V19.5Z" />
    </Svg>
  );
};
