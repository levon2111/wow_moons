import React, {useContext, useEffect, useState} from 'react';
import {
    FacebookIcon,
    FacebookShareButton,
    LinkedinIcon,
    LinkedinShareButton,
    TwitterIcon,
    TwitterShareButton
} from 'react-share';
import {toast} from 'react-toastify';
import styled from 'styled-components';
import CustomCursorContext from "@/pages/contexts/CustomCursor/context/CustomCursorContext";
import {EnvVars} from "../../../../env";
import {copyToClipboard} from "@/pages/utils/copyToClipboard";
import LinkIcon from "@/pages/_components/LinkIcon";
import {media} from "@/pages/utils/media";

interface ShareWidgetProps {
    title: string;
    slug: string;
}

export default function ShareWidget({title, slug}: ShareWidgetProps) {
    const {setType} = useContext(CustomCursorContext);
    const shareMessage = 'New article: ' + title;
    const currentUrl = EnvVars.URL + 'blog/' + slug;
    const [isCopied, setIsCopied] = useState<boolean>(false);
    const notify = () =>
        toast.success('Link copied!', {
            position: 'top-center',
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: 'light',
        });

    useEffect(() => {
        if (isCopied) {
            notify();
            setTimeout(() => {
                setIsCopied(false);
            }, 1500);
        }
    }, [isCopied]);
    const handleCopy = () => {
        if (!isCopied) {
            copyToClipboard(window.location.href).then(() => {
                setIsCopied(true);
            });
        }
    };

    const onMouseEnter = () => {
        setType('link');
    };

    const onMouseLeave = () => {
        setType('default');
    };

    return (
        <Wrapper>
            <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onClick={handleCopy}>
                <LinkIcon color="#4A4A4E" size={20}/>
            </div>
            <LinkedinShareButton onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} title={shareMessage}
                                 url={currentUrl}>
                <LinkedinIcon size={"3rem"} round={true} iconFillColor="#fff"
                              bgStyle={{fill: '#4A4A4E'}}/>
            </LinkedinShareButton>
            <FacebookShareButton onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} title={shareMessage}
                                 url={currentUrl}>
                <FacebookIcon size={"3rem"} round={true} iconFillColor="#fff"
                              bgStyle={{fill: '#4A4A4E'}}/>
            </FacebookShareButton>
            <TwitterShareButton onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} title={shareMessage}
                                url={currentUrl}>
                <TwitterIcon size={"3rem"} round={true} iconFillColor="#fff"
                             bgStyle={{fill: '#4A4A4E'}}/>
            </TwitterShareButton>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    gap: 0.8rem;
    justify-content: flex-start;
    >button, >div{
      width: 4rem;
      height: 4rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    ${media('<=largeDesktop')} {
        //transform: translateY(-50%) scale(0.8);
    }

    ${media('<=tablet')} {
        justify-content: center;
        align-items: flex-start;
        //transform: scale(1);

        //& > * {
        //    line-height: 0 !important;
        //}
    }
`;
