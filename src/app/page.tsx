import { BiBell, BiArchiveIn } from 'react-icons/bi';
import Button from '~/components/shared/Button';

export default function Home() {
  return (
    <main>
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
    </main>
  );
}
