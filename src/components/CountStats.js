"use client"
import React from 'react';
import { CountUp } from "use-count-up";
import Container from "@/components/Container";

export default function CountStats() {

    return (
        <Container className="bg-secondary min-h-[25vh] rounded -mt-28 flex items-center justify-evenly">
            <span className="text-2xl md:text-4xl">
                <CountUp start={400} isCounting={true} end={450} duration={1} delay={0} />+
                <br></br> Recipe</span>
            <span className="text-2xl md:text-4xl">
                <CountUp start={875} isCounting={true} end={935} duration={1} delay={0} />+
                <br></br> Users</span>
            <span className="text-2xl md:text-4xl">
                <CountUp start={45} isCounting={true} end={145} duration={1} delay={0} />+
                <br></br> Creators</span>
        </Container>
    );
}