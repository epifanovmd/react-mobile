import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CellphoneOffIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M2.37999 1.73L1.10999 3L4.99999 6.89V21C4.99999 21.5304 5.2107 22.0391 5.58577 22.4142C5.96084 22.7893 6.46955 23 6.99999 23H17C17.5304 23 18.0391 22.7893 18.4142 22.4142C18.7893 22.0391 19 21.5304 19 21V20.89L20.84 22.73L22.11 21.46L2.37999 1.73ZM17 19H6.99999V8.89L17 18.89V19ZM17 5V13.8L19 15.8V3C19 2.46957 18.7893 1.96086 18.4142 1.58579C18.0391 1.21071 17.5304 1 17 1H6.99999C6.27999 1 5.59999 1.37 5.23998 2L8.23998 5H17Z" />
    </Svg>
  );
};
