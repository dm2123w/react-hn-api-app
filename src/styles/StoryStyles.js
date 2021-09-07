import styled from "styled-components";

export const StoryWrapper = styled.section`
    padding-top: 10px;
    margin-bottom: 20px;
    border-top: 1px solid #cccccc;
    border: 1px solid black;
    border-radius: 5px;
    background-color: #f9f9f4;
    &:first-of-type {
        border-top: 10;
    }
    &:last-of-type {
        margin-bottom: 0;
        padding-bottom: 0;
    }
    &:hover {
        background-color: #f7f7eb;
    }
`;

export const StoryTitle = styled.h1`
    margin-bottom: 5px;
    padding-left: 10px;
    font-size: 18px;
    line-height: 1.8;
    margin: 0;
    text-decoration: none;
    a {
        color: #2e2e2c;
        text-decoration: none;
    }
`;

export const StoryMeta = styled.div`
    font-style: italic;
    padding: 10px;

    > span:first-child {
        margin-right: 10px;
    }

    > span:not(:first-child) {
        margin-left: 25px;
    }
    .story__meta-bold {
        font-weight: bold;
    }
`;

export const StoryMetaElement = styled.span`
    font-weight: bold;
    color: ${(props) => props.color || "red"};
`;
