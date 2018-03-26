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
            issueNumber: "",
            bitcoinValue: null,
            connectors: []
        };
    }

    componentDidMount() {

    }

    handleChange(event)
    {
        this.setState({
            issueNumber: event.target.value
        });
    }

    handleClick()
    {
        window.open("https://xillio.atlassian.net/browse/" + this.state.issueNumber);
        this.setState();
    }

    render() {
        return (
            <div className={"container"}>
                <h1>Xillio Test Overview</h1>
                    <Card.Group>
                        <LinkBlock
                            title = {'Functional reviewing'} >
                                <Link
                            href = {"https://xillio.atlassian.net/projects/CTC/versions/12700/tab/release-report-all-issues"}
                            text = {"test"} > </Link>
                                <Link
                            href = {"https://xillio.atlassian.net/wiki/display/DEV/Status+overview+Xill+Server"}
                            text = {"XSVR Testing Overview"} > </Link>
                                <Link
                            href = {"https://xillio.atlassian.net/wiki/display/DEV/3+-+Functional+Review+Checklist"}
                            text = {"Functional review checklist"} > </Link>
                                <Link
                            href = {"https://bitbucket.org/dashboard/pullrequests?section=teams"}
                            text = {"Pull requests"} > </Link>
                                <Link
                            href = {"https://xillio.atlassian.net/wiki/display/PROD/Xill+Project+Convention"}
                            text = {"Consultants Xill Project Convention"} > </Link>
                        </LinkBlock>
            <LinkBlock
        title = {"Functional test reports"} >
            <Link
        href = {"https://xillio.atlassian.net/wiki/spaces/DEV/pages/222756969/Sprint+27"}
        text = {"GitBreakers Sprint 27"} > </Link>
            <Link
        href = {"https://xillio.atlassian.net/wiki/spaces/DEV/pages/198148097/Sprint+26"}
        text = {"GitBreakers Sprint 26"} > </Link>
            <Link
        href = {"https://xillio.atlassian.net/wiki/spaces/DEV/pages/177635408/Sprint+25"}
        text = {"GitBreakers Sprint 25"} > </Link>
            <Link
        href = {"https://xillio.atlassian.net/wiki/spaces/DEV/pages/155615354/Sprint+24"}
        text = {"GitBreakers Sprint 24"} > </Link>
            <Link
        href = {"https://xillio.atlassian.net/wiki/spaces/DEV/pages/136741047/Sprint+23"}
        text = {"GitBreakers Sprint 23"} > </Link>
            <Link
        href = {"https://xillio.atlassian.net/wiki/spaces/DEV/pages/125501444/Sprint+22"}
        text = {"GitBreakers Sprint 22"} > </Link>
            <Link
        href = {"https://xillio.atlassian.net/wiki/spaces/DEV/pages/112099329/Sprint+21"}
        text = {"GitBreakers Sprint 21"} > </Link>
            <Link
        href = {"https://xillio.atlassian.net/wiki/spaces/DEV/pages/97878092/Sprint+20"}
        text = {"GitBreakers Sprint 20"} > </Link>
            <Link
        href = {"https://xillio.atlassian.net/wiki/spaces/DEV/pages/83263550/Sprint+19"}
        text = {"GitBreakers Sprint 19"} > </Link>
            <Link
        href = {"https://xillio.atlassian.net/wiki/spaces/DEV/pages/78282753/Sprint+18"}
        text = {"GitBreakers Sprint 18"} > </Link>
            </LinkBlock>

            <LinkBlock
        title = {"Test Systems - Virtual machines"}
        size = {"medium"} >
            <Link
        href = {"http://192.168.0.144:8080/share"}
        text = {"Alfresco"}
        id = {"alfresco"} > </Link>
            <Link
        href = {"https://github.com/XillioQA"}
        text = {"Github"}
        id = {"github"} > </Link>
            <Link
        href = {"http://xilliolabs.sharepoint.com"}
        text = {"Sharepoint"}
        id = {"sharepoint"} > </Link>
            <Link href={"https://xillio.atlassian.net/wiki/spaces/TEST"} text={"Confluence"} id={"confluence"}> </Link>
            <Link href={"http://192.168.0.187:8080/"} text = {"Liferay"} id = {"liferay"} > </Link>
            <Link href={"http://10.1.10.98:4502"} text = {"AEM"} id = {"aem"} remotedesktop={"http://10.1.10.98:19239"} editorname = {"CRXDE Lite"} editorurl = {"http://10.1.10.98:4502/crx/de/index.jsp"}> </Link>
            </LinkBlock>

            <ConnectorsShower></ConnectorsShower>
            <EngineSandboxStatus></EngineSandboxStatus>

            </Card.Group>
            </div>
    );
    }
}

