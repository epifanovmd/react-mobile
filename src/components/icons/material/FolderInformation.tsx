import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const FolderInformationIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M21 11.1V8C21 6.9 20.1 6 19 6H11L9 4H3C1.9 4 1 4.9 1 6V18C1 19.1 1.9 20 3 20H10.3C11.6 21.9 13.8 23 16 23C19.9 23 23 19.9 23 16C23 14.2 22.3 12.4 21 11.1ZM16 21C13.2 21 11 18.8 11 16C11 13.2 13.2 11 16 11C18.8 11 21 13.2 21 16C21 18.8 18.8 21 16 21ZM17 20H15V15H17V20ZM17 14H15V12H17V14Z" />
    </Svg>
  );
};
