import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

const ImageAvatars = ({paddingLeft, marginBottom})=> {
  return (
    <Stack direction="row" spacing={2} style={{paddingLeft, marginBottom}}>
      <Avatar alt="Remy Sharp" src='' />

    </Stack>
  );
}

export default ImageAvatars;