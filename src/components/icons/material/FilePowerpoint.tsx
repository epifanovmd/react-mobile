import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const FilePowerpointIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M12.6 12.3H10.6V15.5H12.7C13.3 15.5 13.6 15.3 13.9 15C14.2 14.7 14.3 14.4 14.3 13.9C14.3 13.4 14.2 13.1 13.9 12.8C13.6 12.5 13.2 12.3 12.6 12.3ZM14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2ZM15.2 16C14.6 16.5 14.1 16.7 12.8 16.7H10.6V20H9V11H12.8C14.1 11 14.7 11.3 15.2 11.8C15.8 12.4 16 13 16 13.9C16 14.8 15.8 15.5 15.2 16ZM13 9V3.5L18.5 9H13Z" />
    </Svg>
  );
};
