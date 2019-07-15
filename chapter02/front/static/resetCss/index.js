import { createGlobalStyle } from 'styled-components';

const ResetCss = createGlobalStyle`
	/*
	@font-face {
		font-family: 'Nanum Square';
		src: url('../static/fonts/NanumSquareL.eot'); /* IE9 Compat Modes */
		src: url('../static/fonts/NanumSquareL.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
			url('../static/fonts/NanumSquareL.woff') format('woff'), /* Modern Browsers */
			url('../static/fonts/NanumSquareL.ttf')  format('truetype'), /* Safari, Android, iOS */
			url('../static/fonts/NanumSquareOTFLight.svg#017f9c78318bcde3d1dc4451e8eaca0a') format('svg'); /* Legacy iOS */

		font-style:   normal;
		font-weight:  300;
	}
	@font-face {
		font-family: 'Nanum Square';
		src: url('../static/fonts/NanumSquareR.eot'); /* IE9 Compat Modes */
		src: url('../static/fonts/NanumSquareR.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
			url('../static/fonts/NanumSquareR.woff') format('woff'), /* Modern Browsers */
			url('../static/fonts/NanumSquareR.ttf')  format('truetype'), /* Safari, Android, iOS */
			url('../static/fonts/NanumSquareOTFR.svg#9e23ceb0c858ca37642ba540402577eb') format('svg'); /* Legacy iOS */

		font-style:   normal;
		font-weight:  400;
	}
	@font-face {
		font-family: 'Nanum Square';
		src: url('../static/fonts/NanumSquareB.eot'); /* IE9 Compat Modes */
		src: url('../static/fonts/NanumSquareB.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
			url('../static/fonts/NanumSquareB.woff') format('woff'), /* Modern Browsers */
			url('../static/fonts/NanumSquareB.ttf')  format('truetype'), /* Safari, Android, iOS */
			url('../static/fonts/NanumSquareOTFB.svg#a41a1fda1fdf3dafd3394867a156b1cf') format('svg'); /* Legacy iOS */

		font-style:   normal;
		font-weight:  700;
	}
	@font-face {
		font-family: 'Nanum Square';
		src: url('../static/fonts/NanumSquareEB.eot'); /* IE9 Compat Modes */
		src: url('../static/fonts/NanumSquareEB.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
			url('../static/fonts/NanumSquareEB.woff') format('woff'), /* Modern Browsers */
			url('../static/fonts/NanumSquareEB.ttf')  format('truetype'), /* Safari, Android, iOS */
			url('../static/fonts/NanumSquareOTFExtraBold.svg#090d6763bc81b49309446d23fbd10e87') format('svg'); /* Legacy iOS */

		font-style:   normal;
		font-weight:  900;
	}
	*/


	html, body, div, span, applet, object, iframe,
	h1, h2, h3, h4, h5, h6, p, blockquote, pre,
	a, abbr, acronym, address, big, cite, code,
	del, dfn, em, img, ins, kbd, q, s, samp,
	small, strike, strong, sub, sup, tt, var,
	b, u, i, center,
	dl, dt, dd, ol, ul, li,
	fieldset, form, label, legend,
	table, caption, tbody, tfoot, thead, tr, th, td,
	article, aside, canvas, details, embed,
	figure, figcaption, footer, header, hgroup,
	menu, nav, output, ruby, section, summary,
	time, mark, audio, video {
		margin: 0;
		padding: 0;
		border: 0;
		font-size: 100%;
		font: inherit;
		vertical-align: baseline;
	}

	article, aside, details, figcaption, figure,
	footer, header, hgroup, menu, nav, section {
		display: block;
	}
	*,
	body{
		font-family: 'Nanum Square','Aria';
		font-weight: 400;
		letter-spacing: -.8px;
		margin: 0;
	}
	body {
		max-width: 375px;
    	margin: 0 auto;
		line-height: 1;
		overflow:auto;
	}
	ol, ul, li {
		list-style: none;
	}
	a {
		text-decoration: none;
		cursor:pointer;
	}

	blockquote, q {
		quotes: none;
	}
	blockquote:before, blockquote:after,
	q:before, q:after {
		content: '';
		content: none;
	}
	table {
		border-collapse: collapse;
		border-spacing: 0;
	}
	p {
		margin:0;
	}
`

export default ResetCss;