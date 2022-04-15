import type {NextPage} from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Game Gremlin</title>
                <meta name="description" content="Home of the Game Gremlin extension for Twitch."/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={styles.main}>
                <div>
                    <img src="./logo.png"/>
                    <div className={styles.socialBox}>
                        <a href="https://www.twitch.tv/gamegremlinio/about">
                            <img src="./icons/twitch.png" title="Twitch"/>
                        </a>
                        <a href="https://discord.gg/rAcs4vz7Zw" className={styles.discordIconBox}>
                            <img src="./icons/discord.png" className={styles.discordIcon} title="Discord"/>
                        </a>
                        <a href="https://twitter.com/GameGremlinIO">
                            <img src="./icons/twitter.png" title="Twitter"/>
                        </a>
                    </div>
                </div>
                <div className={styles.video}>
                    <iframe allowFullScreen={true} frameBorder="0" height="378" scrolling="no"
                        src="https://player.twitch.tv/?video=1431662933&amp;parent=localhost" width="100%"/>
                </div>
            </main>

            <footer className={styles.footer}>

            </footer>
        </div>
    );
};

export default Home;
