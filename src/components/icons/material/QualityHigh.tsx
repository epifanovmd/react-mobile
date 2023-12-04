import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const QualityHighIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M14.5 13.5H16.5V10.5H14.5V13.5ZM18 14C18 14.2652 17.8946 14.5196 17.7071 14.7071C17.5196 14.8946 17.2652 15 17 15H16.25V16.5H14.75V15H14C13.7348 15 13.4804 14.8946 13.2929 14.7071C13.1054 14.5196 13 14.2652 13 14V10C13 9.73478 13.1054 9.48043 13.2929 9.29289C13.4804 9.10536 13.7348 9 14 9H17C17.2652 9 17.5196 9.10536 17.7071 9.29289C17.8946 9.48043 18 9.73478 18 10V14ZM11 15H9.5V13H7.5V15H6V9H7.5V11.5H9.5V9H11V15ZM19 4H5C3.89 4 3 4.89 3 6V18C3 18.5304 3.21071 19.0391 3.58579 19.4142C3.96086 19.7893 4.46957 20 5 20H19C19.5304 20 20.0391 19.7893 20.4142 19.4142C20.7893 19.0391 21 18.5304 21 18V6C21 4.89 20.1 4 19 4Z" />
    </Svg>
  );
};
