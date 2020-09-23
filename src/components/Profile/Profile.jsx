import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Profile.css';
import { 
    Transition,
    Segment,
    Placeholder
} from 'semantic-ui-react';
import ProfileDetail from './ProfileDetail';
import ProfileEdit from './ProfileEdit';

export default class Profile extends Component {

    static propTypes = {
        uid: PropTypes.string,
        profileData: PropTypes.object,
        onSaveProfile: PropTypes.func,
        onSavePhoto: PropTypes.func,
        isLoading: PropTypes.bool,
        isEditing: PropTypes.bool,
        error: PropTypes.string
    }

    state = {
        editMode: false,
        changedAttributes: {}
    }

    uploadPhoto = () => {
        const uploaderInput = document.getElementById('fileUploader');
        uploaderInput.click();
    }
    
    editProfile = (toggle) => {
        const { onEdit } = this.props;
        onEdit && onEdit(toggle);
    }

    saveProfile = () => {
        const { uid, onSaveProfile } = this.props;
        const { changedAttributes } = this.state;
        onSaveProfile && onSaveProfile({ 
            uid, 
            changedAttributes
        });
    }

    handleUpload = (e) => {
        e.preventDefault();
        const { onSavePhoto, uid } = this.props;
        const uploaderInput = document.getElementById('fileUploader');
        const file = uploaderInput.files[0];
        if (!file) return;
        onSavePhoto && onSavePhoto(uid, file);
    }

    changeText = (e) =>{
        const { changedAttributes } = this.state;
        this.setState({ 
            changedAttributes: {
                ...changedAttributes,
                [e.target.name]: e.target.value
            }
        });
    }

    render() {
        const { profileData, isLoading, isEditing } = this.props;
        return(
            <div className="ui container">
                <div className="ui two column centered grid">
                    <div className="row">
                        <div id = "profileInfo" className="five wide column">
                            <Transition visible={isEditing===true} animation='horizontal flip' duration={isEditing ? 500 : 0}>
                                <div>
                                    <ProfileEdit 
                                        onChangeText={this.changeText}
                                        onSaveProfile={this.saveProfile}
                                        profileData={profileData}
                                    />
                                </div>
                            </Transition>
                            <Transition visible={isEditing===false} animation='horizontal flip' duration={isEditing ? 0 : 500}>
                                <div>
                                    <ProfileDetail 
                                        isEditing={isEditing}
                                        isLoading={isLoading} 
                                        profileData={profileData}
                                        onEditProfile={this.editProfile}
                                    />
                                </div>
                            </Transition>
                            <input id="fileUploader" type='file' style={{ display: 'none' }}  onChange={this.handleUpload} />
                        </div>
                        <div id ="profileData" className="eleven wide column">
                            <Segment>
                                <Placeholder fluid>
                                    <Placeholder.Header image>
                                        <Placeholder.Line />
                                        <Placeholder.Line />
                                        <Placeholder.Line />
                                        <Placeholder.Line />
                                    </Placeholder.Header>
                                    <Placeholder.Paragraph>
                                        <Placeholder.Line />
                                        <Placeholder.Line />
                                        <Placeholder.Line />
                                        <Placeholder.Line />
                                        <Placeholder.Line />
                                    </Placeholder.Paragraph>
                                </Placeholder>                               
                            </Segment>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

