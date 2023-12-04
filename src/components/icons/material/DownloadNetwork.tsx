import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const DownloadNetworkIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M17 3C17.5304 3 18.0391 3.21071 18.4142 3.58579C18.7893 3.96086 19 4.46957 19 5V15C19 15.5304 18.7893 16.0391 18.4142 16.4142C18.0391 16.7893 17.5304 17 17 17H13V19H14C14.2652 19 14.5196 19.1054 14.7071 19.2929C14.8946 19.4804 15 19.7348 15 20H22V22H15C15 22.2652 14.8946 22.5196 14.7071 22.7071C14.5196 22.8946 14.2652 23 14 23H10C9.73478 23 9.48043 22.8946 9.29289 22.7071C9.10536 22.5196 9 22.2652 9 22H2V20H9C9 19.7348 9.10536 19.4804 9.29289 19.2929C9.48043 19.1054 9.73478 19 10 19H11V17H7C5.89 17 5 16.1 5 15V5C5 4.46957 5.21071 3.96086 5.58579 3.58579C5.96086 3.21071 6.46957 3 7 3H17ZM12 14.5L16.5 10H13V6H11V10H7.5L12 14.5Z" />
    </Svg>
  );
};
