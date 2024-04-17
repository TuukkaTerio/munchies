import React, { useEffect, useState, FC } from 'react';
import { fetchRestaurantOpenStatus } from '../services/api.js';
import styled, { keyframes } from "styled-components";
import {
    IS_OPEN,
    IS_CLOSED,
    DELIVERY_TIME_UNIT,
    GENERIC_IS_CLOSED_INFORMATION,
    DESKTOP_BREAKPOINT
} from '../constants.js';
import {
    COLOR_BLACK,
    COLOR_WHITE,
    COLOR_OFF_WHITE,
    COLOR_STROKE,
    COLOR_BOX_SHADOW_GREY,
    COLOR_GREEN,
    COLOR_GREEN_HOVER,
    COLOR_OVERLAY_WHITE
} from '../colors.js';
import { isSet } from '../helpers.js';
import LinkWrapper from './wrappers/LinkWrapper.tsx';
import Heading from '../elements/Heading.tsx';
import Badge from './Badge.tsx';
import ArrowIcon from './ArrowIcon.js';

const fadeInUp = keyframes`
    from {
        transform: translate3d(0, 40px, 0);
        opacity: 0;
    }
    to {
        transform: translate3d(0, 0, 0);
        opacity: 1;
    }
`;

const Wrapper = styled.article<{ animationIndex?: number }>`
    align-items: flex-end;
    animation-name: ${ fadeInUp };
    animation-duration: 1s;
    animation-fill-mode: both;
    background-color: ${ COLOR_WHITE };
    border: 0.6px solid ${ COLOR_STROKE };
    border-radius: 8px;
    box-shadow: -4px 2px 10px 0px ${ COLOR_BOX_SHADOW_GREY },
        -16px 9px 18px 0px ${ COLOR_BOX_SHADOW_GREY },
        -35px 20px 24px 0px transparent,
        -63px 36px 29px 0px transparent,
        -98px 56px 32px 0px transparent;
    display: flex;
    height: 202px;
    justify-content: space-between;
    opacity: 0;
    overflow: hidden;
    padding: 16px;
    position: relative;

    &:hover {
        .arrow-icon {
            background-color: ${ COLOR_GREEN_HOVER };
        }

        .restaurant-img {
            transform: scale(1.15);
        }
    }

    @media (min-width: ${ DESKTOP_BREAKPOINT }) {
        gap: 8px;
    }

    @media (min-width: ${ DESKTOP_BREAKPOINT }) {
        gap: 8px;
    }

    &:hover {
        .arrow-icon {
            background-color: ${ COLOR_GREEN_HOVER };
        }

        .restaurant-img {
            transform: scale(1.15);
        }
    }
`;

const Image = styled.img`
    position: absolute;
    right: -30px;
    top: -30px;
    user-select: none;
    transition: transform 0.3s ease;
`;

const BadgesWrapper = styled.div`
    display: flex;
    gap: 4px;
    left: 16px;
    position: absolute;
    top: 16px;
    z-index: 1;
`;

const Indicator = styled.span`
    background-color: ${ COLOR_GREEN };
    border-radius: 50%;
    content: "";
    display: block;
    height: 8px;
    width: 8px;
`;

const IsOpenIndicator = styled(Indicator)`
    background-color: ${ COLOR_GREEN };
`;

const IsClosedIndicator = styled(Indicator)`
    background-color: ${ COLOR_BLACK };
`;

const Overlay = styled.div`
    align-items: center;
    background-color: ${ COLOR_OVERLAY_WHITE };
    bottom: 0;
    display: flex;
    justify-content: center;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 0;
`;

const OverlayText = styled.p`
    background-color: ${ COLOR_OFF_WHITE };
    border: 0.6px solid ${ COLOR_STROKE };
    border-radius: 4px;
    box-shadow: -4px 2px 10px 0px ${ COLOR_BOX_SHADOW_GREY },
        -16px 9px 18px 0px ${ COLOR_BOX_SHADOW_GREY },
        -35px 20px 24px 0px transparent,
        -63px 36px 29px 0px transparent,
        -98px 56px 32px 0px transparent;
    font-size: 12px;
    line-height: 12px;
    padding: 8px 10px;
`;

interface RestaurantCardProps {
    animationIndex?: number;
    deliveryTimeMinutes?: number;
    id: string;
    imageUrl?: string;
    name?: string;
    restaurantUrl?: string;
}

const RestaurantCard: FC<RestaurantCardProps> = ({
    id,
    animationIndex = 1,
    name,
    imageUrl,
    restaurantUrl,
    deliveryTimeMinutes
}) => {
    const [isOpen, setIsOpen] = useState<boolean>(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const restaurantOpenStatus = await fetchRestaurantOpenStatus(id);
                setIsOpen(restaurantOpenStatus?.is_open);
            } catch (error) {
                console.error('Error fetching restaurant open status:', error);
            }
        }

        fetchData();
    }, [id]);

    return (
        <LinkWrapper href={ restaurantUrl }>
            <Wrapper style={{ animationDelay: `${animationIndex * 0.2}s` }}>
                {!!name?.length && <Heading content={ name } semanticLevel={ 3 } />}
                <BadgesWrapper>
                    <Badge>
                        { isOpen ? <IsOpenIndicator /> : <IsClosedIndicator /> }
                        { isOpen ? IS_OPEN : IS_CLOSED }
                    </Badge>
                    {isSet(deliveryTimeMinutes) && isOpen && (
                        <Badge>
                            { `${deliveryTimeMinutes} ${ DELIVERY_TIME_UNIT }` }
                        </Badge>
                    )}
                </BadgesWrapper>
                {isSet(imageUrl) && (
                    <Image
                        className="restaurant-img"
                        src={ imageUrl }
                        alt={ name }
                        width="140"
                        height="140"
                    />
                )}
                <ArrowIcon />
                {!isOpen && (
                    <Overlay>
                        <OverlayText>
                            { GENERIC_IS_CLOSED_INFORMATION }
                        </OverlayText>
                    </Overlay>
                )}
            </Wrapper>
        </LinkWrapper>
    );
};

export default RestaurantCard;
