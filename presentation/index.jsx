import React from 'react';
import {
	Appear,
	BlockQuote,
	Cite,
	Deck,
	Heading,
	Image,
	ListItem,
	List,
	Quote,
	Slide,
	Spectacle,
	Text,
} from 'spectacle';
import preloader from 'spectacle/lib/utils/preloader';
import createTheme from 'spectacle/lib/themes/default';
import CodeSlide from 'spectacle-code-slide';
import 'normalize.css';
import 'spectacle/lib/themes/default/index.css';

// images
import itcrowd from '../assets/itcrowd.gif';
import perplex from '../assets/perplex.gif';
import typing from '../assets/typing.gif';
import comment from '../assets/comments.gif';
import boxing from '../assets/boxing.gif';
import summary from '../assets/summary.gif';
import link from '../assets/link.gif';
import mindblown from '../assets/mindblown.gif';

// code
import webpage from '../assets/webpage.example';

preloader({
	itcrowd,
	perplex,
	typing,
	comment,
	boxing,
	summary,
	link,
	mindblown,
});

const theme = createTheme({
	primary: '#012d41',
	yellow: '#feba3f',
});

const Presentation = () => (
	<Spectacle theme={theme}>
		<Deck transition={['zoom', 'fade']} transitionDuration={500}>
			<Slide bgColor="primary">
				<Heading size={1} fit caps lineHeight={1} textColor="yellow">
					HTML
				</Heading>
				<Heading size={1} fit caps>
					Ses mystères, ses balises et ses attributs
				</Heading>
			</Slide>
			<Slide bgColor="black">
				<BlockQuote textColor="yellow" style={{ borderLeft: `1px solid ${theme.yellow}` }}>
					<Quote textColor="yellow">
						Le HTML n'est pas un langage de programmation!
						<br />
						C'est un langage de balisage!
					</Quote>
					<Cite>Moi</Cite>
				</BlockQuote>
			</Slide>
			<Slide bgColor="primary">
				<Image src={itcrowd} margin="0px auto 40px" height="293px" />
				<Heading size={2} caps fit textColor="yellow">
					Peu de slides et beaucoup de TP!
				</Heading>
			</Slide>
			<CodeSlide
				transition={[]}
				lang="html"
				padding="15% 0px"
				code={webpage}
				ranges={[
					{ loc: [0, 1], note: 'Le doctype est là pour dire au navigateur qu\'il s\'agit d\'un document HTML' },
					{ loc: [1, 2], note: 'Ouverture du document HTML et attribut de langue' },
					{ loc: [2, 8], note: 'En-tête et méta informations' },
					{ loc: [3, 4], note: 'Encodage des caractères' },
					{ loc: [4, 5], note: 'Titre de la page' },
					{ loc: [5, 6], note: 'Import d\'une feuille de style CSS' },
					{ loc: [6, 7], note: 'Import d\'un script JavaScript' },
					{ loc: [8, 13], note: 'Corps de la page, ce qui est affiché sur le navigateur' },
					{ loc: [13, 14], note: 'Fermeture du document HTML' },
				]}
			/>
			<Slide bgColor="primary">
				<Image src={perplex} margin="0px auto 40px" height="293px" />
				<Heading size={2} caps fit textColor="yellow">
					Les commentaires
				</Heading>
			</Slide>
			<Slide bgColor="primary">
				<Heading size={1} fit caps lineHeight={1} textColor="yellow">
					Les commentaires c'est bien!
				</Heading>
				<List textColor="white">
					<Appear><ListItem>
						&lt;!-- Je suis un commentaire --&gt;
					</ListItem></Appear>
					<Appear><ListItem>
						je ne suis pas affiché par le navigateur
					</ListItem></Appear>
					<Appear><ListItem>
						je suis là pour aider la personne qui va lire le code
					</ListItem></Appear>
					<Appear><ListItem>
						ne pas les négliger, ils sont vos amis!
					</ListItem></Appear>
				</List>
			</Slide>
			<Slide bgColor="primary">
				<Image src={typing} margin="0px auto 40px" height="293px" />
				<Heading size={2} caps fit textColor="yellow">
					Les tags de corps de page
				</Heading>
			</Slide>
			<Slide bgColor="primary">
				<Heading size={1} fit caps lineHeight={1} textColor="yellow">
					Les titres, les paragraphes
				</Heading>
				<List textColor="white">
					<Appear><ListItem>
						&lt;h1&gt;Je suis un titre de niveau 1&lt;/h1&gt;
					</ListItem></Appear>
					<Appear><ListItem>
						&lt;p&gt;Je suis un paragraphe&lt;/p&gt;
					</ListItem></Appear>
					<Appear><ListItem>
						testez les sur votre page
					</ListItem></Appear>
					<Appear><ListItem>
						trouvez les balises pour les titres d'autres niveaux
					</ListItem></Appear>
				</List>
			</Slide>
			<Slide bgColor="primary">
				<Heading size={1} fit caps lineHeight={1} textColor="yellow">
					Quelle est la différence entre:
				</Heading>
				<Text textColor="white" textAlign="left" margin="30px 0">
					&lt;p&gt;Blablabla
					<br />Blablabla&lt;/p&gt;
				</Text>
				<Text textColor="white" textAlign="left" margin="30px 0">
					et ...
				</Text>
				<Text textColor="white" textAlign="left" margin="30px 0">
					&lt;p&gt;Blablabla&lt;/p&gt;
					<br />&lt;p&gt;Blablabla&lt;/p&gt;
				</Text>
				<Text textColor="white" textAlign="left" margin="30px 0">
					???
				</Text>
			</Slide>
			<Slide bgColor="primary">
				<Image src={boxing} margin="0px auto 40px" height="293px" />
				<Heading size={2} caps fit textColor="yellow">
					Mettre en valeur son texte
				</Heading>
			</Slide>
			<Slide bgColor="primary">
				<Heading size={1} fit caps lineHeight={1} textColor="yellow">
					Em, strong, bold and italic
				</Heading>
				<List textColor="white">
					<Appear><ListItem>
						<em>&lt;em&gt;Je suis une emphase&lt;/em&gt;</em>
					</ListItem></Appear>
					<Appear><ListItem>
						<strong>&lt;strong&gt;Je suis important&lt;/strong&gt;</strong>
					</ListItem></Appear>
					<Appear><ListItem>
						<i>&lt;i&gt;Je suis en italique&lt;/i&gt;</i>
					</ListItem></Appear>
					<Appear><ListItem>
						<b>&lt;b&gt;Je suis en gras&lt;/b&gt;</b>
					</ListItem></Appear>
				</List>
			</Slide>
			<Slide bgColor="primary">
				<Heading size={1} fit caps lineHeight={1} textColor="yellow">
					Mais, mais, mais, mais...
				</Heading>
				<List textColor="white">
					<Appear><ListItem>
						&lt;em&gt; et &lt;i&gt; font la même chose?
					</ListItem></Appear>
					<Appear><ListItem>
						idem pour &lt;strong&gt; et &lt;b&gt; ??
					</ListItem></Appear>
					<Appear><ListItem>
						NON!
					</ListItem></Appear>
					<Appear><ListItem>
						&lt;em&gt; et &lt;b&gt; sont <b>sémantiques</b>
					</ListItem></Appear>
					<Appear><ListItem>
						&lt;b&gt; et &lt;i&gt; sont <b>une mise en forme</b>
					</ListItem></Appear>
				</List>
			</Slide>
			<Slide bgColor="primary">
				<Image src={summary} margin="0px auto 40px" height="293px" />
				<Heading size={2} caps fit textColor="yellow">
					Les listes
				</Heading>
			</Slide>
			<Slide bgColor="primary">
				<Heading size={1} fit caps lineHeight={1} textColor="yellow">
					ul et li sont sur un bateau...
				</Heading>
				<List textColor="white">
					<Appear><ListItem>
						&lt;ul&gt; commence une liste
					</ListItem></Appear>
					<Appear><ListItem>
						&lt;li&gt; définit un élément d'une liste
					</ListItem></Appear>
					<Appear><ListItem>
						à vous de créer une liste
					</ListItem></Appear>
					<Appear><ListItem>
						documentez vous sur &lt;ol&gt;
					</ListItem></Appear>
					<Appear><ListItem>
						trouvez la différence entre &lt;ul&gt; et &lt;ol&gt;
					</ListItem></Appear>
				</List>
			</Slide>
			<Slide bgColor="primary">
				<Image src={link} margin="0px auto 40px" height="293px" />
				<Heading size={2} caps fit textColor="yellow">
					Les liens hypertextes
				</Heading>
			</Slide>
			<Slide bgColor="primary">
				<Heading size={1} fit caps lineHeight={1} textColor="yellow">
					&lt;a&gt;, &lt;a&gt;, &lt;a&gt;
				</Heading>
				<List textColor="white">
					<Appear><ListItem>
						<a className="link" href="http://www.ecvdigital.fr" rel="noopener noreferrer" target="_blank">&lt;a href="http://www.ecvdigital.fr" target="_blank"&gt;Je suis un lien&lt;/a&gt;</a>
					</ListItem></Appear>
					<Appear><ListItem>
						l'attribut de balise <b>href</b> définit la cible du lien
					</ListItem></Appear>
					<Appear><ListItem>
						trouvez le sens de l'attribut <b>target</b>
					</ListItem></Appear>
					<Appear><ListItem>
						créez un lien vers votre site préféré
					</ListItem></Appear>
					<Appear><ListItem>
						créez une deuxième page web, et depuis la première faire un lien vers celle-ci
					</ListItem></Appear>
				</List>
			</Slide>
			<Slide bgColor="primary">
				<Image src={mindblown} margin="0px auto 40px" height="293px" />
				<Heading size={2} caps fit textColor="yellow">
					Les images (de chats)
				</Heading>
			</Slide>
			<Slide bgColor="primary">
				<Heading size={1} fit caps lineHeight={1} textColor="yellow">
					Vous aussi, vous pouvez inonder le web de chats!
				</Heading>
				<List textColor="white">
					<Appear><ListItem>
						<a className="link" href="https://placekitten.com/400/200" rel="noopener noreferrer" target="_blank">&lt;img src="un_chat.jpg" alt="meow!" /&gt;</a>
					</ListItem></Appear>
					<Appear><ListItem>
						l'attribut de balise <b>src</b> définit l'image à afficher
					</ListItem></Appear>
					<Appear><ListItem>
						trouvez le sens de l'attribut <b>alt</b>
					</ListItem></Appear>
					<Appear><ListItem>
						&lt;img&gt; n'a pas besoin de balise fermante, elle est auto-fermante!!
					</ListItem></Appear>
					<Appear><ListItem>
						évitez les espaces dans le nom de vos images!!! (utilisez <b>-</b> ou <b>_</b>)
					</ListItem></Appear>
					<Appear><ListItem>
						insérez l'image de votre choix sur votre page
					</ListItem></Appear>
				</List>
			</Slide>
			<Slide bgColor="primary">
				<Heading size={1} fit caps lineHeight={1} textColor="yellow">
					Une note sur les formats d'images sur le web
				</Heading>
				<List textColor="white">
					<Appear><ListItem>
						utilisez le <b>JPEG</b> pour afficher une photo
					</ListItem></Appear>
					<Appear><ListItem>
						utilisez le <b>PNG 8 bits</b> pour un graphique avec peu de couleurs
					</ListItem></Appear>
					<Appear><ListItem>
						utilisez le <b>PNG 24 bits</b> pour un graphique avec beaucoup de couleurs
					</ListItem></Appear>
					<Appear><ListItem>
						utilisez le <b>GIF</b> <strike>partout!</strike>, pour les images animées
					</ListItem></Appear>
				</List>
			</Slide>
			<Slide bgColor="primary">
				<Image src={itcrowd} margin="0px auto 40px" height="293px" />
				<Heading size={2} caps fit textColor="yellow">
					A vous de jouer!
				</Heading>
				<Heading size={2} margin="20px 0" caps fit textColor="white">
					Créez une page avec tous les élements cités
				</Heading>
			</Slide>
		</Deck>
	</Spectacle>
);

export default Presentation;
