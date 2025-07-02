import styled from 'styled-components';

import { issuePriorityColors } from 'shared/utils/styles.js';
import { Icon } from 'shared/components/index.js';

export const PriorityIcon = styled(Icon)`
  color: ${props => issuePriorityColors[props.color]};
`;
