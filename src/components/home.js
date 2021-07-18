import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getThisCourse, getAllCourses, getMyCourses } from '../reducers/courseSlice';
import Article from './article';
import WrappedLink from './wrappedLink';


class Home extends Component {
    state = {
        showMyArticles: false
    }

    componentWillMount() {
        if (this.props.location.pathname === '/article/myarticles' && !this.state.showMyArticles) {
            this.toggleShowMyArticles();
        }
    }

    componentDidMount() {
        this.props.initArticles();
        if (this.props.isAuthenticated) {
            this.props.getMyCourses();
        }
    }

    toggleShowMyArticles = () => {
        this.setState((prevState) => {
            return {
                showMyArticles: !prevState.showMyArticles
            }
        });
    }

    render() {
        let allArticles = this.props.allArticles || JSON.parse(localStorage.getItem('BasicMERNStackAppAllArticles'));
        allArticles = allArticles.map(article => (
            <Article
                key={article._id}
                id={article._id}
                title={article.title} />
        ));

        let myArticles = [];
        if (this.props.isAuthenticated && this.state.showMyArticles) {
            if (this.props.myArticles) {
                myArticles = [...this.props.myArticles];
            } else {
                myArticles = [...JSON.parse(localStorage.getItem('BasicMERNStackAppMyArticles'))]
            }
            myArticles = myArticles.map(article => (
                <Article
                    key={article._id}
                    id={article._id}
                    title={article.title} />
            ));
        }

        const showArticlesLink = <WrappedLink
                to={this.state.showMyArticles ? "/" : "/article/myarticles"}
                buttonClasses={['btn', 'btn-outline-info', 'mr-3', 'MyArticlesButton']}
                onClick={this.toggleShowMyArticles}>
                    { this.state.showMyArticles ? 'All Articles' : 'My Articles' }
                </WrappedLink>

        return (
            <div className="container">
                <br />
                <div className="Header">
                    <h1 style={{display: 'inline-block'}}>All Courses</h1>
                    <WrappedLink to="/article/add" buttonClasses={['btn', 'btn-primary', 'mr-3', 'AddArticleButton']}>Add Course</WrappedLink>
                    {this.props.isAuthenticated && showArticlesLink}
                </div>
                <br />
                <div>
                    <section className="jumbotron">
                        <div className="Articles">
                            { this.state.showMyArticles ? myArticles : allArticles }
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        allArticles: state.course.allCourses,
        myArticles: state.course.myCourses,
        isAuthenticated: state.user.isAuthenticated
    };
};

const mapDispatchToProps = dispatch => {
    return {
        initArticles: () => dispatch(getAllCourses()),
        getMyCourses: () => dispatch(getMyCourses())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
