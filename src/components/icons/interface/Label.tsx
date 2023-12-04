import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const LabelIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path
        d="M19.2933 9.95137L16.96 7.15137C16.6073 6.72814 16.43 6.51639 16.2139 6.36426C16.0223 6.22946 15.8084 6.12953 15.5822 6.06868C15.327 6 15.0523 6 14.5014 6H7.2002C6.08009 6 5.51962 6 5.0918 6.21799C4.71547 6.40973 4.40973 6.71547 4.21799 7.0918C4 7.51962 4 8.08009 4 9.2002V14.8002C4 15.9203 4 16.4801 4.21799 16.9079C4.40973 17.2842 4.71547 17.5905 5.0918 17.7822C5.5192 18 6.07899 18 7.19691 18H14.5014C15.0523 18 15.327 17.9998 15.5822 17.9312C15.8084 17.8703 16.0223 17.7702 16.2139 17.6354C16.43 17.4833 16.6073 17.2721 16.96 16.8488L19.2933 14.0488C19.9006 13.32 20.2036 12.9556 20.3197 12.5488C20.422 12.1902 20.422 11.8095 20.3197 11.4509C20.2036 11.0441 19.9006 10.6801 19.2933 9.95137Z"
        stroke={ownProps.fill}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
