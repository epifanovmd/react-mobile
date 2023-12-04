import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const TabUnselectedIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M1 9H3V7H1V9ZM1 13H3V11H1V13ZM1 5H3V3C2.46957 3 1.96086 3.21071 1.58579 3.58579C1.21071 3.96086 1 4.46957 1 5ZM9 21H11V19H9V21ZM1 17H3V15H1V17ZM3 21V19H1C1 19.5304 1.21071 20.0391 1.58579 20.4142C1.96086 20.7893 2.46957 21 3 21ZM21 3H13V9H23V5C23 4.46957 22.7893 3.96086 22.4142 3.58579C22.0391 3.21071 21.5304 3 21 3ZM21 17H23V15H21V17ZM9 5H11V3H9V5ZM5 21H7V19H5V21ZM5 5H7V3H5V5ZM21 21C21.5304 21 22.0391 20.7893 22.4142 20.4142C22.7893 20.0391 23 19.5304 23 19H21V21ZM21 13H23V11H21V13ZM13 21H15V19H13V21ZM17 21H19V19H17V21Z" />
    </Svg>
  );
};
