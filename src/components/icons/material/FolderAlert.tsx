import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const FolderAlertIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M15 12H17V17H15V12ZM15 18H17V20H15V18ZM23 16C23 17.8565 22.2625 19.637 20.9497 20.9497C19.637 22.2625 17.8565 23 16 23C13.62 23 11.5 21.81 10.25 20H3C1.89 20 1 19.1 1 18V6C1 4.89 1.89 4 3 4H9L11 6H19C19.5304 6 20.0391 6.21071 20.4142 6.58579C20.7893 6.96086 21 7.46957 21 8V11.1C22.24 12.36 23 14.09 23 16ZM16 11C14.6739 11 13.4021 11.5268 12.4645 12.4645C11.5268 13.4021 11 14.6739 11 16C11 17.3261 11.5268 18.5979 12.4645 19.5355C13.4021 20.4732 14.6739 21 16 21C17.3261 21 18.5979 20.4732 19.5355 19.5355C20.4732 18.5979 21 17.3261 21 16C21 14.6739 20.4732 13.4021 19.5355 12.4645C18.5979 11.5268 17.3261 11 16 11Z" />
    </Svg>
  );
};
