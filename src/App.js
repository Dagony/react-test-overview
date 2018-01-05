import React, {Component} from 'react';
import {Card, Header, List} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);

        this.state = {
            issueNumber: ""
        };

    }

    handleChange(event) {
        this.setState({
            issueNumber: event.target.value
        });
    }

    handleClick() {
        window.open("https://xillio.atlassian.net/browse/" + this.state.issueNumber);
        this.setState();
    }

    render() {
        return (
            <div className={"container"}>
                <Card.Group>

                <LinkBlock title={'Functional reviewing'} size={"small"}>
                    <Link href={"https://xillio.atlassian.net/projects/CTC/versions/12700/tab/release-report-all-issues"} text={"test"}></Link>
                    <Link href={"https://xillio.atlassian.net/wiki/display/DEV/Status+overview+Xill+Server"} text={"XSVR Testing Overview"}></Link>
                    <Link href={"https://xillio.atlassian.net/wiki/display/DEV/3+-+Functional+Review+Checklist"} text={"Functional review checklist"}></Link>
                    <Link href={"https://bitbucket.org/dashboard/pullrequests?section=teams"} text={"Pull requests"}></Link>
                    <Link href={"https://xillio.atlassian.net/wiki/display/PROD/Xill+Project+Convention"} text={"Consultants Xill Project Convention"}></Link>
                </LinkBlock>

                <LinkBlock title={"Functional test reports"} size={"medium"}>
                    <Link href={"https://xillio.atlassian.net/wiki/spaces/DEV/pages/222756969/Sprint+27"} text={"GitBreakers Sprint 27"}></Link>
                    <Link href={"https://xillio.atlassian.net/wiki/spaces/DEV/pages/198148097/Sprint+26"} text={"GitBreakers Sprint 26"}></Link>
                    <Link href={"https://xillio.atlassian.net/wiki/spaces/DEV/pages/177635408/Sprint+25"} text={"GitBreakers Sprint 25"}></Link>
                    <Link href={"https://xillio.atlassian.net/wiki/spaces/DEV/pages/155615354/Sprint+24"} text={"GitBreakers Sprint 24"}></Link>
                    <Link href={"https://xillio.atlassian.net/wiki/spaces/DEV/pages/136741047/Sprint+23"} text={"GitBreakers Sprint 23"}></Link>
                    <Link href={"https://xillio.atlassian.net/wiki/spaces/DEV/pages/125501444/Sprint+22"} text={"GitBreakers Sprint 22"}></Link>
                    <Link href={"https://xillio.atlassian.net/wiki/spaces/DEV/pages/112099329/Sprint+21"} text={"GitBreakers Sprint 21"}></Link>
                    <Link href={"https://xillio.atlassian.net/wiki/spaces/DEV/pages/97878092/Sprint+20"} text={"GitBreakers Sprint 20"}></Link>
                    <Link href={"https://xillio.atlassian.net/wiki/spaces/DEV/pages/83263550/Sprint+19"} text={"GitBreakers Sprint 19"}></Link>
                    <Link href={"https://xillio.atlassian.net/wiki/spaces/DEV/pages/78282753/Sprint+18"} text={"GitBreakers Sprint 18"}></Link>
                </LinkBlock>

                <LinkBlock title={"Test Systems - Virtual machines"} size={"medium"} className={"systemLinks"}>
                    <Link href={"http://192.168.0.144:8080/share"} text={"Alfresco"} id={"alfresco"}></Link>
                        {/*<li><a id="github" href="https://github.com/XillioQA" target="_blank">GitHub</a></li>*/}
                        {/*<li><a id="sharepoint" href="http://xilliolabs.sharepoint.com" target="_blank">Sharepoint</a></li>*/}
                        {/*<li><a id="confluence" href="https://xillio.atlassian.net/wiki/spaces/TEST" target="_blank">Confluence</a></li>*/}
                        {/*<li><a id="liferay" href="http://192.168.0.187:8080/" target="_blank">Liferay</a></li>*/}
                        {/*<li><a id="aem" href="http://10.1.10.98:4502">AEM Test Environment</a> (<a class="normal" href="http://10.1.10.98:19239">Remote Desktop</a>) (<a class="normal" href="http://10.1.10.98:4502/crx/de/index.jsp">CRXDE Lite</a>)</li>*/}

                </LinkBlock>
                </Card.Group>
            </div>
        );
    }
}

class LinkBlock extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            size: props.size,
            title: props.title,
            className: props.class
        }
    }

    onButtonClick($event) {

    }

    render() {
        return (

                <Card style={{"height": "100%"}}>
                    <Card.Content>
                        <Card.Header>
                            <Header>{this.props.title || 'Placeholder title'}</Header>
                        </Card.Header>
                    </Card.Content>
                    <Card.Content>
                        {React.Children.map(this.props.children, (child, i) => {
                            return child
                        })}
                    </Card.Content>
                </Card>
        );
    }
}

class Link extends React.Component {
    render() {
        return (
            <List.Item>
                <a {...this.props} target="noopener noreferrer">{this.props.text}</a>
            </List.Item>
        )
    }
}

export default App;
