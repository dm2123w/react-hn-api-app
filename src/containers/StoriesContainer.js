import React, { useState, useEffect } from "react";
import { getStoryIds } from "../services/hnApi";
import { Story } from "../components/Story";

export const StoriesContainer = () => {
    const [storyIds, setStoryIds] = useState([]);
    useEffect(() => {
        getStoryIds().then((data) => setStoryIds(data));
    }, []);
    return (
        <>
            <h1>Hacker News Stories</h1>
            {storyIds.map((storyId) => (
                <Story storyId={storyId} key={storyId} />
            ))}
        </>
    );
};
