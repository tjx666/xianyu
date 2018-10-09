import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './VideoHideFloor.scss';

export class videoHideFloor extends Component {
    static defaultProps = {
        width: 160,
        height: 200,
    }

    static propTypes = {
        width: PropTypes.number,
        height: PropTypes.number,
    }

    constructor(props) {
        super(props);

        this.state = {
            circleRadius: 26,
            triangleSlideLength: 20,
        }
    }


    componentDidMount() {
        const canvasDOM = this.refs.videoHideFloor;
        canvasDOM.width = this.props.width;
        canvasDOM.height = this.props.height;
        const ctx = canvasDOM.getContext('2d');

        // draw gray transparent bg
        ctx.beginPath();
        ctx.fillStyle = 'rgba(50, 50, 50, 0.2)';
        ctx.fillRect(0, 0, this.props.width, this.props.height)

        // draw circle
        const circleRadius = this.state.circleRadius;
        ctx.beginPath();
        ctx.fillStyle = 'rgba(50, 50, 50, 0.3)';
        ctx.arc(this.props.width / 2, this.props.height / 2, circleRadius, 0, 2 * Math.PI);
        ctx.fill();

        // draw triangle
        const slideLength = this.state.triangleSlideLength;
        const topPoint = {};
        topPoint.x = this.props.width / 2 - (slideLength / 2 * Math.sqrt(3) / 2);
        topPoint.y = this.props.height / 2 - slideLength / 2;
        
        const middlePoint = {};
        middlePoint.x = this.props.width / 2 + (slideLength / 2 * Math.sqrt(3) / 2);
        middlePoint.y = this.props.height / 2

        const bottomPoint = {};
        bottomPoint.x = topPoint.x;
        bottomPoint.y = this.props.height / 2 + slideLength / 2;

        console.log({
            topPoint,
            middlePoint,
            bottomPoint
        });

        ctx.beginPath();
        ctx.moveTo(topPoint.x, topPoint.y);
        ctx.lineTo(middlePoint.x, middlePoint.y);
        ctx.lineTo(bottomPoint.x, bottomPoint.y);
        ctx.closePath();
        ctx.lineCap = 'round';
        ctx.lineWidth = 2;
        ctx.strokeStyle = '#FFF'
        ctx.fillStyle = '#FFF';
        ctx.stroke();
        ctx.fill();
    }


    render() {
        return (
            <canvas className="video-hide-floor" ref="videoHideFloor" width={this.props.width} height={this.props.height}>

            </canvas>
        )
    }
}

export default videoHideFloor
