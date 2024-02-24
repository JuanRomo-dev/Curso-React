import { useState } from 'react';
import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';
export const App = () => {
    const formatUserName = (userName) => `@${userName}`;

    const [name, setName] = useState('juanromo-dev')

    return (               // Es lo mismo que usar <React.Fragment> (linea abajo)
        <section className='App'>                                                     
            <TwitterFollowCard formatUserName={formatUserName} initialIsFollowing userName={name}>
                Juan Romo
            </TwitterFollowCard>
            <TwitterFollowCard formatUserName={formatUserName} initialIsFollowing={false} userName="gabritorres">
                Gabriel Torres
            </TwitterFollowCard>
            <TwitterFollowCard formatUserName={formatUserName} initialIsFollowing={true} userName="CarlosForriol">
                Carlos Forriol
            </TwitterFollowCard>

            <button onClick={() => setName('LordSama')}>
                Cambio nombre
            </button>
        </section>
    )
}