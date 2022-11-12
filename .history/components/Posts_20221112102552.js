import React from 'react';
import Post from './Post';

export default function Posts() {
    const posts =[
        {
            id:"1",
            username:"codewithharun",
            userImg:"https://scontent.fdel1-2.fna.fbcdn.net/v/t39.30808-6/310529942_1234093307373780_5229665497444732448_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=HkrNtRCdFYYAX-7kec-&_nc_ht=scontent.fdel1-2.fna&oh=00_AfDXJu3wKR4AiiDC5o_QwgjUL3fmg3M_zTpyZ56Jg0uCag&oe=636B7BB2",
            img:"https://image.shutterstock.com/image-photo/professional-japanese-development-engineer-testing-260nw-1589205961.jpg",
            caption:"Nice Picture"
        },
        {
            id:"2",
            username:"codewithharun",
            userImg:"https://scontent.fdel1-2.fna.fbcdn.net/v/t39.30808-6/310529942_1234093307373780_5229665497444732448_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=HkrNtRCdFYYAX-7kec-&_nc_ht=scontent.fdel1-2.fna&oh=00_AfDXJu3wKR4AiiDC5o_QwgjUL3fmg3M_zTpyZ56Jg0uCag&oe=636B7BB2",
            img:"https://www.shutterstock.com/image-illustration/crash-test-3d-rendering-dummy-600w-1672972486.jpg",
            caption:"Nice Picture"
        }

    ]
    return <div>
        {posts.map(post =>(
            <Post
                key={post.id}
                id={post.id}
                username={post.username}
                userImg={post.userImg}
                img={post.img}
                caption={post.caption}
            />
        ))}
    </div>;
}