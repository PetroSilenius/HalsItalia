import React from 'react';


const arrival = new Date('June 5, 2019 17:05:00')
const departure = new Date('June 19, 2019 20:15:00')

class Countdown extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
        }
    }

    componentWillMount() {
        this.getTimeUntil()
    }

    componentDidMount() {
        this.timerId = setInterval(() => this.getTimeUntil(arrival), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timerId)
    }

    getTimeUntil() {
        let time = Date.parse(arrival) - Date.parse(new Date())
        if (time<0){
            time = Date.parse(departure) - Date.parse(new Date())
        }
        const days = Math.floor(time / (1000 * 60 * 60 * 24))
        const hours = Math.floor(time / (1000 * 60 * 60) % 24)
        const minutes = Math.floor(time / 1000 / 60 % 60)
        const seconds = Math.floor(time / 1000 % 60)

        this.setState({days, hours, minutes, seconds})
    }

    render() {
        return (
            <div className="clock">
                <div className="clock-display">
                    <SvgCircle max={365} done={this.state.days}/>
                    <div className="clock-text">
                        <span>{zerofill(this.state.days)}</span>
                        <span className="clock-unit">päivää</span>
                    </div>
                </div>
                <div className="clock-display">
                    <SvgCircle max={24} done={this.state.hours}/>
                    <div className="clock-text">
                        <span>{zerofill(this.state.hours)}</span>
                        <span className="clock-unit">tuntia</span>
                    </div>
                </div>
                <div className="clock-display">
                    <SvgCircle max={60} done={this.state.minutes}/>
                    <div className="clock-text">
                        <span >{zerofill(this.state.minutes)}</span>
                        <span className="clock-unit">minuuttia</span>
                    </div>
                </div>
                <div className="clock-display">
                    <SvgCircle max={60} done={this.state.seconds}/>
                    <div className="clock-text">
                        <span >{zerofill(this.state.seconds)}</span>
                        <span className="clock-unit">sekuntia</span>
                    </div>
                </div>
            </div>
        )
    }
}


const zerofill = num => ((num < 10 && num >= 0) ? `0${num}` : num);

const SvgCircle = (props) => {
    const { done, max, radius, stroke, strokeWidth } = props
    const size = (radius + strokeWidth) * 2
    const length = Math.ceil(2 * radius * Math.PI)
    const remainingLength = length - (Math.ceil(2 * radius * Math.PI) * (done / max))
    return (
        <svg
            width={size}
            height={size}
            viewBox={`0 0 ${size} ${size}`}
        >
            <g>
                <circle
                    className="circle"
                    r={radius}
                    cx={radius + strokeWidth}
                    cy={radius + strokeWidth}
                    stroke={stroke}
                    strokeDasharray={length}
                    strokeDashoffset={remainingLength}
                    strokeLinecap="round"
                    strokeWidth={strokeWidth}
                    fill="none"
                />
                <circle
                    r={radius}
                    cx={radius + strokeWidth}
                    cy={radius + strokeWidth}
                    stroke="rgba(0, 0, 0, .5)"
                    strokeLinecap="round"
                    strokeWidth={strokeWidth}
                    fill="none"
                />
            </g>
        </svg>
    )
}

SvgCircle.defaultProps = {
    done: 0,
    max: 24,
    radius: 44,
    stroke: '#9398a0',
    strokeWidth: 6,
}


export default Countdown