import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CurrencyBrlIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M12 15H14C14 16.08 15.37 17 17 17C18.63 17 20 16.08 20 15C20 13.9 18.96 13.5 16.76 12.97C14.64 12.44 12 11.78 12 9C12 7.21 13.47 5.69 15.5 5.18V3H18.5V5.18C20.53 5.69 22 7.21 22 9H20C20 7.92 18.63 7 17 7C15.37 7 14 7.92 14 9C14 10.1 15.04 10.5 17.24 11.03C19.36 11.56 22 12.22 22 15C22 16.79 20.53 18.31 18.5 18.82V21H15.5V18.82C13.47 18.31 12 16.79 12 15ZM2 3H5.5C6.95869 3 8.35764 3.57946 9.38909 4.61091C10.4205 5.64236 11 7.04131 11 8.5C11 10.69 9.71 12.59 7.86 13.47L11.64 21H9.4L5.88 14H5.5H4V21H2V3ZM5.5 12C6.42826 12 7.3185 11.6313 7.97487 10.9749C8.63125 10.3185 9 9.42826 9 8.5C9 7.57174 8.63125 6.6815 7.97487 6.02513C7.3185 5.36875 6.42826 5 5.5 5H4V12H5.5Z" />
    </Svg>
  );
};
