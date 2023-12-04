import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const MixedRealityIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C3.89 21 3 20.1 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3ZM8.25 15H9.75L10.75 11.57V15H12.25V9H10L9 12.43L8 9H5.75V15H7.25V11.57L8.25 15ZM13.5 9V15H15V13H16.15L17 15H18.5L17.6 12.9C18.1 12.65 18.5 12.1 18.5 11.5V10.5C18.5 9.65 17.85 9 17 9H13.5ZM15 10.5H17V11.5H15V10.5Z" />
    </Svg>
  );
};
