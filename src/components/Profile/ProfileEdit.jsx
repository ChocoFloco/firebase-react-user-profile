import React from 'react';
import { 
    Card, 
    Icon, 
    Button, 
    Input,

} from 'semantic-ui-react';


const ProfileEdit = ({ profileData, onChangeText, onSaveProfile }) => {
    return <Card color="teal">
        <Card.Content>
            <Card.Header>
                Edit Info
        </Card.Header>
            <div className="ui horizontal divider">
                Profile
        </div>
            <div className="ui form">
                <div className="field">
                    <div className="ui pointing below label">
                        Name
                </div>
                    <Input
                        placeholder="Name"
                        name="name"
                        defaultValue={profileData.name}
                        onChange={onChangeText} />
                </div>
                <div className="field">
                    <div className="ui pointing below label">
                        Tagline
                </div>
                    <Input
                        placeholder="Tagline"
                        name="description"
                        defaultValue={profileData.description}
                        onChange={onChangeText} />
                </div>
                <div className="field">
                    <div className="ui pointing below label">
                        Location
                </div>
                    <Input
                        fluid
                        placeholder="Location"
                        name="location"
                        defaultValue={profileData.location}
                        onChange={onChangeText} />
                </div>
            </div>
        </Card.Content>
        <Button color="teal" attached='bottom' onClick={onSaveProfile}>
            <Icon name='save' />Save
    </Button>
    </Card>; 
};


export default ProfileEdit;