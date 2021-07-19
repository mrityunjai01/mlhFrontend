import React, { Component } from 'react';
import YouTubePlayer from 'yt-player';
import { connect } from 'react-redux';
import { getThisCourse, getAllCourses, getMyCourses, getAllCoursesThunk, getMyCoursesThunk } from '../reducers/courseSlice';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card'
import WrappedLink from './wrappedLink';
import { withRouter } from 'react-router-dom';


class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            errorMsg: '',
            showMyCourses: false,
        }
    }

    componentWillMount() {
        if (this.props.location.pathname === '/Course/myCourses' && !this.state.showMyCourses) {
            this.toggleShowMyCourses();
        }
    }

    componentDidMount() {
        this.props.initCourses()
            .then(res => {
                if (res !== "OK") {
                    this.setState({
                        errorMsg: res,
                    })
                }
            })

        if (this.props.isAuthenticated) {
            this.props.getMyCourses();
        }
    }

    toggleShowMyCourses = () => {
        this.setState((prevState) => {
            return {
                showMyCourses: !prevState.showMyCourses
            }
        });
    }

    render() {
        let allCourses = this.props.allCourses || JSON.parse(localStorage.getItem('BasicMERNStackAppAllCourses'));
        
        let players = []
        if (allCourses !== null) {
            
            allCourses = allCourses.map((course, ind) => {
                try {

                    const player = new YouTubePlayer(`#player-${ind}`, {
                        width: 560,
                        height: 315,
                        captions: 'en'
                    })

                    player.load(course.courseLink)
                    players.push({ link: course.courseLink, player: player })
                    player.on('paused', () => {

                    })
                }
                catch (err) {

                }
                return (
                    <div key={ind} className="player-div">
                        <Accordion >
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="0">
                                    {course.courseName}
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>
                                        <div id={`player-${ind}`} />
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="0">
                                    Notes
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="1">
                                    <Card.Body>
                                        some sample notes
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                    </div>
                )

            });
        }

        let myCourses = [];
        if (this.props.isAuthenticated && this.state.showMyCourses) {
            if (this.props.myCourses) {
                myCourses = [...this.props.myCourses];
            } else {
                myCourses = [...JSON.parse(localStorage.getItem('BasicMERNStackAppMyCourses'))]
            }
            let myCourse_players = []
            if (myCourses !== null) {
                
                myCourses = myCourses.map((course, ind) => {
                    try {

                        const player = new YouTubePlayer(`#player-${ind}`, {
                            width: 560,
                            height: 315,
                            captions: 'en'
                        })

                        player.load(course.courseLink)
                        myCourse_players.push({ link: course.courseLink, player: player })
                        player.on('paused', () => {

                        })
                    }
                    catch (err) {

                    }
                    return (
                        <div key={ind} className="player-div">
                            <Accordion >
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="0">
                                        {course.courseName}
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body>
                                            <div id={`player-${ind}`} />
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="0">
                                        Notes
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="1">
                                        <Card.Body>
                                            some sample notes
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>
                        </div>
                    )

                });
            }

            
        }

        const showCoursesLink = <WrappedLink
            to={this.state.showMyCourses ? "/" : "/Course/myCourses"}
            buttonClasses={['btn', 'btn-outline-info', 'me-3', 'MyCoursesButton']}
            onClick={this.toggleShowMyCourses}>
            {this.state.showMyCourses ? 'All Courses' : 'My Courses'}
        </WrappedLink>

        return (
            <div className="container">
                <br />
                <div className="Header">
                    <h1 style={{ display: 'inline-block' }}>All Courses</h1>
                    <WrappedLink to="/courses/add" buttonClasses={['btn', 'btn-primary', 'me-3', 'AddCourseButton']}>Add Course</WrappedLink>
                    {this.props.isAuthenticated && showCoursesLink}
                </div>
                <br />
                <div>
                    <section className="jumbotron">
                        <div className="Courses">
                            {this.state.errorMsg}
                            {this.state.showMyCourses ? myCourses : allCourses}
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        allCourses: state.course.allCourses,
        myCourses: state.course.myCourses,
        isAuthenticated: state.user.isAuthenticated
    };
};

const mapDispatchToProps = dispatch => {
    return {
        initCourses: () => dispatch(getAllCoursesThunk()),
        getMyCourses: () => dispatch(getMyCoursesThunk())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Home));
