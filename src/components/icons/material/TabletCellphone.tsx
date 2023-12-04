import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const TabletCellphoneIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M3 4H20C20.5304 4 21.0391 4.21071 21.4142 4.58579C21.7893 4.96086 22 5.46957 22 6V8H18V6H5V18H14V20H3C2.46957 20 1.96086 19.7893 1.58579 19.4142C1.21071 19.0391 1 18.5304 1 18V6C1 5.46957 1.21071 4.96086 1.58579 4.58579C1.96086 4.21071 2.46957 4 3 4ZM17 10H23C23.2652 10 23.5196 10.1054 23.7071 10.2929C23.8946 10.4804 24 10.7348 24 11V21C24 21.2652 23.8946 21.5196 23.7071 21.7071C23.5196 21.8946 23.2652 22 23 22H17C16.7348 22 16.4804 21.8946 16.2929 21.7071C16.1054 21.5196 16 21.2652 16 21V11C16 10.7348 16.1054 10.4804 16.2929 10.2929C16.4804 10.1054 16.7348 10 17 10ZM18 12V19H22V12H18Z" />
    </Svg>
  );
};
