import { BiBell, BiArchiveIn } from 'react-icons/bi';
import Button from '~/components/atoms/Button';
import Typography from '~/components/atoms/Typography';
import Box from '~/components/layout/Box';

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

      <Box width={{ sm: 80, md: 100 }} height={400}>
        Box야
      </Box>
      <Box m={3}>Box야</Box>

      <Typography variant="subtitle1">Subtitle</Typography>
      <Typography variant="h2">h2</Typography>
    </main>
  );
}
