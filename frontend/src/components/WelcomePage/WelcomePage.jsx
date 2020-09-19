import React from 'react'
import style from '../../components/WelcomePage/WelcomePage.css'
import { Albums } from './albumResult/Albums'
import { Footer } from './Footer/Footer'
import { OrangeSpace } from './OrangeSpace/OrangeSpace'

export const WelcomePage = (params) => {
	return (
		<>
			<OrangeSpace />
			{/* White Space down */}
			<section className="album-results-free">
				<div className="container center-white">
					<div className="row row-white">
						<h2 className="h1">Looking for music?</h2>
						<p className="lead">Start diving to the world of new emotions.</p>
						<a
							id="segmented-desktop-launch"
							className="btn btn-stroked-dark"
							role="button"
							href="https://open.spotify.com/browse"
							data-tracking='{"category": "home", "action": "play"}'
						>
							Launch Web Player
						</a>
						<Albums />
					</div>
				</div>
			</section>
			{/* end of white space */}
			<section className="Footer">
				<Footer />
			</section>
		</>
	)
}