import { AbstractItem } from '../List/List'
import Address, {AddressProps} from '../Address/Address'

import './styles.scss'

import { ReactComponent as AvatarIcon } from './avatar.svg'
import { ReactComponent as EmailIcon } from './email.svg'
import { ReactComponent as OfficeBuildingIcon } from './office-building.svg'
import { ReactComponent as PhoneIcon } from './phone.svg'
import { ReactComponent as WebsiteIcon } from './website.svg'

export interface UserProps extends AbstractItem {
    id: number,
    name: string,
    username: string,
    email: string,
    address: AddressProps,
    phone: string,
    website: string,
    company: {
        name: string,
        catchPhrase: string,
        bs: string
    }
}

export type Users = UserProps[];

export default function User(user: UserProps) {
    return (
        <div className="user">
            <img className="avatar" src={`https://i.pravatar.cc/150?u=${user.email}`} alt={`${user.name}'s avatar.`}/>
            <div className="info">
                <div className="title">
                    <div className="name">{user.name}</div>
                    <div className="company">
                        <OfficeBuildingIcon className="icon" title="Company" />
                        {user.company.name}
                    </div>
                </div>

                <div className="username">
                    <AvatarIcon className="icon" title="Username" />
                    {user.username}
                </div>

                <a className="email" href={`mailto:${user.email}`}>
                    <EmailIcon className="icon" title="Email" />
                    {user.email}
                </a>

                <a className="phone" href={`tel:${user.phone}`}>
                    <PhoneIcon className="icon" title="Phone" />
                    {user.phone}
                </a>

                <a className="website" href={`http://${user.website.replace(/^https?:\/\//, '')}`} target="_blank" rel="noreferrer">
                    <WebsiteIcon className="icon" title="Website" />
                    {user.website}
                </a>

                <Address {...user.address}/>
            </div>
        </div>
    )
};
