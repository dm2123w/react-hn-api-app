import React, { useState, useEffect } from "react";
import { getStoryIds } from "../services/hnApi";
import { Story } from "../components/Story";
import {
    AppHeader,
    GlobalStyle,
    StoriesContainerWrapper,
} from "../styles/StoriesContainerStyles";

export const StoriesContainer = () => {
    const [storyIds, setStoryIds] = useState([]);

    useEffect(() => {
        function updateHandler() {
            getStoryIds().then((data) => setStoryIds(data));
            setInterval(updateHandler, 60000);
        }
        updateHandler();
    }, []);

    return (
        <>
            <GlobalStyle />
            <StoriesContainerWrapper data-test-id="stories-container">
                <AppHeader>Hacker News Stories</AppHeader>
                {storyIds.slice(0, 200).map((storyId) => (
                    <Story storyId={storyId} key={storyId} />
                ))}
            </StoriesContainerWrapper>
        </>
    );
};
