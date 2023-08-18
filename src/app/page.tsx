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
        <Button size="small">small</Button>
        <Button size="small" variant="outlined">
          small
        </Button>
        <Button size="small" variant="contained" disabled>
          small
        </Button>
        <br />
        <br />
        <Button>Text</Button>
        <Button startIcon={<BiBell />} variant="contained" disabled>
          Button
        </Button>
        <Button endIcon={<BiArchiveIn />} variant="outlined" disabled>
          Button
        </Button>
        <br />
        <br />
        <Button size="large">Text</Button>
        <Button variant="outlined" size="large">
          Button
        </Button>
        <Button variant="contained" size="large">
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

      <Container>This is Container</Container>

      <br />
      <hr />
      <br />

      <Grid container spacing={2}>
        <Grid item xs={6} sm={4} md={2} lg={12}>
          <Box bgColor={'secondary'}>1 Box야</Box>
        </Grid>
        <Grid item md={2}>
          <Box bgColor={'secondary'}>2 Box야</Box>
        </Grid>
        <Grid item md={2}>
          <Box bgColor={'secondary'}>3 Box야</Box>
        </Grid>
        <Grid item md={2}>
          <Box bgColor={'secondary'}>4 Box야</Box>
        </Grid>
        <Grid item md={2}>
          <Box bgColor={'secondary'}>5 Box야</Box>
        </Grid>
        <Grid item md={2}>
          <Box bgColor={'secondary'}>6 Box야</Box>
        </Grid>
        <Grid item md={2}>
          <Box bgColor={'secondary'}>7 Box야</Box>
        </Grid>
        <Grid item md={2}>
          <Box bgColor={'secondary'}>8 Box야</Box>
        </Grid>
        <Grid item md={2}>
          <Box bgColor={'secondary'}>9 Box야</Box>
        </Grid>
        <Grid item md={2}>
          <Box bgColor={'secondary'}>10 Box야</Box>
        </Grid>
        <Grid item md={2}>
          <Box bgColor={'secondary'}>11 Box야</Box>
        </Grid>
        <Grid item md={2}>
          <Box bgColor={'secondary'}>12 Box야</Box>
        </Grid>
      </Grid>

      <Typography variant="subtitle1">Subtitle</Typography>
      <Typography variant="h2">h2</Typography>
    </main>
  );
}
