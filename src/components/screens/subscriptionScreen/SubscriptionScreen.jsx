import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSubscribedChannels } from '../../../redux/actions/videosAction'
import VideoHorizontal from '../../videoHorizontal/VideoHorizontal'
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"

const SubscriptionScreen = () => {
    const { videos, loading } = useSelector(state => state.SubscriptionChannelReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getSubscribedChannels())
    }, [dispatch])
    console.log(videos)
    return (
        <>
            {
                !loading ?
                    videos.map((video) => (
                        <VideoHorizontal video={video} subscription />
                    ))
                    :
                    <SkeletonTheme color='#343a40' highlightColor='#3c4147'>
                        <Skeleton width={'100%'} height='202px' count={15} />
                    </SkeletonTheme>
            }
        </>
    )
}

export default SubscriptionScreen
