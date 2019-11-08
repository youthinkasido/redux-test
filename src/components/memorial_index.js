import React, { Component } from 'react'

export default class MemorialIndex extends Component {
    constructor(props) {
        super(props)

        this.state = {
            memorials: []
        }
    }

    componentDidMount() {
        debugger
        this.props.fetchMemorials().then(memorials => console.log(memorials))
        // this.props.fetchMemorials().then(memorials => console.log('here they are', memorials))
    }

    render() {
        return (
            <div>
                1
            </div>
        )
    }
}