const LinkBlock = ({size, title, children}) => (
    <Card className = {size || "small"} style={{"height":"100%"}}>
        <Card.Content>
            <Card.Header>
                <Header>{title || 'Placeholder title'}</Header>
            </Card.Header>
        </Card.Content>
        <Card.Content>
            {children}
        </Card.Content>
    </Card>
);

class Link extends React.Component {

    render() {
        return (
            <List.Item>
                <a {...this.props} target = "noopener noreferrer">
                    {this.props.id && <img className={"ui avatar image"} alt={this.props.id} src={`images/icon_${this.props.id}.png`} /> }
                    {this.props.text}
                </a>
                {this.props.remotedesktop ? <a href = {this.props.remotedesktop} target = "noopener noreferer" > (Remote Desktop )</a> : null}
                {this.props.editorname ? <a href = {this.props.editorurl} target = "noopener noreferer" > ({this.props.editorname})</a> : null}
            </List.Item>
        );
    }
}

class ConnectorsShower extends React.Component {
    constructor() {
        super();
        this.state={items:[]};
    }
    componentDidMount() {
        fetch('https://sandbox.xill.io/v2/connectors')
            .then(result=>result.json())
        .then(items=>this.setState({items}))
        // setTimeout(() => console.log(this.state.items), 2000)
    }
    render() {
        return(
            <Card className={"small"} style={{"height":"100%"}}>
                <Card.Content>
                    <Card.Header>
                        <Header>{'Connectors on Xillio Sandbox'}</Header>
                    </Card.Header>
                </Card.Content>
                <Card.Content>
                    {this.state.items.length ?
                        this.state.items.map(item => <List.Item key={item.configurationType}>{item.configurationType}</List.Item>)
                : <li>Loading...</li>
                }
                </Card.Content>
            </Card>
    )
    }

}

class EngineSandboxStatus extends React.Component {
    constructor() {
        super();
        this.state={
            sandboxResponse:{},
            sandboxDisplay:{},
            sandboxVersionResponse:{}
        };
    }

    componentDidMount() {
        // fetch('https://sandbox.xill.io/v2/system/ping', {
        //         method: 'GET'
        //     }
        // )
        //     .then( response => {
        //         response.json();
        //         console.log(response);
        //         this.setState({sandboxResponse: {
        //             "_url" : response.url,
        //             "status" : response.status,
        //             "ok" : response.ok
        //         }});
        //     })
        // .catch(error => {
        //     console.error(error.message);
        //
        //     if (error.message.indexOf('NetworkError when attempting to fetch resource.') !== -1) {
        //         this.setState({
        //             sandboxResponse: {
        //                 "_url" : 'https://sandbox.xill.io/v2/system/ping',
        //                 "status" : 404,
        //                 "ok" : `NOK`
        //             }
        //         });
        //     }
        //
        // });

        fetch('https://sandbox.xill.io/v2/system/version',
            {
                method: 'GET',

            }
            )
            .then(response => {
                response.json().then(json => {
                    this.setState({
                        sandboxVersionResponse: {
                            "_url": response.url,
                            "status": response.status,
                            "version": json.softwareVersion
                        }
                    });
                })
            })
            .catch(error => {
                this.setState({
                sandboxVersionResponse: {
                    "_url": "https://sandbox.xill.io/v2/system/version",
                    "status": "404",
                    "ok": "NOK"

                }});
            });
    }

    render() {
        let {version,status} = {...this.state.sandboxVersionResponse};
        let versionDisplay = "";

        if (status === 200) {
            versionDisplay =<div><i className={"check square icon green"}></i>{version}</div>;
        } else {
            versionDisplay =<div><i className={"red exclamation triangle icon"}></i>No version could be retrieved. Server alive?</div>
        }

        return(
            <Card className="small" style={{"height":"100%"}}>
                <Card.Content>
                    <Card.Header>
                        <Header>{"Sandbox Status"}</Header>
                    </Card.Header>
                </Card.Content>
                <Card.Content>
                    {versionDisplay}
                </Card.Content>
            </Card>
        );
    }
}


export default App;
