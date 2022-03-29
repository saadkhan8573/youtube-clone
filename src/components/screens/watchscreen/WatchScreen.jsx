import React from 'react'
import { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getRelatedVideos, getVideoById } from '../../../redux/actions/videosAction'
import VideoHorizontal from '../../videoHorizontal/VideoHorizontal'
import VideoMetaData from '../../videoMetaData/VideoMetaData'
import Comments from '../../comments/Comments'
import './watchScreen.scss'

const WatchScreen = () => {
    const { id } = useParams()
    const dispatch = useDispatch();
    const { loading, video } = useSelector(state => state.SelectedVideoReducer)
    const { videos, loading: relatedVideoLoading } = useSelector(state => state.relatedVideo)

    useEffect(() => {
        dispatch(getVideoById(id))
        dispatch(getRelatedVideos(id))
    }, [id])
    return (
        <>
            <Row>
                <Col lg={8}>
                    <div className='watchScreen__player'>
                        <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${id}`} title={video?.snippet?.title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    {!loading ? (
                        <VideoMetaData video={video} videoId={id} />
                    ) : (
                        <h6>Loading...</h6>
                    )}

                    <Comments
                        videoId={id}
                        totalComments={video?.statistics?.commentCount}
                    />
                </Col>
                <Col lg={4}>
                    {
                        !relatedVideoLoading ?
                            videos?.filter(video => video.snippet).map((video, index) => (
                                <VideoHorizontal video={video} key={video.id.videoId} />
                            ))
                            :
                            <SkeletonTheme color='#343a40' highlightColor='#3c4147'>
                                <Skeleton width='100%' height='130px' count={15} />
                            </SkeletonTheme>
                    }
                </Col>
            </Row>
        </>
    )
}

export default WatchScreen