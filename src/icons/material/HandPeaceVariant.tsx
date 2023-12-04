import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const HandPeaceVariantIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M7 19.0007H15V22.0007H7V19.0007ZM16.94 1.00072C16.4 0.910719 15.87 1.25072 15.76 1.80072L14.75 7.57072C14.53 7.54072 14.29 7.50072 14 7.47072L13.57 7.50072L12.41 1.80072C12.31 1.26072 11.78 0.910719 11.24 1.00072C10.7 1.13072 10.35 1.66072 10.45 2.20072L11.65 8.11072L7.85 9.80072C7.35 10.0007 7 10.5307 7 11.1407V15.5007C7 16.3007 7.73 17.0007 8.5 17.0007H15C15.39 17.0007 15.74 16.8407 16 16.5707L16.5 16.1607C16.5 16.1607 17 15.7807 17 15.3607V13.0007C17 13.0007 17 11.8607 16.13 11.3007L17.71 2.20072C17.83 1.66072 17.5 1.13072 16.94 1.00072Z" />
    </Svg>
  );
};
