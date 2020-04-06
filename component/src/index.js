import React from 'react';
import ReactDom from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import faker from 'faker';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail
                    author="Raja"
                    timeAgo="Today at 4:30PM"
                    comment="Nice Blog!!!"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            
            <ApprovalCard>
                <CommentDetail
                    author="aks"
                    timeAgo="Today at 1:00AM"
                    comment="I like it"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            
            <ApprovalCard>
                <CommentDetail
                    author="ashrith"
                    timeAgo="Yesterday at 12:00AM"
                    comment="Hello"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            
        </div>
    );
}


ReactDom.render(<App/>, document.querySelector('#root'));