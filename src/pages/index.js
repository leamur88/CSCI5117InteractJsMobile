import Link from 'next/link';
import { Button, Box } from '@mui/material';

export default function Home() {
	return(<>
	<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: "center", mt: 4}}>

			<Link href="/arrow">
				<Button variant="contained" sx={{mx: 2}} color="success">Hello! Click here to go to the rotation demo!</Button>
			</Link>

			<Link href="/pinch">
				<Button variant="contained" sx={{mx: 2}} color="error">Hello! Click here to go to the pinch demo!</Button>
			</Link>

	</Box>
		
	</>)
}