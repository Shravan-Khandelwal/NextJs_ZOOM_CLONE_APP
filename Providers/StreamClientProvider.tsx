"use client";
import { StreamVideo, StreamVideoClient } from "@stream-io/video-react-sdk";
import { useState, useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { TokenProvider } from "../Actions/stream.actions";

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;


//! FUNCTION FOR PROVIDING THE STREAM VIDEO SERVICES TO THE WHOLE APP 
const StreamVideoProvider = ({ children }: { children: React.ReactNode }) => {

  // DECLARED THE STATE VARIABLE FOR STORING THE StreamVideoClient
  const [VideoClient, setVideoClient] = useState<StreamVideoClient>();

  // Fetching Details of the user from clerk
  const { user, isLoaded } = useUser();

  useEffect(() => {
    if (!user || !isLoaded) return;

    if (!apiKey) throw new Error("API key is Missing");

    // Creating A New Video Client
    const NewClient = new StreamVideoClient({
      apiKey,
      user: {
        id: user?.id,
        name: user?.username || user?.id,
        image: user?.imageUrl,
      },
      tokenProvider: TokenProvider,
    });

    setVideoClient(NewClient);
  }, [user, isLoaded]);

  if (!VideoClient) {
    return <p>Loading......</p>;
  }

  //! Returning The StreamVideo With Passing VideoClient as the client
  return <StreamVideo client={VideoClient}>{children}</StreamVideo>;
};

export default StreamVideoProvider;
