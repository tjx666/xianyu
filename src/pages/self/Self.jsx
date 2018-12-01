import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PersonInfo from '../../components/personalInfo/PersonalInfo';
import DivideLine from '../../components/divideLine/DivideLine';
import FeatureList from '../../components/featureList/FeatureList';
import './Self.scss'

export class Self extends Component {
    static propTypes = {

    }

    render() {
        return (
            <div className="self">
                <PersonInfo/>
                <DivideLine/>
                <FeatureList/>
            </div>
        )
    }
}

export default Self;
