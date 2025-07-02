import styled from 'styled-components';

import { issueTypeColors } from 'shared/utils/styles.js';
import { Icon } from 'shared/components/index.js';

export const TypeIcon = styled(Icon)`
  color: ${props => issueTypeColors[props.color]};
`;
