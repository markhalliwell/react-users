import React from 'react'

import './styles.scss'

interface PropsType<T> {
    items: T[];
    renderer?: (item: T) => React.ReactNode;
}

export interface AbstractItem {
    id: number;
}

export default function List<T extends AbstractItem>(
    { items, renderer }: PropsType<T>
) {
    return (
        <ul className="list">
            {items.map(item => (
                <li className="list-item" key={item.id}>{renderer ? renderer(item) : (<div>{item.id}</div>)}</li>
            ))}
        </ul>
    );
}
