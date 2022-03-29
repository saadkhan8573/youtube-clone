import React from 'react'
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const VideoSkeleton = () => {
    return (
        <>
            <div style={{ width: "100%", margin: "1rem 0" }}>
                <SkeletonTheme color="#343a40" highlightColor="#3c4147">
                    <Skeleton height={180} />
                    <div>
                        <Skeleton width="14%" height={40} circle />
                        <Skeleton width="83%" height={40} />
                    </div>
                </SkeletonTheme>
            </div>
        </>
    )
}

export default VideoSkeleton
