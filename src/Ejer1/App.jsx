import { useState } from 'react';
import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';

const users =[
    {
        userName: 'juanromo-dev',
        name: 'Juan Romo',
        isFollowing: true
    },
    {
        userName: 'gabritorres',
        name: 'Gabriel Torres',
        isFollowing: false
    },
    {
        userName: 'CarlosForriol',
        name: 'Carlos Forriol',
        isFollowing: true
    }
]

export const App = () => {
    return (               // Es lo mismo que usar <React.Fragment> (linea abajo)
        <section className='App'>                                                     
            {
                users.map(user => {
                    const {userName, name, isFollowing} = user;
                    return (
                        <TwitterFollowCard
                            key={userName}
                            initialIsFollowing={isFollowing}
                            userName={userName} 
                        >
                            {name}
                        </TwitterFollowCard>
                    )
                })
            }
        </section>
    )
}