import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const MemoryIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M17 17H7V7H17V17ZM21 11V9H19V7C19 5.89 18.1 5 17 5H15V3H13V5H11V3H9V5H7C5.89 5 5 5.89 5 7V9H3V11H5V13H3V15H5V17C5 17.5304 5.21071 18.0391 5.58579 18.4142C5.96086 18.7893 6.46957 19 7 19H9V21H11V19H13V21H15V19H17C17.5304 19 18.0391 18.7893 18.4142 18.4142C18.7893 18.0391 19 17.5304 19 17V15H21V13H19V11H21ZM13 13H11V11H13V13ZM15 9H9V15H15V9Z" />
    </Svg>
  );
};
