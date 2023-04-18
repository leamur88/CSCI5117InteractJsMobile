import Link from 'next/link';
import { Button, Box } from '@mui/material';
import { purple } from '@mui/material/colors';


export default function Home() {
	return(<>
	<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: "center", mt: 4}}>

			<Link href="/arrow">
				<Button variant="contained" sx={{mx: 2}} color="success">Hello! Click here to go to the rotation demo!</Button>
			</Link>

			<Link href="/pinchJefferson">
				<Button variant="contained" sx={{mx: 2}} color="secondary">Hello! Click here to go to the Jefferson pinch demo!</Button>
			</Link>

			<Link href="/pinchStarry">
				<Button variant="contained" sx={{mx: 2}} color="error">Hello! Click here to go to the Vincent van Gogh pinch demo (buggy)!</Button>
			</Link>

	</Box>
	<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, textAlign: "center", justifyContent: "center", mt: 4, flexDirection: "column" }}>
			
			<Link href={"/arrow"}><Button sx={{my: 1}} color="success" variant="contained" size="large">Hello! Click here to go to the rotation demo!</Button></Link>
			<Link href={"/pinchJefferson"}><Button color="secondary" sx={{my: 2}} variant="contained" size="large">Hello! Click here to go to the Jefferson pinch demo!</Button></Link>
			<Link href={"/pinchStarry"}><Button color="error" sx={{my: 2}} variant="contained" size="large">Hello! Click here to go to the Vincent van Gogh pinch demo (buggy)!</Button></Link>
	</Box>
		
	</>)
}