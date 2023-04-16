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
	<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, textAlign: "center", justifyContent: "center", mt: 4, flexDirection: "column" }}>
			
			<Link href={"/arrow"}><Button sx={{my: 1}} color="success" variant="contained" size="large">Hello! Click here to go to the rotation demo!</Button></Link>
			<Link href={"/pinch"}><Button color="error" sx={{my: 2}} variant="contained" size="large">Hello! Click here to go to the pinch demo!</Button></Link>
	</Box>
		
	</>)
}