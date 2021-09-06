import React, { useState, useEffect } from "react";
import { getStoryIds } from "../services/hnApi";
import { Story } from "../components/Story";
import {
    GlobalStyle,
    StoriesContainerWrapper,
} from "../styles/StoriesContainerStyles";

export const StoriesContainer = () => {
    const [storyIds, setStoryIds] = useState([]);

    useEffect(() => {
        getStoryIds().then((data) => setStoryIds(data));
    }, []);

    return (
        <>
            <GlobalStyle />
            <StoriesContainerWrapper data-test-id="stories-container">
                <h1>Hacker News Stories</h1>
                {storyIds.slice(0, 100).map((storyId) => (
                    <Story storyId={storyId} key={storyId} />
                ))}
            </StoriesContainerWrapper>
        </>
    );
};