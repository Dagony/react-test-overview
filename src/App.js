import React, { Component } from 'react';
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

    componentDidMount() {
        let container = document.querySelector("#root");
        let masonry = new window.Masonry(container, {
            columnWidth: 50,
            itemSelector: '.item'
        });


    }

  render() {
    return (
      <div className="App">
        <h1 className="App-title">Xillio Testing Overview</h1>
          <div id="masonry">
              <LinkBlock size="medium" title="Functional reviewing">
                  <ul>
                      <li><a href="https://xillio.atlassian.net/projects/CTC/versions/12700/tab/release-report-all-issues" target="_blank">Status issues XIDE release 3.4.0</a></li>
                      <li><a href="https://xillio.atlassian.net/wiki/display/DEV/Status+overview+Xill+Server" target="_blank">XSVR Testing Overview</a></li>
                      <li><a href="https://xillio.atlassian.net/wiki/display/DEV/3+-+Functional+Review+Checklist" target="_blank">Functional review checklist</a></li>

                      <li><a href="https://bitbucket.org/dashboard/pullrequests?section=teams" target="_blank">Pull requests</a></li>
                      <li><a href="https://xillio.atlassian.net/wiki/display/PROD/Xill+Project+Convention" target="_blank">Consultants Xill Project Convention</a></li>
                  </ul>
            </LinkBlock>

          <LinkBlock size="large" title="Functional test reports">
              <ul>
                  <li><a href="https://xillio.atlassian.net/wiki/spaces/DEV/pages/198148097/Sprint+26" target="_blank">GitBreakers Sprint 26</a></li>
                  <li><a href="https://xillio.atlassian.net/wiki/spaces/DEV/pages/177635408/Sprint+25" target="_blank">GitBreakers Sprint 25</a></li>
                  <li><a href="https://xillio.atlassian.net/wiki/spaces/DEV/pages/155615354/Sprint+24" target="_blank">GitBreakers Sprint 24</a></li>
                  <li><a href="https://xillio.atlassian.net/wiki/spaces/DEV/pages/136741047/Sprint+23" target="_blank">GitBreakers Sprint 23</a></li>
                  <li><a href="https://xillio.atlassian.net/wiki/spaces/DEV/pages/125501444/Sprint+22" target="_blank">GitBreakers Sprint 22</a></li>
                  <li><a href="https://xillio.atlassian.net/wiki/spaces/DEV/pages/112099329/Sprint+21" target="_blank">GitBreakers Sprint 21</a></li>
                  <li><a href="https://xillio.atlassian.net/wiki/spaces/DEV/pages/97878092/Sprint+20" target="_blank">GitBreakers Sprint 20</a></li>
                  <li><a href="https://xillio.atlassian.net/wiki/spaces/DEV/pages/83263550/Sprint+19" target="_blank">GitBreakers Sprint 19</a></li>
                  <li><a href="https://xillio.atlassian.net/wiki/spaces/DEV/pages/78282753/Sprint+18" target="_blank">GitBreakers Sprint 18</a></li>
                  <li><a href="https://xillio.atlassian.net/wiki/spaces/DEV/pages/75631742/Sprint+17+KanBan" target="_blank">GitBreakers Sprint 17 Kanban</a></li>
                  <li><a href="https://xillio.atlassian.net/wiki/spaces/DEV/pages/75597797/Sprint+16" target="_blank">GitBreakers Sprint 16</a></li>
                  <li><a href="https://xillio.atlassian.net/wiki/spaces/DEV/pages/75311234/Sprint+15" target="_blank">GitBreakers Sprint 15</a></li>
              </ul>
          </LinkBlock>


          <LinkBlock title="Test Systems - Virtual machines" size="large">
              <ul className="system_links">
                  <li><a id="alfresco" href="http://192.168.0.144:8080/share" target="_blank">Alfresco</a></li>
                  <li><a id="github" href="https://github.com/XillioQA" target="_blank">GitHub</a></li>
                  <li><a id="sharepoint" href="http://xilliolabs.sharepoint.com" target="_blank">Sharepoint</a></li>
                  <li><a id="confluence" href="https://xillio.atlassian.net/wiki/spaces/TEST" target="_blank">Confluence</a></li>
                  <li><a id="liferay" href="http://192.168.0.187:8080/" target="_blank">Liferay</a></li>
                  <li><a id="aem" href="http://10.1.10.98:4502">AEM Test Environment</a> (<a className="normal" href="http://10.1.10.98:19239">Remote Desktop</a>) (<a className="normal" href="http://10.1.10.98:4502/crx/de/index.jsp">CRXDE Lite</a>)</li>
              </ul>
          </LinkBlock>
          <LinkBlock title="Issues">
              <form name="issue_form">
                  <label>Issue Number</label>
                  <input type="text" name="issue" className="field-long" value={this.state.issueNumber} onChange={this.handleChange}/>
                  <button value="open" onClick={this.handleClick}>Open Issue</button>
              </form>
          </LinkBlock>
          <LinkBlock title="Xillio Testing tools">
              <ul>
                  <li><a href="https://appear.in/GitBreakers" target="_blank">Appear.in GitBreakers channel</a></li>
                  <li><a href="file:///home/dagony/IdeaProjects/xillio-engine/xillio-engine-server/target/generated-docs/v2/index.html" target="_blank">Xillio engine Documentation</a></li>
                  <li><a href="file:///home/dagony/IdeaProjects/xillio-engine/xillio-engine-server/target/generated-docs/v2/internal.html" target="_blank">Xillio engine Internal Documentation</a></li>
              </ul>
              <ul className="system_links">
                  <li><a id="artifactory" href="http://maven.xillio.com" target="_blank">Artifactory / Maven</a></li>
                  <li><a id="bitbucket" href="https://bitbucket.org/xillio/" target="_blank">Bitbucket</a></li>
                  <li><a id="confluence" href="https://xillio.atlassian.net/wiki/display/DEV/Development+Home" target="_blank">Confluence</a></li>
                  <li><a id="jenkins" href="https://jenkins.xillio.com" target="_blank">Jenkins</a></li>
                  <li><a id="jira" href="https://xillio.atlassian.net/secure/Dashboard.jspa" target="_blank">Jira</a></li>
                  <li><a id="office" href="http://portal.office.com" target="_blank">MS Office</a></li>
                  <li><a id="scrumwise" href="http://www.scrumwise.com" target="_blank">Scrumwise</a></li>
                  <li><a id="sonar" href="http://sonaross.xillio.com" target="_blank">Sonar</a></li>
                  <li><a id="VirtualBox" href="http://10.1.0.10/phpvirtualbox/" target="_blank">VirtualBox for Connector VM's</a></li>
              </ul>
          </LinkBlock>
          <LinkBlock></LinkBlock>
          <LinkBlock></LinkBlock>
          <LinkBlock></LinkBlock>
          </div>
      </div>
    );
  }
}

class LinkBlock extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            size: props.size,
            title: props.title
        }
    }

    onButtonClick($event) {

    }

    render() {
        return (
            <div className={`link_panel item ${this.props.size || 'medium' }`}>
                <h2>{this.props.title || 'Placeholder title'}</h2>
                {this.props.children}
            </div>
        );
    }
}

export default App;
