import React from 'react';
import CommentDetail from './CommentDetail';
import faker from 'faker';

const ApprovalCard = (props) => {
    return (
        <div className="ui card">
            <div className="content">
                {props.children}
            </div>
            <div className="extra content"></div>
            <div className="ui two buttons">
                <div className="ui basic button red">Accept</div>
                <div className="ui basic button green">Decline</div>
            </div>
        </div>
    );
};

export default ApprovalCard;