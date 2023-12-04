import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const OptionIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" style={style} {...ownProps} fill="none">
      <Path
        d="M3 7H8.0941C8.42444 7 8.58892 7 8.73733 7.0474C8.86867 7.08934 8.99021 7.15798 9.09375 7.24902C9.21075 7.3519 9.29586 7.49359 9.46582 7.77686L14.5337 16.2232C14.7036 16.5065 14.7887 16.6479 14.9057 16.7508C15.0092 16.8419 15.1304 16.9107 15.2617 16.9526C15.41 17 15.5764 17 15.9062 17H21.0003M15 7H21"
        stroke={ownProps.fill || ownProps.color || '#fff'}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
