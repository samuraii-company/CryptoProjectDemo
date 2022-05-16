import React from 'react'
import Head from "next/head";

import Hero from "../components/Roadmappage/Hero"
import Roadmap from '../components/Roadmappage/Roadmap';

const roadmap = () => {
    return (
        <>
            <Head>
                <title>Alone Project RoadMap</title>
                <meta name="description" content="Alone Lab Roadmap" />
                <meta name="keywords" content="Cryptocurrency, NFT, Tokens"></meta>
                <meta name="author" content="alone"></meta>
            </Head>
            <div>
                <Hero />
                <Roadmap />
            </div>
        </>
    )
}

export default roadmap