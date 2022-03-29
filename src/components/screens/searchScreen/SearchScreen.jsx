import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import VideoHorizontal from '../../videoHorizontal/VideoHorizontal'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import { useEffect } from 'react'
import { getVideosBySearch } from '../../../redux/actions/videosAction'
import { useParams } from 'react-router-dom'

const SearchScreen = () => {
    const { videos, loading } = useSelector(state => state.SearchVideoReducer)
    const channel = useSelector(state => state.ChannelReducer.channel)

    console.log("Videos", videos)
    const dispatch = useDispatch()
    const { query } = useParams()

    useEffect(() => {
        dispatch(getVideosBySearch(query))
    }, [query])

    return (
        <>
            {
                !loading ?
                    videos.map((video) => {
                        console.log("Video", video)
                        return (
                            <VideoHorizontal video={video} key={video.id.videoId} searchVideo />
                        )
                    })
                    :
                    <SkeletonTheme color='#343a40' highlightColor='#3c4147'>
                        <Skeleton width='100%' height='202px' count={15} />
                    </SkeletonTheme>
            }
        </>
    )
}

export default SearchScreen