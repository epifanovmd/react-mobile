import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const EmoticonLolIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M15.07 8.93003V4.93003C15.0718 4.14505 15.301 3.3774 15.73 2.72003C13.9128 1.99261 11.922 1.81454 10.0044 2.20789C8.0869 2.60124 6.32698 3.54871 4.94285 4.93284C3.55872 6.31697 2.61125 8.07689 2.2179 9.99442C1.82455 11.9119 2.00262 13.9028 2.73004 15.72C3.38741 15.291 4.15506 15.0618 4.94004 15.06H8.94004V19.06C8.93831 19.845 8.70906 20.6127 8.28004 21.27C10.0973 21.9974 12.0881 22.1755 14.0056 21.7822C15.9232 21.3888 17.6831 20.4413 19.0672 19.0572C20.4514 17.6731 21.3988 15.9132 21.7922 13.9956C22.1855 12.0781 22.0075 10.0873 21.28 8.27003C20.6227 8.69905 19.855 8.9283 19.07 8.93003H15.07ZM11 6.00003H12.5V7.50003H14V9.00003H11V6.00003ZM7.50004 14V12.5H6.00004V11H9.00004V14H7.50004ZM15.89 15.9C15.1025 16.6732 14.1005 17.1916 13.0144 17.3878C11.9283 17.584 10.8083 17.4489 9.80004 17L17 9.80003C17.4476 10.8093 17.5811 11.9299 17.3832 13.016C17.1852 14.1022 16.6649 15.1036 15.89 15.89V15.9ZM4.89004 21.08C4.3596 21.08 3.8509 20.8693 3.47582 20.4942C3.10075 20.1192 2.89004 19.6105 2.89004 19.08C2.89004 18.5496 3.10075 18.0409 3.47582 17.6658C3.8509 17.2907 4.3596 17.08 4.89004 17.08H6.89004V19.08C6.88753 19.6019 6.68116 20.1021 6.31497 20.4739C5.94878 20.8457 5.45178 21.0596 4.93004 21.07L4.89004 21.08ZM19.07 2.93003C19.6005 2.93003 20.1092 3.14074 20.4843 3.51581C20.8593 3.89089 21.07 4.39959 21.07 4.93003C21.07 5.46046 20.8593 5.96917 20.4843 6.34424C20.1092 6.71931 19.6005 6.93003 19.07 6.93003H17.07V4.93003C17.07 4.39959 17.2808 3.89089 17.6558 3.51581C18.0309 3.14074 18.5396 2.93003 19.07 2.93003Z" />
    </Svg>
  );
};