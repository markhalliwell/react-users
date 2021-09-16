import React from 'react'

import './styles.scss'

import { ReactComponent as AddressIcon } from './address.svg'

export interface AddressProps {
    street?: string,
    suite?: string,
    city?: string,
    zipcode?: string,
    geo?: {
        lat: number,
        lng: number
    }
}

export default function Address(
    { street, suite, city, zipcode, geo }: AddressProps
) {
    return (
        <div className="address">
            <AddressIcon className="icon" />
            <div className="street">{street}</div>
            <div className="suite">{suite}</div>
            <div className="city">{city} {zipcode}</div>
            <a href={`https://maps.google.com/maps?q=${geo?.lat},${geo?.lng}`} target="_blank" rel="noreferrer">
                View Map
            </a>
        </div>
    );
}
