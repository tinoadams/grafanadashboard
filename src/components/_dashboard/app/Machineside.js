// material
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';

export default function Machineside(props) {
  return (
    <Box sx={{ p: 3, pb: 1 }} minHeight="100px">
      <iframe
        title="side_part_1"
        src={props.packingstate}
        width="100%"
        height="90px"
        frameBorder="0"
        allowtransparency="true"
      />
      <Typography variant="subtitle1" sx={{ color: '#FFFFFF' }}>
        PACKING SPEED
      </Typography>
      <iframe
        title="side_part_2"
        src={props.packingspeed}
        width="100%"
        height="50px"
        frameBorder="0"
        allowtransparency="true"
      />
      <Typography variant="subtitle1" sx={{ color: '#FFFFFF' }}>
        ACCUMULATION FILL
      </Typography>
      <iframe
        title="side_part_3"
        src={props.accumulationfill}
        width="100%"
        height="50px"
        frameBorder="0"
        allowtransparency="true"
      />
    </Box>
  );
}

Machineside.propTypes = {
  packingspeed: PropTypes.node.isRequired,
  accumulationfill: PropTypes.node.isRequired,
  packingstate: PropTypes.node.isRequired
};
