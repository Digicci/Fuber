import React from "react";
import {
    Col,
    CardLink,
    CardTitle,
    DashInfo,
    DashImg,
    DivCard,
} from "./atoms";

function DashCard({id,to,imgInfo,descriptionInfo,title}) {
    const cardId = id

    return (
        <>
            <Col>
                <CardLink to={to}>
                    <DivCard $first={cardId === 1}>
                        <CardTitle>
                        <h3>{title}</h3>
                        <i className="ph-dots-three-outline"></i>
                        </CardTitle>
                        <DashInfo>
                            <span>
                                {descriptionInfo.info}
                            </span>
                        </DashInfo>
                        <DashImg>
                            <img src={imgInfo.img} alt={imgInfo.alt} />
                        </DashImg>
                    </DivCard>
                </CardLink>
            </Col>
        </>
    )
}

export default DashCard;