import React from 'react';
import { 
    Card, 
    Icon, 
    Button, 
    Loader,
    Dimmer,
} from 'semantic-ui-react';
import Moment from 'moment';


const ProfileDetail = ({ isLoading, profileData, onEditProfile, uploadPhoto }) => {
    return <Card color="teal">
        <Dimmer active={isLoading}>
            <Loader />
        </Dimmer>
        <img
            alt="user"
            src={profileData.picUrl || require('../../images/default-user-img.jpg')}
            className='ui image'
            onClick={uploadPhoto} />
        <Card.Content>
            <Card.Header>{profileData.name}</Card.Header>
            <Card.Meta>{profileData.location}</Card.Meta>
            <Card.Description>{profileData.description}</Card.Description>
        </Card.Content>
        <Card.Content extra>
            <a>
                <Icon name='user' /> Joined&nbsp;{Moment(profileData.created).format('MMMM YYYY')}
            </a>
        </Card.Content>
        <Button color="teal" attached='bottom' onClick={() => onEditProfile(true)}>
            <Icon name='pencil' />Edit
        </Button>
    </Card>;
};


export default ProfileDetail;