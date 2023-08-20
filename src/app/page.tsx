import { BiBell, BiArchiveIn } from 'react-icons/bi';
import Button from '~/components/atoms/Button';
import Typography from '~/components/atoms/Typography';
import Box from '~/components/layout/Box';
import Container from '~/components/layout/Container';
import Grid from '~/components/layout/Grid';

export default function Home() {
  return (
    <main>
      <div>
        <h3>Button Style</h3>
        <Button $size="small">small</Button>
        <Button $size="small" $variant="outlined">
          small
        </Button>
        <Button $size="small" $variant="contained" disabled>
          small
        </Button>
        <br />
        <br />
        <Button>Text</Button>
        <Button startIcon={<BiBell />} $variant="contained" disabled>
          Button
        </Button>
        <Button endIcon={<BiArchiveIn />} $variant="outlined" disabled>
          Button
        </Button>
        <br />
        <br />
        <Button $size="large">Text</Button>
        <Button $variant="outlined" $size="large">
          Button
        </Button>
        <Button $variant="contained" $size="large">
          Button
        </Button>
      </div>

      <br />
      <hr />
      <br />

      <h1>Container</h1>
      <div
        style={{ background: 'black', color: 'white' }}
      >{`<Container>This is Container</Container>`}</div>

      <Container $fixed>This is Container</Container>

      <br />
      <hr />
      <br />

      <Grid $container $spacing={{ xs: 10, md: 5, lg: 2 }}>
        <Grid $item $xs={6} $md={3}>
          <Box $bgColor={'secondary'} $p={1} $height={60}>
            xs=6 md=8
          </Box>
        </Grid>
        <Grid $item $xs={6} $md={3}>
          <Box $bgColor={'secondary'} $p={1} $height={20}>
            xs=6 md=4
          </Box>
        </Grid>
        <Grid $item $xs={6} $md={3}>
          <Box $bgColor={'secondary'} $p={1} $height={20}>
            xs=6 md=4
          </Box>
        </Grid>
        <Grid $item $xs={6} $md={3}>
          <Box $bgColor={'secondary'} $p={1} $height={20}>
            xs=6 md=4
          </Box>
        </Grid>
      </Grid>

      <Box $grid $gap={{ xs: '16px', md: '50px' }} $templateColumns="repeat(4, 1fr)">
        <Box $bgColor={'primary'}>Box</Box>
        <Box $bgColor={'primary'}>Box</Box>
        <Box $bgColor={'primary'}>Box</Box>
        <Box $bgColor={'primary'}>Box</Box>
      </Box>

      <br />
      <br />
      <br />

      <Container style={{ border: '1px solid #222', padding: '20px' }}>
        <Typography $variant="h1" style={{ color: 'blue', paddingBottom: '2rem' }}>
          Typography
        </Typography>
        <Typography $variant="subtitle1" $align={{ sm: 'center', md: 'left' }}>
          Subtitle1
        </Typography>
        <Typography $variant="subtitle2" $mb={3}>
          Subtitle2
        </Typography>
        <Typography $variant="body1" $display={'inline'}>
          body1
        </Typography>
        <Typography $variant="h1">h1</Typography>
        <Typography $variant="h2">h2</Typography>
        <Typography $variant="h3">h3</Typography>
        <Typography $variant="button">Button</Typography>
        <Typography $variant="caption" $display="block">
          Caption
        </Typography>
      </Container>
    </main>
  );
}
