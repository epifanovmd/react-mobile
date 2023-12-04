import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const LanguageHaskellIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M2.08008 19L6.75008 12L2.08008 5H5.58008L10.2501 12L5.58008 19H2.08008ZM6.75008 19L11.4201 12L6.75008 5H10.2501L19.5901 19H16.0901L13.1701 14.63L10.2501 19H6.75008ZM18.0301 14.92L16.5001 12.58H21.9201V14.92H18.0301ZM15.7001 11.42L14.1401 9.08H21.9201V11.42H15.7001Z" />
    </Svg>
  );
};
