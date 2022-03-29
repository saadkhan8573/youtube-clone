import React, { useEffect, useState } from 'react'
import './_videoHorizontal.scss'

import { AiFillEye } from 'react-icons/ai'
import request from '../../api'

import moment from 'moment'
import numeral from 'numeral'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Col, Row } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

const VideoHorizontal = ({ video, searchVideo, subscription }) => {

    const [views, setViews] = useState(null)
    const [duration, setDuration] = useState(null)
    const [channelIcon, setChannelIcon] = useState(null)

    const history = useHistory()

    useEffect(() => {
        const get_video_details = async () => {
            const {
                data: { items },
            } = await request('/videos', {
                params: {
                    part: 'contentDetails,statistics',
                    id: video.id.videoId,
                },
            })
            setDuration(items[0]?.contentDetails?.duration)
            setViews(items[0]?.statistics?.viewCount)
        }
        get_video_details()
    }, [video.id.videoId])

    useEffect(() => {
        const get_channel_icon = async () => {
            const {
                data: { items },
            } = await request('/channels', {
                params: {
                    part: 'snippet',
                    id: video?.snippet?.channelId,
                },
            })
            setChannelIcon(items[0].snippet.thumbnails.default)
        }
        get_channel_icon()
    }, [video?.snippet?.channelId])

    const seconds = moment.duration(duration).asSeconds()
    const _duration = moment.utc(seconds * 1000).format('mm:ss')

    const isVideo = video.id.kind === "youtube#video";

    const handleClick = () => {
        isVideo ?
            history.push(`/youtube-clone/watch/${video.id.videoId}`)
            :
            history.push(`/youtube-clone/channel/${video?.snippet?.resourceId?.channelId || video?.snippet?.channelId}`)

    }
    console.log("videovideovideovideovideo", video)

    return (
        <Row
            className={`py-2 m-1 videoHorizontal ${!isVideo && 'align-items-center'}`}
            onClick={handleClick}>
            {/* //TODO refractor grid */}
            <Col xs={6} md={searchVideo || subscription ? 4 : 6} className='videoHorizontal__left'>
                <LazyLoadImage
                    src={video?.snippet?.thumbnails?.high.url}
                    effect='blur'
                    className={`videoHorizontal__thumbnail ${searchVideo && 'videoHorizontal__searchthumbnail'} ${!isVideo && 'videoHorizontal__searchthumbnail__rounded'}`}
                    wrapperClassName='videoHorizontal__thumbnail-wrapper'
                />
                {isVideo && <span className='videoHorizontal__duration'>{_duration}</span>}
            </Col>
            <Col xs={6} md={searchVideo || subscription ? 7 : 6} className={`p-0 videoHorizontal__right ${searchVideo && 'videoHorizontal__right__searchVideo'}`}>
                <p className={`mb-1 videoHorizontal__title ${searchVideo && 'videoHorizontal__title__search'}`}>{video?.snippet?.title}</p>

                <div className='my-1 videoHorizontal__channel d-flex align-items-center'>
                    {/* //TODO show in search screen */}
                    {
                        (isVideo && searchVideo) &&
                        <div className='d-flex align-items-center'>
                            <LazyLoadImage
                                src={channelIcon?.url}
                                effect='blur'

                            />
                        </div>
                    }
                    <p className='mb-0'>{video?.snippet?.channelTitle}</p>

                    {!isVideo && (
                        <div>
                            <p>{video?.snippet?.description}</p>
                            <p>{video?.contentDetails?.totalItemCount} videos</p>
                        </div>
                    )}

                </div>

                {
                    isVideo &&
                    <div className='videoHorizontal__details d-flex items-center gap-1'>
                        <AiFillEye /> {numeral(views).format('0.a')} Views •
                        {moment("2020-12-12").fromNow()}
                    </div>
                }

            </Col>
        </Row>
    )
}

export default VideoHorizontal