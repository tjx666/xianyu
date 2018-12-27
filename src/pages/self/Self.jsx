import React, { Component } from 'react';

import LoginCard from '../../components/loginCard/LoginCard';
import PersonInfo from '../../components/personalInfo/PersonalInfo';
import DivideLine from '../../components/divideLine/DivideLine';
import FeatureList from '../../components/featureList/FeatureList';
import { checkIfLogin } from '../../util/checkLogin';

import './Self.scss'

export class Self extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLogin: checkIfLogin()
        }
    }

    render() {
        return (
            <div className="self">
                { this.state.isLogin ? <PersonInfo/> : <LoginCard/>}
                <DivideLine/>
                <FeatureList/>
            </div>
        )
    }
}

export default Self;
