import React, {Component} from 'react';
import {Card, Header, List} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        var opts = {};

        if (this.props.disabled) {
            opts['disabled'] = 'disabled';
        }

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

                <h1>Xillio Test Overview</h1>

                <Card.Group>

                <LinkBlock title={'Functional reviewing'}>
                    <Link href={"https://xillio.atlassian.net/projects/CTC/versions/12700/tab/release-report-all-issues"} text={"test"}></Link>
                    <Link href={"https://xillio.atlassian.net/wiki/display/DEV/Status+overview+Xill+Server"} text={"XSVR Testing Overview"}></Link>
                    <Link href={"https://xillio.atlassian.net/wiki/display/DEV/3+-+Functional+Review+Checklist"} text={"Functional review checklist"}></Link>
                    <Link href={"https://bitbucket.org/dashboard/pullrequests?section=teams"} text={"Pull requests"}></Link>
                    <Link href={"https://xillio.atlassian.net/wiki/display/PROD/Xill+Project+Convention"} text={"Consultants Xill Project Convention"}></Link>
                </LinkBlock>

                <LinkBlock title={"Functional test reports"} >
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

                <LinkBlock title={"Test Systems - Virtual machines"} size={"medium"} >
                    <Link href={"http://192.168.0.144:8080/share"} text={"Alfresco"} id={"alfresco"}></Link>
                    <Link href={"https://github.com/XillioQA"} text={"Github"} id={"github"}></Link>
                    <Link href={"http://xilliolabs.sharepoint.com"} text={"Sharepoint"} id={"sharepoint"}></Link>
                    <Link href={"https://xillio.atlassian.net/wiki/spaces/TEST"} text={"Confluence"} id={"confluence"}></Link>
                    <Link href={"http://192.168.0.187:8080/"} text={"Liferay"} id={"liferay"}></Link>
                    <Link href={"http://10.1.10.98:4502"} text={"AEM"} id={"aem"} RemoteDesktop={"http://10.1.10.98:19239"} EditorName={"CRXDE Lite"} EditorUrl={"http://10.1.10.98:4502/crx/de/index.jsp"}></Link>

                </LinkBlock>
                </Card.Group>
            </div>
        );
    }
}

const LinkBlock = ({size, title, children}) => (
    <Card className={size || "small"} style={{"height": "100%"}}>
        <Card.Content>
            <Card.Header>
                <Header>{title || 'Placeholder title'}</Header>
            </Card.Header>
        </Card.Content>
        <Card.Content>
            {/*{React.Children.map(this.props.children, (child, i) => {*/}
            {/*return child*/}
            {/*})}*/}
            {children}
        </Card.Content>
    </Card>
);
/*
class LinkBlockz extends React.Component {

    constructor(props) {
        super(props);
    }

    onButtonClick($event) {

    }

    render() {

        // var className = this.props.size ? {props.size} : null;
        return (

                <Card className={this.props.size || "small"} style={{"height": "100%"}}>
                    <Card.Content>
                        <Card.Header>
                            <Header>{this.props.title || 'Placeholder title'}</Header>
                        </Card.Header>
                    </Card.Content>
                    <Card.Content>
                        {/!*{React.Children.map(this.props.children, (child, i) => {*!/}
                            {/!*return child*!/}
                        {/!*})}*!/}
                        {this.props.children}
                    </Card.Content>
                </Card>
        );
    }
}*/

class Link extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let imgSrc = this.props.id ? `images/contentSystems/icon_${this.props.id}.png` : null;

        switch(this.props.id) {
            case 'alfresco':
                imgSrc="images/contentSystems/icon_alfresco.png";
                break;
            case 'github':
                imgSrc="images/contentSystems/icon_github.png";
                break;
            case 'sharepoint':
                imgSrc="images/contentSystems/icon_sharepoint.png";
                break;
            case 'confluence':
                imgSrc="images/testingTools/icon_confluence.png";
                break;
            case 'liferay':
                imgSrc="images/contentSystems/icon_liferay.png";
                break;
            case 'aem':
                imgSrc="images/contentSystems/icon_aem.png";
                break;
            default :
                break;

        }
        return(
            <List.Item>
                <a {...this.props} target="noopener noreferrer">
                    {this.props.id && <img class="ui avatar image" alt={this.props.id} src={`images/icon_${this.props.id}.png`} /> }
                    {this.props.text}
                </a>
                {this.props.RemoteDesktop ? <a href={this.props.RemoteDesktop} target="noopener noreferer"> (Remote Desktop)</a> : null}
                {this.props.EditorName ? <a href={this.props.EditorUrl} target="noopener noreferer"> ({this.props.EditorName})</a> : null}
            </List.Item>
        );

    }

}

export default App;
