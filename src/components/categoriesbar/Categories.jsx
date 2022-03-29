import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { getPopularVideos, getVideosByCategory } from '../../redux/actions/videosAction';
import './_categories.scss';

const keywords = [
    "All",
    "React Js",
    "Angular Js",
    "React Native",
    "use of API",
    "Redux",
    "T-Series",
    "Music",
    "Algorithm Art",
    "Guitar",
    "Bengali Songs",
    "Coading",
    "Cricket",
    "Footbal",
    "Real Madrid",
    "Gatsby",
    "Poor Coader",
    "Shwetabh"
]

const Categories = () => {
    const [activeElement, setActiveElement] = useState("All")
    const dispatch = useDispatch()

    const handleClick = (val) => {
        setActiveElement(val)
        if (val === "All") {
            dispatch(getPopularVideos())
        } else {
            dispatch(getVideosByCategory(val))
        }
    }
    return (
        <>
            <div className="categoriesBar">
                {keywords.map((val, i) => (
                    <span key={i} onClick={() => handleClick(val)}
                        className={activeElement === val ? "active" : ""}
                    > {val} </span>
                ))}
            </div>
        </>
    )
}

export default Categories
