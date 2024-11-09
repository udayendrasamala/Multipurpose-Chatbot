"use client";

import { useAuth } from "@clerk/nextjs"
import Link from "next/link";
import TypeWriterComponent from "typewriter-effect"
import { Button } from "./ui/button";

export const LandingHero =()=>{
    const {isSignedIn} = useAuth();

    return(
        <div className="text-white font-bold py-36 text-center space-y-5">
            <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold">
                <h1>The Multipurpose ChatBot</h1>
                <div className="text-trasparent bg-clip-text bg-gradient-to-r 
                from-purple-400 to-pink-600">
                    <TypeWriterComponent 
                        options={{
                            strings:[
                                "Chatbot.",
                                "Photo Generation.",
                                "Music Generation.",
                                "Video Generation.",
                                "Code Generation",
                            ],
                            autoStart:true,
                            loop:true
                        }}
                    />
                </div>
            </div>
            <div>
                <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
                    <Button variant={"secondary"} className="md:text-lg p-4 md:p-6 rounded-full font-semibold">
                            Start Generating
                    </Button>
                </Link>
            </div>
        </div>
    )
}
