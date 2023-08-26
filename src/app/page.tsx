import { BiBell, BiArchiveIn } from 'react-icons/bi';
import {
  BsBlockquoteLeft,
  BsBook,
  BsBorderAll,
  BsBorderBottom,
  BsPersonFill,
  BsTextParagraph,
} from 'react-icons/bs';
import Avatar from '~/components/atoms/Avatar';
import Button from '~/components/atoms/Button';
import Divider from '~/components/atoms/Divider';
import Input from '~/components/atoms/Input';
import Typography from '~/components/atoms/Typography';
import Box from '~/components/layout/Box';
import Container from '~/components/layout/Container';
import Grid from '~/components/layout/Grid';
import Stack from '~/components/layout/Stack';

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

      <Box $grid $gap={{ xs: 20, md: 16 }} $templateColumns="repeat(4, 1fr)">
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

      <Box $p={3} $component={'form'} aria-autocomplete="none" style={{ border: '1px solid #222' }}>
        <Input placeholder="Please enter text..." inputProps={{ 'aria-label': 'description' }} />
      </Box>

      <Container style={{ border: '1px solid #222', padding: '30px' }}>
        <Stack $direction={'row'} $justifyContent={'center'} $spacing={2} $useFlexGap>
          <Avatar $variant={'square'} alt="Icon Avatar" $width={60} $height={60}>
            <BsPersonFill />
          </Avatar>
          <Avatar $variant={'rounded'} alt="Icon Avatar" src="/images/avatar.png" />
          <Avatar
            $width={100}
            $height={100}
            $variant="square"
            alt="Icon Avatar"
            src="https://picsum.photos/id/237/200/400"
          />
          <Avatar alt="Icon Avatar" $bgColor="#89ff4d">
            초
          </Avatar>
        </Stack>
      </Container>

      <Container style={{ border: '1px solid #999', padding: '20px' }}>
        <Typography $variant={'body2'}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id dignissim justo.
          Nulla ut facilisis ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus.
          Sed malesuada lobortis pretium.
        </Typography>
        <Divider $textAlign="left">Left</Divider>
        <Typography $variant={'body2'}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id dignissim justo.
          Nulla ut facilisis ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus.
          Sed malesuada lobortis pretium.
        </Typography>
        <Divider />
        <Typography $variant={'body2'}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id dignissim justo.
          Nulla ut facilisis ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus.
          Sed malesuada lobortis pretium.
        </Typography>
        <Divider $textAlign="right">Right</Divider>
        <Typography $variant={'body2'}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id dignissim justo.
          Nulla ut facilisis ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus.
          Sed malesuada lobortis pretium.
        </Typography>
        <Divider>Center</Divider>
        <Typography $variant={'body2'}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id dignissim justo.
          Nulla ut facilisis ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus.
          Sed malesuada lobortis pretium.
        </Typography>
      </Container>

      <Grid $container>
        <Grid $item $xs={5}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id dignissim justo.
          Nulla ut facilisis ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus.
          Sed malesuada lobortis pretium.
        </Grid>
        <Divider $orientation="vertical">Vertical</Divider>
        <Grid $item $xs={5}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id dignissim justo.
          Nulla ut facilisis ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus.
          Sed malesuada lobortis pretium.
        </Grid>
      </Grid>

      <div>
        <Box
          style={{
            display: 'flex',
            alignItems: 'center',
            width: 'fit-content',
            borderRadius: '12px',
            border: '1px solid #222',
            fontSize: '20px',
          }}
        >
          <BsTextParagraph style={{ margin: '0.5rem' }} />
          <BsBlockquoteLeft style={{ margin: '0.5rem' }} />
          <BsBook style={{ margin: '0.5rem' }} />
          <Divider $orientation={'vertical'} $variant={'middle'} $flexItem />
          <BsBorderAll style={{ margin: '0.5rem' }} />
          <BsBorderBottom style={{ margin: '0.5rem' }} />
        </Box>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </main>
  );
}
