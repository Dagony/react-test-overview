import React, {Component} from 'react';
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
            <div className="App">
                <h1 className="App-title">Xillio Testing Overview</h1>
                <div>
                    <LinkBlock size="medium" title="Functional reviewing">
                        <ul>
                            <li><a
                                href="https://xillio.atlassian.net/projects/CTC/versions/12700/tab/release-report-all-issues"
                                target="_blank" rel="noopener noreferrer">Status issues XIDE release 3.4.0</a></li>
                            <li><a href="https://xillio.atlassian.net/wiki/display/DEV/Status+overview+Xill+Server"
                                   target="_blank" rel="noopener noreferrer">XSVR Testing Overview</a></li>
                            <li><a href="https://xillio.atlassian.net/wiki/display/DEV/3+-+Functional+Review+Checklist"
                                   target="_blank" rel="noopener noreferrer">Functional review checklist</a></li>

                            <li><a href="https://bitbucket.org/dashboard/pullrequests?section=teams" target="_blank"
                                   rel="noopener noreferrer">Pull requests</a></li>
                            <li><a href="https://xillio.atlassian.net/wiki/display/PROD/Xill+Project+Convention"
                                   target="_blank" rel="noopener noreferrer">Consultants Xill Project Convention</a>
                            </li>
                        </ul>
                    </LinkBlock>

                    <LinkBlock size="large" title="Functional test reports">
                        <ul>
                            <li><a href="https://xillio.atlassian.net/wiki/spaces/DEV/pages/198148097/Sprint+26"
                                   target="_blank" rel="noopener noreferrer">GitBreakers Sprint 26</a></li>
                            <li><a href="https://xillio.atlassian.net/wiki/spaces/DEV/pages/177635408/Sprint+25"
                                   target="_blank" rel="noopener noreferrer">GitBreakers Sprint 25</a></li>
                            <li><a href="https://xillio.atlassian.net/wiki/spaces/DEV/pages/155615354/Sprint+24"
                                   target="_blank" rel="noopener noreferrer">GitBreakers Sprint 24</a></li>
                            <li><a href="https://xillio.atlassian.net/wiki/spaces/DEV/pages/136741047/Sprint+23"
                                   target="_blank" rel="noopener noreferrer">GitBreakers Sprint 23</a></li>
                            <li><a href="https://xillio.atlassian.net/wiki/spaces/DEV/pages/125501444/Sprint+22"
                                   target="_blank" rel="noopener noreferrer">GitBreakers Sprint 22</a></li>
                            <li><a href="https://xillio.atlassian.net/wiki/spaces/DEV/pages/112099329/Sprint+21"
                                   target="_blank" rel="noopener noreferrer">GitBreakers Sprint 21</a></li>
                            <li><a href="https://xillio.atlassian.net/wiki/spaces/DEV/pages/97878092/Sprint+20"
                                   target="_blank" rel="noopener noreferrer">GitBreakers Sprint 20</a></li>
                            <li><a href="https://xillio.atlassian.net/wiki/spaces/DEV/pages/83263550/Sprint+19"
                                   target="_blank" rel="noopener noreferrer">GitBreakers Sprint 19</a></li>
                            <li><a href="https://xillio.atlassian.net/wiki/spaces/DEV/pages/78282753/Sprint+18"
                                   target="_blank" rel="noopener noreferrer">GitBreakers Sprint 18</a></li>
                            <li><a href="https://xillio.atlassian.net/wiki/spaces/DEV/pages/75631742/Sprint+17+KanBan"
                                   target="_blank" rel="noopener noreferrer">GitBreakers Sprint 17 Kanban</a></li>
                            <li><a href="https://xillio.atlassian.net/wiki/spaces/DEV/pages/75597797/Sprint+16"
                                   target="_blank" rel="noopener noreferrer">GitBreakers Sprint 16</a></li>
                            <li><a href="https://xillio.atlassian.net/wiki/spaces/DEV/pages/75311234/Sprint+15"
                                   target="_blank" rel="noopener noreferrer">GitBreakers Sprint 15</a></li>
                        </ul>
                    </LinkBlock>


                    <LinkBlock title="Test Systems - Virtual machines" size="large">
                        <ul className="system_links">
                            <li><a id="alfresco" href="http://192.168.0.144:8080/share" target="_blank"
                                   rel="noopener noreferrer">Alfresco</a></li>
                            <li><a id="github" href="https://github.com/XillioQA" target="_blank"
                                   rel="noopener noreferrer">GitHub</a></li>
                            <li><a id="sharepoint" href="http://xilliolabs.sharepoint.com" target="_blank"
                                   rel="noopener noreferrer">Sharepoint</a></li>
                            <li><a id="confluence" href="https://xillio.atlassian.net/wiki/spaces/TEST" target="_blank"
                                   rel="noopener noreferrer">Confluence</a></li>
                            <li><a id="liferay" href="http://192.168.0.187:8080/" target="_blank"
                                   rel="noopener noreferrer">Liferay</a></li>
                            <li><a id="aem" href="http://10.1.10.98:4502">AEM Test Environment</a> (<a
                                className="normal" href="http://10.1.10.98:19239">Remote Desktop</a>) (<a
                                className="normal" href="http://10.1.10.98:4502/crx/de/index.jsp">CRXDE Lite</a>)
                            </li>
                        </ul>
                    </LinkBlock>
                    <LinkBlock title="Issues">
                        <form name="issue_form">
                            <label>Issue Number</label>
                            <input type="text" name="issue" className="field-long" value={this.state.issueNumber}
                                   onChange={this.handleChange}/>
                            <button value="open" onClick={this.handleClick}>Open Issue</button>
                        </form>
                    </LinkBlock>
                    <LinkBlock title="Xillio Testing tools">
                        <ul>
                            <li><a href="https://appear.in/GitBreakers" target="_blank" rel="noopener noreferrer">Appear.in
                                GitBreakers channel</a></li>
                            <li><a
                                href="file:///home/dagony/IdeaProjects/xillio-engine/xillio-engine-server/target/generated-docs/v2/index.html"
                                target="_blank" rel="noopener noreferrer">Xillio engine Documentation</a></li>
                            <li><a
                                href="file:///home/dagony/IdeaProjects/xillio-engine/xillio-engine-server/target/generated-docs/v2/internal.html"
                                target="_blank" rel="noopener noreferrer">Xillio engine Internal Documentation</a></li>
                        </ul>
                        <ul className="system_links">
                            <li><a id="artifactory" href="http://maven.xillio.com" target="_blank"
                                   rel="noopener noreferrer">Artifactory / Maven</a></li>
                            <li><a id="bitbucket" href="https://bitbucket.org/xillio/" target="_blank"
                                   rel="noopener noreferrer">Bitbucket</a></li>
                            <li><a id="confluence" href="https://xillio.atlassian.net/wiki/display/DEV/Development+Home"
                                   target="_blank" rel="noopener noreferrer">Confluence</a></li>
                            <li><a id="jenkins" href="https://jenkins.xillio.com" target="_blank"
                                   rel="noopener noreferrer">Jenkins</a></li>
                            <li><a id="jira" href="https://xillio.atlassian.net/secure/Dashboard.jspa" target="_blank"
                                   rel="noopener noreferrer">Jira</a></li>
                            <li><a id="office" href="http://portal.office.com" target="_blank"
                                   rel="noopener noreferrer">MS Office</a></li>
                            <li><a id="scrumwise" href="http://www.scrumwise.com" target="_blank"
                                   rel="noopener noreferrer">Scrumwise</a></li>
                            <li><a id="sonar" href="http://sonaross.xillio.com" target="_blank"
                                   rel="noopener noreferrer">Sonar</a></li>
                            <li><a id="VirtualBox" href="http://10.1.0.10/phpvirtualbox/" target="_blank"
                                   rel="noopener noreferrer">VirtualBox for Connector VM's</a></li>
                        </ul>
                    </LinkBlock>
                    <LinkBlock title="Boards Links">
                        <ul>
                            <li><a
                                href="https://xillio.atlassian.net/secure/RapidBoard.jspa?rapidView=23&useStoredSettings=true"
                                target="_blank" rel="noopener noreferrer">COT Board</a></li>
                            <li><a
                                href="https://xillio.atlassian.net/secure/RapidBoard.jspa?rapidView=19&useStoredSettings=true"
                                target="_blank" rel="noopener noreferrer">INT Board</a></li>
                            <li><a href="https://xillio.atlassian.net/secure/RapidBoard.jspa?rapidView=17&view=detail"
                                   target="_blank" rel="noopener noreferrer">Kanban Board</a></li>
                            <li><a
                                href="https://xillio.atlassian.net/secure/RapidBoard.jspa?rapidView=16&useStoredSettings=true"
                                target="_blank" rel="noopener noreferrer">Sprint Board</a></li>
                            <li><a
                                href="https://xillio.atlassian.net/secure/RapidBoard.jspa?rapidView=21&useStoredSettings=true"
                                target="_blank" rel="noopener noreferrer">XSVR Board</a></li>
                        </ul>
                    </LinkBlock>
                    <LinkBlock title="Functional Review Checklist">
                        <ol>
                            <li><input type="checkbox"/>Pull request valid</li>
                            <li><input type="checkbox"/>Issue branch in sync with develop</li>
                            <li><input type="checkbox"/>Assign yourself to story in Jira</li>
                            <li><input type="checkbox"/>Story listed as 'In Progress' or 'In Review'?</li>
                            <li><input type="checkbox"/>Check story description and comments in Jira</li>
                            <li><input type="checkbox"/>Check with issuer for areas of concern</li>
                            <li><input type="checkbox"/>Run <span
                                class="cursive">Project > Lifecycle > package</span> task for Maven on the Xill-platform
                                branch without issues
                            </li>
                            <li><input type="checkbox"/>Run the application. Does it start without issues?</li>
                            <li><input type="checkbox"/><span class="bold">Run through the story requirements. Do all functional tests succeed?</span>
                            </li>
                            <li><input type="checkbox"/>If relevant: are the help files clear and complete with sample
                                code?
                            </li>
                            <li><input type="checkbox"/>If relevant: Documentation up-to-date (community
                                site/Confluence/Course material) for next release?
                            </li>
                            <li><input type="checkbox"/>Check <a
                                href="https://xillio.atlassian.net/wiki/display/DEV/Definition+of+Done">The Definition
                                of Done</a>. Is there anything that is not done yet?
                            </li>
                            <li><input type="checkbox"/>Upload your report and test bots to JIRA.</li>
                        </ol>
                    </LinkBlock>
                    <LinkBlock title={"Research for automated testing for the server"}>
                        <ol>
                            <li>Web Interface testing</li>
                            <li><input type="checkbox"/><a href="https://cucumber.io/">Cucumber</a></li>
                        </ol>
                        <br/>
                        <ol>
                            <li>GUI testing - Open source</li>
                            <li><input type="checkbox"/><a href="http://www.autohotkey.com/" target="_blank"
                                                           rel="noopener noreferrer">AutoHotkey</a></li>
                            <li><input type="checkbox"/><a href="http://docs.seleniumhq.org/" target="_blank"
                                                           rel="noopener noreferrer">Selenium</a></li>
                            <li><input type="checkbox"/><a href="http://sikuli.org" target="_blank"
                                                           rel="noopener noreferrer">Sikuli</a></li>
                            <li><input type="checkbox"/><a href="www.robotframework.org" target="_blank"
                                                           rel="noopener noreferrer">Robot Framework</a></li>
                            <li><input type="checkbox"/><a href="http://www.watir.com/" target="_blank"
                                                           rel="noopener noreferrer">watir</a></li>
                            <li><input type="checkbox"/><a href="http://dojotoolkit.org/" target="_blank"
                                                           rel="noopener noreferrer">Dojo Toolkit</a></li>
                        </ol>
                        <br/>
                        <ol>
                            <li>GUI testing - Commercial</li>
                            <li><input type="checkbox"/><a href="http://www.autoitscript.com/site/autoit/"
                                                           target="_blank" rel="noopener noreferrer">AutoIT</a></li>
                            <li><input type="checkbox"/><a href="www.testplant.com" target="_blank"
                                                           rel="noopener noreferrer">EggPlant</a></li>
                            <li><input type="checkbox"/><a href="http://www8.hp.com/us/en/software-solutions/"
                                                           target="_blank" rel="noopener noreferrer">QTP</a></li>
                            <li><input type="checkbox"/><a`
                                href="http://www-03.ibm.com/software/products/us/en/functional" target="_blank"
                                rel="noopener noreferrer">Rational Functional Tester</a></li>
                            <li><input type="checkbox"/><a href="www.infragistics.com" target="_blank"
                                                           rel="noopener noreferrer">Infragistics</a></li>
                            <li><input type="checkbox"/><a href="http://www.iopus.com/iMacros/" target="_blank"
                                                           rel="noopener noreferrer">iMacros</a></li>
                            <li><input type="checkbox"/><a href="http://www.microsoft.com/visualstudio/" target="_blank"
                                                           rel="noopener noreferrer">CodedUI</a></li>
                            <li><input type="checkbox"/><a href="http://www.microfocus.com/" target="_blank"
                                                           rel="noopener noreferrer">Sikuli</a></li>
                        </ol>
                    </LinkBlock>
                    <LinkBlock title={"QA Links"}>
                        <ul>
                            <li><a href="http://www.quality-assurance-solutions.com/" target="_blank"
                                   rel="noopener noreferrer">Quality Assurance Solutions</a></li>
                            <li><a href="http://adventuresinqa.com/" target="_blank" rel="noopener noreferrer">Adventures
                                in QA</a></li>
                            <li><a href="http://www.satisfice.com/blog/" target="_blank" rel="noopener noreferrer">James
                                Bach's Blog</a></li>
                            <li><a href="http://www.blogmetrics.org/Quality_Assurance" target="_blank"
                                   rel="noopener noreferrer">Top 50 QA Blogs</a></li>
                            <li><a href="http://www.sqazone.net/" target="_blank" rel="noopener noreferrer">SQA zone</a>
                            </li>
                        </ul>
                    </LinkBlock>
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
