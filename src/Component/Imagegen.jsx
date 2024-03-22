import React, { useEffect, useState } from 'react';
import "../Styles/imagen.css"
import Image_sample from './Image_sample';
import Search from './Search';
import Suggestion from './Suggestion';

export default function Imagegen() {
    const [keywords, setKeywords] = useState('');
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false);
    const [page, setpage] = useState(1);
    const [defaultImages, setDefaultImages] = useState([]); // State to store default images

    useEffect(() => {
        // Function to fetch and set default images when the component mounts
        async function fetchDefaultImages() {
            setLoading(true);
            const accessKey = "c7OKNdiPBZp7A0NWDYtCNySGpBdpUKTmG3Grgb32gY8";
            const defaultUrl = `https://api.unsplash.com/photos?page=1&client_id=${accessKey}&per_page=8`;

            const response = await fetch(defaultUrl);
            const data = await response.json();
            setDefaultImages(data); // Set default images to state
            setLoading(false);
        }

        fetchDefaultImages(); // Call function when component mounts
    }, []);

    async function searchImages(keyword) {
        setLoading(true);
        const accessKey = "c7OKNdiPBZp7A0NWDYtCNySGpBdpUKTmG3Grgb32gY8";
        const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=8`;

        const response = await fetch(url);
        const data = await response.json();
        const results = data.results;

        const searchResult = document.getElementById("display");
        searchResult.innerHTML = ''; // Clear previous search results

        results.forEach(result => {
            const image = document.createElement("img");
            image.src = result.urls.small;

            const imageLink = document.createElement("a");
            imageLink.href = result.links.html;
            imageLink.target = "_blank";

            imageLink.appendChild(image);
            searchResult.appendChild(imageLink);
        });

        setLoading(false);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setpage(1)
        searchImages(keywords);
        setShow(true);
    };

    const handleSuggestedClick = (keyword) => {
        setKeywords(keyword);
        searchImages(keyword);
        setShow(true);
    };

    const showMoreImg = () => {
        setpage((page)=>page+1);
        searchImages(keywords);
    };

    return (
        <>
            <div className="wrapper">
                <Search handleSubmit={handleSubmit} keywords={keywords} setKeywords={setKeywords}/>
                <Suggestion handleSuggestedClick={handleSuggestedClick}/>
                {show ? <button id="show_more_btn" onClick={showMoreImg}>
                    More
                </button> : null}
                {loading ? <Image_sample/> : null}
                <div id="display">
                    {defaultImages.map((image, index) => (
                        <a href={image.links.html} target="_blank" key={index}>
                            <img src={image.urls.small} alt={`Default Image ${index}`} />
                        </a>
                    ))}
                </div>
            </div>
        </>
    );
}
